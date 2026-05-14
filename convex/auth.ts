import type { QueryCtx, MutationCtx } from "./_generated/server";

declare const process: {
  env: Record<string, string | undefined>;
};

const SESSION_DURATION_MS = 12 * 60 * 60 * 1000;
const LOGIN_ATTEMPT_BUCKET = "admin";
const LOGIN_WINDOW_MS = 15 * 60 * 1000;
const LOGIN_LOCK_MS = 15 * 60 * 1000;
const MAX_FAILED_LOGIN_ATTEMPTS = 5;
const SESSION_TOKEN_BYTES = 32;

type AuthCtx = QueryCtx | MutationCtx;

export async function hashSecret(value: string) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value)
  );

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function hashWithSalt(value: string, salt: string) {
  return hashSecret(`${salt}:${value}`);
}

export async function requireAdmin(ctx: AuthCtx, token: string) {
  const salt = getRequiredEnv("IMPLANTIUM_ADMIN_AUTH_SALT");
  const tokenHash = await hashWithSalt(token, salt);
  const session = await ctx.db
    .query("adminSessions")
    .withIndex("by_token_hash", (q) => q.eq("tokenHash", tokenHash))
    .unique();

  if (!session || session.expiresAt <= Date.now()) {
    throw new Error("Unauthorized");
  }

  return session;
}

export async function isAdminSessionValid(ctx: AuthCtx, token: string) {
  try {
    await requireAdmin(ctx, token);
    return true;
  } catch {
    return false;
  }
}

export async function verifyAdminPassword(password: string) {
  const salt = getRequiredEnv("IMPLANTIUM_ADMIN_AUTH_SALT");
  const expectedHash = getRequiredEnv("IMPLANTIUM_ADMIN_PASSWORD_HASH");
  const passwordHash = await hashWithSalt(password, salt);

  return timingSafeEqual(passwordHash, expectedHash);
}

export async function createSession(ctx: MutationCtx) {
  const salt = getRequiredEnv("IMPLANTIUM_ADMIN_AUTH_SALT");
  const token = createSessionToken();
  const now = Date.now();

  await ctx.db.insert("adminSessions", {
    tokenHash: await hashWithSalt(token, salt),
    expiresAt: now + SESSION_DURATION_MS,
    createdAt: now,
    lastSeenAt: now,
  });

  return {
    token,
    expiresAt: now + SESSION_DURATION_MS,
  };
}

export async function getAdminLoginDelayMs(ctx: MutationCtx) {
  const now = Date.now();
  const attempt = await getAdminLoginAttempt(ctx);

  if (!attempt) {
    return 0;
  }

  if (attempt.lockedUntil && attempt.lockedUntil > now) {
    return attempt.lockedUntil - now;
  }

  if (attempt.firstFailedAt + LOGIN_WINDOW_MS <= now) {
    await ctx.db.delete(attempt._id);
  }

  return 0;
}

export async function recordAdminLoginFailure(ctx: MutationCtx) {
  const now = Date.now();
  const existing = await getAdminLoginAttempt(ctx);

  if (!existing || existing.firstFailedAt + LOGIN_WINDOW_MS <= now) {
    await ctx.db.insert("adminLoginAttempts", {
      bucket: LOGIN_ATTEMPT_BUCKET,
      failedCount: 1,
      firstFailedAt: now,
      lastFailedAt: now,
    });
    return;
  }

  const failedCount = existing.failedCount + 1;

  await ctx.db.patch(existing._id, {
    failedCount,
    lastFailedAt: now,
    lockedUntil:
      failedCount >= MAX_FAILED_LOGIN_ATTEMPTS
        ? now + LOGIN_LOCK_MS
        : existing.lockedUntil,
  });
}

export async function clearAdminLoginFailures(ctx: MutationCtx) {
  const existing = await getAdminLoginAttempt(ctx);

  if (existing) {
    await ctx.db.delete(existing._id);
  }
}

export async function deleteSession(ctx: MutationCtx, token: string) {
  const salt = getRequiredEnv("IMPLANTIUM_ADMIN_AUTH_SALT");
  const tokenHash = await hashWithSalt(token, salt);
  const session = await ctx.db
    .query("adminSessions")
    .withIndex("by_token_hash", (q) => q.eq("tokenHash", tokenHash))
    .unique();

  if (session) {
    await ctx.db.delete(session._id);
  }
}

export function getSeedSecret() {
  return getRequiredEnv("IMPLANTIUM_SEED_SECRET");
}

function createSessionToken() {
  const bytes = new Uint8Array(SESSION_TOKEN_BYTES);
  crypto.getRandomValues(bytes);

  return Array.from(bytes)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function getAdminLoginAttempt(ctx: MutationCtx) {
  return await ctx.db
    .query("adminLoginAttempts")
    .withIndex("by_bucket", (q) => q.eq("bucket", LOGIN_ATTEMPT_BUCKET))
    .unique();
}

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing Convex environment variable: ${name}`);
  }

  return value;
}

function timingSafeEqual(left: string, right: string) {
  if (left.length !== right.length) {
    return false;
  }

  let result = 0;

  for (let index = 0; index < left.length; index += 1) {
    result |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }

  return result === 0;
}

import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import {
  clearAdminLoginFailures,
  createSession,
  deleteSession,
  getAdminLoginDelayMs,
  isAdminSessionValid,
  recordAdminLoginFailure,
  verifyAdminPassword,
} from "./auth";

export const login = mutation({
  args: {
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const delayMs = await getAdminLoginDelayMs(ctx);

    if (delayMs > 0) {
      return {
        ok: false as const,
        error: formatLoginDelay(delayMs),
      };
    }

    const isValid = await verifyAdminPassword(args.password);

    if (!isValid) {
      await recordAdminLoginFailure(ctx);
      return {
        ok: false as const,
        error: "Invalid password",
      };
    }

    await clearAdminLoginFailures(ctx);
    const session = await createSession(ctx);

    return {
      ok: true as const,
      ...session,
    };
  },
});

export const logout = mutation({
  args: {
    token: v.string(),
  },
  handler: async (ctx, args) => {
    await deleteSession(ctx, args.token);
  },
});

export const viewer = query({
  args: {
    token: v.string(),
  },
  handler: async (ctx, args) => {
    return {
      isAdmin: await isAdminSessionValid(ctx, args.token),
    };
  },
});

function formatLoginDelay(delayMs: number) {
  const minutes = Math.max(1, Math.ceil(delayMs / 60000));
  return `Too many login attempts. Try again in ${minutes} ${
    minutes === 1 ? "minute" : "minutes"
  }.`;
}

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const localizedText = v.object({
  ru: v.string(),
  kk: v.string(),
});

export default defineSchema({
  doctors: defineTable({
    slug: v.string(),
    name: localizedText,
    specialty: localizedText,
    description: localizedText,
    experienceYears: v.number(),
    serviceIds: v.array(v.string()),
    photoStorageId: v.optional(v.id("_storage")),
    visible: v.boolean(),
    sortOrder: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_visible_sort_order", ["visible", "sortOrder"]),
  adminSessions: defineTable({
    tokenHash: v.string(),
    expiresAt: v.number(),
    createdAt: v.number(),
    lastSeenAt: v.optional(v.number()),
  }).index("by_token_hash", ["tokenHash"]),
  adminLoginAttempts: defineTable({
    bucket: v.string(),
    failedCount: v.number(),
    firstFailedAt: v.number(),
    lastFailedAt: v.number(),
    lockedUntil: v.optional(v.number()),
  }).index("by_bucket", ["bucket"]),
});

import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { getSeedSecret } from "./auth";
import { seedDoctors } from "./seedData";

export const importDoctors = mutation({
  args: {
    secret: v.string(),
  },
  handler: async (ctx, args) => {
    if (args.secret !== getSeedSecret()) {
      throw new Error("Invalid seed secret");
    }

    const now = Date.now();
    let inserted = 0;
    let updated = 0;

    for (const [index, doctor] of seedDoctors.entries()) {
      const existing = await ctx.db
        .query("doctors")
        .withIndex("by_slug", (q) => q.eq("slug", doctor.slug))
        .unique();

      const document = {
        ...doctor,
        visible: true,
        sortOrder: index,
        updatedAt: now,
      };

      if (existing) {
        await ctx.db.patch(existing._id, document);
        updated += 1;
      } else {
        await ctx.db.insert("doctors", {
          ...document,
          createdAt: now,
        });
        inserted += 1;
      }
    }

    return {
      inserted,
      updated,
      total: seedDoctors.length,
    };
  },
});

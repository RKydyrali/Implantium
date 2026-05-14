import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import type { Doc, Id } from "./_generated/dataModel";
import type { MutationCtx, QueryCtx } from "./_generated/server";
import { requireAdmin } from "./auth";

const localizedTextValidator = v.object({
  ru: v.string(),
  kk: v.string(),
});

const doctorFieldsValidator = {
  slug: v.string(),
  name: localizedTextValidator,
  specialty: localizedTextValidator,
  description: localizedTextValidator,
  experienceYears: v.number(),
  serviceIds: v.array(v.string()),
  photoStorageId: v.optional(v.union(v.id("_storage"), v.null())),
  visible: v.boolean(),
  sortOrder: v.number(),
};

type DoctorInput = {
  slug: string;
  name: { ru: string; kk: string };
  specialty: { ru: string; kk: string };
  description: { ru: string; kk: string };
  experienceYears: number;
  serviceIds: string[];
  photoStorageId?: Id<"_storage"> | null;
  visible: boolean;
  sortOrder: number;
};

export const listPublicDoctors = query({
  args: {},
  handler: async (ctx) => {
    const doctors = await ctx.db
      .query("doctors")
      .withIndex("by_visible_sort_order", (q) => q.eq("visible", true))
      .order("asc")
      .collect();

    return resolveDoctorPhotos(ctx, doctors);
  },
});

export const listAllDoctors = query({
  args: {
    token: v.string(),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx, args.token);
    const doctors = await ctx.db.query("doctors").collect();
    doctors.sort((left, right) => left.sortOrder - right.sortOrder);

    return resolveDoctorPhotos(ctx, doctors);
  },
});

export const createDoctor = mutation({
  args: {
    token: v.string(),
    doctor: v.object(doctorFieldsValidator),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx, args.token);
    const doctor = normalizeDoctorInput(args.doctor);
    await assertUniqueSlug(ctx, doctor.slug);
    const now = Date.now();

    return await ctx.db.insert("doctors", {
      ...doctor,
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const updateDoctor = mutation({
  args: {
    token: v.string(),
    doctorId: v.id("doctors"),
    doctor: v.object(doctorFieldsValidator),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx, args.token);
    const doctor = normalizeDoctorInput(args.doctor);
    await assertUniqueSlug(ctx, doctor.slug, args.doctorId);

    await ctx.db.patch(args.doctorId, {
      ...doctor,
      updatedAt: Date.now(),
    });
  },
});

export const hideDoctor = mutation({
  args: {
    token: v.string(),
    doctorId: v.id("doctors"),
    visible: v.boolean(),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx, args.token);
    await ctx.db.patch(args.doctorId, {
      visible: args.visible,
      updatedAt: Date.now(),
    });
  },
});

export const deleteDoctor = mutation({
  args: {
    token: v.string(),
    doctorId: v.id("doctors"),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx, args.token);
    await ctx.db.delete(args.doctorId);
  },
});

export const reorderDoctors = mutation({
  args: {
    token: v.string(),
    orderedIds: v.array(v.id("doctors")),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx, args.token);
    const now = Date.now();

    await Promise.all(
      args.orderedIds.map((doctorId, index) =>
        ctx.db.patch(doctorId, {
          sortOrder: index,
          updatedAt: now,
        })
      )
    );
  },
});

export const generateDoctorPhotoUploadUrl = mutation({
  args: {
    token: v.string(),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx, args.token);

    return await ctx.storage.generateUploadUrl();
  },
});

async function resolveDoctorPhotos(
  ctx: QueryCtx,
  doctors: Doc<"doctors">[]
) {
  return await Promise.all(
    doctors.map(async (doctor) => ({
      ...doctor,
      id: doctor.slug,
      photo: doctor.photoStorageId
        ? (await ctx.storage.getUrl(doctor.photoStorageId)) ?? ""
        : "",
    }))
  );
}

async function assertUniqueSlug(
  ctx: MutationCtx,
  slug: string,
  currentDoctorId?: Id<"doctors">
) {
  const existing = await ctx.db
    .query("doctors")
    .withIndex("by_slug", (q) => q.eq("slug", slug.trim()))
    .unique();

  if (existing && existing._id !== currentDoctorId) {
    throw new Error("A doctor with this slug already exists");
  }
}

function normalizeDoctorInput(args: DoctorInput) {
  const slug = args.slug.trim();
  const name = trimLocalizedText(args.name);
  const specialty = trimLocalizedText(args.specialty);
  const description = trimLocalizedText(args.description);

  if (!slug || !name.ru || !name.kk || !specialty.ru || !specialty.kk) {
    throw new Error("Doctor name, specialty, and slug are required");
  }

  return {
    slug,
    name,
    specialty,
    description,
    experienceYears: Math.max(0, Math.round(args.experienceYears)),
    serviceIds: Array.from(
      new Set(args.serviceIds.map((serviceId) => serviceId.trim()).filter(Boolean))
    ),
    photoStorageId: args.photoStorageId ?? undefined,
    visible: args.visible,
    sortOrder: Math.max(0, Math.round(args.sortOrder)),
  };
}

function trimLocalizedText(text: { ru: string; kk: string }) {
  return {
    ru: text.ru.trim(),
    kk: text.kk.trim(),
  };
}

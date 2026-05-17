import { cn } from "@/lib/utils";

function SkeletonBlock({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("motion-skeleton rounded-xl", className)}
    />
  );
}

export function CompactDoctorCardSkeleton({ variant = "vertical" }: { variant?: "vertical" | "horizontal" }) {
  if (variant === "horizontal") {
    return (
      <article className="h-full overflow-hidden rounded-[1.2rem] border border-border/70 bg-white shadow-[0_16px_42px_rgba(68,45,34,0.06)]">
        <div className="flex h-[11.75rem]">
          <SkeletonBlock className="h-full w-36 shrink-0 rounded-none" />
          <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 p-5">
            <SkeletonBlock className="h-4 w-4/5" />
            <SkeletonBlock className="h-3 w-full" />
            <SkeletonBlock className="h-3 w-2/3" />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="clinical-card-soft overflow-hidden rounded-[1.35rem]">
      <SkeletonBlock className="aspect-square rounded-none" />
      <div className="flex flex-col gap-3 p-5">
        <SkeletonBlock className="h-3 w-24 rounded-full" />
        <SkeletonBlock className="h-5 w-4/5" />
        <SkeletonBlock className="h-3 w-3/5 rounded-full" />
        <div className="flex flex-col gap-2 pt-1">
          <SkeletonBlock className="h-3 w-full" />
          <SkeletonBlock className="h-3 w-11/12" />
          <SkeletonBlock className="h-3 w-2/3" />
        </div>
      </div>
    </article>
  );
}

export function HomeDoctorCardSkeleton() {
  return (
    <article className="clinical-card clinical-lift flex h-full flex-col overflow-hidden rounded-[1.6rem]">
      <SkeletonBlock className="aspect-[4/3.8] rounded-none" />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <SkeletonBlock className="h-6 w-20 rounded-full" />
        <SkeletonBlock className="h-5 w-4/5" />
        <SkeletonBlock className="h-3 w-2/3 rounded-full" />
        <div className="flex flex-col gap-2">
          <SkeletonBlock className="h-3 w-full" />
          <SkeletonBlock className="h-3 w-11/12" />
          <SkeletonBlock className="h-3 w-3/4" />
        </div>
        <SkeletonBlock className="mt-auto h-11 w-full rounded-2xl" />
      </div>
    </article>
  );
}

export function DoctorsGridCardSkeleton() {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[#D8E2EA] bg-white shadow-[0_18px_55px_rgba(39,64,95,0.055)]">
      <SkeletonBlock className="aspect-[4/3.75] rounded-none" />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <SkeletonBlock className="h-6 w-20 rounded-full" />
        <SkeletonBlock className="h-5 w-4/5" />
        <SkeletonBlock className="h-3 w-2/3 rounded-full" />
        <div className="mt-2 flex flex-col gap-3">
          <SkeletonBlock className="h-3 w-full" />
          <SkeletonBlock className="h-3 w-10/12" />
          <SkeletonBlock className="h-3 w-8/12" />
        </div>
      </div>
    </article>
  );
}

export function FeaturedDoctorSkeleton() {
  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-[#D8E2EA] bg-white shadow-[0_20px_60px_rgba(39,64,95,0.07)]">
      <div className="grid gap-0 lg:grid-cols-[0.34fr_0.66fr]">
        <SkeletonBlock className="min-h-[16rem] rounded-none sm:min-h-[18rem] lg:min-h-[20rem]" />
        <div className="flex flex-col justify-center gap-5 p-5 md:p-7 lg:p-8">
          <div className="flex flex-col gap-4">
            <SkeletonBlock className="h-8 w-4/5" />
            <SkeletonBlock className="h-4 w-2/3 rounded-full" />
            <div className="flex flex-col gap-2 pt-2">
              <SkeletonBlock className="h-3 w-full" />
              <SkeletonBlock className="h-3 w-11/12" />
              <SkeletonBlock className="h-3 w-3/4" />
            </div>
            <div className="mt-1 grid max-w-xl gap-3 sm:grid-cols-2">
              <SkeletonBlock className="h-16 w-full" />
              <SkeletonBlock className="h-16 w-full" />
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-[#E4EBF1] pt-4">
            <SkeletonBlock className="h-4 w-32" />
            <div className="flex flex-wrap gap-2">
              <SkeletonBlock className="h-8 w-28 rounded-full" />
              <SkeletonBlock className="h-8 w-32 rounded-full" />
              <SkeletonBlock className="h-8 w-24 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function AdminDoctorListSkeleton() {
  return (
    <div className="grid gap-3">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="grid gap-3 rounded-2xl border border-[#D8E2EA] bg-white p-4 sm:grid-cols-[4rem_1fr_auto] sm:items-center"
        >
          <SkeletonBlock className="size-16 rounded-2xl" />
          <div className="flex flex-col gap-2">
            <SkeletonBlock className="h-4 w-3/4" />
            <SkeletonBlock className="h-3 w-1/2" />
          </div>
          <SkeletonBlock className="h-9 w-28 rounded-full" />
        </div>
      ))}
    </div>
  );
}

import type { Doctor, Language } from "@/types";
import { cn } from "@/lib/utils";

type DoctorPhotoProps = {
  doctor: Doctor;
  language: Language;
  className?: string;
  initialsClassName?: string;
  labelClassName?: string;
};

export function DoctorPhoto({
  doctor,
  language,
  className,
  initialsClassName,
  labelClassName,
}: DoctorPhotoProps) {
  if (doctor.photo) {
    return (
      <img
        src={doctor.photo}
        alt={doctor.name[language]}
        className={cn("size-full object-cover", className)}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div
      data-photo-placeholder
      className={cn(
        "relative flex size-full flex-col items-center justify-center gap-3 overflow-hidden bg-[radial-gradient(circle_at_50%_20%,rgba(217,225,229,0.9),transparent_42%),linear-gradient(145deg,#FAFBFC,#EEF2F4)] text-primary",
        className
      )}
    >
      <div className="absolute inset-x-8 top-8 h-px bg-white/80" />
      <div className="absolute bottom-0 h-20 w-40 rounded-t-full border border-white/80 bg-white/38 blur-sm" />
      <span
        className={cn(
          "relative flex size-16 items-center justify-center rounded-full border border-white bg-white/90 text-lg font-bold shadow-[0_18px_46px_rgba(31,37,40,0.08)]",
          initialsClassName
        )}
      >
        {getDoctorInitials(doctor.name.ru)}
      </span>
      <span className={cn("relative text-xs font-semibold text-[#6E7B83]", labelClassName)}>
        {language === "ru" ? "Фото скоро" : "Фото кейін қосылады"}
      </span>
    </div>
  );
}

function getDoctorInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

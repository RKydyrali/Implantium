import type { Doctor, Language } from "@/types";
import { Card } from "@/components/ui/card";
import { DoctorPhoto } from "@/components/common/DoctorPhoto";
import { cn } from "@/lib/utils";

type CompactHorizontalDoctorCardProps = {
  doctor: Doctor;
  language: Language;
  className?: string;
};

const CARD_HEIGHT = "h-[11.75rem]";

export function CompactHorizontalDoctorCard({ doctor, language, className }: CompactHorizontalDoctorCardProps) {
  const experience = getDoctorExperienceLine(doctor, language);

  return (
    <Card
      className={cn(
        "h-full overflow-hidden rounded-[1.2rem] border-border/70 bg-white shadow-[0_16px_42px_rgba(68,45,34,0.06)]",
        className
      )}
    >
      <div className={cn("flex", CARD_HEIGHT)}>
        <div className="relative h-full w-36 shrink-0 overflow-hidden bg-secondary">
          <DoctorPhoto
            doctor={doctor}
            language={language}
            className="absolute inset-0 size-full object-cover object-top"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 p-5">
          <h3 className="line-clamp-2 text-base font-bold leading-snug text-foreground">{doctor.name[language]}</h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{doctor.specialty[language]}</p>
          <p className="line-clamp-1 text-sm font-medium text-muted-foreground">{experience}</p>
        </div>
      </div>
    </Card>
  );
}

function getDoctorExperienceLine(
  doctor: { description: Record<Language, string>; experienceYears?: number },
  language: Language
) {
  if (typeof doctor.experienceYears === "number" && doctor.experienceYears > 0) {
    return language === "ru"
      ? `${doctor.experienceYears} лет опыта`
      : `${doctor.experienceYears} жылдық тәжірибесі бар`;
  }

  const firstSentence = doctor.description[language].split(".")[0]?.trim();
  return firstSentence ? `${firstSentence}.` : language === "ru" ? "Специалист" : "Маман";
}

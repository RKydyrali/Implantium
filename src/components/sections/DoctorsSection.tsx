import { ArrowRight } from "@phosphor-icons/react";
import { useLanguage } from "@/hooks/useLanguage";
import { content } from "@/data/content";
import { doctors } from "@/data/doctors";
import { Button } from "@/components/ui/button";
import { DoctorPhoto } from "@/components/common/DoctorPhoto";

export function DoctorsSection() {
  const { language } = useLanguage();
  const t = content[language];
  const previewDoctors = doctors.slice(0, 4);

  return (
    <section id="doctors" className="bg-[#F5F7F8] px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              IMPLANTIUM
            </span>
            <h2 className="font-display text-3xl font-normal text-[#1F2528] md:text-4xl">
              {language === "ru" ? "Наши специалисты" : "Біздің мамандар"}
            </h2>
          </div>
          <a
            href="/#booking"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#606A70] transition-colors hover:text-primary"
          >
            {t.common.allDoctors}
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {previewDoctors.map((doctor) => (
            <article
              key={doctor.id}
              data-doctor-card={doctor.id}
              className="clinical-card clinical-lift flex h-full flex-col overflow-hidden rounded-[1.6rem]"
            >
              <div className="relative aspect-[4/3.8] overflow-hidden bg-[#EEF2F4]">
                <DoctorPhoto doctor={doctor} language={language} initialsClassName="size-20 text-xl" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="mb-3 w-fit rounded-full border border-[#DDE3E7] bg-[#FAFBFC] px-3 py-1 text-xs font-bold text-primary">
                  {getDoctorExperience(doctor.description[language])}
                </span>
                <h3 className="mb-2 text-lg font-bold leading-tight text-[#1F2528]">
                  {doctor.name[language]}
                </h3>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-[#606A70]">
                  {doctor.specialty[language]}
                </p>
                <p className="mb-5 line-clamp-4 flex-1 text-sm leading-7 text-[#606A70]">
                  {doctor.description[language]}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-2xl border-[#DDE3E7] bg-white text-sm font-bold text-[#1F2528] hover:border-primary/35 hover:bg-[#F4E7E4]/45 hover:text-primary"
                >
                  <a href="/#booking" className="group/cta">
                    {t.doctors.chooseDoctor}
                    <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function getDoctorExperience(description: string) {
  const match = description.match(/(?:Стаж работы|Опыт работы|Жұмыс тәжірибесі):?\s*([^..]+[.)]?)/i);
  return match?.[1]?.replace(/\.$/, "") ?? "Специалист";
}

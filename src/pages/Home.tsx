import { useLanguage } from "@/hooks/useLanguage";
import { getSiteOrigin, useSeo } from "@/hooks/useSeo";

import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { AboutClinic } from "@/components/sections/AboutClinic";
import { DoctorsSection } from "@/components/sections/DoctorsSection";

import { LocationSection } from "@/components/sections/LocationSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { services } from "@/data/services";
import { buildClinicJsonLd, homeSeo } from "@/data/seo";

export default function Home() {
  const { language } = useLanguage();

  useSeo({
    title: homeSeo.title[language],
    description: homeSeo.description[language],
    keywords: homeSeo.keywords,
    path: "/",
    jsonLd: [buildClinicJsonLd(getSiteOrigin(), services.map((service) => service.title.ru))],
  });

  return (
    <main className="flex-1 w-full overflow-hidden bg-[#F5F7F8]">
      <Hero />
      <ServicesPreview />
      <AboutClinic />
      <DoctorsSection />

      <ReviewsSection />
      <LocationSection />
    </main>
  );
}

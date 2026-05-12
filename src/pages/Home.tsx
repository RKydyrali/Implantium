import { useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";

import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { AboutClinic } from "@/components/sections/AboutClinic";

import { LocationSection } from "@/components/sections/LocationSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";


export default function Home() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title =
      language === "ru"
        ? "IMPLANTIUM - современная стоматология в Актау"
        : "IMPLANTIUM - Ақтаудағы заманауи стоматология";
  }, [language]);

  return (
    <main className="flex-1 w-full overflow-hidden bg-[#F5F7F8]">
      <Hero />
      <ServicesPreview />
      <AboutClinic />

      <ReviewsSection />
      <LocationSection />

    </main>
  );
}

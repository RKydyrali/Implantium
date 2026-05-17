import { lazy, Suspense, type ReactNode } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { getSiteOrigin, useSeo } from "@/hooks/useSeo";

import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { Reveal } from "@/components/motion/MotionPrimitives";
import { services } from "@/data/services";
import { buildClinicJsonLd, homeSeo } from "@/data/seo";

const AboutClinic = lazy(() =>
  import("@/components/sections/AboutClinic").then((module) => ({ default: module.AboutClinic }))
);
const DoctorsSection = lazy(() =>
  import("@/components/sections/DoctorsSection").then((module) => ({ default: module.DoctorsSection }))
);
const ReviewsSection = lazy(() =>
  import("@/components/sections/ReviewsSection").then((module) => ({ default: module.ReviewsSection }))
);
const LocationSection = lazy(() =>
  import("@/components/sections/LocationSection").then((module) => ({ default: module.LocationSection }))
);

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
      <Reveal>
        <ServicesPreview />
      </Reveal>
      <LazyPublicSection>
        <AboutClinic />
      </LazyPublicSection>
      <LazyPublicSection>
        <DoctorsSection />
      </LazyPublicSection>

      <LazyPublicSection>
        <ReviewsSection />
      </LazyPublicSection>
      <LazyPublicSection>
        <LocationSection />
      </LazyPublicSection>
    </main>
  );
}

function LazyPublicSection({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <Reveal>{children}</Reveal>
    </Suspense>
  );
}

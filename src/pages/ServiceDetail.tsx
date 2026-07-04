import { Navigate, useParams } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { usePublicDoctors } from "@/hooks/useDoctors";
import { getSiteOrigin, useSeo } from "@/hooks/useSeo";
import { services } from "@/data/services";
import {
  buildBreadcrumbJsonLd,
  buildClinicJsonLd,
  buildFaqJsonLd,
  buildServiceJsonLd,
  getServiceSeo,
} from "@/data/seo";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";

export default function ServiceDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const { doctors, isLoading: doctorsLoading } = usePublicDoctors();
  const service = services.find((item) => item.id === id);
  const serviceId = service?.id;
  const seo = service ? getServiceSeo(service) : undefined;
  const siteOrigin = getSiteOrigin();
  const servicePath = serviceId ? `/services/${serviceId}` : "/404";
  const serviceDoctors = serviceId ? doctors.filter((doctor) => doctor.serviceIds.includes(serviceId)) : [];

  useSeo({
    title: seo?.title[language] ?? "Страница не найдена | IMPLANTIUM",
    description: seo?.description[language] ?? "Страница не найдена на сайте стоматологической клиники IMPLANTIUM.",
    keywords: seo?.keywords ?? [],
    path: servicePath,
    noindex: !service,
    jsonLd: service && seo ? [
      buildClinicJsonLd(siteOrigin, services.map((item) => item.title.ru)),
      buildServiceJsonLd(siteOrigin, servicePath, service, seo, language),
      buildBreadcrumbJsonLd(siteOrigin, [
        { name: language === "ru" ? "Главная" : "Басты бет", path: "/" },
        { name: language === "ru" ? "Услуги" : "Қызметтер", path: "/#services" },
        { name: service.title[language], path: servicePath },
      ]),
      ...(service.faq.length > 0 ? [buildFaqJsonLd(service.faq, language)] : []),
    ] : [],
  });

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <ServiceDetailTemplate
      service={service}
      doctors={serviceDoctors}
      doctorsLoading={doctorsLoading}
      language={language}
    />
  );
}

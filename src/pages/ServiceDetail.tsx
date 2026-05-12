import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";

export default function ServiceDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const service = services.find((item) => item.id === id);

  useEffect(() => {
    if (service) {
      document.title = `${service.title[language]} - IMPLANTIUM`;
    }
  }, [language, service]);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const serviceDoctors = doctors.filter((doctor) => doctor.serviceIds.includes(service.id));

  return <ServiceDetailTemplate service={service} doctors={serviceDoctors} language={language} />;
}

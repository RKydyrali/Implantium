import { useEffect, useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { usePublicDoctors } from "@/hooks/useDoctors";
import { services } from "@/data/services";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";

export default function ServiceDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const { doctors, isLoading: doctorsLoading } = usePublicDoctors();
  const service = services.find((item) => item.id === id);
  const serviceDoctors = useMemo(
    () => service ? doctors.filter((doctor) => doctor.serviceIds.includes(service.id)) : [],
    [doctors, service]
  );

  useEffect(() => {
    if (service) {
      document.title = `${service.title[language]} - IMPLANTIUM`;
    }
  }, [language, service]);

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

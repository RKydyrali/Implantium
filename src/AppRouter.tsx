import { Suspense, type ComponentType } from "react";
import { AnimatePresence } from "framer-motion";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { MotionPage } from "@/components/motion/MotionPrimitives";
import { LanguageProvider } from "@/hooks/useLanguage";

export type AppPageComponents = {
  Home: ComponentType;
  Doctors: ComponentType;
  ServiceDetail: ComponentType;
  NotFound: ComponentType;
  Admin: ComponentType;
  Visitka: ComponentType;
  Visitka2: ComponentType;
};

function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-primary/20">
      <ScrollToTop />
      <Header />
      <Suspense fallback={null}>
        <AnimatePresence mode="wait" initial={false}>
          <MotionPage key={location.pathname}>
            <Outlet />
          </MotionPage>
        </AnimatePresence>
      </Suspense>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export function AppRouter({ pages }: { pages: AppPageComponents }) {
  const {
    Home: HomePage,
    Doctors: DoctorsPage,
    ServiceDetail: ServiceDetailPage,
    NotFound: NotFoundPage,
    Admin: AdminPage,
    Visitka: VisitkaPage,
    Visitka2: Visitka2Page,
  } = pages;

  return (
    <LanguageProvider>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/visitka" element={<VisitkaPage />} />
        <Route path="/visitka2" element={<Visitka2Page />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="doctors" element={<DoctorsPage />} />
          <Route path="services/:id" element={<ServiceDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </LanguageProvider>
  );
}

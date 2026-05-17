import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/hooks/useLanguage";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { MotionPage } from "@/components/motion/MotionPrimitives";

const Home = lazy(() => import("@/pages/Home"));
const Doctors = lazy(() => import("@/pages/Doctors"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Admin = lazy(() => import("@/pages/Admin"));

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

function AdminRoute() {
  return (
    <Suspense fallback={null}>
      <Admin />
    </Suspense>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminRoute />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="services/:id" element={<ServiceDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { LanguageProvider } from "@/hooks/useLanguage";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

import Home from "@/pages/Home";
import ServiceDetail from "@/pages/ServiceDetail";
import NotFound from "@/pages/NotFound";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-primary/20">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      <StickyCTA />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services/:id" element={<ServiceDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;

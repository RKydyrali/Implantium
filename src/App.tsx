import { lazy, Suspense } from "react";
import { AppRouter } from "@/AppRouter";

const Home = lazy(() => import("@/pages/Home"));
const Doctors = lazy(() => import("@/pages/Doctors"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Admin = lazy(() => import("@/pages/Admin"));
const Visitka = lazy(() => import("@/pages/Visitka"));
const Visitka2 = lazy(() => import("@/pages/Visitka2"));

function App() {
  return (
    <Suspense fallback={null}>
      <AppRouter pages={{ Home, Doctors, ServiceDetail, NotFound, Admin, Visitka, Visitka2 }} />
    </Suspense>
  );
}

export default App;

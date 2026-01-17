import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/scrollTop";
import Whatsapp from "./Components/whatsappButton";
import AOS from "aos";
import "aos/dist/aos.css";
import Schema from "./Components/Schema";
import RutaProtegida from "./layout/RutaProtegida";
import InicioLayout from "./layout/InicioLayout";
import NotFound from "./paginas/NotFound";
import ErrorBoundary from "./Components/ErrorBoundary";
import Loader from "./Components/Loader";

import Proyectos from "./paginas/ProyectosTerminados";
import Cocinas from "./paginas/Cocinas";
import Ampliaciones from "./paginas/Ampliaciones";
import Cotizar from "./paginas/Cotiza";
import Servicios from "./paginas/ServiciosG";
import Inicio from "./paginas/Inicio";
import Contacto from "./paginas/Contacto";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Schema />

      <ErrorBoundary>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<InicioLayout />}>
              <Route index element={<Inicio />} />
            </Route>

            <Route path="/" element={<RutaProtegida />}>
              <Route path="proyectos" element={<Proyectos />} />
              <Route path="cocinas" element={<Cocinas />} />
              <Route path="cotiza" element={<Cotizar />} />
              <Route path="ampliaciones" element={<Ampliaciones />} />
              <Route path="servicios" element={<Servicios />} />
              <Route path="contacto" element={<Contacto />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Whatsapp />
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;

import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/scrollTop";
import Whatsapp from "./Components/whatsappButton";
import AOS from "aos";
import "aos/dist/aos.css";
import MetaTags from "./Components/Metatags";
import RutaProtegida from "./layout/RutaProtegida";
import InicioLayout from "./layout/InicioLayout";

import Proyectos from "./paginas/ProyectosTerminados";
import Cocinas from "./paginas/Cocinas";
import Ampliaciones from "./paginas/Ampliaciones";
import Cotizar from "./paginas/Cotiza";
import Servicios from "./paginas/ServiciosG";
import Inicio from "./paginas/Inicio";
import Contacto from "./paginas/Contacto";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, //Solo se anima la primera vez que aparece
      easing: "ease-in-out", //Transición suave
    });
  }, []);

  return (
    <>
      <MetaTags
        title="Constructora Navarro"
        description="Remodelaciones, ampliaciones y obras civiles en Chile."
        path="/"
        image="/images/og-default.jpg"
      />

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
        </Routes>

        <Whatsapp />
      </BrowserRouter>
    </>
  );
}

export default App;

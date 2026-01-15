import Metatags from "../Components/Metatags";
import Formulario from "../Components/Formulario";


function Cotiza() {
  return (
    <>
      <Metatags
        title="Cotiza tu proyecto | Constructora Navarro Casas, Obras y Remodelaciones"
        description="Solicita una cotización personalizada para tu proyecto de construcción, remodelación o ampliación con Constructora Navarro. Calidad y profesionalismo en Chile."
        path="/cotiza"
        image="/og-cotiza.jpg"
      />
      <div className="relative py-4 mb-8 bg-white rounded-lg shadow-md">
      <Formulario />
      </div>
    </>
  );
};

export default Cotiza;

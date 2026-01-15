import Metatags from "../Components/Metatags";
import Cards from "../Components/Cards";
import Qsomos from "../Components/Qsomos";
import FormaTrabajo from "../Components/FormaTrabajo";
import Swipers from "../Components/Swipers";

function Inicio() {
  return (
    <>
      <Metatags
        title="Constructora Navarro | Construcción, Remodelaciones y Ampliaciones en Chile"
        description="Constructora Navarro ofrece remodelaciones, ampliaciones y proyectos de construcción de alta calidad. Diseño moderno, trabajos garantizados y atención personalizada en Chile."
        path="/"
        image="/og-inicio.jpg"
      />
      <section className="flex px-8 py-16 bg-gray-100">
        <Cards />
      </section>

      <section className="px-8 bg-gray-200">
        <Qsomos />
      </section>

      <section className="flex w-full mx-auto bg-gray-300">
        <FormaTrabajo />
      </section>

      <section className="flex mx-auto bg-gray-100">
        <Swipers />
      </section>
    </>
  );
}

export default Inicio;

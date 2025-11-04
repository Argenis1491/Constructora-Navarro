import { Link } from "react-router-dom";

const nombres = ["proyectos", "ampliaciones", "cocinas", "servicios", "cotiza"];

//Generación de los objetos con URLs de imágenes y rutas
const servicios = nombres.map((nombre) => ({
  titulo: nombre.charAt(0).toUpperCase() + nombre.slice(1).replace("-", " "),
  ruta: `/${nombre}`,
  imgFront: `/img/inicio/${nombre}1.jpg`,
  imgBack: `/img/inicio/${nombre}2.jpg`,
}));

function Cards() {
  return (
    <section className="w-full max-w-[1300px] mx-auto pb-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {servicios.map((servicio, index) => (
        <div
          key={servicio.ruta}
          className="group relative min-h-[400px] w-full overflow-hidden rounded-xl shadow-lg 
                     transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:shadow-orange-500/30"
        >
          {/*Título del servicio*/}
          <div className="absolute top-0 left-0 w-full bg-black/80 text-white min-h-[60px] flex items-center justify-center z-30" data-aos="fade-up">
            <span className="font-semibold text-lg">{servicio.titulo}</span>
          </div>

          {/*Contenedor giratorio */}
          <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Imagen frontal */}
            <div className="absolute inset-0 [backface-visibility:hidden]" data-aos="fade-up" data-aos-delay={index * 200}>
              <img
                src={servicio.imgFront}
                alt={servicio.titulo}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/*Imagen trasera*/}
            <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <img
                src={servicio.imgBack}
                alt={servicio.titulo}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex items-end pb-6 justify-center">
                <Link
                  to={servicio.ruta}
                  className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
                >
                  Ver Más
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Cards;

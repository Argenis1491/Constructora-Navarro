import { useState } from "react";
import "../Styles/styles.css";
import { proyectos } from "../data/casas.js";
import Card from "../Components/CardsPaginas.jsx";

function Proyectos() {
  const [selected, setSelected] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <>
      <div className="bg-gray-100 py-16 px-6">
        <h2
          className="text-6xl uppercase mb-8 text-center text-gray-800"
          data-aos="fade-up"
        >
          Tipos de{" "}
          <span className="text-6xl font-bold uppercase text-center text-gray-800">
            {" "}
            Casas
          </span>
          <span className="block mt-8 w-[15%] h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto rounded-full"></span>
        </h2>

        {/* Contenedor de proyectos */}

        <div
          className="flex flex-col py-16 md:flex-row justify-center flex-wrap gap-16"
          data-aos="fade-up"
        >
          {proyectos.map((servicio) => (
          <Card
            key={servicio.id}
            titulo={servicio.titulo}
            subtitulo={servicio.titulo2}
            imagen={servicio.imagen}
            onClick={() => setSelected(servicio)}
          />
        ))}
      </div>

        {/* Modal*/}
        {selected && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            {/* Botón cerrar */}
            <div
              className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl p-8 relative mx-4 animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 font-bold text-gray-600 hover:text-gray-800 text-xl"
              >
                ✕
              </button>

              {/*Pliego informativo para cuando se agreguen proyectos finalizados*/}
              {/* <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-md p-4 mb-6 grid grid-cols-2 sm:grid-cols-4 text-center gap-3 text-sm font-semibold shadow-md">
                  <div>
                    <p>Año</p>
                    <p className="text-base font-bold">2024</p>
                  </div>
                  <div>
                    <p>Ubicación</p>
                    <p className="text-base font-bold">Temuco</p>
                  </div>
                  <div>
                    <p>Superficie</p>
                    <p className="text-base font-bold">120 m²</p>
                  </div>
                  <div>
                    <p>Estado</p>
                    <p className="text-base font-bold">Finalizado</p>
                  </div>
                </div> */}

              {/* Título */}
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 uppercase tracking-wide">
                {selected.titulo2}
              </h2>

              {/*Galería de imágenes*/}
              <div className="flex justify-center flex-wrap gap-6 mb-8">
                {selected.imagen.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${selected.titulo} ${i + 1}`}
                    className="w-52 h-52 object-cover rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105"
                    onClick={() => setZoomedImage(img)}
                  />
                ))}
              </div>

              {zoomedImage && (
                <div
                  className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[60]"
                  onClick={() => setZoomedImage(null)}
                >
                  <img
                    src={zoomedImage}
                    alt="Imagen ampliada"
                    className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl object-contain border-4 border-white transition-transform duration-500 scale-100 hover:scale-105"
                  />
                </div>
              )}

              {/*Descripción en lista con viñetas*/}
              <ul className="list-disc list-inside px-4 text-gray-700 leading-relaxed text-lg space-y-2">
                {selected.descripcion.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Proyectos;
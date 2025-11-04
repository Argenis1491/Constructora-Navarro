import { useState } from "react";

function Ampliaciones() {
  const [selected, setSelected] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const ampliaciones = [
    {
      id: 1,
      titulo: "",
      titulo2: "Quinchos",
      imagen: ["/img/quincho.jpg", "/img/quincho2.jpg", "/img/quincho3.jpg"],
      descripcion: [
        "Diseñamos y construimos quinchos personalizados, integrando materiales resistentes como piedra, hormigón y madera nativa para lograr un estilo armónico con el entorno.",
        "Cada espacio se adapta a las necesidades del cliente, priorizando funcionalidad, comodidad y estética moderna.",
        "Incorporamos parrillas empotradas, mesones de trabajo y techumbres que protegen del clima, ideales para compartir durante todo el año.",
        "Cuidamos cada detalle del proyecto, desde la iluminación ambiental hasta los revestimientos finales, garantizando durabilidad y elegancia.",
      ],
    },
    {
      id: 2,
      titulo: "",
      titulo2: "Terrazas",
      imagen: [
        "/img/terrazas.jpg",
        "/img/terrazas2.jpg",
        "/img/terrazas3.jpg",
      ],
      descripcion: [
        "Creamos terrazas amplias y confortables que conectan el interior con el exterior, aprovechando al máximo la luz natural y el entorno.",
        "Usamos estructuras metálicas o de madera tratada combinadas con revestimientos modernos que aseguran resistencia y estética contemporánea.",
        "Cada diseño busca integrar zonas de descanso, comedor y áreas verdes para generar ambientes cálidos y funcionales.",
        "Nuestras terrazas son proyectos personalizados que combinan diseño arquitectónico, paisajismo y materiales de alta calidad.",
      ],
    },
    {
      id: 3,
      titulo: "",
      titulo2: "Oficinas",
      imagen: [
        "/img/oficina.jpg",
        "/img/oficina2.jpg",
        "/img/oficina3.jpg",
      ],
      descripcion: [
        "Desarrollamos oficinas modernas y eficientes, diseñadas para potenciar la productividad y comodidad de cada equipo de trabajo.",
        "Priorizamos la iluminación natural, la ventilación y la correcta distribución del espacio según las necesidades del cliente.",
        "Utilizamos materiales duraderos y acabados profesionales que reflejan la identidad corporativa de cada empresa.",
        "Nuestros proyectos de ampliación y remodelación de oficinas garantizan un entorno funcional, elegante y adaptable a las nuevas formas de trabajo.",
      ],
    },
  ];

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
            Cocinas
          </span>
          <span className="block mt-8 w-[15%] h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto rounded-full"></span>
        </h2>

        {/* Contenedor de ampliaciones */}

        <div
          className="flex flex-col py-16 md:flex-row justify-center flex-wrap gap-16"
          data-aos="fade-up"
        >
          {ampliaciones.map((p) => (
            <div key={p.id} className="text-center group">
              <h3 className="text-3xl uppercase mb-4 text-gray-800">
                {p.titulo}
                <p className="text-3xl py-4 font-bold mb-4 text-gray-800">
                  {p.titulo2}
                  <span className="block w-[25%] h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mt-8 mb-4 rounded-full"></span>
                </p>
              </h3>
              <div className="w-96 h-96 mx-auto overflow-hidden shadow-gray-600 shadow-lg transition-transform duration-500 group-hover:scale-110">
                <img
                  src={p.imagen[0]}
                  alt={p.titulo2}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <button
                onClick={() => {
                  setSelected(p);
                }}
                className="mt-8 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                Ver Más
              </button>
            </div>
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

              {/* Título */}
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 uppercase tracking-wide">
                {selected.titulo2}
              </h2>

              {/* Galería de imágenes */}
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

              {/* Descripción en lista con viñetas */}
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

export default Ampliaciones;
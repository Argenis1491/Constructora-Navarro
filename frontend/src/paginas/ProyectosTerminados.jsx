import { useState } from "react";
import "../Styles/styles.css";

function Proyectos() {
  const [selected, setSelected] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const proyectos = [
    {
      id: 1,
      titulo: "Casa",
      titulo2: "Estilo Mediterráneo",
      imagen: [
        "/img/CasaMediterranea.jpg",
        "/img/CasaMediterranea2.jpg",
        "/img/CasaMediterranea3.jpg",
      ],
      descripcion: [
        "Muros blancos o en tonos cálidos que aportan frescura.",
        "Techos de tejas de arcilla o terracota con aire rústico.",
        "Amplios ventanales y terrazas con conexión interior-exterior.",
        "Materiales nobles como madera, piedra y cerámica.",
        "Diseño orientado a ventilación cruzada y luz natural.",
      ],
    },
    {
      id: 2,
      titulo: "Casa",
      titulo2: "Moderna Urbana",
      imagen: ["/img/Moderna.jpg", "/img/Moderna2.jpg", "/img/Moderna3.jpg"],
      descripcion: [
        "Diseño minimalista con líneas limpias y techos planos.",
        "Grandes ventanales para aprovechar la luz natural.",
        "Uso de hormigón, vidrio y acero como materiales principales.",
        "Espacios integrados que maximizan la funcionalidad.",
      ],
    },
    {
      id: 3,
      titulo: "Casa",
      titulo2: "Sureña/Social",
      imagen: ["/img/Sureña.jpg", "/img/Sureña2.jpg", "/img/Sureña3.jpg"],
      descripcion: [
        "Inspiración en la arquitectura del sur de Chile.",
        "Materiales locales: madera nativa, piedra y teja.",
        "Espacios cálidos con chimenea central.",
        "Diseño pensado para el clima frío y lluvioso.",
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

        {/* Contenedor de proyectos */}

        <div
          className="flex flex-col py-16 md:flex-row justify-center flex-wrap gap-16"
          data-aos="fade-up"
        >
          {proyectos.map((p) => (
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
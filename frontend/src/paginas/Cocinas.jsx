import { useState } from "react";
import "../Styles/styles.css";

function Cocinas() {
  const [selected, setSelected] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const cocinas = [
    {
      id: 1,
      titulo: "",
      titulo2: "Americana",
      imagen: [
        "/img/cocinaAmericana.jpg",
        "/img/cocinaAmericana2.jpg",
        "/img/cocinaAmericana3.jpg",
      ],
      descripcion: [
        "Diseño abierto que integra cocina, comedor y sala en un solo ambiente, fomentando la interacción familiar y social.",
        "Generalmente incorpora una isla central funcional que sirve como área de preparación o barra desayunador.",
        "Utiliza materiales modernos como cuarzo, granito y madera natural, combinados con iluminación cálida.",
        "Destaca por su sensación de amplitud, perfecta para espacios urbanos o departamentos modernos.",
        "Ideal para quienes disfrutan cocinar mientras comparten con la familia o invitados.",
      ],
    },
    {
      id: 2,
      titulo: "",
      titulo2: "Moderna",
      imagen: [
        "/img/cocinaModerna.jpg",
        "/img/cocinaModerna2.jpg",
        "/img/cocinaModerna3.jpg",
      ],
      descripcion: [
        "Líneas limpias, minimalismo y equilibrio entre funcionalidad y estética.",
        "Predominan tonos neutros: blanco, gris, negro o madera clara con acentos metálicos.",
        "Electrodomésticos empotrados y almacenamiento oculto que brindan un aspecto pulcro y ordenado.",
        "Superficies lisas y materiales como vidrio templado, acero inoxidable y melamina de alto brillo.",
        "Iluminación LED bajo los muebles superiores, aportando un toque tecnológico y moderno.",
      ],
    },
    {
      id: 3,
      titulo: "",
      titulo2: "Sureña",
      imagen: [
        "/img/cocinaSureña.jpg",
        "/img/cocinaSureña2.jpg",
        "/img/cocinaSureña3.jpg",
      ],
      descripcion: [
        "Inspirada en las viviendas del sur de Chile, esta cocina refleja calidez, tradición y funcionalidad moderna.",
        "Predomina el uso de madera nativa —como mañío, pino oregón o raulí— combinada con piedra, cerámica artesanal y toques metálicos que aportan contraste.",
        "Los espacios se diseñan para mantener el calor, incorporando estufas a combustión lenta o chimeneas integradas que aportan confort en los meses fríos.",
        "Amplias ventanas permiten disfrutar la luz natural y conectar visualmente con el paisaje exterior, característico del entorno sureño.",
        "Los tonos cálidos en muros y mobiliario, junto a la iluminación tenue, crean una atmósfera acogedora ideal para compartir en familia.",
        "Es un estilo que une lo rústico y lo contemporáneo, logrando una cocina resistente, elegante y perfectamente adaptada al clima del sur.",
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

        {/* Contenedor de Cocinas */}

        <div
          className="flex flex-col py-16 md:flex-row justify-center flex-wrap gap-16"
          data-aos="fade-up"
        >
          {cocinas.map((p) => (
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

export default Cocinas;
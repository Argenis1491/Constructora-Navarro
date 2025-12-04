/* eslint-disable react/prop-types */

export default function Card({
  titulo,
  subtitulo,
  imagen,
  descripcion,
  botonTexto = "Ver más",
  onClick,
  tamaño = "w-96 h-96",
}) {
  return (
    <div className="text-center group">
      {/* Título */}
      <h3 className="text-3xl uppercase mb-4 text-gray-800">
        {titulo}
        {subtitulo && (
          <p className="text-3xl py-4 font-bold mb-4 text-gray-800">
            {subtitulo}
            <span className="block w-[25%] h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mt-8 mb-4 rounded-full"></span>
          </p>
        )}
      </h3>

      {/* Imagen principal */}
      <div
        className={`${tamaño} mx-auto overflow-hidden shadow-gray-600 shadow-lg transition-transform duration-500 group-hover:scale-110`}
      >
        <img
          src={Array.isArray(imagen) ? imagen[0] : imagen}
          alt={subtitulo || titulo}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Descripción corta (opcional) */}
      {descripcion && (
        <p className="text-gray-700 mt-4 text-sm max-w-sm mx-auto">
          {descripcion}
        </p>
      )}

      {/* Botón (opcional) */}
      {onClick && (
        <button
          onClick={onClick}
          className="mt-8 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          {botonTexto}
        </button>
      )}
    </div>
  );
}

import { useState, useEffect } from "react";

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoProyecto: "",
    metros: "",
    comuna: "",
    mensaje: "",
  });

  const [tiposProyecto, setTiposProyecto] = useState([]);
  const [comunas, setComunas] = useState([]);

  const [alerta, setAlerta] = useState({ tipo: "", mensaje: "" });

  useEffect(() => {
    const obtenerOpciones = async () => {
      try {
        const respuesta = await fetch(
          "/api/data/opciones"
        );
        const data = await respuesta.json();

        setTiposProyecto(data.tiposProyecto);
        setComunas(data.comunas);
        console.log("📋 Opciones cargadas:", data);
      } catch (error) {
        console.error("Error al obtener opciones:", error);
      }
    };

    obtenerOpciones();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // evita recargar la página

    const camposObligatorios = [
      "nombre",
      "email",
      "telefono",
      "tipoProyecto",
      "comuna",
      "mensaje",
    ];

    for (const campo of camposObligatorios) {
      if (!formData[campo] || !formData[campo].trim()) {
        setAlerta({
          tipo: "error",
          mensaje: "⚠️ Por favor, completa todos los campos antes de enviar.",
        });
        setTimeout(() => setAlerta({ tipo: "", mensaje: "" }), 4000);
        return;
      }
    }

    try {
      const respuesta = await fetch("http://constructora-navarro.onrender.com/api/form/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await respuesta.json();
      console.log("Respuesta del servidor:", data);

      if (data.ok) {
        setAlerta({
          tipo: "success",
          mensaje: "¡Tu cotización fue enviada correctamente! ✅",
        });

        //Abrir notificación automática en WhatsApp
        if (data.whatsappLink) {
          window.open(data.whatsappLink, "_blank"); //abre WhatsApp Web o App
        }
      }

      //Limpiar el formulario
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        tipoProyecto: "",
        metros: "",
        comuna: "",
        mensaje: "",
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setAlerta({
        tipo: "error",
        mensaje: "Hubo un error al enviar la cotización. Intenta nuevamente.",
      });
    }
    setTimeout(() => setAlerta({ tipo: "", mensaje: "" }), 4000);
  };

  return (
    <>
      <h2 className="text-6xl uppercase text-center m-8 text-black">
        Cotiza
        <span className="text-6xl font-bold uppercase text-center text-black">
          {" "}
          tu Proyecto
        </span>
      </h2>
      <div
        id="contacto"
        className="
      max-w-3xl border-2 mb-8 border-black/80 mx-auto px-6 py-8"
      >
        <img
          src="/FondoPlano1.jpg"
          alt="Logo Constructora Navarro"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
        />
        <form
          onSubmit={handleSubmit}
          className="relative grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <input
            name="nombre"
            type="text"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre *"
            className="px-4 py-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md"
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
            className="px-4 py-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md"
          />

          <input
            name="telefono"
            type="text"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Teléfono *"
            className="px-4 py-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md"
          />

          <select
            name="tipoProyecto"
            value={formData.tipoProyecto}
            onChange={handleChange}
            className="px-4 py-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md"
          >
            <option value="">Seleccione un tipo de Proyecto o Servicio</option>
            {tiposProyecto.map((tipo) => (
              <option key={tipo} value={tipo}>
                {tipo}
              </option>
            ))}
          </select>

          <input
            name="metros"
            type="text"
            value={formData.metros}
            onChange={handleChange}
            placeholder="Metros cuadrados (opcional)"
            className="px-4 py-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md"
          />

          <select
            name="comuna"
            value={formData.comuna}
            onChange={handleChange}
            className="px-4 py-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md"
          >
            <option value="">Seleccione una comuna</option>
            {comunas.map((comuna) => (
              <option key={comuna} value={comuna}>
                {comuna}
              </option>
            ))}
          </select>

          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Mensaje *"
            rows="4"
            className="px-4 py-3 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:col-span-2"
          />

          {/* Alerta interna */}
          {alerta.mensaje && (
            <div
              className={`alerta sm:col-span-2 text-center font-semibold py-3 rounded-lg transition-all duration-500 shadow-lg ${
                alerta.tipo === "error"
                  ? "bg-red-100 text-red-700 border border-red-400"
                  : "bg-green-100 text-green-700 border border-green-400"
              }`}
            >
              {alerta.mensaje}
            </div>
          )}

          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded transition sm:col-span-2"
          >
            ENVIAR MENSAJE
          </button>
        </form>
      </div>
    </>
  );
}

export default Formulario;

import { FaWhatsapp } from "react-icons/fa";

function whatsappButton() {
  const telefono = "56912345678";
  const mensaje = "¡Hola! 👋 Estoy interesado en cotizar un proyecto con Constructora Navarro.";
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 z-50 animate-bounce transition-transform duration-300 hover:scale-110"
      aria-label="Chat en WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}

export default whatsappButton;
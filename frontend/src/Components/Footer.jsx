import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-cover bg-center bg-fixed text-gray-200"
      style={{ backgroundImage: "url('/img/footer1.jpg')" }}
      data-aos="fade-up"
    >
      <div className="bg-black/70">
        {/*información de contacto*/}
        <div className="relative max-w-7xl mx-auto py-10 text-center md:text-left">
          <div className="flex justify-center mb-6 md:hidden">
            <img
              src="/LogoBlanco.png"
              alt="Logo Constructora Navarro"
              className="w-20 h-20 object-contain"
            />
          </div>

          <div className="hidden md:flex justify-start px-8 mb-6 absolute">
            <img
              src="/LogoBlanco.png"
              alt="Logo Constructora Navarro"
              className="w-20 h-20 object-contain scale-200"
            />
          </div>
          <h3 className="text-4xl font-semibold text-white mb-6 text-center">
            Contáctanos
            <span className="text-4xl font-semibold text-orange-500 mb-6 text-center">
              {" "}
              Ahora
            </span>
          </h3>
          <div className="flex flex-col max-w-4xl mx-auto md:flex-row justify-between gap-4 text-gray-300">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={25} />
              <p> Psj. Hayden 102, Temuco, Chile</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={25} />
              <p>+56 9 97995898</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={25} />
              <p>contacto@constructoranavarro.cl</p>
            </div>
          </div>
        </div>
      </div>

      {/*Redes sociales*/}
      <div className="w-full bg-gray-800 py-6 border-t border-gray-700">
        <div className="flex justify-center gap-8 text-2xl">
          <a
            href="#"
            className="hover:text-orange-500 transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://wa.me/56997995898"
            className="hover:text-orange-500 transition"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="#"
            className="hover:text-orange-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:contacto@constructoranavarro.cl"
            className="hover:text-orange-500 transition"
            aria-label="Gmail"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="mt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Constructora Navarro — Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

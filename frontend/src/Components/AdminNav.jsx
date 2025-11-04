import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react"; //iconos del menú

const AdminNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); //estado del menú móvil

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-out-cubic"
    >
      {/*Capa de fondo que se integra con la imagen */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md shadow-lg"
            : "bg-transparent backdrop-blur-sm"
        }`}
        data-aos="fade-up"
        style={{ mixBlendMode: !scrolled ? "overlay" : "normal" }}
      ></div>

      {/*Contenido del nav */}
      <div className="relative flex items-center justify-center gap-8 px-6">
        {/*Logo */}
        <ScrollLink
          to="inicio"
          smooth={true}
          duration={600}
          offset={-70}
          className="flex items-center gap-2 z-10 cursor-pointer"
        >
          <img
            src="/LogoBlanco.png"
            alt="Logo Constructora Navarro"
            className={`w-16 h-16 object-contain rounded-full transition-transform duration-500 ${
              scrolled ? "scale-100" : "scale-150"
            }`}
          />
        </ScrollLink>

        {/*Botón del menú móvil */}
        <button
          className="absolute right-6 md:hidden text-white z-20"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/*Links */}
        <div className="hidden md:flex items-center font-bold gap-8">
          <Link
            to="/"
            className="text-white uppercase hover:text-orange-600 transition cursor-pointer"
          >
            Inicio
          </Link>

          <ScrollLink
            to="quienes-somos"
            smooth={true}
            duration={600}
            offset={-70}
            className="text-white uppercase hover:text-orange-600 transition cursor-pointer"
          >
            Quienes Somos
          </ScrollLink>

          <ScrollLink
            to="contacto"
            smooth={true}
            duration={600}
            offset={-70}
            className="text-white uppercase hover:text-orange-600 transition cursor-pointer"
          >
            Contacto
          </ScrollLink>

          <Link
            to="/cotiza"
            className="text-white uppercase hover:text-orange-600 transition"
          >
            Cotizar
          </Link>
        </div>
      </div>

      {/*Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md py-6 flex flex-col items-center gap-4 text-white font-semibold uppercase">
          <ScrollLink
            to="inicio"
            smooth={true}
            duration={600}
            offset={-70}
            className="hover:text-orange-500"
            onClick={() => setMenuOpen(false)} // cierra el menú
          >
            Inicio
          </ScrollLink>

          <ScrollLink
            to="quienes-somos"
            smooth={true}
            duration={600}
            offset={-70}
            className="hover:text-orange-500"
            onClick={() => setMenuOpen(false)}
          >
            Quienes Somos
          </ScrollLink>

          <ScrollLink
            to="contacto"
            smooth={true}
            duration={600}
            offset={-70}
            className="hover:text-orange-500"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </ScrollLink>

          <Link
            to="/cotiza"
            className="hover:text-orange-500"
            onClick={() => setMenuOpen(false)}
          >
            Cotizar
          </Link>
        </div>
      )}
    </nav>
  );
};

export default AdminNav;

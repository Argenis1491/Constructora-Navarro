import { Link } from "react-router-dom";
import AdminNav from "./AdminNav";

function AdminHeader() {
  return (
    <>
      <AdminNav data-aos="fade-up" />

      <header className="relative h-[20vh] flex items-center justify-center px-8 bg-black/90" id="inicio">
        
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 relative mt-10 z-10">
          <img
            src="/Logo Navarro.png"
            alt="Logo Constructora"
            className="h-30 w-auto cursor-pointer"
          />

          <span
            className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text 
        text-transparent drop-shadow-[0_0_10px_rgba(255,165,0,0.8)]"
          >
            Constructora Navarro
          </span>
        </Link>
      </header>
    </>
  );
}

export default AdminHeader;

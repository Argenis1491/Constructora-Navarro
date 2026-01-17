import { Link } from "react-router-dom";
import Metatags from "../Components/Metatags";

function NotFound() {
  return (
    <>
      <Metatags
        title="Página no encontrada | Constructora Navarro"
        description="La página que buscas no existe. Vuelve al inicio de Constructora Navarro."
        path="/404"
      />

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          La página que buscas no existe.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          Volver al inicio
        </Link>
      </main>
    </>
  );
}

export default NotFound;

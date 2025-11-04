import { Outlet } from "react-router-dom";
import AdminHeader from "../Components/AdminHeader";
import Footer from "../Components/Footer";
import Carrusel from "../Components/Swipers.jsx";

function AdminLayout() {
  return (
    <>
      <AdminHeader />
      <main>
        <Outlet />
      </main>
      <Carrusel />
      <Footer />
    </>
  );
}

export default AdminLayout;

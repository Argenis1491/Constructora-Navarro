import AdminNav from "./AdminNav";

function Header() {
  return (
    <>
      <AdminNav data-aos="fade-up"/>

      <header className="relative w-full h-[150vh] md:h-[100vh] flex items-center justify-center" id="/">
        {/*Imagen de fondo */}
        <img
          src="/Constructora Navarro2.jpg"
          alt="Constructora Navarro"
          className="absolute top-0 left-0 w-full h-full object-cover bg-gray/80 brightness-50"
        />

        {/*Contenido centrado */}
        <div className="flex center left-0 text-white" data-aos="fade-up">
          <img
            src="/Logo Navarro.png"
            alt="Logo Constructora Navarro"
            className="mx-auto mb-4 w-64 md:w-96 drop-shadow-lg"
          />
        </div>

        <div className="relative text-center justify center" data-aos="fade-up">
          <h1 className="text-3xl text-center text-white md:text-5xl font-bold mb-2">
            Constructora Navarro
          </h1>
          <p className="text-lg text-white font-bold md:text-2xl opacity-90">
            Proyectos y ampliaciones de calidad
          </p>
        </div>
      </header>

      <section className="w-full h-[70vh] md:h-[50vh] bg-gradient-to-r from-orange-500 to-gray-900">
        <div className="w-full h-[95%] bg-gradient-to-r from-orange-500 to-gray-900 flex items-center justify-center">
          <div className="text-center p-2 m-8 bg-transparent rounded-xl">
            <h2 className="text-4xl font-bold mb-4 bg-white bg-clip-text text-transparent" data-aos="fade-up">
              Nuestros servicios
            </h2>
            <p className="text-xl md:text-6xl font-semibold bg-gradient-to-l from-white to-black bg-clip-text text-transparent" 
            data-aos="fade-up">
              Ofrecemos puntualidad, honestidad y
              <span> Trabajo especializado</span>
            </p>
            <p className="text-xl mt-6 max-w-4xl mx-auto px-4 bg-gradient-to-r from-orange-900 to-black bg-clip-text text-transparent" data-aos="fade-up">
              Nos especializamos en proyectos de construcción y ampliaciones
              residenciales y
              <span>
                {" "}
                comerciales, brindando soluciones integrales que cumplen con los
                más altos estándares de calidad.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;

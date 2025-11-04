import { Home, Expand, Hammer, Wrench } from "lucide-react";

const enfoques = [
  {
    titulo: "Step 1",
    titulo2: "Planificación y Diseño",
    descripcion:
      "Diseñamos una propuesta técnica y económica realista, estableciendo plazos y recursos definidos. Creemos que una buena planificación es la base de una ejecución exitosa.",
    color: "bg-gray-900",
    align: "left",
    icon: Home,
  },
  {
    titulo: "Step 2",
    titulo2: "Organización y Renovación",
    descripcion:
      "Iniciamos cada proyecto con una reunión personalizada para conocer en detalle los objetivos, gustos y requerimientos del cliente. Esto nos permite definir un enfoque claro desde el primer momento.",
    color: "bg-orange-500",
    align: "left",
    icon: Hammer,
  },
  {
    titulo: "Step 3",
    titulo2: "Construcción, Calidad y Supervisión",
    descripcion:
      "Durante todo el proceso de construcción, nuestro equipo de profesionales garantiza que cada etapa se cumpla con altos estándares de calidad, seguridad y eficiencia.",
    color: "bg-gray-900",
    align: "right",
    icon: Expand,
  },
  {
    titulo: "Step 4",
    titulo2: "Resultados Garantizados y Duraderos",
    descripcion:
      "Finalizamos cada obra con revisiones minuciosas, asegurando que el resultado final cumpla —y supere— las expectativas del cliente, entregando un proyecto sólido y duradero.",
    color: "bg-orange-500",
    align: "right",
    icon: Wrench,
  },
];

function TrabajoGrid() {
  return (
    <div className="relative w-full py-12 bg-white/90 overflow-hidden">

      {/*Contenido principal*/}
      <div className="relative z-10 w-[90%] lg:w-[60%] mx-auto py-12">
        {/*Título centrado*/}
        <div className="flex justify-center mb-16">
          <div className="inline-block text-center px-6 py-3 rounded-full border border-orange-500 shadow-lg bg-white/70 backdrop-blur-sm" data-aos="fade-up">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-300 to-black bg-clip-text text-transparent" data-aos="fade-up" data-aos-delay="100">
              Nuestra forma de ejecutar nuestros proyectos
            </h2>
            <span className="block mt-2 text-gray-700" data-aos="fade-up" data-aos-delay="200">
              Calidad, compromiso y excelencia en cada paso
            </span>
          </div>
        </div>

        {/*Grid de enfoques*/}
        <div className="grid grid-cols-1 gap-6 lg:grid-rows-4">
          {enfoques.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-lg overflow-hidden cursor-pointer ${item.color} 
                border-4 border-transparent hover:border-orange-500 hover:shadow-2xl transition duration-300 h-40`}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                {/*Ícono en la esquina*/}
                <div
                  className={`absolute top-2 ${
                    item.align === "left" ? "left-3" : "right-3"
                  }`} 
                >
                  <IconComponent
                    size={30}
                    className="text-white opacity-80 group-hover:opacity-100 transition duration-300" data-aos="fade-up"
                  />
                </div>

                {/*Título y subtítulo antes del hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 transition-opacity duration-300 group-hover:opacity-0 text-center">
                  <h3 className="text-xl font-bold text-white bg-black/50 border border-orange-500 px-4 py-1 rounded-full mb-3">
                    {item.titulo}
                  </h3>
                  <p className="text-white text-lg font-semibold" data-aos="fade-up" data-aos-delay="200">
                    {item.titulo2}
                  </p>
                </div>

                {/*Descripción visible al hover */}
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-white justify-center">
                    {item.descripcion}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TrabajoGrid;

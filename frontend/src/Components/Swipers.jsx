import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const carrusel = () => {
  const imagenes = [
    "/img/carrusel/swipers1.jpg",
    "/img/carrusel/swipers2.jpg",
    "/img/carrusel/swipers3.jpg",
    "/img/carrusel/swipers4.jpg",
    "/img/carrusel/swipers5.jpg",
    "/img/carrusel/swipers6.jpg",
  ];

  return (
    <section
      className="relative w-full h-[300px] mt-8 mb-8 bg-transparent overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000" 
      data-aos-offset="200"
    >
      {/*Carrusel*/}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3} //Número de imágenes visibles a la vez en desktop
        spaceBetween={20} //Espaciado entre imágenes
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={4000} // Velocidad de desplazamiento
        freeMode={true} // Movimiento libre continuo
        className="w-full h-full"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {imagenes.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Construcción ${index + 1}`}
              className="w-full h-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/*Texto encima */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <h2 className="text-white text-2xl sm:text-4xl font-bold drop-shadow-lg">
          Tú lo sueñas, nosotros lo construimos
        </h2>
        <p className="text-white text-lg mt-2 opacity-90">
          Convertimos tus ideas en espacios reales
        </p>
      </div>
    </section>
  );
};

export default carrusel;

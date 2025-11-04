import "../Styles/styles.css";

const Qsomos = () => {
  return (
    <div className="qs-container" id="quienes-somos">
      <div className="qs-overlay"></div>

      <div className="qs-content">
        <section className="qs-header" data-aos="fade-up">
          <img
            src="/LogoN2.png"
            alt="Logo Constructora Navarro"
            className="qs-logo LogoNavarro2"
          />

          <div className="qs-logo-mobile">
            <div className="qs-logo-mobile-container">
              <img src="/LogoNavarro2.png" alt="Logo Constructora Navarro" />
            </div>
          </div>

          <div className="qs-title-box">
            <h2>¿Quiénes Somos?</h2>
            <p>Excelencia en construcción</p>
          </div>
        </section>

        <section className="qs-grid">
          <div className="qs-card" data-aos="fade-up">
            <div className="qs-card-img">
              <img src="/img/inicio/nosotros1.jpg" alt="Equipo de trabajo Constructora Navarro" />
            </div>
            <div className="qs-card-body">
              <p>
                En <span className="qs-highlight">Constructora Navarro</span> somos una empresa dedicada a brindar soluciones integrales en construcción, ampliaciones y remodelaciones. Nos caracterizamos por nuestro compromiso, responsabilidad y excelencia en cada proyecto que realizamos.
              </p>
              <p className="mt-3">
                Con años de experiencia en el rubro, contamos con un equipo de profesionales altamente capacitados que garantizan calidad, puntualidad y resultados que superan las expectativas de nuestros clientes.
              </p>
            </div>
          </div>

          <div className="qs-card" data-aos="fade-up" data-aos-delay="200">
            <div className="qs-card-img">
              <img src="/img/inicio/nosotros2.jpg" alt="Obras y proyectos Constructora Navarro" />
            </div>
            <div className="qs-card-body">
              <p>
                Nuestra misión es construir espacios que inspiren confianza y bienestar, combinando innovación, diseño y materiales de alta calidad. Cada obra es una oportunidad para transformar ideas en realidades sólidas y duraderas.
              </p>
              <p className="mt-3">
                En <span className="qs-highlight">Constructora Navarro</span> creemos en el trabajo de excelencia, la transparencia y la cercanía con nuestros clientes, acompañándolos en cada etapa del proyecto para lograr resultados excepcionales.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Qsomos;

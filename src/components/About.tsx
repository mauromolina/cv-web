export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-tag animate-on-scroll">
              Nuestra Comunidad
            </span>
            <h2 className="section-title animate-on-scroll">
              Un lugar donde la{" "}
              <span className="text-accent">fe cobra vida</span>
            </h2>
            <p className="about-text animate-on-scroll">
              Somos una familia que cree en el poder transformador del Evangelio.
              Desde hace años, abrimos nuestras puertas a todas las personas que
              buscan un encuentro genuino con Dios y una comunidad donde crecer
              espiritualmente.
            </p>
            <p className="about-text animate-on-scroll">
              Creemos que cada persona tiene un propósito divino y trabajamos
              juntos para descubrirlo y vivirlo plenamente.
            </p>
            <div className="about-features animate-on-scroll">
              <div className="feature">
                <div className="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="feature-text">
                  <strong>Enseñanza Bíblica</strong>
                  <span>Fundamentos sólidos de fe</span>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="feature-text">
                  <strong>Comunidad Activa</strong>
                  <span>Grupos para todas las edades</span>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div className="feature-text">
                  <strong>Servicio al Prójimo</strong>
                  <span>Amor en acción</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-visual animate-on-scroll">
            <div className="visual-card">
              <img
                src="/images/2.jpg"
                alt="Enseñanza bíblica en la iglesia"
                className="visual-card-img"
                loading="lazy"
              />
              <div className="visual-card-overlay">
                <span className="visual-verse">
                  &ldquo;Porque donde están dos o tres congregados en mi nombre,
                  allí estoy yo en medio de ellos.&rdquo;
                </span>
                <span className="visual-reference">&mdash; Mateo 18:20</span>
              </div>
            </div>
            <div className="visual-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

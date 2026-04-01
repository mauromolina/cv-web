export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg">
        <img src="/images/1.jpg" alt="" className="hero-bg-img" />
        <div className="hero-gradient"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title animate-on-scroll">
          Iglesia
          <br />
          <span className="title-highlight">Cristo Viviente</span>
        </h1>
        <p className="hero-subtitle animate-on-scroll">
          Una comunidad de fe donde cada persona encuentra propósito, amor y
          esperanza en Cristo.
        </p>
        <div className="hero-buttons animate-on-scroll">
          <a href="#horarios" className="btn btn-primary">
            <span>Visitanos</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#nosotros" className="btn btn-secondary">
            Conocenos
          </a>
        </div>
      </div>
    </section>
  );
}

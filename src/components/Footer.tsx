export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img
              src="/images/cv.png"
              alt="Cristo Viviente"
              className="logo-img"
            />
            <span className="logo-text">Cristo Viviente</span>
          </div>
          <p className="footer-text">
            Una comunidad de fe en Quilmes Oeste
          </p>
          <div className="footer-links">
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#horarios">Horarios</a>
            <a href="#ubicacion">Ubicación</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Iglesia Cristo Viviente. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function ClockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export default function Schedule() {
  return (
    <section className="schedule" id="horarios">
      <div className="schedule-bg">
        <img
          src="/images/5.jpg"
          alt=""
          className="schedule-bg-img"
          loading="lazy"
        />
      </div>
      <div className="container">
        <div className="schedule-header">
          <span className="section-tag animate-on-scroll">Reuniones</span>
          <h2 className="section-title section-title-light animate-on-scroll">
            Te esperamos
          </h2>
          <p className="schedule-subtitle animate-on-scroll">
            Cada encuentro es una oportunidad para crecer y conectar
          </p>
        </div>
        <div className="schedule-cards">
          <div className="schedule-card animate-on-scroll">
            <div className="card-day">JUE</div>
            <div className="card-info">
              <h3>Reunión de Oración</h3>
              <div className="card-time">
                <ClockIcon />
                <span>19:00 - 21:00</span>
              </div>
              <p>Un tiempo para buscar juntos la presencia de Dios</p>
            </div>
          </div>
          <div className="schedule-card schedule-card-featured animate-on-scroll">
            <div className="card-badge">Principal</div>
            <div className="card-day">DOM</div>
            <div className="card-info">
              <h3>Servicio Dominical</h3>
              <div className="card-time">
                <ClockIcon />
                <span>10:30 - 13:00</span>
              </div>
              <p>Alabanza, enseñanza bíblica y comunión</p>
            </div>
          </div>
          <div className="schedule-card animate-on-scroll">
            <div className="card-day">DOM</div>
            <div className="card-info">
              <h3>Servicio Nocturno</h3>
              <div className="card-time">
                <ClockIcon />
                <span>19:00 - 21:00</span>
              </div>
              <p>Cerramos la semana adorando juntos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

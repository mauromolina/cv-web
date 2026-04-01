export default function Location() {
  return (
    <section className="location" id="ubicacion">
      <div className="container">
        <div className="location-grid">
          <div className="location-info">
            <span className="section-tag animate-on-scroll">Ubicación</span>
            <h2 className="section-title animate-on-scroll">
              Vení a <span className="text-accent">visitarnos</span>
            </h2>
            <div className="location-address animate-on-scroll">
              <div className="address-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="address-text">
                <strong>Triunvirato 2765</strong>
                <span>Quilmes Oeste, Buenos Aires</span>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/place/Triunvirato+2765,+B1878+Quilmes+Oeste,+Provincia+de+Buenos+Aires/@-34.7484209,-58.282124,17z"
              target="_blank"
              rel="noopener"
              className="btn btn-primary animate-on-scroll"
            >
              <span>Cómo llegar</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
          <div className="location-map animate-on-scroll">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.8!2d-58.282124!3d-34.7484209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32c2ac8e10f97%3A0xe19b6e27eda51032!2sTriunvirato%202765%2C%20Quilmes%20Oeste!5e0!3m2!1ses!2sar!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

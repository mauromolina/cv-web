export default function Gallery() {
  const images = [
    { src: "/images/3.jpg", alt: "Servicio de adoración" },
    { src: "/images/8.jpg", alt: "Comunidad de la iglesia" },
    { src: "/images/6.jpg", alt: "Ministerio de niños" },
    { src: "/images/4.jpg", alt: "Tiempo de oración" },
    { src: "/images/9.jpg", alt: "Jóvenes de la iglesia" },
    { src: "/images/10.jpg", alt: "Jóvenes de la iglesia" },
  ];

  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="section-tag animate-on-scroll">
            Nuestra Familia
          </span>
          <h2 className="section-title animate-on-scroll">
            Momentos que nos <span className="text-accent">unen</span>
          </h2>
        </div>
        <div className="gallery-grid animate-on-scroll">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

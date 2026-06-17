import { GALLERY } from '../data/clinicData';

function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Gallery</span>
          <h2 className="section-title">Clinic Gallery</h2>
          <p className="section-subtitle">
            A welcoming space designed for children and families
          </p>
        </div>

        <div className="gallery__grid">
          {GALLERY.map((item, i) => (
            <div
              key={i}
              className="gallery__item animate-on-scroll"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="gallery__overlay">
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;

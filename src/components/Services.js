import { SERVICES } from '../data/clinicData';

function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Pediatric Healthcare Services</h2>
          <p className="section-subtitle">
            Comprehensive medical care tailored for newborns, infants, and children
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="service-card animate-on-scroll"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <ul className="service-card__list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

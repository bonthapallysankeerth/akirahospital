import { WHY_CHOOSE } from '../data/clinicData';

function WhyChoose() {
  return (
    <section id="why-choose" className="section why-choose">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">Why Choose Akira Clinic</h2>
        </div>

        <div className="why-choose__grid">
          {WHY_CHOOSE.map((item, i) => (
            <div
              key={item.title}
              className="why-card animate-on-scroll"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="why-card__icon">{item.icon}</div>
              <h3 className="why-card__title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;

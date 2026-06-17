import { CLINIC, DOCTOR } from '../data/clinicData';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <img src="/images/banner.png" alt="Doctor with child at Akira Children's Clinic" className="hero__bg-img" />
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__content container">
        <div className="hero__text animate-on-scroll">
          <span className="hero__badge">Premium Pediatric Care</span>
          <h1 className="hero__title">
            Healthy Kids,
            <span className="hero__title-accent"> Happy Futures</span>
          </h1>
          <p className="hero__subtitle">
            Expert Newborn &amp; Child Healthcare With Compassionate Medical Care
          </p>

          <div className="hero__actions">
            <a href="#booking" className="btn btn--primary btn--lg">
              Book Appointment
            </a>
            <a href={CLINIC.phoneLinks[0]} className="btn btn--outline btn--lg">
              Call Doctor
            </a>
          </div>

          <div className="hero__trust">
            <div className="hero__trust-item">
              <span className="hero__trust-icon">⭐</span>
              <span><strong>{CLINIC.rating}</strong> Rated Clinic</span>
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-icon">👨‍⚕️</span>
              <span>{DOCTOR.name}</span>
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-icon">🧸</span>
              <span>Child Friendly Care</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="#f8fbff" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;

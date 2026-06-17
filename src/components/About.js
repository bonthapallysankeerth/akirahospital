const FEATURES = [
  { icon: '🛡️', label: 'Safe Treatment' },
  { icon: '👨‍⚕️', label: 'Experienced Doctor' },
  { icon: '✨', label: 'Hygienic Clinic' },
  { icon: '🌈', label: 'Friendly Environment' },
];

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <div className="about__image-wrap animate-on-scroll">
            <img
              src="/images/clinic-exterior-1.png"
              alt="Akira Children's Clinic exterior"
              className="about__image"
            />
            <div className="about__image-badge">
              <span className="about__badge-num">4.6</span>
              <span className="about__badge-text">Google Rating</span>
            </div>
          </div>

          <div className="about__content animate-on-scroll">
            <span className="section-label">About Us</span>
            <h2 className="section-title">Trusted Care For Your Little Ones</h2>
            <p className="section-text">
              Akira Children&apos;s Clinic provides quality pediatric healthcare with modern
              medical practices, experienced consultation, and a comfortable environment for
              children and parents.
            </p>

            <div className="about__features">
              {FEATURES.map((f) => (
                <div key={f.label} className="about__feature">
                  <span className="about__feature-icon">{f.icon}</span>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

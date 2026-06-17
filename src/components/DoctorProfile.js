import { DOCTOR } from '../data/clinicData';

function DoctorProfile() {
  return (
    <section id="doctor" className="section doctor">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Our Specialist</span>
          <h2 className="section-title">Meet Your Pediatric Expert</h2>
        </div>

        <div className="doctor__card animate-on-scroll">
          <div className="doctor__image-section">
            <div className="doctor__image-wrap">
              <img
                src="/images/banner.png"
                alt={DOCTOR.name}
                className="doctor__image"
              />
              <div className="doctor__image-overlay"></div>
            </div>
            <div className="doctor__reg-badge">
              Reg No: {DOCTOR.regNo}
            </div>
          </div>

          <div className="doctor__info">
            <h3 className="doctor__name">{DOCTOR.name}</h3>
            <p className="doctor__qual">{DOCTOR.qualification}</p>
            <p className="doctor__spec">{DOCTOR.specialization}</p>

            <p className="doctor__intro">{DOCTOR.intro}</p>

            <ul className="doctor__highlights">
              {DOCTOR.highlights.map((item) => (
                <li key={item}>
                  <span className="doctor__check">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a href="#booking" className="btn btn--primary">
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorProfile;

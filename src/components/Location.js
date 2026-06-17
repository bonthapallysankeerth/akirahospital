import { CLINIC } from '../data/clinicData';

function Location() {
  return (
    <section id="location" className="section location">
      <div className="container">
        <div className="location__grid">
          <div className="location__info animate-on-scroll">
            <span className="section-label">Visit Us</span>
            <h2 className="section-title">Our Location</h2>

            <div className="location__card">
              <h3>{CLINIC.name}</h3>
              <p className="location__telugu">{CLINIC.nameTelugu}</p>
              <p className="location__address">{CLINIC.shortAddress}</p>
              <p className="location__full-address">{CLINIC.address}</p>

              <div className="location__actions">
                <a
                  href={CLINIC.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Get Directions
                </a>
                <a href={CLINIC.phoneLinks[0]} className="btn btn--outline">
                  Call Clinic
                </a>
              </div>
            </div>
          </div>

          <div className="location__map animate-on-scroll">
            <iframe
              title="Akira Children's Clinic Location"
              src="https://maps.google.com/maps?q=Akira+Children%27s+Clinic+Suraram+Hyderabad+500055&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <a
              href={CLINIC.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="location__map-link"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;

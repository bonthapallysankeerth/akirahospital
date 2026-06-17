import { CLINIC, DOCTOR, NAV_LINKS } from '../data/clinicData';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="/images/logo.png" alt={CLINIC.name} className="footer__logo" />
            <h3>{CLINIC.name}</h3>
            <p className="footer__telugu">{CLINIC.nameTelugu}</p>
            <p className="footer__category">{CLINIC.category}</p>
          </div>

          <div className="footer__doctor">
            <h4>{DOCTOR.name}</h4>
            <p>{DOCTOR.qualification}</p>
            <p>{DOCTOR.specialization}</p>
            <p className="footer__reg">Reg No: {DOCTOR.regNo}</p>
          </div>

          <div className="footer__contact">
            <h4>Contact</h4>
            {CLINIC.phones.map((phone, i) => (
              <a key={phone} href={CLINIC.phoneLinks[i]}>{phone}</a>
            ))}
            <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
            <p className="footer__address">{CLINIC.address}</p>
          </div>

          <div className="footer__links">
            <h4>Quick Links</h4>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} {CLINIC.name}. All rights reserved.</p>
          <p className="footer__seo">
            Best Children&apos;s Clinic in Suraram Hyderabad | Pediatric Doctor in Hyderabad |
            Newborn Specialist Hyderabad | Kids Clinic Near Suraram
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { useState, useEffect } from 'react';
import { CLINIC, NAV_LINKS } from '../data/clinicData';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          <img src="/images/logo.png" alt={CLINIC.name} className="navbar__logo" />
          <div className="navbar__brand-text">
            <span className="navbar__name">Akira</span>
            <span className="navbar__subtitle">Children&apos;s Clinic</span>
          </div>
        </a>

        <button
          className={`navbar__toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#booking" className="navbar__cta" onClick={closeMenu}>
              Book Appointment
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

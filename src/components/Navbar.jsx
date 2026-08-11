import { useEffect, useState } from 'react';
import logoMark from '../assets/images/logo-mark.webp';
import './Navbar.css';

const LINKS = [
  { href: '#story', label: 'Story' },
  { href: '#tour', label: 'The Studio' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${solid ? 'nav--solid' : ''}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__mark">
          <img src={logoMark} alt="XO Inks" className="nav__mark-icon" />
        </a>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn nav__cta">
          Book a Tour
        </a>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn solid" onClick={() => setOpen(false)}>
          Book a Tour
        </a>
      </div>
    </header>
  );
}

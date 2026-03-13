import { useState, useEffect } from 'react';
import './NavBar.css';

const NAV_LINKS = [
  { href: '#framework', label: 'Framework' },
  { href: '#report', label: 'Sample Report' },
  { href: '#deliverables', label: 'Deliverables' },
  { href: '#contact', label: 'Contact' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__brand">
          <img src="/logo.svg" alt="Secure Stack Consulting" className="navbar__logo" />
        </a>
        <nav className="navbar__links">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="navbar__link">{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-primary navbar__cta">
          Get Assessment
        </a>
      </div>
    </header>
  );
}

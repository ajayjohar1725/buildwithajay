import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Nav.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/story', label: 'My Story' },
  { to: '/work', label: 'Work' },
  { to: '/mindset', label: 'Mindset' },
  { to: '/life', label: 'Life' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <header className={`nav-header${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner container">
        <NavLink to="/" className="nav-logo">
          <span className="logo-ak">AK</span>
          <span className="logo-name">Ajay Kumar</span>
        </NavLink>

        <nav className="nav-links">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <a href="/contact" className="nav-cta">
          Hire Me
        </a>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `mobile-link${isActive ? ' active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
          <a href="/contact" className="mobile-cta">Hire Me</a>
        </div>
      )}
    </header>
  )
}

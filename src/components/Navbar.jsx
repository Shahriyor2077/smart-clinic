import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/20240102_000350.png'

function Navbar({ t, lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Smart Clinic" className="logo-img" />
        </NavLink>

        <ul className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
              {t.nav.home}
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
              {t.nav.services}
            </NavLink>
          </li>
        </ul>

        <div className="navbar-right">
          <div className="lang-toggle">
            <button
              className={`lang-btn ${lang === 'uz' ? 'lang-active' : ''}`}
              onClick={() => setLang('uz')}
            >
              UZ
            </button>
            <span className="lang-divider">|</span>
            <button
              className={`lang-btn ${lang === 'ru' ? 'lang-active' : ''}`}
              onClick={() => setLang('ru')}
            >
              RU
            </button>
          </div>

          <button
            className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import logo from '../assets/20240102_000350.png'
import { MapPin, Phone, Clock, Instagram, Send } from 'lucide-react'

function Footer({ t }) {
  const f = t.footer
  const cats = t.services.categories

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">

          <div className="footer-col">
            <img src={logo} alt="Smart Clinic" className="footer-logo-img" />
            <p className="footer-tagline">Innovatsion klinika · Инновационная клиника</p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Kontakt / Контакты</h4>
            <ul className="footer-list">
              <li>
                <MapPin size={16} strokeWidth={1.8} className="footer-icon-svg" />
                {f.addressLabel}: {f.address}
              </li>
              <li>
                <Phone size={16} strokeWidth={1.8} className="footer-icon-svg" />
                {f.phoneLabel}: {f.phone}
              </li>
              <li>
                <Clock size={16} strokeWidth={1.8} className="footer-icon-svg" />
                {f.hoursLabel}: {f.hours}
              </li>
              <li>
                <Instagram size={16} strokeWidth={1.8} className="footer-icon-svg" />
                <a href="https://instagram.com/smartclinicuz" target="_blank" rel="noopener noreferrer">{f.instagram}</a>
              </li>
              <li>
                <Send size={16} strokeWidth={1.8} className="footer-icon-svg" />
                <a href="https://t.me/smart_clinicuz" target="_blank" rel="noopener noreferrer">{f.telegram}</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">{f.servicesLabel}</h4>
            <ul className="footer-list">
              <li>{cats.specialists}</li>
              <li>{cats.diagnostics}</li>
              <li>{cats.lab}</li>
              <li>{cats.rehab}</li>
            </ul>
          </div>

        </div>
        <div className="footer-bottom">
          <p>{f.copyright.replace('2024', new Date().getFullYear())}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

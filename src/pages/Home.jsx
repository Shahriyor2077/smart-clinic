import { Link } from 'react-router-dom'
import ApplicationForm from '../components/ApplicationForm'
import { Clock, Zap, FlaskConical, UserRound, Heart } from 'lucide-react'

const icons = [Clock, Zap, FlaskConical, UserRound, Heart]

const serviceImages = [
  // Shifokor konsultatsiyasi — female doctor
  { src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80', pos: 'top' },
  // UZI diagnostika — ultrasound scan
  { src: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&q=80', pos: 'center' },
  // Laboratoriya — lab microscope
  { src: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80', pos: 'center' },
  // Reabilitatsiya — physiotherapy
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', pos: 'center' },
  // Kardiologiya — ECG heart monitor
  { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80', pos: 'center' },
  // Pediatriya — doctor with child
  { src: 'https://images.unsplash.com/photo-1576765608622-067973a79f53?w=600&q=80', pos: 'top' },
  // Ginekologiya — women health doctor
  { src: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=600&q=80', pos: 'top' },
  // Nevrologiya — brain scan MRI
  { src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80', pos: 'center' },
]

function Home({ t }) {
  const sp = t.servicesPreview

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Smart Clinic</div>
            <h1 className="hero-title">{t.hero.title}</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">{t.about.title}</h2>
          <div className="advantages-grid">
            {t.about.advantages.map((item, idx) => {
              const Icon = icons[idx]
              return (
                <div key={item} className="advantage-card">
                  <div className="advantage-icon">
                    <Icon size={36} strokeWidth={1.5} />
                  </div>
                  <p>{item}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">{sp.title}</h2>
          <div className="sp-grid">
            {sp.items.map((item, idx) => (
              <div key={idx} className="sp-card">
                <div className="sp-card-img">
                  <img
                    src={serviceImages[idx].src}
                    alt={item.title}
                    loading="lazy"
                    style={{ objectPosition: serviceImages[idx].pos }}
                  />
                </div>
                <div className="sp-card-body">
                  <h3 className="sp-card-title">{item.title}</h3>
                  <p className="sp-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="sp-footer">
            <Link to="/services" className="sp-view-all">{sp.viewAll} →</Link>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <ApplicationForm t={t} />
    </>
  )
}

export default Home

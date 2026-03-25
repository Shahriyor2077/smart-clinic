import ServiceCategory from '../components/ServiceCategory'
import ApplicationForm from '../components/ApplicationForm'
import PriceList from '../components/PriceList'

function Services({ t, lang }) {
  const cats = t.services.categories
  const s = t.services

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t.services.pageTitle}</h1>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <ServiceCategory title={cats.specialists} items={s.specialists} />
          <ServiceCategory title={cats.diagnostics} items={s.diagnostics} />
          <ServiceCategory title={cats.lab} items={s.labTests} />
          <ServiceCategory title={cats.rehab} items={s.rehab} />
        </div>
      </section>

      <PriceList lang={lang} />

      <ApplicationForm t={t} />
    </>
  )
}

export default Services

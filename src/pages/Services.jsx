import ServiceCategory from '../components/ServiceCategory'
import ApplicationForm from '../components/ApplicationForm'
import PriceList from '../components/PriceList'

function Services({ t, lang }) {
  const cats = t.services.categories
  const detailLink = t.services.detailLink
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
          <ServiceCategory title={cats.specialists} items={s.specialists} detailLink={detailLink} />
          <ServiceCategory title={cats.diagnostics} items={s.diagnostics} detailLink={detailLink} />
          <ServiceCategory title={cats.lab} items={s.labTests} detailLink={detailLink} />
          <ServiceCategory title={cats.rehab} items={s.rehab} detailLink={detailLink} />
        </div>
      </section>

      <PriceList lang={lang} />

      <ApplicationForm t={t} />
    </>
  )
}

export default Services

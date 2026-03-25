import ServiceCard from './ServiceCard'

function ServiceCategory({ title, items }) {
  return (
    <div className="service-category">
      <h3 className="category-title">{title}</h3>
      <div className="service-grid">
        {items.map((item) => (
          <ServiceCard
            key={item.name}
            name={item.name}
          />
        ))}
      </div>
    </div>
  )
}

export default ServiceCategory

import { useState, useRef } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import prices from '../data/prices'

function PriceList({ lang }) {
  const [open, setOpen] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const categoryRefs = useRef({})

  const title = lang === 'uz' ? "Narxlar ro'yxati" : 'Прейскурант'
  const searchPlaceholder = lang === 'uz' ? 'Xizmat nomini kiriting...' : 'Введите название услуги...'

  const handleToggle = (e, idx) => {
    e.preventDefault()

    if (open !== null && open !== idx) {
      // Boshqa bo'lim ochilayotgan bo'lsa - scroll qilish
      setOpen(idx)
      setTimeout(() => {
        if (categoryRefs.current[idx]) {
          const element = categoryRefs.current[idx]
          const offset = 100
          const elementPosition = element.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 50)
    } else {
      // O'sha bo'limni yopish yoki birinchi marta ochish
      setOpen(open === idx ? null : idx)
    }
  }

  const filterItems = (items) => {
    if (!searchQuery.trim()) return items
    return items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  const filteredPrices = prices[lang].map(cat => ({
    ...cat,
    items: filterItems(cat.items)
  })).filter(cat => cat.items.length > 0)

  return (
    <section className="price-list-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>

        <div className="price-search-box">
          <Search size={20} className="price-search-icon" />
          <input
            type="text"
            className="price-search-input"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="price-accordion">
          {filteredPrices.map((cat, idx) => {
            const originalIdx = prices[lang].findIndex(c => c.title === cat.title)
            const isOpen = open === originalIdx
            return (
              <div
                key={cat.title}
                className="price-category"
                ref={el => categoryRefs.current[originalIdx] = el}
              >
                <button
                  type="button"
                  className={`price-cat-header${isOpen ? ' open' : ''}`}
                  onClick={(e) => handleToggle(e, originalIdx)}
                >
                  <span>{cat.title}</span>
                  <ChevronDown size={18} className="price-chevron" />
                </button>
                {isOpen && (
                  <div className="price-cat-body">
                    <table className="price-table">
                      <tbody>
                        {cat.items.map((item, i) => (
                          <tr key={i} className={i % 2 === 0 ? 'even' : 'odd'}>
                            <td className="price-name">{item.name}</td>
                            <td className="price-value">{item.price} {lang === 'uz' ? "so'm" : 'сум'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PriceList

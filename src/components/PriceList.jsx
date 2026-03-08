import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import prices from '../data/prices'

function PriceList({ lang }) {
  const [open, setOpen] = useState(null)

  const title = lang === 'uz' ? "Narxlar ro'yxati" : 'Прейскурант'

  return (
    <section className="price-list-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="price-accordion">
          {prices[lang].map((cat, idx) => (
            <div key={idx} className="price-category">
              <button
                className={`price-cat-header${open === idx ? ' open' : ''}`}
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span>{cat.title}</span>
                <ChevronDown size={18} className="price-chevron" />
              </button>
              {open === idx && (
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default PriceList

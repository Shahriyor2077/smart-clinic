import { useState } from 'react'

const BOT_TOKEN = '8335951068:AAGOe5QSnA8ZeTGzWcqEeqnlTXekRcTendg'
const CHAT_ID = '5990577564'

const serviceOptions = [
  'Аллерголог',
  'Гинеколог',
  'Инфекционист',
  'Кардиолог',
  'Невролог',
  'Оториноларинголог (ЛОР)',
  'Педиатр',
  'Пульмонолог',
  'Терапевт',
  'Уролог',
  'Физиотерапевт',
  'Эндокринолог',
  'УЗИ-диагностика',
  'Доплер',
  'Эхо-сердца',
  'Лабораторные исследования',
  'ЛФК',
  'Массаж',
  'Реабилитация',
  'Физиотерапия',
]

async function sendToTelegram(data) {
  const text =
    `📋 *Yangi ariza / Новая заявка*\n\n` +
    `👤 *Ism / Имя:* ${data.name}\n` +
    `📞 *Telefon / Телефон:* ${data.phone}\n` +
    `🏥 *Xizmat / Услуга:* ${data.service}\n` +
    `💬 *Izoh / Комментарий:* ${data.comment || '—'}`

  const res = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'Markdown' }),
    }
  )
  if (!res.ok) throw new Error('Telegram error')
}

function ApplicationForm({ t }) {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', comment: '' })
  const [status, setStatus] = useState('idle')
  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      await sendToTelegram(formData)
      setStatus('success')
      setFormData({ name: '', phone: '', service: '', comment: '' })
      setTimeout(() => setStatus('idle'), 6000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const f = t.form

  return (
    <section className="form-section">
      <div className="container">
        <h2 className="section-title">{f.title}</h2>

        {status === 'success' && (
          <div className="success-message">
            <span className="success-icon">✓</span>
            {f.success}
          </div>
        )}

        {status === 'error' && (
          <div className="error-message">
            <span className="success-icon">!</span>
            {f.error || 'Xatolik yuz berdi. Qayta urinib ko\'ring.'}
          </div>
        )}

        <form className="application-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">{f.name.label}</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={f.name.placeholder}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">{f.phone.label}</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder={f.phone.placeholder}
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="service">{f.service.label}</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">{f.service.placeholder}</option>
              {serviceOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="comment">{f.comment.label}</label>
            <textarea
              id="comment"
              name="comment"
              rows={4}
              placeholder={f.comment.placeholder}
              value={formData.comment}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={status === 'loading'}>
            {status === 'loading' ? '...' : f.submit}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ApplicationForm

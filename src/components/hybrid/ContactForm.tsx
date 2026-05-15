import { useState, ChangeEvent, FormEvent } from 'react';

// Form submits directly to Telegram via /api/notify

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--hb-rule-strong)',
  outline: 'none',
  fontFamily: 'var(--hb-sans)',
  fontSize: 15,
  color: 'var(--hb-ink)',
  padding: '12px 0',
  boxSizing: 'border-box',
  transition: 'border-color 300ms',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--hb-sans)',
  fontSize: 11,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--hb-ink-faint)',
  display: 'block',
  marginBottom: 6,
};

const fieldWrap: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

type Status = 'idle' | 'sending' | 'success' | 'error';

interface Props {
  onSuccess?: () => void;
  successInModal?: boolean;
}

export default function ContactForm({ onSuccess, successInModal }: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [files, setFiles] = useState<FileList | null>(null);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    area: '',
    budget: '',
    style: '',
    source: '',
    format: 'Переписка',
    comment: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          address: form.address,
          area: form.area,
          budget: form.budget,
          style: form.style,
          source: form.source,
          format: form.format,
          comment: form.comment,
        }),
      });

      if (!res.ok) throw new Error('notify');

      setStatus('success');
      onSuccess?.();
    } catch {
      setStatus('error');
    }
  };

  const isSuccess = status === 'success' || successInModal;

  if (isSuccess) {
    return (
      <div style={{ padding: '56px 40px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--hb-serif)', fontWeight: 300, fontStyle: 'italic', fontSize: 40, color: 'var(--hb-ink)', marginBottom: 16, letterSpacing: '-0.02em' }}>
          Заявка отправлена.
        </div>
        <p style={{ fontFamily: 'var(--hb-sans)', fontSize: 14, color: 'var(--hb-ink-dim)', margin: 0 }}>
          Мы свяжемся с вами в течение рабочего дня.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: '32px 40px 40px' }}>
      <div className="hb-form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px 40px' }}>
        <div style={fieldWrap}>
          <label style={labelStyle}>Ваше имя *</label>
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Иван Иванов" style={inputStyle}
            onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--hb-ink)')}
            onBlur={e => (e.currentTarget.style.borderBottomColor = 'var(--hb-rule-strong)')} />
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Телефон *</label>
          <input name="phone" value={form.phone} onChange={handleChange} required type="tel" placeholder="+7 (___) ___-__-__" style={inputStyle}
            onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--hb-ink)')}
            onBlur={e => (e.currentTarget.style.borderBottomColor = 'var(--hb-rule-strong)')} />
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>ЖК / Адрес объекта</label>
          <input name="address" value={form.address} onChange={handleChange} placeholder="ЖК «Северная звезда», Кронверкский 29" style={inputStyle}
            onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--hb-ink)')}
            onBlur={e => (e.currentTarget.style.borderBottomColor = 'var(--hb-rule-strong)')} />
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Площадь, м²</label>
          <input name="area" value={form.area} onChange={handleChange} type="number" min="1" placeholder="120" style={inputStyle}
            onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--hb-ink)')}
            onBlur={e => (e.currentTarget.style.borderBottomColor = 'var(--hb-rule-strong)')} />
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Примерный бюджет</label>
          <select name="budget" value={form.budget} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}
            onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--hb-ink)')}
            onBlur={e => (e.currentTarget.style.borderBottomColor = 'var(--hb-rule-strong)')}>
            <option value="">Не указан</option>
            <option value="до 3 млн">до 3 млн ₽</option>
            <option value="3–5 млн">3–5 млн ₽</option>
            <option value="5–10 млн">5–10 млн ₽</option>
            <option value="10+ млн">от 10 млн ₽</option>
            <option value="обсуждается">Обсуждается</option>
          </select>
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Стиль интерьера</label>
          <input name="style" value={form.style} onChange={handleChange} placeholder="Минимализм, современная классика…" style={inputStyle}
            onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--hb-ink)')}
            onBlur={e => (e.currentTarget.style.borderBottomColor = 'var(--hb-rule-strong)')} />
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Откуда узнали о нас</label>
          <select name="source" value={form.source} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}
            onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--hb-ink)')}
            onBlur={e => (e.currentTarget.style.borderBottomColor = 'var(--hb-rule-strong)')}>
            <option value="">Не указано</option>
            <option value="Instagram">Instagram</option>
            <option value="Telegram">Telegram</option>
            <option value="Рекомендация">Рекомендация</option>
            <option value="Google">Google</option>
            <option value="Другое">Другое</option>
          </select>
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Предпочтительный формат</label>
          <div style={{ display: 'flex', gap: 32, paddingTop: 12 }}>
            {['Переписка', 'Созвон'].map(opt => (
              <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontFamily: 'var(--hb-sans)', fontSize: 14, color: 'var(--hb-ink-dim)' }}>
                <input type="radio" name="format" value={opt} checked={form.format === opt} onChange={handleChange}
                  style={{ accentColor: 'var(--hb-ink)', width: 16, height: 16 }} />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div style={{ ...fieldWrap, gridColumn: '1 / -1' }}>
          <label style={labelStyle}>Референсы (фото)</label>
          <input type="file" multiple accept="image/*" onChange={e => setFiles(e.target.files)}
            style={{ ...inputStyle, paddingTop: 10, cursor: 'pointer', fontSize: 13, color: 'var(--hb-ink-dim)' }}
            onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--hb-ink)')}
            onBlur={e => (e.currentTarget.style.borderBottomColor = 'var(--hb-rule-strong)')} />
          {files && files.length > 0 && (
            <div style={{ fontFamily: 'var(--hb-sans)', fontSize: 12, color: 'var(--hb-ink-faint)', marginTop: 8 }}>
              Прикреплено: {files.length} {files.length === 1 ? 'файл' : files.length < 5 ? 'файла' : 'файлов'}
            </div>
          )}
        </div>

        <div style={{ ...fieldWrap, gridColumn: '1 / -1' }}>
          <label style={labelStyle}>Комментарий</label>
          <textarea name="comment" value={form.comment} onChange={handleChange} rows={3} placeholder="Расскажите подробнее о задаче…"
            style={{ ...inputStyle, resize: 'vertical', paddingTop: 12, lineHeight: 1.6 }}
            onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--hb-ink)')}
            onBlur={e => (e.currentTarget.style.borderBottomColor = 'var(--hb-rule-strong)')} />
        </div>
      </div>

      <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <button type="submit" disabled={status === 'sending'}
          style={{
            background: 'var(--hb-ink)', color: 'var(--hb-bg)',
            border: 'none', padding: '18px 40px',
            fontFamily: 'var(--hb-sans)', fontSize: 13, letterSpacing: '0.04em',
            textTransform: 'uppercase', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
            opacity: status === 'sending' ? 0.6 : 1,
            transition: 'opacity 250ms',
          }}
          onMouseEnter={e => { if (status !== 'sending') (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
          onMouseLeave={e => { if (status !== 'sending') (e.currentTarget as HTMLElement).style.opacity = '1'; }}>
          {status === 'sending' ? 'Отправляем…' : 'Отправить заявку'}
        </button>
        {status === 'error' && (
          <span style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, color: '#e05252' }}>
            Ошибка. Попробуйте ещё раз или напишите на почту.
          </span>
        )}
        <span style={{ fontFamily: 'var(--hb-sans)', fontSize: 11, color: 'var(--hb-ink-faint)', maxWidth: 280, lineHeight: 1.5 }}>
          Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных.
        </span>
      </div>
    </form>
  );
}

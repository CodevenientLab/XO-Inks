import { useState } from 'react';
import './FAQ.css';

const ITEMS = [
  {
    q: 'How do I book an appointment?',
    a: 'Message us on WhatsApp, drop us an email, or just walk into the studio — whichever feels easiest. We\u2019ll talk through your idea before locking in a date.',
  },
  {
    q: 'What should I do to prepare for my tattoo?',
    a: 'Come well-rested, hydrated, and fed. Skip the alcohol and go easy on the caffeine beforehand — your skin (and your artist) will thank you.',
  },
  {
    q: 'How do I take care of my new tattoo?',
    a: 'We\u2019ll walk you through detailed aftercare before you leave the chair, so your piece heals cleanly and looks the way it\u2019s supposed to for years.',
  },
  {
    q: 'Can I just come look around before booking?',
    a: 'Always. That\u2019s the whole point of the studio tour — come see the space, meet the artists, and decide when you\u2019re ready.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="faq">
      <div className="container faq__grid">
        <div className="faq__head">
          <p className="eyebrow">Before you book</p>
          <h2 className="section-title">
            Questions we hear <em>a lot</em>
          </h2>
        </div>

        <div className="faq__list">
          {ITEMS.map((item, i) => (
            <div className={`faq__item ${open === i ? 'is-open' : ''}`} key={item.q}>
              <button
                className="faq__question"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                {item.q}
                <span className="faq__icon" aria-hidden="true" />
              </button>
              <div className="faq__answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

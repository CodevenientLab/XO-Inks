import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import img1 from '../assets/images/image-1.webp';
import img2 from '../assets/images/image-2.webp';
import img3 from '../assets/images/image-3.webp';
import './Gallery.css';

const SHOTS = [
  {
    src: img1,
    caption: 'Minimal geometric linework, upper back',
    tag: 'Blackwork',
  },
  {
    src: img2,
    caption: 'Script & lettering, chest and arm',
    tag: 'Script',
  },
  {
    src: img3,
    caption: 'Black & grey sleeve, forearm detail',
    tag: 'Black & Grey',
  },
];

const TAGS = ['All', 'Blackwork', 'Script', 'Black & Grey'];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const ref = useReveal();

  const shown = active === 'All' ? SHOTS : SHOTS.filter((s) => s.tag === active);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery__head">
          <p className="eyebrow">A few favourites</p>
          <h2 className="section-title">
            Work we're <em>still proud of</em>
          </h2>

          <div className="gallery__filters">
            {TAGS.map((tag) => (
              <button
                key={tag}
                className={`gallery__filter ${active === tag ? 'is-active' : ''}`}
                onClick={() => setActive(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div ref={ref} className="gallery__grid reveal">
        {shown.map((s) => (
          <figure className="gallery__item" key={s.src}>
            <img src={s.src} alt={s.caption} loading="lazy" />
            <figcaption>
              <span className="gallery__tag">{s.tag}</span>
              {s.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

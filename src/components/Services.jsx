import useReveal from '../hooks/useReveal';
import './Services.css';

const SERVICES = [
  {
    num: '01',
    title: 'Custom Tattoos',
    accent: 'gold',
    body: 'Bring a half-formed idea or a fully sketched concept — either way, we design a piece that\u2019s built for your skin, not pulled off a wall.',
  },
  {
    num: '02',
    title: 'Cover-Ups',
    accent: 'teal',
    body: 'An old tattoo you\u2019ve outgrown doesn\u2019t have to stay that way. We specialise in reworking pieces into something you\u2019re proud of again.',
  },
  {
    num: '03',
    title: 'Piercings',
    accent: 'coral',
    body: 'Sterile, precise, and unhurried. Our piercers walk you through placement and aftercare before a single needle comes out.',
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__head">
          <p className="eyebrow">What we do</p>
          <h2 className="section-title">
            Three ways in, <em>one standard</em>
          </h2>
        </div>

        <div className="services__grid">
          {SERVICES.map((s) => (
            <ServiceCard key={s.num} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ num, title, body, accent }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="service-card reveal">
      <span className={`service-card__num service-card__num--${accent}`}>{num}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

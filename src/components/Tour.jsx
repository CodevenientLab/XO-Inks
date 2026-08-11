import useReveal from '../hooks/useReveal';
import studioImg from '../assets/images/Studio.webp';
import './Tour.css';

const STOPS = [
  {
    tag: '01',
    accent: 'gold',
    title: 'Reception',
    note: 'Come as you are',
    body: 'No sterile waiting room, no pressure. Grab a coffee, flip through the portfolio books, and let us know what\u2019s on your mind.',
  },
  {
    tag: '02',
    accent: 'teal',
    title: 'The Consult',
    note: 'We sketch until it\u2019s right',
    body: 'This is where the obsession shows. We\u2019ll redraw a design five times if that\u2019s what it takes to get your piece right.',
  },
  {
    tag: '03',
    accent: 'coral',
    title: 'The Chair',
    note: 'Where the passion happens',
    body: 'Clean stations, steady hands, and an artist who\u2019s fully present for every line — because this piece is permanent, and so is our attention.',
  },
  {
    tag: '04',
    accent: 'gold',
    title: 'The Reveal',
    note: 'The moment it becomes yours',
    body: 'Fresh ink, full aftercare walkthrough, and a piece you\u2019ll want to show off before you even leave the chair.',
  },
];

export default function Tour() {
  const imgRef = useReveal();
  const listRef = useReveal();

  return (
    <section id="tour" className="tour">
      <div className="container tour__head">
        <p className="eyebrow">The tour you'd get in person</p>
        <h2 className="section-title">
          Walk the studio <em>before you book</em>
        </h2>
      </div>

      <div className="container tour__layout">
        <div ref={imgRef} className="tour__image reveal">
          <img src={studioImg} alt="Inside the XO Inks studio" />
        </div>

        <div ref={listRef} className="tour__steps reveal">
          {STOPS.map((stop) => (
            <div className="tour__step" key={stop.title}>
              <span className={`tour__step-num tour__step-num--${stop.accent}`}>{stop.tag}</span>
              <div>
                <h3>{stop.title}</h3>
                <p className="tour__note">{stop.note}</p>
                <p className="tour__body">{stop.body}</p>
              </div>
            </div>
          ))}

          <a href="#contact" className="btn solid tour__cta">
            Book the Real Thing
          </a>
        </div>
      </div>
    </section>
  );
}

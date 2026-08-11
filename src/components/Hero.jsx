import heroImg from '../assets/images/slider-1.webp';
import './Hero.css';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="hero__scrim" />

      <div className="hero__content container">
        <p className="eyebrow">Mafikeng's needle &amp; ink sanctuary</p>
        <h1 className="hero__title">
          Every scar tells a story.
          <br />
          <em>We help you write the next one.</em>
        </h1>
        <p className="hero__sub">
          Custom tattoos, cover-ups and piercings — built one honest
          conversation at a time, in a studio you're always welcome to walk
          into.
        </p>

        <div className="hero__actions">
          <a href="#tour" className="btn solid">
            Step Inside the Studio
          </a>
          <a href="#gallery" className="btn">
            See the Work
          </a>
        </div>
      </div>
    </section>
  );
}

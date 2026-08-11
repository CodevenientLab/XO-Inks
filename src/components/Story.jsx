import useReveal from '../hooks/useReveal';
import SignatureMark from './SignatureMark';
import './Story.css';

export default function Story() {
  const textRef = useReveal();

  return (
    <section id="story" className="story">
      <div className="container story__grid">
        <div className="story__mark">
          <SignatureMark />
        </div>

        <div ref={textRef} className="story__text reveal">
          <p className="eyebrow">Why we picked up the needle</p>
          <h2 className="section-title">
            This isn't a job.
            <br />
            It's the <em>only thing</em> we ever wanted to do.
          </h2>
          <p className="story__body">
            XO Inks started with a handful of artists who couldn't imagine
            doing anything else — the kind of people who sketch on napkins,
            who see a scar and picture a phoenix, who remember every
            client's story long after the ink has healed. We built this
            studio so that obsession would have somewhere honest to live.
          </p>
          <p className="story__body">
            Every piece starts as a conversation, not a catalogue. We sit
            with you, we sketch, we argue a little about placement, and we
            don't pick up the machine until the design feels like it was
            always meant to be there.
          </p>

          <div className="story__stats">
            <div>
              <span className="story__stat-num">1,000+</span>
              <span className="story__stat-label">pieces tattooed</span>
            </div>
            <div>
              <span className="story__stat-num">100%</span>
              <span className="story__stat-label">custom design, no flash-book shortcuts</span>
            </div>
            <div>
              <span className="story__stat-num">4</span>
              <span className="story__stat-label">resident artists &amp; piercers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

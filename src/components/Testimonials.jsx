import useReveal from '../hooks/useReveal';
import './Testimonials.css';

const QUOTES = [
  {
    quote: 'Choosing XO Inks for my sleeve was the best decision ever! Ideas were turned into a masterpiece. The entire process was smooth, the studio was immaculate, and the artist super friendly!',
    name: 'Thando N.',
    accent: 'gold',
  },
  {
    quote: 'Incredible! They made me feel comfortable throughout the process. Tattoo turned out great. True professionals!',
    name: 'Matseleng M.',
    accent: 'teal',
  },
  {
    quote: 'Got my first tattoo here, couldn\u2019t be happier. The artist explained everything in detail. The shop is clean and has a great vibe. Highly recommend!',
    name: 'Kgothatso S.',
    accent: 'coral',
  },
  {
    quote: 'Amazing experience from start to finish. The artists are super talented. I\u2019ll definitely be coming back for my next piece!',
    name: 'Lerato K.',
    accent: 'gold',
  },
];

export default function Testimonials() {
  const ref = useReveal();
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <p className="eyebrow">In their words</p>
        <h2 className="section-title testimonials__title">
          What walks out the door <em>stays with people</em>
        </h2>

        <div ref={ref} className="testimonials__grid reveal">
          {QUOTES.map((q) => (
            <blockquote className="testimonial" key={q.name}>
              <p>&ldquo;{q.quote}&rdquo;</p>
              <footer className={`testimonial__by testimonial__by--${q.accent}`}>{q.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

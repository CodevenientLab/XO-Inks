import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__grid">
        <div className="contact__intro">
          <p className="eyebrow">Ready when you are</p>
          <h2 className="section-title">
            Come see the studio, <em>then decide</em>
          </h2>
          <p className="contact__body">
            No pressure, no hard sell — just an open door. Message us on
            WhatsApp and we'll set up a time for you to walk through, meet
            the artists, and talk through your idea in person.
          </p>

          <div className="contact__links">
            <a href="https://wa.me/0734322826" target="_blank" rel="noreferrer">
              WhatsApp Us
            </a>
            <a href="mailto:Xoinkstattoostudio@gmail.com">
              Xoinkstattoostudio@gmail.com
            </a>
            <a
              href="https://www.instagram.com/youngtown_inkparlour"
              target="_blank"
              rel="noreferrer"
            >
              @youngtown_inkparlour
            </a>
          </div>
        </div>

        <form
          className="contact__form"
          onSubmit={(e) => e.preventDefault()}
        >
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" placeholder="072 000 0000" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@email.com" />
          </label>
          <label>
            Service
            <select name="service" defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option>Custom Tattoo</option>
              <option>Cover-up Tattoo</option>
              <option>Piercing</option>
              <option>Studio Tour</option>
              <option>General Inquiry</option>
            </select>
          </label>
          <label className="contact__full">
            Message
            <textarea name="message" rows="4" placeholder="Tell us about your idea..." />
          </label>
          <button type="submit" className="btn solid contact__full">
            Send &amp; We'll WhatsApp You
          </button>
        </form>
      </div>
    </section>
  );
}

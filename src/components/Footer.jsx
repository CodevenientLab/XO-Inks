import { useState } from 'react';
import logoFull from '../assets/images/logo-full.webp';
import './Footer.css';

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <a href="#top" className="footer__mark">
            <img src={logoFull} alt="XO Inks Tattoo Studio" className="footer__mark-img" />
          </a>
          <p className="footer__loc">Mafikeng, North West</p>
          <div className="footer__social">
            <a href="mailto:Xoinkstattoostudio@gmail.com">Email</a>
            <a href="https://wa.me/0734322826" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/youngtown_inkparlour"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="footer__newsletter">
          <p className="footer__newsletter-label">Get first dibs on new flash &amp; open slots</p>
          {submitted ? (
            <p className="footer__newsletter-thanks">You're on the list.</p>
          ) : (
            <form
              className="footer__newsletter-form"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <input type="email" placeholder="you@email.com" required aria-label="Email address" />
              <button type="submit" className="btn solid">
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="container">
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} XO Inks. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

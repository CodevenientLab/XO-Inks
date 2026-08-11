import { useEffect, useState } from 'react';
import studioImg from '../assets/images/Studio.webp';
import img1 from '../assets/images/image-1.webp';
import img2 from '../assets/images/image-2.webp';
import img3 from '../assets/images/image-3.webp';
import './Loader.css';

const IMAGES = [studioImg, img1, img2, img3];

function preloadImages() {
  return Promise.all(
    IMAGES.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = src;
        })
    )
  );
}

export default function Loader({ onDone }) {
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const minTime = new Promise((resolve) => setTimeout(resolve, 2200));
    Promise.all([preloadImages(), minTime]).then(() => setReady(true));
  }, []);

  useEffect(() => {
    if (!ready) return;
    const t = setTimeout(() => setLeaving(true), 350);
    return () => clearTimeout(t);
  }, [ready]);

  useEffect(() => {
    if (!leaving) return;
    const t = setTimeout(onDone, 750);
    return () => clearTimeout(t);
  }, [leaving, onDone]);

  return (
    <div className={`loader ${ready ? 'is-ready' : ''} ${leaving ? 'is-leaving' : ''}`}>
      <div className="loader__inner">
        <svg
          className="loader__mark"
          viewBox="0 0 200 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g className="loader__ghost">
            <path d="M100,58 C132,55 146,82 128,100 C112,116 84,110 82,88 C81,74 96,64 108,74 C116,81 111,93 100,90" />
            <path d="M100,106 C97,148 101,192 96,232" />
            <path d="M99,152 C78,146 60,160 54,177 C72,181 92,172 100,156" />
            <path d="M98,184 C119,180 136,196 141,213 C122,216 104,206 97,189" />
          </g>
          <path
            className="loader__line loader__l1"
            pathLength="1"
            d="M100,58 C132,55 146,82 128,100 C112,116 84,110 82,88 C81,74 96,64 108,74 C116,81 111,93 100,90"
          />
          <path className="loader__line loader__l2" pathLength="1" d="M100,106 C97,148 101,192 96,232" />
          <path
            className="loader__line loader__l3"
            pathLength="1"
            d="M99,152 C78,146 60,160 54,177 C72,181 92,172 100,156"
          />
          <path
            className="loader__line loader__l4"
            pathLength="1"
            d="M98,184 C119,180 136,196 141,213 C122,216 104,206 97,189"
          />
        </svg>

        <p className="loader__word">
          XO <span>Inks</span>
        </p>
        <p className="loader__hint">{ready ? 'Ready' : 'Warming up the needle'}</p>
      </div>

      <div className="loader__wipe" />
    </div>
  );
}

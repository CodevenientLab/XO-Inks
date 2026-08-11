import { useEffect, useRef } from 'react';
import './SignatureMark.css';

/**
 * A single-line flash-tattoo rose that "tattoos itself" onto the page
 * as it scrolls into view — the recurring motif that stands in for
 * the needle's line, echoing how the studio talks about its work.
 */
export default function SignatureMark({ className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-drawn');
          observer.unobserve(node);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className={`sig-mark ${className}`}
      viewBox="0 0 200 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g className="sig-mark__ghost">
        <path d="M100,58 C132,55 146,82 128,100 C112,116 84,110 82,88 C81,74 96,64 108,74 C116,81 111,93 100,90" />
        <path d="M100,106 C97,148 101,192 96,232" />
        <path d="M99,152 C78,146 60,160 54,177 C72,181 92,172 100,156" />
        <path d="M98,184 C119,180 136,196 141,213 C122,216 104,206 97,189" />
      </g>
      <path
        className="sig-mark__path sig-mark__d1"
        pathLength="1"
        d="M100,58 C132,55 146,82 128,100 C112,116 84,110 82,88 C81,74 96,64 108,74 C116,81 111,93 100,90"
      />
      <path
        className="sig-mark__path sig-mark__d2"
        pathLength="1"
        d="M100,106 C97,148 101,192 96,232"
      />
      <path
        className="sig-mark__path sig-mark__d3"
        pathLength="1"
        d="M99,152 C78,146 60,160 54,177 C72,181 92,172 100,156"
      />
      <path
        className="sig-mark__path sig-mark__d4"
        pathLength="1"
        d="M98,184 C119,180 136,196 141,213 C122,216 104,206 97,189"
      />
    </svg>
  );
}

import { useEffect } from 'react';
import './GlitchEffectInjector.css';

export default function GlitchEffectInjector() {
  useEffect(() => {
    const tags = ['h1', 'h2', 'h3', 'p', 'li', 'img', 'button'];
    const elements = document.querySelectorAll(tags.join(','));

    elements.forEach((el) => {
      if (!el.classList.contains('glitch-on-hover')) {
        el.classList.add('glitch-on-hover');

        if (el.tagName !== 'IMG') {
          el.setAttribute('data-glitch', el.innerText || el.textContent || '');
        }
      }
    });
  }, []);

  return null;
}

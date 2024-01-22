'use client';
import Scrollbar from 'smooth-scrollbar';
import { ScrollbarPlugin } from 'smooth-scrollbar';
import { useEffect } from 'react';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import { AnchorPlugin } from './anchor-plugin';
const overscrollOptions = {
  enable: true,
  effect: 'glow',

  damping: 0.15,
  maxOverscroll: 150,
  glowColor: '#fff',
};

const options = {
  damping: 0.085,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

const Scroll = () => {
  useEffect(() => {
    const isSmallDevice = window.innerWidth <= 768; // Adjust the threshold as needed

    if (!isSmallDevice) {
      Scrollbar.use(AnchorPlugin);
      Scrollbar.use(OverscrollPlugin);
      Scrollbar.init(document.querySelector('main'), options);

      return () => {
        if (Scrollbar) Scrollbar.destroy(document.querySelector('main'));
      };
    }
  }, []);

  return null;
};

export default Scroll;

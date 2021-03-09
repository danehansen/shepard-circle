import {useState, useEffect} from 'react';

const WIN = typeof window !== 'undefined' ? window : null;

const PLACEHOLDER_WINDOW = {
  addEventListener() {},
  innerHeight: 0,
  innerWidth: 0,
  removeEventListener() {},
};

export function useViewportDimensions(win = WIN || PLACEHOLDER_WINDOW) {
  const [innerHeight, setInnerHeight] = useState(win.innerHeight);
  const [innerWidth, setInnerWidth] = useState(win.innerWidth);

  useEffect(() => {
    function onResize() {
      setInnerHeight(win.innerHeight);
      setInnerWidth(win.innerWidth);
    }

    win.addEventListener('resize', onResize);
    return () => {
      win.removeEventListener('resize', onResize);
    }
  }, [win]);

  return [innerWidth, innerHeight];
}

import {useState, useEffect} from 'react';

const PLACEHOLDER_WINDOW = {
  addEventListener() {},
  innerHeight: 0,
  innerWidth: 0,
  removeEventListener() {},
};

export function useViewportDimensions(win = typeof window !== 'undefined' ? window : PLACEHOLDER_WINDOW) {
  const [innerHeight, setInnerHeight] = useState(win.innerHeight);
  const [innerWidth, setInnerWidth] = useState(win.innerWidth);

  function onResize() {
    setInnerHeight(win.innerHeight);
    setInnerWidth(win.innerWidth);
  }

  useEffect(() => {
    win.addEventListener('resize', onResize);
    return () => {
      win.removeEventListener('resize', onResize);
    }
  }, []);

  return [innerWidth, innerHeight];
}

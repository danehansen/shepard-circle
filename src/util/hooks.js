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

export function useBoundingClientRect(ref) {
  const DEFAULT_RECT = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };
  const [rect, setRect] = useState(DEFAULT_RECT);
  const [innerWidth, innerHeight] = useViewportDimensions();

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    setRect(ref.current.getBoundingClientRect());
  }, [innerWidth, innerHeight, ref]);

  return rect;
}

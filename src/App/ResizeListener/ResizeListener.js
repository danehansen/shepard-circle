import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

const PLACEHOLDER_WINDOW = {
  addEventListener() {},
  innerHeight: 0,
  innerWidth: 0,
  removeEventListener() {},
};

export default function ResizeListener({children, win = typeof window !== 'undefined' ? window : PLACEHOLDER_WINDOW}) {
  const [innerHeight, setInnerHeight] = useState(win.innerHeight);
  const [innerWidth, setInnerWidth] = useState(win.innerWidth);

  useEffect(function() {
    win.addEventListener('resize', onResize);
    return function() {
      win.removeEventListener('resize', onResize);
    }
  }, []);

  function onResize() {
    setInnerHeight(win.innerHeight);
    setInnerWidth(win.innerWidth);
  };

  return children(innerWidth, innerHeight);
}

ResizeListener.propTypes = {
  children: PropTypes.func.isRequired,
  win: PropTypes.object,
};

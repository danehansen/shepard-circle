import {useState} from 'react';
import PropTypes from 'prop-types';

export default function FirstTouch({component: Component = 'div', callback, ...rest}) {
  const [hasCalledCallback, setHasCalledCallback] = useState(false);

  function handle(evt) {
    setHasCalledCallback(true);
    callback();
  }

  let listeners = {};
  if (!hasCalledCallback) {
    listeners = {
      onClick: handle,
      onMouseUp: handle,
      onMouseDown: handle,
      onMouseEnter: handle,
      onMouseLeave: handle,
      onMouseOver: handle,
      onMouseOut: handle,
      onMouseMove: handle,
      onTouchStart: handle,
      onTouchEnd: handle,
      onTouchCancel: handle,
      onTouchMove: handle,
    }
  }

  return <Component {...listeners} {...rest}></Component>;
}

FirstTouch.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  callback: PropTypes.func.isRequired,
};

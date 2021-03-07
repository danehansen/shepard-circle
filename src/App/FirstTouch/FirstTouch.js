import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

export default function FirstTouch({component: Component = 'div', callback, ...rest}) {
  const [hasCalledCallback, setHasCalledCallback] = useState(false);

  function onClick() {
    callback();
  }

  return <Component onClick={hasCalledCallback ? null : onClick} {...rest}></Component>;
}

FirstTouch.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  callback: PropTypes.func.isRequired,
};

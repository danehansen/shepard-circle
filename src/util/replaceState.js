import {throttle} from 'lodash';

const replaceState = throttle((queryString) => {
  window.history.replaceState(null, null, `${window.location.origin}${window.location.pathname}?${queryString}`);
}, 1000);

export default replaceState;

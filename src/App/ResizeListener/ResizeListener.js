import PropTypes from 'prop-types';
import React from 'react';

const PLACEHOLDER_WINDOW = {
  addEventListener() {},
  innerHeight: 0,
  innerWidth: 0,
  removeEventListener() {},
};

export default class ResizeListener extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    win: PropTypes.object,
  };

  static defaultProps = {
    win: typeof window !== 'undefined' ? window : PLACEHOLDER_WINDOW,
  };

  constructor(props) {
    super(props);
    const { win } = props;
    this.state = {
      innerHeight: win.innerHeight,
      innerWidth: win.innerWidth,
    };
    win.addEventListener('resize', this._onResize);
  }

  componentWillUnmount() {
    const { win } = this.props;
    win.removeEventListener('resize', this._onResize);
  }

  _onResize = () => {
    const { win } = this.props;
    this.setState({
      innerHeight: win.innerHeight,
      innerWidth: win.innerWidth,
    });
  };

  render() {
    const { innerHeight, innerWidth } = this.state;
    const { children } = this.props;
    return children(innerWidth, innerHeight);
  }
}

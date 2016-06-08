import React, { PropTypes, Component } from 'react'

class Provider extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  constructor(props, context) {
    super(props, context);
    this.store = props.store
  }

  getChildContext() {
    return { store: this.store };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

export default Provider

import React, { Component, PropTypes } from 'react'

export function uuid():string {
  const _s4 = () => Math.floor((1+Math.random())*0x10000).toString(16).substr(1)
  return `${_s4()+_s4()}-${_s4()}-${_s4()}-${_s4()+_s4()+_s4()}`
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export class Provider extends Component {
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

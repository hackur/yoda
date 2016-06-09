import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Titlebar extends Component {
  render() {
    const { className } = this.props
    return (
      <header className={className}></header>
    );
  }
}

export default Titlebar

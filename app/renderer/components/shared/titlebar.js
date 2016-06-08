import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styles from 'styles/titlebar.css'

export default class Titlebar extends Component {
  render() {
    const { className } = this.props
    return (
      <header className={className}></header>
    );
  }
}

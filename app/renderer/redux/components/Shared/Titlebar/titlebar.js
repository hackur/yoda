import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styles from './titlebar.css'

export default class Titlebar extends Component {
  render() {
    return (
      <header className={styles.titlebar}></header>
    );
  }
}

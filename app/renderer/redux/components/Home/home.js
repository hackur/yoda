import React, { Component } from 'react'
import { Link } from 'react-router'
import Titlebar from 'redux/components/Shared/Titlebar'
import styles from './home.css'

export default class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <Titlebar />
      </div>
    )
  }
}

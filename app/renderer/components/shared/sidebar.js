import React, { Component } from 'react'
import styles from 'styles/sidebar.css'

export default class Sidebar extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <h2>Best of youtube</h2>
      </div>
    );
  }
}

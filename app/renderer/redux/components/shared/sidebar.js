import React, { Component } from 'react'
import styles from 'styles/sidebar.css'

class Sidebar extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <h2>Best of youtube</h2>
      </div>
    );
  }
}

export default Sidebar

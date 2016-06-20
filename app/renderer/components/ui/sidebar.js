import React, { Component } from 'react'
import { Link } from 'react-router'
import { StyleSheet, css } from 'aphrodite'
import { uuid, capitalize } from 'helpers'

const s = StyleSheet.create({
  sidebar: {
    padding: '20px 20px 0',
    top: 36,
    bottom: 0,
    position: 'absolute',
    minWidth: 220,
    flex: '0 220px',
    backgroundColor: '#f9f9f9',
    borderRight: '1px #d9d9d9 solid'
  },

  sidebarTitle: {
    textTransform: 'uppercase'
  },

  sidebarLinks: {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  }
})

class Sidebar extends Component {
  render() {
    return (
      <div className={css(s.sidebar)}>
        <h4 className={css(s.sidebarTitle)}>Best of youtube</h4>
        <ul className={css(s.sidebarLinks)}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>
      </div>
    );
  }
}

export default Sidebar

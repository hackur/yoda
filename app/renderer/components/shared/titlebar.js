import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { StyleSheet, css } from 'aphrodite'

const s = StyleSheet.create({
  header: {
    width: '100vw',
    display: 'flex',
    minWidth: '100%',
    minHeight: '36px',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    borderBottom: '1px #d9d9d9 solid',
    display: 'flex',
    flexDirection: 'row',
    zIndex: 9999,
    '-webapp-user-select': 'none',
    '-webkit-app-region': 'drag'
  }
})

class Titlebar extends Component {
  render() {
    return (
      <header className={css(s.header)}></header>
    );
  }
}

export default Titlebar

import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

const s = StyleSheet.create({
  main: {
    padding: '20px 20px 0',
    top: 36,
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    overflowY: 'scroll',
    flex: 1,
    left: 220,
    right: 0,
    bottom: 0
  }
})

class Main extends Component {
  render() {
    return (
      <div className={css(s.main)}>
        {this.props.children}
      </div>
    )
  }
}

export default Main

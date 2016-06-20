import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

const s = StyleSheet.create({
  loader: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
})

class Loader extends Component {
  render() {
    return (
      <div className={css(s.loader)}>
        <p>Loading...</p>
      </div>
    )
  }
}

export default Loader

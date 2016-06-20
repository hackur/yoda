import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

const s = StyleSheet.create({
  about: {
    backgroundColor: 'tomato'
  }
})

class About extends Component {
  render() {
    return (
      <div className={css(s.about)}>
        <h2>About page</h2>
      </div>
    )
  }
}

export default About

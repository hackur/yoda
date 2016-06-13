import React, { Component } from 'react'
import { Motion, spring, presets } from 'react-motion'

class About extends Component {
  getDefault() {
    return { opacity: 0 }
  }

  getStyle() {
    return {opacity: spring(1, presets.gentle)}
  }

  render() {
    return (
      <Motion
        defaultStyle={this.getDefault()}
        style={this.getStyle()}>
        {
          interpolatingStyle => (
            <div className="about" style={interpolatingStyle}>
              <h2>About page</h2>
            </div>
          )
        }
      </Motion>
    )
  }
}

export default About

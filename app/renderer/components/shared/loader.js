import React, { Component } from 'react'
import { Motion, spring, presets } from 'react-motion'

class Loader extends Component {
  getDefault() {
    return { opacity: 0 }
  }

  getStyle() {
    return {opacity: spring(1, presets.gentle)}
  }

  render() {
    return (
      <Motion defaultStyle={this.getDefault()} style={this.getStyle()}>
        {interpolatingStyle => <div style={interpolatingStyle}>Loading...</div>}
      </Motion>
    )
  }
}

export default Loader

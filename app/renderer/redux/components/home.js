import React, { Component } from 'react'
import { Motion, StaggeredMotion, spring, presets } from 'react-motion'
import Loader from 'redux/components/shared/loader'
import Playlist from 'redux/components/playlist'
import { uuid, getSpringConfig } from 'redux/utils'
import s from 'styles/home.css'

const springConfig = getSpringConfig(500, 30)

class Home extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    var self = this;
    setTimeout(() => {
      self.setState({
        loading: false
      })
    }, 1000)
  }

  getDefaultStyles() {
    return { opacity: 0 }
  }

  getStyles() {
    return {opacity: spring(1, presets.gentle)}
  }

  getDefaultPlaylistStyles() {
    return [{opacity: 0}, {opacity: 0}, {opacity: 0}, {opacity: 0}, {opacity: 0}]
  }

  getPlaylistStyles(prevStyles) {
    return prevStyles.map((_, i) => {
      return i === 0
        ? {opacity: spring(1, springConfig)}
        : {opacity: spring(prevStyles[i - 1].opacity, springConfig)}
    })
  }

  renderPlaylist() {
    return (
      <StaggeredMotion
        defaultStyles={this.getDefaultPlaylistStyles()}
        styles={this.getPlaylistStyles}>
        {
          interpolatingStyles => (
            <div className={s.channelContainer}>
              {
                interpolatingStyles.map(style =>
                  <Playlist
                    key={uuid()}
                    style={{ opacity: `${style.opacity}` }}
                  />
                )
              }
            </div>
          )
        }
      </StaggeredMotion>
    )
  }

  render() {
    const { loading } = this.state
    return (
      <Motion
        defaultStyle={this.getDefaultStyles()}
        style={this.getStyles()}>
        {
          interpolatingStyle => (
            <div className={s.channel} style={interpolatingStyle}>
              {loading ? <Loader /> : this.renderPlaylist()}
            </div>
          )
        }
      </Motion>
    )
  }
}

export default Home

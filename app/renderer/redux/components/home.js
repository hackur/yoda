import React, { Component } from 'react'
import { Motion, StaggeredMotion, spring } from 'react-motion'
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

  defaultLoaderStyles() {
    return {opacity: 0}
  }

  defaultPlaylistStyles() {
    return [{opacity: 0}, {opacity: 0}, {opacity: 0}, {opacity: 0}]
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
        defaultStyles={this.defaultPlaylistStyles()}
        styles={this.getPlaylistStyles}>
        {interpolatingStyles =>
          <div className={s.channelContainer}>
            {
              interpolatingStyles.map((style, i) =>
                <Playlist
                  key={uuid()}
                  style={{ opacity: `${style.opacity}` }}
                />
              )
            }
          </div>
        }
      </StaggeredMotion>
    )
  }

  render() {
    const { loading } = this.state
    return (
      <div className={s.channel}>
        {loading ? <Loader /> : this.renderPlaylist()}
      </div>
    )
  }
}

export default Home

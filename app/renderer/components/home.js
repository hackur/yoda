import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Motion, StaggeredMotion, spring } from 'react-motion'
import Loader from 'components/shared/loader'
import Playlist from 'components/playlist'
import { uuid, getSpringConfig } from 'helpers'
import s from 'styles/home.css'

const springConfig = getSpringConfig(500, 30)

@observer
class Home extends Component {
  static contextTypes = {
    store: React.PropTypes.object
  }

  componentDidMount() {
    setTimeout(() => {
      this.context.store.toggle()
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
    const { appState } = this.context.store
    return (
      <div className={s.channel}>
        {appState.loading ? <Loader /> : this.renderPlaylist()}
      </div>
    )
  }
}

export default Home

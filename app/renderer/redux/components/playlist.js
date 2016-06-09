import React, { Component } from 'react'
import { StaggeredMotion, spring } from 'react-motion'
import PlaylistItem from 'redux/components/playlist-item'
import { uuid, getSpringConfig } from 'redux/utils'
import s from 'styles/playlist.css'

const springConfig = getSpringConfig(500, 30)

class Playlist extends Component {
  defaultStyles() {
    return [{scale: 0}, {scale: 0}, {scale: 0}, {scale: 0}];
  }

  getStyles(prevStyles) {
    return prevStyles.map((_, i) => {
      return i === 0
        ? {scale: spring(1, springConfig)}
        : {scale: spring(prevStyles[i - 1].scale, springConfig)}
    })
  }

  render() {
    const {style} = this.props
    return (
      <div className={s.playlist} style={style}>
        <h2 className={s.playlistTitle}>Playlist title</h2>
        <StaggeredMotion
          defaultStyles={this.defaultStyles()}
          styles={this.getStyles}>
          {interpolatingStyles =>
            <div className={s.playlistItems}>
              {
                interpolatingStyles.map((style, i) =>
                  <PlaylistItem
                    key={uuid()}
                    style={{ WebkitTransform: `scale(${style.scale})` }}
                  />
                )
              }
            </div>
          }
          </StaggeredMotion>
      </div>
    )
  }
}

export default Playlist

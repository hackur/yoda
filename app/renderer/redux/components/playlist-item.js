import React from 'react'
import s from 'styles/playlist-item.css'

const PlaylistItem = (props) => {
  const { style } = props
  return (
    <div
      className={s.playlistItem}
      style={style}>
      Playlist item
    </div>
  )
}

export default PlaylistItem

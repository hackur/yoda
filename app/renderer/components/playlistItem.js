import React from 'react'

const PlaylistItem = (props) => {
  const { className, style } = props
  return (
    <div className={className} style={style}>
      Playlist item
    </div>
  )
}

export default PlaylistItem

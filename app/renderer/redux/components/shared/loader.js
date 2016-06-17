import React, { Component } from 'react'
import s from 'styles/loader.css'

class Loader extends Component {
  render() {
    return (
      <div className={s.loader}>
        <p>Loading...</p>
      </div>
    )
  }
}

export default Loader

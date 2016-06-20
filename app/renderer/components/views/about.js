import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { StyleSheet, css } from 'aphrodite'

const s = StyleSheet.create({
  about: {

  }
})

@observer
class About extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor(props, context) {
    super(props, context)
    this.handleDownload = this.handleDownload.bind(this)
  }

  handleDownload(e) {
    e.preventDefault()
    const { store } = this.context
    store.downloads.start()
  }

  render() {
    const { store } = this.context
    return (
      <div className={css(s.about)}>
        <h2>About page</h2>
        <a href="#" onClick={this.handleDownload}>Start Download</a>
        <p>Download Progress: {store.downloads.progress}</p>
      </div>
    )
  }
}

export default About

import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { StyleSheet, css } from 'aphrodite'
import Titlebar from 'components/shared/titlebar'
import Sidebar from 'components/shared/sidebar'
import Main from 'components/shared/main'

const s = StyleSheet.create({
  app: {
    height: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },

  content: {
    width: '100vw',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    zIndex: 9998
  }
})

class App extends Component {
  componentDidMount() {
    this.props.router.push('about')
  }

  render() {
    return (
      <div className={css(s.app)}>
        <Titlebar />
        <div className={css(s.content)}>
          <Sidebar />
          <Main>{this.props.children}</Main>
        </div>
      </div>
    );
  }
}

export default withRouter(App)

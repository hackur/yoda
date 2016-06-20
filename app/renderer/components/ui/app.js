import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import { StyleSheet, css } from 'aphrodite'
import AppStore from 'store'
import { Provider } from 'helpers'
import Loader from 'components/ui/Loader'
import Titlebar from 'components/ui/titlebar'
import Sidebar from 'components/ui/sidebar'
import Main from 'components/ui/main'


const store = new AppStore()
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

@observer
class App extends Component {
  componentDidMount() {
    store.load()
  }

  renderLoader() {
    return (
      <Loader />
    )
  }

  renderMain() {
    return (
      <div className={css(s.content)}>
        <Sidebar />
        <Main>{this.props.children}</Main>
      </div>
    )
  }

  render() {
    return (
      <Provider store={store}>
        <div className={css(s.app)}>
          <Titlebar />
          {store.loading ? this.renderLoader() : this.renderMain()}
        </div>
      </Provider>
    );
  }
}

export default withRouter(App)

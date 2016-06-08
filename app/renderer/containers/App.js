import React, { Component } from 'react'
import AppStore from 'store/appStore'
import Titlebar from 'components/shared/titlebar'
import Sidebar from 'components/shared/sidebar'
import Main from 'components/shared/main'
import Provider from 'components/utils/provider'
import s from 'styles/app.css'

const appStore = new AppStore()

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <Provider store={appStore}>
        <div className={s.appContainer}>
          <Titlebar className={s.titleContainer} />
          <div className={s.contentContainer}>
            <Sidebar className={s.sidebarContainer} />
            <Main className={s.mainContainer}>
              {children}
            </Main>
          </div>
        </div>
      </Provider>
    );
  }
}

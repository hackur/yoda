import React, { Component } from 'react'
import Titlebar from 'redux/components/shared/titlebar'
import Sidebar from 'redux/components/shared/sidebar'
import Main from 'redux/components/shared/main'
import s from 'styles/app.css'

class App extends Component {
  render() {
    return (
      <div className={s.app}>
        <Titlebar className={s.title} />
        <div className={s.content}>
          <Sidebar className={s.sidebar} />
          <Main className={s.main}>
            {this.props.children}
          </Main>
        </div>
      </div>
    );
  }
}

export default App

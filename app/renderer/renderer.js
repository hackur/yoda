import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'redux/store/configure-store'
import routes from 'routes'
import 'styles/index.global.css'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

const root = document.getElementById('root')
const rootClass = `os-${process.platform}`
root.classList.add(rootClass)

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
)

import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Containers
import App from 'redux/containers/App'

// Components
import Home from 'redux/components/home'
import About from 'redux/components/about'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About}></Route>
  </Route>
)

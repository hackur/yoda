import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Containers
import App from 'redux/containers/App'

// Components
import Home from 'redux/components/home'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
)

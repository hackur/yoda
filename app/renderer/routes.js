import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Containers
import App from 'containers/App'

// Components
import Home from 'components/home'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
)

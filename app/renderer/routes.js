import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/ui/App'
import Home from 'components/views/home'
import About from 'components/views/about'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About}></Route>
  </Route>
)

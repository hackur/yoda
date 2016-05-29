import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'redux/containers/App';
import HomePage from 'redux/containers/HomePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
);

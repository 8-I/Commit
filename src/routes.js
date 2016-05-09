import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import Home from 'components/Home'
import Space from 'components/Space'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='space-test' component={Space}/>
  </Route>
)

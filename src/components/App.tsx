import Top from 'components/pages/Top'
import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router'

export default hot(module)(() => (
  <Switch>
    <Route exact={true} path="/" component={Top} />
  </Switch>
))

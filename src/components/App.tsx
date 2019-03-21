import * as React from 'react'
import { Route, Switch } from 'react-router'

const Top = React.lazy(() => import('components/pages/Top'))

export default () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact={true} path="/" component={Top} />
    </Switch>
  </React.Suspense>
)

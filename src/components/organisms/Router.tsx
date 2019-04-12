import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import * as React from 'react'
import { Provider } from 'react-redux'
import createStore from 'store/createStore'

const history = createBrowserHistory()
const store = createStore(history)

type Props = {
  children: JSX.Element
}

export default (props: Props) => {
  const { children } = props

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>{children}</ConnectedRouter>
    </Provider>
  )
}

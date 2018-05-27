import { createBrowserHistory } from 'history'
import * as React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createStore from 'store/createStore'

const history = createBrowserHistory()
export const store = createStore(history)

interface Props {
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

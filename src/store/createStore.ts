import { connectRouter, routerMiddleware } from 'connected-react-router'
import { History } from 'history'
import rootReducer from 'reducers'
import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

export default (history: History): Store => {
  const middlewares = [thunkMiddleware, routerMiddleware(history)]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(loggerMiddleware)
  }

  return createStore(
    combineReducers({
      rootReducer,
      router: connectRouter(history)
    }),
    applyMiddleware(...middlewares)
  )
}

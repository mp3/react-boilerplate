import counter, { State as CounterState } from 'reducers/counter'
import { combineReducers } from 'redux'

export interface State {
  rootReducer: {
    counter: CounterState
  }
}

export default combineReducers({
  counter
})

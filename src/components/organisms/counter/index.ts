import Counter from 'components/organisms/counter/Counter'
import { connect } from 'react-redux'
import { State as RootState } from 'reducers'
import * as CounterAction from 'reducers/counter'

// tslint:disable-next-line
type OuterProps = {}

type Props = {
  value: number
}

const mapStateToProps = (state: RootState, props: OuterProps): Props => {
  return {
    value: state.rootReducer.counter.value
  }
}

const enhancer = connect(
  mapStateToProps,
  {
    add: CounterAction.add,
    increment: CounterAction.increment
  }
)

export default enhancer(Counter)

import Counter from 'components/organisms/counter/Counter'
import { connect } from 'react-redux'
import { State as RootState } from 'reducers'
import * as CounterActions from 'reducers/counter'

// tslint:disable-next-line
interface OuterProps {}

interface Props {
  value: number
}

const mapStateToProps = (state: RootState, props: OuterProps): Props => {
  return {
    value: state.rootReducer.counter.value
  }
}

const enhancer: any = connect(
  mapStateToProps,
  {
    add: CounterActions.add,
    increment: CounterActions.increment
  }
)

export default enhancer(Counter)

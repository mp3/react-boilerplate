import * as assert from 'assert'
import counter, * as CounterAction from 'reducers/counter'

test('counter/add', () => {
  const add = CounterAction.add
  const initialState = counter(undefined, add(0))
  assert(initialState.value === 0)
  const ret = counter(initialState, add(6))
  assert(ret.value === 6)
})

test('counter/increment', () => {
  const increment = CounterAction.increment
  const initialState = counter(undefined, increment())
  assert(initialState.value === 1)
  const ret = counter(initialState, increment())
  assert(ret.value === 2)
})

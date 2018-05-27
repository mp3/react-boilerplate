import * as assert from 'assert'
import counter, { add, increment } from '../counter'

test('counter/add', () => {
  const initialState = counter(undefined, add(0))
  assert(initialState.value === 0)
  const add3 = add(3)
  const ret = counter(initialState, add3)
  assert(ret.value === 3)
})

test('counter/increment', () => {
  const initialState = counter(undefined, increment())
  assert(initialState.value === 1)
  const inc = increment()
  const ret = counter(initialState, inc)
  assert(ret.value === 2)
})

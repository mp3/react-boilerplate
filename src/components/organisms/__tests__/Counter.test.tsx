import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Counter from 'components/organisms/counter'
import Router from 'components/organisms/Router'

test('render <Counter />', () => {
  const tree = renderer.create(
    <Router>
      <Counter />
    </Router>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

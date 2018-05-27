import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Router from 'components/organisms/Router'

test('render <Router />', () => {
  const tree = renderer.create(
    <Router>
      <div>Child Component</div>
    </Router>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

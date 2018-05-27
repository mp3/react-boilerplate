import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Top from 'components/templates/Top'
import Router from 'components/organisms/Router'

test('render <Top />', () => {
  const tree = renderer.create(
    <Router>
      <Top />
    </Router>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

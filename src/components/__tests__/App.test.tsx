import * as React from 'react'
import * as renderer from 'react-test-renderer'
import App from 'components/App'
import Router from 'components/organisms/Router'

test('render <App />', () => {
  const tree = renderer.create(
    <Router>
      <App />
    </Router>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

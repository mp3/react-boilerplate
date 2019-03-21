import App from 'components/App'
import Router from 'components/organisms/Router'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
)

// tslint:disable-next-line
createGlobalStyle`
  html, body {
    font-family: sans-serif;
  }
  * {
    line-height: 1;
  }
  a, a:hover, a:visited, a:active {
    text-decoration: none;
    color: inherit;
  }
`

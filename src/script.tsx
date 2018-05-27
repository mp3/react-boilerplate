import App from 'components/App'
import Router from 'components/organisms/Router'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#app')
)

// tslint:disable-next-line
injectGlobal`
  @font-face {
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 400;
    src: local("Noto Sans CJK JP Regular"),
      url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Regular.woff2) format('woff2'),
      url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Regular.woff) format('woff'),
      url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Regular.otf) format('opentype');
  }
  html, body {
    font-family: "Noto Sans", "Noto Sans JP", sans-serif;
    background-color: #f6f7fb;
  }
  * {
    line-height: 1;
  }
  a, a:hover, a:visited, a:active {
    text-decoration: none;
    color; inherit;
  }
`

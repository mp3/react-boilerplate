import * as React from 'react'
import { Route, Switch } from 'react-router'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import styled from 'styled-components'

export default hot(module)((props: { store: any; children: any }) => {
  return (
    <Provider store={props.store}>
      <Layout>
        {props.children}
      </Layout>
    </Provider>
  )
})

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 230px 1fr;
  grid-template-rows:
    5vh
    95vh;
  grid-template-areas:
    'menu header'
    'menu content';
`

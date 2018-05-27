import * as React from 'react'
import styled from 'styled-components'

interface Props {
  children: any
}

export default function DefaultLayout(props: Props) {
  const { children } = props
  return <Container>{children}</Container>
}

const Container = styled.div`
  background-color: #eee;
  width: 100%;
  height: 400px;
`

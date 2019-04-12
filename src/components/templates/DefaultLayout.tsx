import * as React from 'react'
import styled from 'styled-components'

type Props = {
  children: any
}

export default (props: Props) => {
  const { children } = props

  return <Container>{children}</Container>
}

const Container = styled.div`
  width: 100%;
`

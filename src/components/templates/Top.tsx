import Counter from 'components/organisms/counter'
import * as React from 'react'
import styled from 'styled-components'

export default (props: any) => {
  return (
    <Container>
      <Counter />
    </Container>
  )
}

const Container = styled.div`
  padding-top: 56px;
  text-align: center;
`

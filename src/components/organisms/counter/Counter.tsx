import Button from 'components/atoms/Button'
import * as React from 'react'
import styled from 'styled-components'

type Props = {
  value: number
  add(value: number): void
  increment(): void
}

export default (props: Props) => {
  const { value, add, increment } = props

  return (
    <Container>
      <Title>{'React + Redux'}</Title>
      <Value>{`value: ${value}`}</Value>
      <ButtonContainer>
        <Button text={'add:3'} onClick={() => add(3)} />
        <Button text={'increment'} onClick={() => increment()} />
      </ButtonContainer>
    </Container>
  )
}

const Container = styled.div`
  padding: 10px;
  text-align: center;
`

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 32px;
  color: #333333;
`

const Value = styled.span`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333333;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 460px;
  margin: 0 auto;
  padding: 20px;
`

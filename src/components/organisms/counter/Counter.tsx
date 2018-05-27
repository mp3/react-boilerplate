import Button from 'components/atoms/Button'
import DefaultLayout from 'components/templates/DefaultLayout'
import * as React from 'react'
import styled from 'styled-components'

interface Props {
  value: number
  add(n: number): void
  increment(): void
}

export default function Counter(props: Props) {
  const { add, increment } = props
  return (
    <DefaultLayout>
      <Container>
        <Title>React + Redux Sample</Title>
        <Value>value: {props.value}</Value>
        <ButtonsContainer>
          <Button
            text="add:3"
            onClick={(ev: any) => {
              add(3)
            }}
          />
          &nbsp;
          <Button
            text="increment"
            onClick={(ev: any) => {
              increment()
            }}
          />
        </ButtonsContainer>
      </Container>
    </DefaultLayout>
  )
}

const Container = styled.div`
  padding: 10px;
`

const Title = styled.h1`
  color: #333333;
`

const Value = styled.span`
  color: #333333;
`

const ButtonsContainer = styled.div`
  padding: 20px;
`

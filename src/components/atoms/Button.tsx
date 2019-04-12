import * as React from 'react'
import styled from 'styled-components'

type Props = {
  text: string
  onClick?: (event?: React.MouseEvent) => void | Promise<void>
}

export default (props: Props) => {
  const { text, onClick } = props

  return <Button onClick={onClick}>{text}</Button>
}

const Button = styled.button`
  appearance: none;
  width: 200px;
  height: 50px;
  padding: 0px;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 5px 25px -10px rgba(5, 68, 102, 0.35);
  font-size: 18px;
  line-height: 50px;
  letter-spacing: -0.5px;
  text-align: center;
  color: #000000;
`

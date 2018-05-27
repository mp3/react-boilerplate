import * as React from 'react'
import styled from 'styled-components'

interface Props {
  text: string
  onClick?: (event: any) => void
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
  background-color: #ffffff;
  box-shadow: 0 5px 25px -10px rgba(5, 68, 102, 0.35);
  font-weight: bold;
  line-height: 112px;
  letter-spacing: -0.5px;
  text-align: center;
  color: #22ccd8;
`

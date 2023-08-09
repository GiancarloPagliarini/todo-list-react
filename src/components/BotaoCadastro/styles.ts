import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Circulo = styled(Link)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 64px;
  width: 64px;

  background-color: #44bd32;
  color: #fff;
  border-radius: 50%;
  font-size: 40px;
  text-decoration: none;

  right: 40px;
  bottom: 40px;
`
import React from 'react'
import { ButtonContainer, LeftIcon } from './styles'
import { IButton } from './types'

const Button = ({title, variant = "primary", onClick, leftIcon}:IButton) => {
  return (<>
    <ButtonContainer variant={variant} onClick={onClick}>
      {leftIcon ? (<LeftIcon>{leftIcon}</LeftIcon>) : null}{title} </ButtonContainer>
  </>)
}


export { Button }

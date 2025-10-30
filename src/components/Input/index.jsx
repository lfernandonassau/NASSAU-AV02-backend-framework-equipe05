import React from 'react'

import { InputContainer, InputText, LeftIcon, RightIcon } from './styles'

const Input = ({variant = 'primary', rightIcon, leftIcon, name, ...rest}) => {
  return (
    <InputContainer variant={variant}>
        {leftIcon ? (<LeftIcon>{leftIcon}</LeftIcon>) : null}

        <InputText {...rest}/>

        {rightIcon ? (<RightIcon>{rightIcon}</RightIcon>) : null}
    </InputContainer>
  )
}



export { Input }
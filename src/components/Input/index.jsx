import React from 'react'

import { Controller } from 'react-hook-form'

import { ErrorText, InputContainer, InputText, LeftIcon, RightIcon } from './styles'

const Input = ({control, errorMessage, variant = 'primary', rightIcon, leftIcon, name, ...rest}) => {


  return (<>
    <InputContainer $variant={variant}>
        {leftIcon ? (<LeftIcon>{leftIcon}</LeftIcon>) : null}

        <Controller 
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <InputText {...field} {...rest}/> }
        />

        {rightIcon ? (<RightIcon>{rightIcon}</RightIcon>) : null}
    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}



export { Input }
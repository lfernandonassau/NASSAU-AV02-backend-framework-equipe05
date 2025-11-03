import React from 'react'

import { Controller } from 'react-hook-form'

import { ErrorText, InputContainer, InputText, LeftIcon, RightIcon } from './styles'
import { IInput } from './types'

const Input = ({control, errorMessage, variant = 'primary', rightIcon, leftIcon, name, ...rest}:IInput) => {


  return (<>
    <InputContainer variant={variant}>
        {leftIcon ? (<LeftIcon>{leftIcon}</LeftIcon>) : null}

        <Controller 
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field: {value, onChange} }) => <InputText value={value} onChange={onChange} {...rest}/> }
        />

        {rightIcon ? (<RightIcon>{rightIcon}</RightIcon>) : null}
    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}



export { Input }
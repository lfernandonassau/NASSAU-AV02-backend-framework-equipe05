import React from 'react'

import { Controller } from 'react-hook-form'

import { ErrorText, InputContainer, InputText, LeftIcon, RightIcon } from './styles'
import { IInput } from './types'

const Input = ({
  control,
  errorMessage,
  variant = 'primary',
  rightIcon,
  leftIcon,
  name,
  mask,
  rules,
  ...rest}:IInput) => {


  return (<>
    <InputContainer variant={variant}>
        {leftIcon ? (<LeftIcon>{leftIcon}</LeftIcon>) : null}

        <Controller 
        name={name}
        control={control}
        rules={rules || { required: true }}
        render={({ field: { value, onChange } }) => (
                <InputText 
                    // Garante que value nunca seja null/undefined para evitar warnings do React
                    value={value || ''} 
                    
                    onChange={(e) => {
                        // Pega o valor digitado
                        const rawValue = e.target.value;
                        
                        // Se existir a prop mask, aplicamos ela. Se não, usamos o valor puro.
                        const finalValue = mask ? mask(rawValue) : rawValue;
                        
                        // Passa o valor tratado para o react-hook-form
                        onChange(finalValue);
                    }} 
                    {...rest}
                /> 
            )}
          />

        {rightIcon ? (<RightIcon>{rightIcon}</RightIcon>) : null}
    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}



export { Input }
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
  ...rest
}: IInput) => {

  return (
    <>
      <InputContainer variant={variant}>
        
        {/* Renderiza ícone à esquerda se existir */}
        {leftIcon ? (<LeftIcon>{leftIcon}</LeftIcon>) : null}

        <Controller
          name={name}
          control={control}
          rules={rules || { required: true }}
          
          /* IMPORTANTE:
             Aqui usamos field completo para garantir compatibilidade total com RHF:
             name, ref, onChange e onBlur são todos repassados corretamente.
          */
          render={({ field }) => (
            <InputText
              {...field} // garante onBlur, ref e name

              // Garante que value nunca seja null/undefined
              value={field.value || ''}

              onChange={(e) => {
                // Pega o valor digitado
                const rawValue = e.target.value;

                // Se existir máscara aplica, senão usa puro
                const finalValue = mask ? mask(rawValue) : rawValue;

                // Passa valor modificado ao RHF
                field.onChange(finalValue);
              }}

              {...rest}
            />
          )}
        />

        {/* Renderiza ícone à direita se existir */}
        {rightIcon ? (<RightIcon>{rightIcon}</RightIcon>) : null}
      </InputContainer>

      {/* Exibe mensagem de erro se houver */}
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}

export { Input }

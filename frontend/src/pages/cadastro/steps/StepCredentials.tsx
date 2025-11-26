import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRegistration } from '../../../context/RegistrationContext'
import { Input } from '../../../components/Input'
import { MagicEye, MagicEyeOff } from '../styles'
import { 
    FormBody, 
    ButtonsContainer, 
    NextButton, 
    BackButton, 
    Label, 
    ErrorText
} from '../styles'

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: yup.string().min(8, 'Mínimo 8 caracteres').required('Campo obrigatório'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Senhas devem ser iguais').required('Obrigatório'),
}).required()

export const StepCredentials = () => {
  const { updateFormData, nextStep, prevStep, formData } = useRegistration()
  const [showPass, setShowPass] = useState(false)

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      email: formData.email || '',
      password: formData.password || '',
      confirmPassword: formData.confirmPassword || ''
    }
  })

  const onSubmit = (data: any) => {
    updateFormData(data);
    nextStep();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <FormBody>
        <div>
            <Label>Endereço de e-mail</Label>
            <Input 
                name="email" 
                placeholder="p. ex. rafael@email.com" 
                control={control} 
            />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </div>
        
        <div>
            <Label>Senha</Label>
            <Input 
                name="password" 
                placeholder="********" 
                control={control} 
                type={showPass ? 'text' : 'password'}
                rightIcon={showPass ? <MagicEye onClick={() => setShowPass(false)} /> : <MagicEyeOff onClick={() => setShowPass(true)} />}
            />
            {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        </div>

        <div>
            <Label>Confirmar Senha</Label>
            <Input 
                name="confirmPassword" 
                placeholder="********" 
                control={control} 
                type={showPass ? 'text' : 'password'}
            />
            {errors.confirmPassword && <ErrorText>{errors.confirmPassword.message}</ErrorText>}
        </div>
      </FormBody>

      <ButtonsContainer>
        <BackButton type="button" onClick={prevStep}>Voltar</BackButton>
        <NextButton type="submit">Próximo</NextButton>
      </ButtonsContainer>
    </form>
  );
};
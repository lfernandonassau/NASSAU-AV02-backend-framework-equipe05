import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import {
    PageWrapper,
    LoginNewScreen,
    LoginContainer,
    Column,
    TitleLogin,
    KanbanSubText,
} from '../login/styles'

type ForgotFormData = {
    email: string
}

const schema = yup.object({
    email: yup
        .string()
        .email('E-mail não é válido')
        .required('Campo obrigatório'),
}).required()

export function ForgotPassword() {
    const { control, handleSubmit, formState: { errors, isSubmitting } } =
        useForm<ForgotFormData>({
            resolver: yupResolver(schema),
            mode: 'onSubmit',
        })

    const [successMessage, setSuccessMessage] = useState('')
    const navigate = useNavigate()

    const onSubmit = async (formData: ForgotFormData) => {
        try {
            await api.post('/auth/forgot-password', {
                email: formData.email,
            })

            setSuccessMessage(
                'Se o email estiver cadastrado, enviaremos instruções para recuperação.'
            )
        } catch {
            setSuccessMessage(
                'Se o email estiver cadastrado, enviaremos instruções para recuperação.'
            )
        }
    }

    return (
        <PageWrapper>
            <LoginNewScreen $visivel>
                <LoginContainer>
                    <Column>
                        <TitleLogin>Recuperar senha</TitleLogin>
                        <KanbanSubText>
                            Informe seu e-mail para receber o link de recuperação.
                        </KanbanSubText>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                name='email'
                                placeholder='E-mail'
                                control={control}
                                errorMessage={errors?.email?.message}
                            />

                            <Button
                                title='Enviar link de recuperação'
                                type='submit'
                                disabled={isSubmitting}
                            />
                        </form>

                        {successMessage && (
                            <p style={{ marginTop: 16, color: '#fff', fontSize: 12 }}>
                                {successMessage}
                            </p>
                        )}

                        <Button
                            title='Voltar para login'
                            type='button'
                            variant='secondary'
                            onClick={() => navigate('/login')}
                        />
                    </Column>
                </LoginContainer>
            </LoginNewScreen>
        </PageWrapper>
    )
}

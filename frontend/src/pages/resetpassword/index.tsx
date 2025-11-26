import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate, useSearchParams } from 'react-router-dom'
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

type ResetFormData = {
    password: string
    confirmPassword: string
}

const schema = yup.object({
    password: yup
        .string()
        .min(8, 'No mínimo 8 caracteres')
        .required('Campo obrigatório'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Campo obrigatório'),
}).required()

export function ResetPassword() {
    const { control, handleSubmit, formState: { errors, isSubmitting } } =
        useForm<ResetFormData>({
            resolver: yupResolver(schema),
            mode: 'onSubmit',
        })

    const [searchParams] = useSearchParams()
    const token = searchParams.get('token')
    const [feedback, setFeedback] = useState('')
    const navigate = useNavigate()

    const onSubmit = async (formData: ResetFormData) => {
        if (!token) {
            setFeedback('Token inválido.')
            return
        }

        try {
            await api.post('/auth/reset-password', {
                token,
                newPassword: formData.password,
            })

            setFeedback('Senha redefinida com sucesso!')
            setTimeout(() => navigate('/login'), 1500)
        } catch (err: any) {
            const message =
                err?.response?.data?.message || 'Token inválido ou expirado.'
            setFeedback(message)
        }
    }

    return (
        <PageWrapper>
            <LoginNewScreen $visivel>
                <LoginContainer>
                    <Column>
                        <TitleLogin>Definir nova senha</TitleLogin>
                        <KanbanSubText>
                            Crie uma nova senha para sua conta.
                        </KanbanSubText>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                name='password'
                                placeholder='Nova senha'
                                type='password'
                                control={control}
                                errorMessage={errors?.password?.message}
                            />
                            <Input
                                name='confirmPassword'
                                placeholder='Confirme a nova senha'
                                type='password'
                                control={control}
                                errorMessage={errors?.confirmPassword?.message}
                            />

                            <Button
                                title='Atualizar senha'
                                type='submit'
                                disabled={isSubmitting}
                            />
                        </form>

                        {feedback && (
                            <p style={{ marginTop: 16, color: '#fff', fontSize: 12 }}>
                                {feedback}
                            </p>
                        )}
                    </Column>
                </LoginContainer>
            </LoginNewScreen>
        </PageWrapper>
    )
}

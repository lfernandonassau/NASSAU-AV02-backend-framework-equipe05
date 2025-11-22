import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { api } from '../../services/api'
import { signInWithPopup } from "firebase/auth";

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import {
    Column,
    LoginIconStyled,
    KanbanSubText,
    MagicEye,
    MagicEyeOff,
    PageWrapper,
    PasswordStyled,
    Row,
    TitleKanban,
    WelcomeContainer,
    WelcomeSubText,
    CpfIconStyled,
    NameIconStyled,
    PossuiContaSubText,
    FormContainer,
    TitleWelcome,
    CloseButton,
    RegisterContainer,
    RegisterNewScreen,
    TextoLivreSubText,
} from './styles'

import { IFormData } from './types'
import { cpfMask } from '../../utils/cpfMask'
import { nameMask } from '../../utils/nameMask'
import { FcGoogle } from 'react-icons/fc'

// IMPORTA SOMENTE DO ARQUIVO CORRETO (services/firebase.ts)
import { auth, googleProvider } from '../../services/firebase'

const schema = yup.object({
    cpf: yup.string().min(14, 'No minimo 11 caracteres').required('Campo obrigatório'),
    name: yup.string().min(3, 'Digite um nome válido').required('Campo obrigatório'),
    lastName: yup.string().min(3, 'Digite um sobrenome válido').required('Campo obrigatório'),
    email: yup.string().email('E-mail não é válido').required('Campo obrigatório'),
    password: yup.string().min(8, 'No minimo 8 caracteres').required('Campo obrigatório'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirmação obrigatória'),
}).required()

const Cadastro = () => {

    const [estaVisivel, setEstaVisivel] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setEstaVisivel(true)
        }, 200)

        return () => clearTimeout(timer)
    }, [])

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues: {
            name: '',
            lastName: '',
            cpf: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    })

    const navigate = useNavigate()

    const onSubmit = async (formData: IFormData) => {
        try {
            const { confirmPassword, ...userData } = formData

            const { data } = await api.get(`users?email=${formData.email}`)

            if (data.length === 0) {
                alert(`Usuário ${formData.name} cadastrado com sucesso! (Simulação)`)
                navigate('/login')
            } else {
                alert('Este e-mail já está cadastrado.')
            }
        } catch {
            alert('Houve um erro, tente novamente')
        }
    }

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    // FUNÇÃO DE LOGIN COM GOOGLE
    const handleGoogleLogin = async () => {
        console.log("Função chamada!") // DEBUG

        try {
            const result = await signInWithPopup(auth, googleProvider)
            const user = result.user

            console.log("Usuário logado:", user)
            navigate('/perfil')

        } catch (error) {
            console.error("Erro ao logar com Google:", error)
            alert("Erro ao entrar com Google.")
        }
    }

    return (
        <PageWrapper>
            <RegisterNewScreen $visivel={estaVisivel}>
                <RegisterContainer>
                    <Column>
                        <TitleKanban>Crie sua conta</TitleKanban>
                        <KanbanSubText>Defina as informações necessárias 👌</KanbanSubText>

                        <FormContainer onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                name="cpf"
                                placeholder="Digite seu CPF"
                                control={control}
                                errorMessage={errors?.cpf?.message}
                                leftIcon={<CpfIconStyled />}
                                mask={cpfMask}
                            />

                            <Input
                                name="name"
                                placeholder="Digite seu nome"
                                control={control}
                                errorMessage={errors?.name?.message}
                                leftIcon={<NameIconStyled />}
                                mask={nameMask}
                            />

                            <Input
                                name="lastName"
                                placeholder="Digite seu sobrenome"
                                control={control}
                                errorMessage={errors?.lastName?.message}
                                leftIcon={<NameIconStyled />}
                                mask={nameMask}
                            />

                            <Input
                                name='email'
                                errorMessage={errors?.email?.message}
                                placeholder="Digite um e-mail"
                                control={control}
                                leftIcon={<LoginIconStyled />}
                            />

                            <Input
                                name='password'
                                errorMessage={errors?.password?.message}
                                placeholder="Digite uma senha"
                                control={control}
                                type={showPassword ? 'text' : 'password'}
                                leftIcon={<PasswordStyled />}
                                rightIcon={
                                    showPassword
                                        ? <MagicEye onClick={() => setShowPassword(false)} />
                                        : <MagicEyeOff onClick={() => setShowPassword(true)} />
                                }
                            />

                            <Input
                                name='confirmPassword'
                                placeholder="Digite novamente sua senha"
                                control={control}
                                errorMessage={errors?.confirmPassword?.message}
                                type={showConfirmPassword ? 'text' : 'password'}
                                leftIcon={<PasswordStyled />}
                                rightIcon={
                                    showConfirmPassword
                                        ? <MagicEye onClick={() => setShowConfirmPassword(false)} />
                                        : <MagicEyeOff onClick={() => setShowConfirmPassword(true)} />
                                }
                            />

                            <Row>
                                <PossuiContaSubText onClick={() => navigate('/login')}>
                                    Já possui uma conta? <a>Clique aqui</a>
                                </PossuiContaSubText>
                            </Row>

                            <Button
                                title='Entrar'
                                type='submit'
                                variant='loginb'
                                disabled={!isValid}
                            />

                            <Row>
                                <TextoLivreSubText>ou</TextoLivreSubText>
                            </Row>

                            <Button
                                title='Entrar com Google'
                                type='button'
                                variant="google"
                                leftIcon={<FcGoogle />}
                                onClick={handleGoogleLogin}
                            />

                        </FormContainer>
                    </Column>
                </RegisterContainer>

                <WelcomeContainer>
                    <Column>
                        <WelcomeSubText>
                            <CloseButton>X</CloseButton>
                            <TitleWelcome>✅ Seja bem-vindo!</TitleWelcome>
                            Diga adeus à desorganização. Cadastre-se no Kodan e transforme sua rotina!
                        </WelcomeSubText>
                    </Column>
                </WelcomeContainer>
            </RegisterNewScreen>
        </PageWrapper>
    )
}

export { Cadastro }

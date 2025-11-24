import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
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
    TermsText,
    ErrorText,
    TermsContainer,
    CheckboxInput,
} from './styles'

import { IFormData } from './types'
import { cpfMask } from '../../utils/cpfMask'
import { nameMask } from '../../utils/nameMask'
import { FcGoogle } from 'react-icons/fc'

// IMPORTA O MODAL
import PrivacyModal from '../../components/footer/PrivacyModal'

// Firebase
import { auth, googleProvider } from '../../services/firebase'

const schema = yup.object({
    cpf: yup.string().min(14, 'No mínimo 11 caracteres').required('Campo obrigatório'),
    name: yup.string().min(3, 'Digite um nome válido').required('Campo obrigatório'),
    lastName: yup.string().min(3, 'Digite um sobrenome válido').required('Campo obrigatório'),
    email: yup.string().email('E-mail não é válido').required('Campo obrigatório'),
    password: yup.string().min(8, 'No mínimo 8 caracteres').required('Campo obrigatório'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirmação obrigatória'),
    terms: yup.boolean()
        .oneOf([true], 'Você deve aceitar os termos para continuar')
        .required('Campo obrigatório')
}).required()

const Cadastro = () => {

    const [estaVisivel, setEstaVisivel] = useState(false)

    // ESTADO DO MODAL
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setEstaVisivel(true)
        }, 200)

        return () => clearTimeout(timer)
    }, [])

    const {
        control,
        handleSubmit,
        setValue,        
        clearErrors,     
        formState: { errors, touchedFields, isSubmitted },
    } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
        reValidateMode: 'onSubmit'
    })

    const navigate = useNavigate()

    const onSubmit = async (formData: IFormData) => {
        try {
            const { confirmPassword, terms, ...userData } = formData

            const { data } = await api.post(`users?email=${formData.email}`)
            
            if (data.length === 0) {
                alert(`Usuário ${formData.name} cadastrado com sucesso!`)
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

    //  LOGIN GOOGLE 
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            navigate('/perfil')
        } catch {
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
                                errorMessage={
                                    (touchedFields.cpf || isSubmitted) ? errors?.cpf?.message : ''
                                }
                                leftIcon={<CpfIconStyled />}
                                mask={cpfMask}
                            />

                            <Input
                                name="name"
                                placeholder="Digite seu nome"
                                control={control}
                                errorMessage={
                                    (touchedFields.name || isSubmitted) ? errors?.name?.message : ''
                                }
                                leftIcon={<NameIconStyled />}
                                mask={nameMask}
                            />

                            <Input
                                name="lastName"
                                placeholder="Digite seu sobrenome"
                                control={control}
                                errorMessage={
                                    (touchedFields.lastName || isSubmitted) ? errors?.lastName?.message : ''
                                }
                                leftIcon={<NameIconStyled />}
                                mask={nameMask}
                            />

                            <Input
                                name='email'
                                errorMessage={
                                    (touchedFields.email || isSubmitted) ? errors?.email?.message : ''
                                }
                                placeholder="Digite um e-mail"
                                control={control}
                                leftIcon={<LoginIconStyled />}
                            />

                            <Input
                                name='password'
                                errorMessage={
                                    (touchedFields.password || isSubmitted) ? errors?.password?.message : ''
                                }
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
                                errorMessage={
                                    (touchedFields.confirmPassword || isSubmitted) ? errors?.confirmPassword?.message : ''
                                }
                                type={showConfirmPassword ? 'text' : 'password'}
                                leftIcon={<PasswordStyled />}
                                rightIcon={
                                    showConfirmPassword
                                        ? <MagicEye onClick={() => setShowConfirmPassword(false)} />
                                        : <MagicEyeOff onClick={() => setShowConfirmPassword(true)} />
                                }
                            />

                            {/*  TERMOS E POLÍTICA */}
                            <TermsContainer>
                                <Controller
                                    name="terms"
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <CheckboxInput
                                            id="terms-check"
                                            checked={value}
                                            onChange={onChange}
                                        />
                                    )}
                                />
                                
                                <TermsText>
                                    Li e aceito os 
                                    <span
                                        onClick={() => setIsPrivacyOpen(true)}
                                        style={{ cursor: 'pointer', textDecoration: 'underline' }}
                                    >
                                        {' '}Termos e Condições
                                    </span>
                                    {' '}e a
                                    <span
                                        onClick={() => setIsPrivacyOpen(true)}
                                        style={{ cursor: 'pointer', textDecoration: 'underline' }}
                                    >
                                        {' '}Política de Privacidade
                                    </span>.
                                </TermsText>
                            </TermsContainer>

                            {(touchedFields.terms || isSubmitted) && errors.terms && (
                                <ErrorText>{errors.terms.message}</ErrorText>
                            )}

                            <Row>
                                <PossuiContaSubText onClick={() => navigate('/login')}>
                                    Já possui uma conta? <a>Clique aqui</a>
                                </PossuiContaSubText>
                            </Row>

                            {/*  BOTÃO DE CADASTRO */}
                            <Button
                                title='Entrar'
                                type='submit'
                                variant='loginb'
                            />
                        </FormContainer>

                        {/* BOTÃO GOOGLE */}
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

            {/*  MODAL ATUALIZADO */}
            <PrivacyModal
                isOpen={isPrivacyOpen}
                onClose={() => setIsPrivacyOpen(false)}
                onAcceptTerms={() => {
                    setValue("terms", true)  
                    clearErrors("terms")      
                }}
            />

        </PageWrapper>
    )
}

export { Cadastro }


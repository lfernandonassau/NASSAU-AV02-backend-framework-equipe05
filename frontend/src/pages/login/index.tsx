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
import { useAuth } from '../../context/AuthContext';
import {
    Column,
    LoginIconStyled,
    EsqueciSubText,
    KanbanSubText,
    LoginContainer,
    LoginNewScreen,
    MagicEye,
    MagicEyeOff,
    PageLogin,
    PageWrapper,
    PasswordStyled,
    Row,
    TitleKanban,
    TitleLogin,
    TitleWelcome,
    WelcomeContainer,
    WelcomeSubText,
    TextoLivreSubText,
} from './styles'

import { IFormData } from './types'
import { FcGoogle } from "react-icons/fc"

// Firebase
import { auth, googleProvider } from '../../services/firebase'
import { Copyright } from '../../components/Copyright';
import { EsqueciSenhaModal } from '../../components/EsqueciSenhaModal';

const schema = yup.object({
    email: yup.string().email('E-mail não é válido').required('Campo obrigatório'),
    password: yup.string().min(4, 'No minimo 4 caracteres').required('Campo obrigatório'),
}).required()

const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();

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
    })

    // Esqueci senha MODAL
    const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);

    const onSubmit = async (formData: IFormData) => {
        try{
            await signIn({
            email: formData.email,
            password: formData.password,
      });


        navigate('/perfil')

    } catch (err: any) {
        // Se backend devolveu 401 com message
        const message = err?.response?.data?.message || 'Email ou senha inválido.'
        alert(message)
    }
}


    const [showPassword, setShowPassword] = useState(false)

    // LOGIN COM GOOGLE
    const { updateUser } = useAuth();

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            const idToken = await user.getIdToken();

            const { data } = await api.post('/auth/google', { idToken });

            localStorage.setItem('kodan_token', data.token);
            localStorage.setItem('kodan_user', JSON.stringify(data.user));

            api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            updateUser(data.user);

            navigate('/perfil');
            } catch (error: any) {
                console.error('Erro ao entrar com Google:', error)

                const message =
                error?.response?.data?.message ||
                'Erro ao entrar com Google. Tente novamente.'

                alert(message)
            }
    }

    return (
        <PageWrapper>
            <LoginNewScreen $visivel={estaVisivel}>
                <LoginContainer>
                    <Column>
                        <TitleLogin>Login</TitleLogin>
                        <KanbanSubText>Faça o seu login agora!</KanbanSubText>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input 
                                name='email'
                                errorMessage={errors?.email?.message}
                                placeholder="E-mail"
                                control={control}
                                leftIcon={<LoginIconStyled/>}
                            />

                            <Input 
                                name='password'
                                errorMessage={errors?.password?.message}
                                placeholder="Senha"
                                control={control}
                                type={showPassword ? 'text' : 'password'}
                                leftIcon={<PasswordStyled/>}
                                rightIcon={
                                    showPassword 
                                        ? <MagicEye onClick={() => setShowPassword(false)} />
                                        : <MagicEyeOff onClick={() => setShowPassword(true)} />
                                }
                            />

                            <Row>
                                <EsqueciSubText onClick={() => setIsForgotModalOpen(true)}>
                                    Esqueci minha senha
                                </EsqueciSubText>
                            </Row>

                            <Button title='Entrar' type='submit' disabled={!isValid} />
                        </form>

                        <Row>
                            <TextoLivreSubText>ou</TextoLivreSubText>
                        </Row>

                        {/*  BOTÃO GOOGLE  */}
                        <Button
                            title='Entrar com Google'
                            type='button'
                            variant="google"
                            leftIcon={<FcGoogle/>}
                            onClick={handleGoogleLogin}
                        />
                    </Column>
                </LoginContainer>

                <WelcomeContainer>
                    <Column>
                        <PageLogin src={logo} alt="Logo Kodan" />
                        <TitleWelcome>Bem-vindo de volta 🤟</TitleWelcome>

                        <WelcomeSubText>
                            Organize projetos, acompanhe tarefas e colabore com sua equipe usando nosso intuitivo quadro Kanban.
                        </WelcomeSubText>

                        <TitleKanban>- Equipe Kodan</TitleKanban>

                        <WelcomeSubText>Ainda não é cadastrado?</WelcomeSubText>

                        <Button 
                            title="Clique aqui!" 
                            variant="secondary" 
                            onClick={() => navigate('/cadastro')}
                        />
                    </Column>
                </WelcomeContainer>
            </LoginNewScreen>

            {/* COPYRIGHT  */}
            <Copyright/>


            {/* RENDERIZAÇÃO DO MODAL ESQUECI SENHA */}
            <EsqueciSenhaModal 
                isOpen={isForgotModalOpen} 
                onClose={() => setIsForgotModalOpen(false)} 
            />
        </PageWrapper>
    )
}

export { Login }

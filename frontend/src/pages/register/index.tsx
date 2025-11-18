import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { api } from '../../services/api'


import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
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
} from './styles'
import { IFormData } from './types'

const schema = yup.object({
    email: yup.string().email('E-mail não é válido').required('Campo obrigatório'),
    password: yup.string().min(4, 'No minimo 4 caracteres').required('Campo obrigatório'),
}).required()

const Register = () => {
    
    // Titulo visivel
    const [estaVisivel, setEstaVisivel] = useState(false)
    useEffect(() => {
        // Define como visível após um pequeno atraso
        // Isso dá tempo para o componente montar invisível
        const timer = setTimeout(() => {
        setEstaVisivel(true)
        }, 200) // 200ms de atraso

        // Limpa o timer se o componente for desmontado
        return () => clearTimeout(timer)
    }, [])

    //React-hook-form: Regras do formulário(Dentro do input)
    const {control, handleSubmit , formState: { errors, isValid } } = useForm<IFormData>({
        //verifica se realmente começou a validar ou não
        resolver: yupResolver(schema),
        //Assim que o usuário digitar ele já valida
        mode: 'onChange',
    })

    const navigate = useNavigate()
    const onSubmit = async (formData: IFormData) => {
        try{
            //Lembrar de mudar para POST
            const { data } = await api.get(`users?email=${formData.email}&password=${formData.password}`)
            if(data.length === 1){
                navigate('/perfil')
            } else {
                alert('Email ou senha inválido.')
            }
        }catch{
            alert('Houve um erro, tente novamente')
        }
    }
    
    const [showPassword, setShowPassword] = useState(false)
    return (
        <PageWrapper>
            <LoginNewScreen $visivel= {estaVisivel}>
                <WelcomeContainer>
                    <Column>
                        
                        <PageLogin src={logo} alt="Logo Kodan" />
                        <TitleWelcome>Seja bem-vindo!</TitleWelcome>
                        <Button title="Clique aqui!" variant="secondary"/>
                    </Column>
                </WelcomeContainer>
                <LoginContainer>
                    <Column>
                        <TitleLogin>
                            Cadastrar
                        </TitleLogin>
                        <KanbanSubText>
                            Faça o seu cadastro agora!
                        </KanbanSubText>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name='email' errorMessage={errors?.email?.message} placeholder="Digite um e-mail" control={control} leftIcon={<LoginIconStyled/>}/>
                            <Input name='password' errorMessage={errors?.password?.message} placeholder="Digite uma senha" control={control} type={showPassword ? 'text' : 'password'} leftIcon={<PasswordStyled/>} rightIcon={showPassword ? (<MagicEye onClick={() => setShowPassword(false)}/>) : (<MagicEyeOff onClick={() => setShowPassword(true)}/>)}/>
                            <Input name='password' errorMessage={errors?.password?.message} placeholder="Repita a senha" control={control} type={showPassword ? 'text' : 'password'} leftIcon={<PasswordStyled/>} rightIcon={showPassword ? (<MagicEye onClick={() => setShowPassword(false)}/>) : (<MagicEyeOff onClick={() => setShowPassword(true)}/>)}/>
                            <Row>
                                <EsqueciSubText onClick= {() => { navigate('/login')}}>
                                    Já possui uma conta? Clique aqui
                                </EsqueciSubText>
                            </Row>
                            <Button title='Entrar' type='submit' disabled={!isValid}></Button>
                        </form>
                    </Column>
                </LoginContainer>
            </LoginNewScreen>
        </PageWrapper>
    )
}

export { Register }


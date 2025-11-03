import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { api } from '../../services/api'


import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import logo from '../../assets/logo.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
        Column, 
        Row, 
        TitleLogin, 
        KanbanSubText, 
        EsqueciSubText,    
        LoginContainer, 
        EmailEstilizado,
        PasswordEstilizado,
        PageWrapper,
        LoginNewScreen,
        WelcomeContainer,
        TitleWelcome,
        WelcomeSubText,
        TitleKanban,
        MagicEye,
        MagicEyeOff,
        PageLogin,
        } 
        from './styles'
import { IFormData } from './types'

const schema = yup.object({
    email: yup.string().email('E-mail não é válido').required('Campo obrigatório'),
    password: yup.string().min(4, 'No minimo 4 caracteres').required('Campo obrigatório'),
}).required()

const Login = () => {
    
    

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
            <LoginNewScreen>
                <WelcomeContainer>
                    <Column>
                        
                        <PageLogin src={logo} alt="Logo Kodan" /> 
                        <TitleWelcome>Seja bem-vindo!</TitleWelcome>
                        <WelcomeSubText>
                            Organize projetos ✍️, acompanhe tarefas 📋 e colabore com sua equipe 🧑‍💻 usando nosso intuitivo quadro Kanban. 
                        </WelcomeSubText>
                        <TitleKanban> - Equipe Kodan</TitleKanban>
                        <WelcomeSubText>
                            Ainda não é cadastrado?
                        </WelcomeSubText>
                        <Button title="Clique aqui!" variant="secondary"/>
                    </Column>
                </WelcomeContainer>
                <LoginContainer>
                    <Column>
                        <TitleLogin>
                            Login
                        </TitleLogin>
                        <KanbanSubText>
                            Faça o seu login agora!
                        </KanbanSubText>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name='email' errorMessage={errors?.email?.message} placeholder="E-mail" control={control} leftIcon={<EmailEstilizado/>}/>
                            <Input name='password' errorMessage={errors?.password?.message} placeholder="Senha" control={control} type={showPassword ? 'text' : 'password'} leftIcon={<PasswordEstilizado/>} rightIcon={showPassword ? (<MagicEye onClick={() => setShowPassword(false)}/>) : (<MagicEyeOff onClick={() => setShowPassword(true)}/>)}/>
                            <Row>
                                <EsqueciSubText onClick= {() => { navigate('/')}}>
                                    Esqueci minha senha
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

export { Login }
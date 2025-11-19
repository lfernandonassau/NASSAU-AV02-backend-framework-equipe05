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
    CpfIconStyled,
    NameIconStyled,
} from './styles'
import { IFormData } from './types'
import { cpfMask } from '../../utils/cpfMask'
import { nameMask } from '../../utils/nameMask'
import { KanbanText } from 'pages/home/styles'

const schema = yup.object({
    cpf: yup.string().min(14, 'No minimo 11 caracteres').required('Campo obrigatório'),
    name: yup.string().min(3, 'Digite um nome válido').required('Campo obrigatório'),
    lastName: yup.string().min(3, 'Digite um sobrenome válido').required('Campo obrigatório'),
    email: yup.string().email('E-mail não é válido').required('Campo obrigatório'),
    password: yup.string().min(8, 'No minimo 8 caracteres').required('Campo obrigatório'),
    // Comparar com o campo 'password'
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirmação obrigatória'),
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
        // É importante definir valores padrão vazios para evitar erro de "Uncontrolled component" por isso eu coloquei o defaultValues
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
            // Não precisa salvar isso no banco
            const { confirmPassword, ...userData } = formData

            // TODO: Alterar para método POST para criar o usuário
            // Exemplo: await api.post('/users', userData);
            
            const { data } = await api.get(`users?email=${formData.email}`)
            
            if(data.length === 0){
                // Aqui você faria o POST se o usuário não existir
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
    return (
        <PageWrapper>
            <LoginNewScreen $visivel= {estaVisivel}>
                <LoginContainer>
                    <Column>
                        <img src={logo} alt="Logo Kodan" />
                        <TitleKanban>Crie sua conta 👌</TitleKanban>
                        <KanbanSubText>Defina as informações necessárias</KanbanSubText>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input 
                            name="cpf"
                            placeholder="Digite seu CPF"
                            control={control}
                            errorMessage={errors?.cpf?.message}
                            leftIcon={<CpfIconStyled/>} 
                            mask={cpfMask}
                            />
                            <Input 
                            name="name"
                            placeholder="Digite seu nome"
                            control={control}
                            errorMessage={errors?.name?.message}
                            leftIcon={<NameIconStyled/>} 
                            mask={nameMask} 
                            />
                            <Input 
                            name="lastName"
                            placeholder="Digite seu sobrenome"
                            control={control}
                            errorMessage={errors?.lastName?.message}
                            leftIcon={<NameIconStyled/>}
                            mask={nameMask} 
                            />
                            <Input 
                            name='email' 
                            errorMessage={errors?.email?.message} 
                            placeholder="Digite um e-mail" 
                            control={control} 
                            leftIcon={<LoginIconStyled/>}/>
                            <Input 
                            name='password' 
                            errorMessage={errors?.password?.message} 
                            placeholder="Digite uma senha" 
                            control={control} 
                            type={showPassword ? 'text' : 'password'} 
                            leftIcon={<PasswordStyled/>} 
                            rightIcon={showPassword ?
                                    (<MagicEye onClick={() => setShowPassword(false)}/>) :
                                    (<MagicEyeOff onClick={() => setShowPassword(true)}/>)
                                }
                            />
                            <Input 
                                name='confirmPassword' 
                                placeholder="Repetir Senha" 
                                control={control} 
                                errorMessage={errors?.confirmPassword?.message} 
                                type={showPassword ? 'text' : 'password'} 
                                leftIcon={<PasswordStyled/>}
                                rightIcon={
                                    showPassword ? 
                                    (<MagicEye onClick={() => setShowPassword(false)}/>) : 
                                    (<MagicEyeOff onClick={() => setShowPassword(true)}/>)
                                }
                            />
                            
                            <Row>
                                <EsqueciSubText onClick= {() => { navigate('/login')}}>
                                    Já possui uma conta? Clique aqui
                                </EsqueciSubText>
                            </Row>
                            <Button 
                            title='Entrar' 
                            type='submit' 
                            disabled={!isValid}>
                            </Button>
                            <Row>
                                <EsqueciSubText>ou</EsqueciSubText>
                            </Row>
                        </form>
                    </Column>
                </LoginContainer>
                <WelcomeContainer>
                    <Column>
                        <TitleWelcome>kodan.</TitleWelcome>
                        <WelcomeSubText>
                            Diga adeus à desorganização. Cadastre-se no kodan. e transforme a maneira como sua equipe trabalha
                        </WelcomeSubText>
                    </Column>
                </WelcomeContainer>
            </LoginNewScreen>
        </PageWrapper>
    )
}

export { Register }

function watch(arg0: string) {
    throw new Error('Function not implemented.')
}


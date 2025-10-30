import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

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
        } 
        from './styles'
const Login = () => {

    const navigate = useNavigate()
    return (
        <>
        <PageWrapper>
            <LoginNewScreen>
                <WelcomeContainer>
                    <Column>
                        <TitleWelcome>Seja bem-vindo!</TitleWelcome>
                        <WelcomeSubText>
                            Organize projetos ✍️, acompanhe tarefas 📋 e colabore com sua equipe 🧑‍💻 usando nosso intuitivo quadro Kanban. 
                        </WelcomeSubText>
                        <TitleKanban> - Equipe Kodan</TitleKanban>
                        <WelcomeSubText>
                            <br />
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
                        <form>
                            <Input placeholder="E-mail" leftIcon={<EmailEstilizado/>}/>
                            <Input placeholder="Senha" type="password" leftIcon={<PasswordEstilizado/>}/>
                            <Button title="Entrar" ></Button>
                        </form>
                        <Row>
                                <EsqueciSubText onClick= {() => { navigate('/')}}>
                                    Esqueci minha senha
                                </EsqueciSubText>
                            </Row>
                    </Column>
                </LoginContainer>
            </LoginNewScreen>
        </PageWrapper>
        </>
    )
}

export { Login }
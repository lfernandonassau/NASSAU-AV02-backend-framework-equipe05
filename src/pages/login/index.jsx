import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { 
        Column, 
        Row, 
        TitleLogin, 
        KanbanSubText, 
        EsqueciSubText,   
        CriarContaText, 
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
import { Link } from 'react-router-dom'
const Login = () => {
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
                            <Row>
                                <EsqueciSubText>
                                Esqueci minha senha
                            </EsqueciSubText>
                            </Row>
                            <Button title="Entrar" ></Button>
                        </form>
                        <Row>
                            <CriarContaText>
                                Não tem uma conta ainda? <Link to="/">Criar conta</Link>
                            </CriarContaText>
                        </Row>
                    </Column>
                </LoginContainer>
            </LoginNewScreen>
        </PageWrapper>
        </>
    )
}

export { Login }
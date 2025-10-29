import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { 
        Wrapper,
        Column, 
        Row, 
        TitleLogin, 
        KanbanSubText, 
        EsqueciSubText,  
        TitleKanban, 
        CriarContaText, 
        LoginContainer, 
        EmailEstilizado,
        PasswordEstilizado
        } 
        from './styles'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <>
        <LoginContainer>
            <Column>
                <TitleKanban>
                    Fase inicial da tela de login
                </TitleKanban>
            </Column>
            <Column>
                <Wrapper>
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
                </Wrapper>
            </Column>
        </LoginContainer>
        </>
    )
}

export { Login }
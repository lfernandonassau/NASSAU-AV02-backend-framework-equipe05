import { Header } from '../../components/Header'
import { Container } from '../home/styles'
import { ImageContainer, PerfilContainer, TitleColor, TitleKanban, Wrapper } from './styles'
const TelaPerfil = ({variant= 'secondary'}) => {
    return (<>
        <Wrapper>
            <Header autenticado={true} variant={variant} />
            <Container>
                <PerfilContainer>
                    <TitleKanban>Perfil</TitleKanban>
                    <ImageContainer src='https://avatars.githubusercontent.com/u/179970243?v=4'/>
                    <TitleColor>
                        Rafael
                    </TitleColor>
                    <br />
                    <TitleKanban>
                        Nome completo:
                    </TitleKanban>
                    <TitleKanban>
                        E-mail:
                    </TitleKanban>
                    <TitleKanban>
                        Senha:
                    </TitleKanban>
                    
                </PerfilContainer>
            </Container>
        </Wrapper>
    </>)
}

export { TelaPerfil }
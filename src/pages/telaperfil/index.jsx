import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { Container } from '../home/styles'
import { Wrapper } from './styles'
const TelaPerfil = ({variant= 'secondary'}) => {
    return (<>
        <Wrapper>
            <Header autenticado={true} variant={variant} />
            <Container>
                <Card />
            </Container>
        </Wrapper>
    </>)
}

export { TelaPerfil }
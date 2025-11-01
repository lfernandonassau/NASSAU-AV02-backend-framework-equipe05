import { Header } from '../../components/Header'
import CardTask from '../../components/CardTask'
import { Container } from '../home/styles'
import { Wrapper } from './styles'
const TelaPerfil = ({variant= 'secondary'}) => {
    return (<>
        <Wrapper>
            <Header autenticado={true} variant={variant} />
            <Container>
                <CardTask/>
            </Container>
        </Wrapper>
    </>)
}

export { TelaPerfil }
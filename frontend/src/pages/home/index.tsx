import { Button } from '../../components/Button'
import { Container, ImageContainer, TitleKanban, KanbanText, TitleColor, Wrapper } from './styles'
import { Header } from '../../components/Header'
import banner from '../../assets/banner.svg'
import Footer from '../../components/footer'
const Home = () => {
    return (
        <Wrapper>
            <Header />
            <Container>

                <TitleKanban>
                    Kodan
                    <TitleColor>
                        Gerenciamento Kanban
                    </TitleColor>
                </TitleKanban>
                <KanbanText>Uma forma eficiente de turbinar os projetos da sua equipe!</KanbanText>
                <Button variant='secundary' title='Vamos começar!' onClick={() => null}/>
                <ImageContainer src={banner} alt="Banner Kodan" />    
            </Container>
            <Footer/>
        </Wrapper>
    )
}

export { Home }
import { Button } from '../../components/Button'
import { Container, ImageContainer, TitleKanban, KanbanText, TitleColor } from './styles'
import { Header } from '../../components/Header'
import banner from '../../assets/banner.svg'
const Home = () => {
    return (
        <>
        <Header />
        <Container>
            <div>
                <TitleKanban>
                    Kodan
                    <TitleColor>
                        Gerenciamento Kanban
                    </TitleColor>
                </TitleKanban>
                <KanbanText>Uma forma eficiente de turbinar os projetos da sua equipe!</KanbanText>
                <Button variant='secundary' title='Vamos começar!' onClick={() => null}/>
                <ImageContainer src={banner} alt="Banner Kodan" />
            </div>
            
        </Container>
        </>
    )
}

export { Home }
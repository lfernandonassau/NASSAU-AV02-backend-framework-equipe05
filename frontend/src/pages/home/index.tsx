import { useState, useEffect } from 'react'

import { Button } from '../../components/Button'
import { Container, ImageContainer, TitleKanban, KanbanText, TitleColor, Wrapper, ParteDoisContainer, PartTwoText, ScrollDownIndicator, AbaixoIcon } from './styles'
import { Header } from '../../components/Header'
import banner from '../../assets/banner.svg'
import Footer from '../../components/footer'


const Home = () => {


    const [showScroll, setShowScroll] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScroll(false)
            } else {
                setShowScroll(true)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []) //Array vazio = garantir que só rode uma vez

    //Função para rolar a página
    const handleScrollDown = () => {

        window.scrollTo({
            top: window.innerHeight - 47, // 47 altura do Header
            behavior: 'smooth'
        })
    }

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
            <ParteDoisContainer>
                <PartTwoText>
                    Do "A Fazer" ao "Feito", sem complicações.
                </PartTwoText>
                <ImageContainer src={banner} alt="Banner Kodan" />
            </ParteDoisContainer>
            <Footer/>
            {/* Usar $show (com cifrão) para o styled-components
             entender que é uma "prop transitória" e não deve ir para o HTML */}
            <ScrollDownIndicator $show={showScroll} onClick={handleScrollDown}>
                <AbaixoIcon />
            </ScrollDownIndicator>
        </Wrapper>
    )
}

export { Home }
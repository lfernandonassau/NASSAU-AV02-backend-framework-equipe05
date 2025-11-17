import { useState, useEffect } from 'react'

import { Button } from '../../components/Button'
import { Container, ImageContainer, TitleKanban, KanbanText, TitleColor, Wrapper, ParteDoisContainer, PartTwoText, ScrollDownIndicator, AbaixoIcon, ParagraphText, ParteTresContainer, TresParagraphText, TresParagraphH, VisualIcon, ImpulsionIcon, CheckListIcon, CardsIcon, HomeSection, ImageContainerTwo } from './styles'
import { Header } from '../../components/Header'
import banner from '../../assets/banner.svg'
import bannertwo from '../../assets/bannertwo.svg'
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
                    Domine o seu fluxo.
                </PartTwoText>
                <ParagraphText>
                    Nossa plataforma transforma a complexidade dos projetos em um fluxo de trabalho visual e inteligente, sem sobrecarregar você com dados.
                </ParagraphText>
                <ImageContainerTwo src={bannertwo} alt="Banner Kodan" />
            </ParteDoisContainer>

            <HomeSection/>

            <ParteTresContainer>
                <TresParagraphText> 
                    <CardsIcon />
                    <TresParagraphH>Gestão Visual de Times</TresParagraphH> Organize projetos em equipe com quadros Kanban intuitivos. Arraste e solte cards, defina responsáveis e acompanhe o fluxo de trabalho de forma clara e colaborativa.
                </TresParagraphText>
                <TresParagraphText> 
                    <ImpulsionIcon />
                    <TresParagraphH>Impulsione a Evolução Semanal</TresParagraphH> Obtenha estatísticas e relatórios visuais sobre a produtividade. Identifique gargalos, meça o progresso contínuo e tome decisões baseadas em dados reais.
                </TresParagraphText>
                <TresParagraphText>
                    <CheckListIcon />
                    <TresParagraphH>Acompanhamento por Colaborador</TresParagraphH> Tenha clareza sobre a carga de trabalho individual. Visualize o total de tarefas, o que está concluído, em andamento ou pendente para cada membro da equipe.
                </TresParagraphText>
                <TresParagraphText>
                    <VisualIcon />
                    <TresParagraphH>O Panorama Completo</TresParagraphH> Tenha uma visão de 360° de todos os seus projetos. Do detalhe da tarefa à performance geral da equipe, tudo centralizado em um único dashboard inteligente.
                </TresParagraphText>
            </ParteTresContainer>
            {/* Usar $show (com cifrão) para o styled-components
             entender que é uma "prop transitória" e não deve ir para o HTML */}
            <ScrollDownIndicator $show={showScroll} onClick={handleScrollDown}>
                <AbaixoIcon />
            </ScrollDownIndicator>
            <Footer/>
        </Wrapper>
    )
}

export { Home }
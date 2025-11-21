import { useState, useEffect, useRef } from 'react'

import { Button } from '../../components/Button'
import { Container, ImageContainer, TitleKanban, KanbanText, TitleColor, Wrapper, ParteDoisContainer, PartTwoText, ScrollDownIndicator, AbaixoIcon, ParagraphText, ParteTresContainer, TresParagraphText, TresParagraphH, VisualIcon, ImpulsionIcon, CheckListIcon, CardsIcon, HomeSection, ImageContainerTwo, Animation } from './styles'
import { Header } from '../../components/Header'
import banner from '../../assets/banner.svg'
import bannertwo from '../../assets/bannertwo.svg'
import Footer from '../../components/footer'


const Home = () => {

    // Titulo visivel
    const [estaVisivel, setEstaVisivel] = useState(false)
    useEffect(() => {
        // Define como visível após um pequeno atraso
        // Isso dá tempo para o componente montar invisível
        const timer = setTimeout(() => {
        setEstaVisivel(true)
        }, 200) // 200ms de atraso

        // Limpa o timer se o componente for desmontado
        return () => clearTimeout(timer)
    }, []) 

    const [showScroll, setShowScroll] = useState(true)

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
    }, [])

    // Animação ao rolar a página
    const [containerVisivel, setParteDoisVisivel] = useState(false)
    
    //    Tipamos como HTMLDivElement porque é um <div>
    const containerRef = useRef<HTMLDivElement>(null)

    // IntersectionObserver
    useEffect(() => {
        const refAtual = containerRef.current // Guarda a referência
        
        // Cria o observador
        const observer = new IntersectionObserver(
            ([entry]) => { // O callback é chamado quando a visibilidade muda
                if (entry.isIntersecting) {
                    // O elemento entrou na tela
                    setParteDoisVisivel(true)
                    
                    
                    // Para de observar, pois a animação só precisa rolar 1 vez
                    if (refAtual) {
                        observer.unobserve(refAtual)
                    }
                }
            },
            {
                threshold: 0.1 // Ativa quando 10% do elemento estiver visível
            }
        )

        // Manda o observador "assistir" o elemento do 'ref'
        if (refAtual) {
            observer.observe(refAtual)
        }

        // Limpa o observador quando o componente for desmontado
        return () => {
            if (refAtual) {
                observer.unobserve(refAtual)
            }
        }
    }, [])

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

                <TitleKanban $visivel={estaVisivel}>
                    Kodan
                    <TitleColor>
                        Gerenciamento Kanban
                    </TitleColor>
                </TitleKanban>
                <KanbanText $visivel={estaVisivel}>Uma forma eficiente de turbinar os projetos da sua equipe!</KanbanText>
                <Animation $visivel={estaVisivel}>
                    <Button variant='secundary' title='Vamos começar!' onClick={() => null}/>
                </Animation>
                <Animation $visivel={estaVisivel}>
                    <ImageContainer src={banner} alt="Banner Kodan" />    
                </Animation>   
            </Container>
            <ParteDoisContainer ref={containerRef} $visivel={containerVisivel} id='sobre'>
                <PartTwoText>
                    SOMOS UMA PLATAFORMA DE GESTÃO VISUAL, DEDICADA A TRAZER CLAREZA E ORGANIZAÇÃO PARA SUAS EQUIPES.
                </PartTwoText>
                <ParagraphText>
                    O Kodan é uma plataforma para você organizar seu fluxo de trabalho, e destravar o potencial da sua equipe. Ao se associar, você terá acesso a dashboards intuitivos e quadros kanban flexíveis para ajudá-lo a visualizar o progresso e alcançar seus objetivos.
                    <br />
                    <strong>Descubra abaixo tudo o que o Kodan pode fazer por você.</strong>
                </ParagraphText>
            </ParteDoisContainer>

            <HomeSection/>

            <ParteTresContainer ref={containerRef} $visivel={containerVisivel} id="servicos">
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
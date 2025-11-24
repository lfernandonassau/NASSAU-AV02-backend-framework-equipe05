import { useNavigate } from 'react-router-dom'

import { 
    Wrapper, 
    HeroContainer,
    HeroTitle,
    HeroSubtitle,
    ButtonGroup,
    PrimaryButton,
    OutlineButton,
    ScrollArea,
    MouseIcon,
    ScrollText,
    SectionContainer,
    SectionTitle,
    FeatureCard,
    IconWrapper,
    FeatureTitle,
    FeatureText,
    FeaturesGrid
} from './styles'

// Importação do Footer
import { Footer } from '../../components/footer'
import { HeaderHome } from '../../components/HeaderHome'
import { useEffect, useState } from 'react'
import { FaChartPie, FaColumns, FaTasks, FaUsers } from 'react-icons/fa'

const Home = () => {
    const navigate = useNavigate();

    const [showScrollArea, setShowScrollArea] = useState(true);

    const handleScrollDown = () => {
        const featuresSection = document.getElementById('features');

        setShowScrollArea(false); // ← esconde NA HORA

        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setShowScrollArea(false);
            } else {
                setShowScrollArea(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <Wrapper>
            <HeaderHome/>
            
            <HeroContainer>
                <HeroTitle>
                    kodan.
                </HeroTitle>
                
                <HeroSubtitle>
                    Sua visão completa, do planejamento à entrega.
                </HeroSubtitle>
                
                <ButtonGroup>
                    <PrimaryButton onClick={() => navigate('/register')}>
                        Comece agora
                    </PrimaryButton>
                    
                    <OutlineButton>
                        Entrar
                    </OutlineButton>
                </ButtonGroup>

                {/* Indicador de Scroll (Fica preso na primeira dobra) */}
                {showScrollArea && (
                    <ScrollArea onClick={handleScrollDown}>
                        <MouseIcon />
                        <ScrollText>Clique para ver mais</ScrollText>
                    </ScrollArea>
                )}

            </HeroContainer>

            

            {/* Segundo Container com conteúdo (ID 'features' é usado pelo scroll) */}
            <SectionContainer id='features'>
                <SectionTitle id='sobre' >Por que escolher o Kodan?</SectionTitle>
                
                <FeaturesGrid>
                    {/* Card 1: Dashboard Geral */}
                    <FeatureCard>
                        <IconWrapper>
                            <FaColumns />
                        </IconWrapper>
                        <FeatureTitle>Dashboard Kanban</FeatureTitle>
                        <FeatureText>
                            Visualize todo o fluxo de trabalho em um único quadro. Mova tarefas entre colunas intuitivas, garanta transparência total e acompanhe o progresso em tempo real sem perder nenhum detalhe.
                        </FeatureText>
                    </FeatureCard>

                    {/* Card 2: Estatísticas */}
                    <FeatureCard>
                        <IconWrapper>
                            <FaChartPie />
                        </IconWrapper>
                        <FeatureTitle>Métricas e Estatísticas</FeatureTitle>
                        <FeatureText>
                            Tome decisões baseadas em dados. Tenha acesso a gráficos de produtividade, tempo médio de entrega (Lead Time) e gargalos do processo para otimizar continuamente o desempenho.
                        </FeatureText>
                    </FeatureCard>

                    {/* Card 3: Alinhamento */}
                    <FeatureCard>
                        <IconWrapper>
                            <FaTasks />
                        </IconWrapper>
                        <FeatureTitle>Gestão de Projetos</FeatureTitle>
                        <FeatureText>
                            Centralize múltiplos projetos em um só lugar. Defina prioridades, prazos e dependências, garantindo que o alinhamento estratégico da empresa seja cumprido do início ao fim.
                        </FeatureText>
                    </FeatureCard>

                    {/* Card 4: Equipes */}
                    <FeatureCard>
                        <IconWrapper>
                            <FaUsers />
                        </IconWrapper>
                        <FeatureTitle>Colaboração de Equipes</FeatureTitle>
                        <FeatureText>
                            Conecte seu time de forma eficiente. Atribua responsáveis, comente em tarefas e receba atualizações instantâneas, promovendo um ambiente de trabalho ágil e integrado.
                        </FeatureText>
                    </FeatureCard>

                </FeaturesGrid>
            </SectionContainer>

            {/* FOOTER  */}
            <Footer />
        </Wrapper>
    )
}

export { Home }
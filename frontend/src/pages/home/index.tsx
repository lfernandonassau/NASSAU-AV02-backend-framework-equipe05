import { useNavigate } from 'react-router-dom'
import { motion, Variants } from 'framer-motion' 
import { 
    Wrapper, 
    HeroContainer,
    HeroTitle,
    HeroSubtitle,
    ButtonGroup,
    PrimaryButton,
    ScrollArea,
    MouseIcon,
    ScrollText,
    SectionContainer,
    SectionTitle,
    FeatureCard,
    IconWrapper,
    FeatureTitle,
    FeatureText,
    FeaturesGrid,
    WorkflowSection,
    StepsContainer,
    StepItem,
    StepNumber,
    StepTitle,
    StepDescription,
    CTAContainer,
    InspirationSection,
    BigQuote,
    QuoteTag,
    MiniHeroSubtitle
} from './styles'

import { Footer } from '../../components/footer'
import { HeaderHome } from '../../components/HeaderHome'
import { useEffect, useState } from 'react'
import { FaChartPie, FaColumns, FaTasks, FaUsers } from 'react-icons/fa'

const Home = () => {
    const navigate = useNavigate();
    const [showScrollArea, setShowScrollArea] = useState(true);

    const handleScrollDown = () => {
        const featuresSection = document.getElementById('features');
        setShowScrollArea(false);
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

    // --- VARIANTES DE ANIMAÇÃO CORRIGIDAS ---
    
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariant: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        // @ts-ignore - 'hover' não é chave padrão de Variants, mas o Framer aceita string
        hover: { y: -10, transition: { duration: 0.3 } }
    };

    const scaleUp: Variants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
    };

    const bounce = {
        y: [0, 10, 0],
        transition: { 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut" as const 
        }
    };

    return (
        <Wrapper>
            <HeaderHome/>
            
            {/* HERO SECTION COM ANIMAÇÃO */}
            <HeroContainer
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <HeroTitle variants={fadeInUp}>kodan.</HeroTitle>
                <HeroSubtitle variants={fadeInUp}>Sua visão completa, do planejamento à entrega.</HeroSubtitle>
                
                <ButtonGroup variants={fadeInUp}>
                    <PrimaryButton 
                        onClick={() => navigate('/cadastro')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Comece já
                    </PrimaryButton>
                </ButtonGroup>

                <MiniHeroSubtitle variants={fadeInUp}>Comece agora. Com compromisso.</MiniHeroSubtitle>

                {showScrollArea && (
                    <ScrollArea 
                        onClick={handleScrollDown}
                        animate={bounce} // Animação contínua
                    >
                        <MouseIcon />
                        <ScrollText>Clique para ver mais</ScrollText>
                    </ScrollArea>
                )}
            </HeroContainer>

            {/* SEÇÃO DE FEATURES */}
            <SectionContainer 
                id='features'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <SectionTitle id='sobre' variants={fadeInUp}>Por que escolher o Kodan?</SectionTitle>
                <FeaturesGrid>
                    {[
                        { icon: <FaColumns />, title: "Dashboard Kanban", text: "Visualize todo o fluxo de trabalho em um único quadro intuitivo." },
                        { icon: <FaChartPie />, title: "Métricas e Estatísticas", text: "Tome decisões baseadas em dados com gráficos de produtividade." },
                        { icon: <FaTasks />, title: "Gestão de Projetos", text: "Centralize múltiplos projetos e defina prioridades claras." },
                        { icon: <FaUsers />, title: "Colaboração de Equipes", text: "Conecte seu time com atualizações instantâneas e atribuições." }
                    ].map((feature, index) => (
                        <FeatureCard 
                            key={index} 
                            variants={cardVariant}
                            whileHover="hover" 
                        >
                            <IconWrapper>{feature.icon}</IconWrapper>
                            <FeatureTitle>{feature.title}</FeatureTitle>
                            <FeatureText>{feature.text}</FeatureText>
                        </FeatureCard>
                    ))}
                </FeaturesGrid>
            </SectionContainer>

            {/* (COMO FUNCIONA) */}
            <WorkflowSection
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <SectionTitle variants={fadeInUp}>Da ideia à entrega</SectionTitle>
                <StepsContainer variants={staggerContainer}>
                    <StepItem variants={fadeInUp}>
                        <StepNumber 
                            whileHover={{ scale: 1.1, rotate: 360, transition: { duration: 0.6 } }}
                        >1</StepNumber>
                        <StepTitle>Crie seu Quadro</StepTitle>
                        <StepDescription>
                            Comece um novo projeto em segundos. Configure colunas personalizadas e convide sua equipe para colaborar.
                        </StepDescription>
                    </StepItem>

                    <StepItem variants={fadeInUp}>
                        <StepNumber 
                            whileHover={{ scale: 1.1, rotate: 360, transition: { duration: 0.6 } }}
                        >2</StepNumber>
                        <StepTitle>Organize Tarefas</StepTitle>
                        <StepDescription>
                            Adicione cards, defina prazos e atribua responsáveis. Mantenha todos alinhados com o objetivo.
                        </StepDescription>
                    </StepItem>

                    <StepItem variants={fadeInUp}>
                        <StepNumber 
                            whileHover={{ scale: 1.1, rotate: 360, transition: { duration: 0.6 } }}
                        >3</StepNumber>
                        <StepTitle>Acompanhe o Fluxo</StepTitle>
                        <StepDescription>
                            Mova as tarefas conforme elas progridem. Visualize gargalos e celebre cada entrega concluída.
                        </StepDescription>
                    </StepItem>
                </StepsContainer>
            </WorkflowSection>

            {/* FRASE INSPIRADORA */}
            <InspirationSection
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={scaleUp}
            >
                <BigQuote>
                    "Não é apenas sobre gerenciar tarefas.<br /> 
                    É sobre realizar <span>grandes ideias</span>."
                </BigQuote>
                <QuoteTag>Equipe kodan.</QuoteTag>
            </InspirationSection>

            {/* CTA FINAL */}
            <CTAContainer
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
                <h2>Pronto para organizar sua rotina?</h2>
                <p>Junte-se a milhares de equipes que entregam mais rápido e com mais qualidade usando o Kodan.</p>
                <PrimaryButton 
                    onClick={() => navigate('/cadastro')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Criar conta gratuita
                </PrimaryButton>
            </CTAContainer>

            <Footer />
        </Wrapper>
    )
}

export { Home }
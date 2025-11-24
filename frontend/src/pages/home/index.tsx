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
    SectionTitle
} from './styles'

// Importação do Footer
import Footer from '../../components/footer';
import { Header } from '../../components/Header';
import { useEffect, useState } from 'react';

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
            <Header/>
            
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
            <SectionContainer id="features">
                <SectionTitle>Nossos Recursos</SectionTitle>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium vitae similique, cupiditate non dignissimos nesciunt, eveniet debitis doloremque voluptatum voluptas perferendis quisquam nisi deserunt rerum sequi dicta temporibus voluptatem autem?
                </p>
                {/* Exemplo de grid ou cards aqui */}
            </SectionContainer>

            {/* FOOTER  */}
            
        </Wrapper>
    )
}

export { Home }
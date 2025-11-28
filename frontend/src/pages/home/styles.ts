import styled from 'styled-components'
import { motion } from 'framer-motion' // <--- IMPORTADO

/* --- WRAPPER GERAL --- */
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh; 
    
    background: radial-gradient(
    circle at 70% 30%, 
    #cde4faff 0%,      
    #b7d2ebff 20%,     
    #216b99ff 70%,     
    #0191daff 100%     
    );
    
    overflow-x: hidden;
    position: relative;
`

/* --- HERO SECTION --- */
export const HeroContainer = styled(motion.main)`
    width: 100%;
    min-height: 100vh; 
    
    display: flex;
    flex-direction: column;
    /* Altera para space-between para distribuir topo, meio e fundo */
    justify-content: center; 
    align-items: center;
    text-align: center;
    
    /* Aumente o padding-bottom para dar espaço ao scroll */
    padding: 120px 20px 40px 20px; 
    box-sizing: border-box;
    
    position: relative;
    z-index: 1;
`;

/* --- CONTAINER GENÉRICO --- */
export const SectionContainer = styled(motion.section)` // <--- Convertido para motion
    width: 100%;
    max-width: 1200px; 
    margin: 0 auto;
    padding: 80px 20px;
    
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    position: relative;
    z-index: 1;

    p {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.2rem;
        line-height: 1.5;
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        padding: 60px 20px;
    }
`;

export const SectionTitle = styled(motion.h2)` // <--- Convertido para motion
    font-family: 'Lobster two', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px;
    
    text-shadow: 0 4px 5px rgba(0,0,0,0.3);
    color: #ffffff;
`;

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4rem;
    width: 100%;
    box-sizing: border-box;
    z-index: 10;

    @media (max-width: 768px) {
        padding: 1.5rem 1.5rem;
    }
`;

export const LogoArea = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    gap: 10px;
    cursor: pointer;
    svg { font-size: 2rem; }
`;

export const NavLinks = styled.div`
    display: flex;
    gap: 40px;
    @media (max-width: 768px) { display: none; }
`;

export const NavLink = styled.a`
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.2s;
    &:hover { color: #ffffff; }
`;

export const SignInButton = styled.button`
    background-color: #ffffff;
    color: #004e92;
    border: none;
    padding: 10px 24px;
    border-radius: 30px;
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
`;

export const HeroTitle = styled(motion.h1)` // <--- Convertido para motion
    font-family: 'Lobster Two', sans-serif;
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.1;
    max-width: 900px;
    margin-bottom: 20px;
    letter-spacing: -1px;
    text-shadow: 0 4px 5px rgba(0,0,0,0.3);

    @media (max-width: 1024px) { font-size: 3rem; }
    @media (max-width: 768px) { font-size: 2.2rem; line-height: 1.2; }
`;

export const HeroSubtitle = styled(motion.p)` // <--- Convertido para motion
    font-family: 'Lobster Two', sans-serif;
    font-size: 2rem;
    color: rgba(255, 255, 255, 1);
    max-width: 600px;
    line-height: 1.6;
    margin-bottom: 40px;
    font-weight: 600;
    text-shadow: 0 4px 5px rgba(0,0,0,0.3);

    @media (max-width: 768px) { font-size: 1.5rem; padding: 0 10px; }
`;

export const MiniHeroSubtitle = styled(motion.p)` // <--- Convertido para motion
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: rgba(255, 255, 255, 1);
    max-width: 600px;
    line-height: 1.6;
    margin-top: 10px;
    font-weight: 600;
    gap: 10px;
    text-shadow: 0 4px 3px rgba(0,0,0,0.3);

    @media (max-width: 768px) { font-size: 1rem; padding: 0 10px; }
`;

export const ButtonGroup = styled(motion.div)` // <--- Convertido para motion
    display: flex;
    gap: 20px;
    align-items: center;
    margin-top: -15px;

    @media (max-width: 480px) {
        flex-direction: column;
        width: 100%;
        padding: 0 20px;
    }
`;

export const PrimaryButton = styled(motion.button)` // <--- Convertido para motion
    background-color: #353535ff;
    color: #ffffffff;
    border: none;
    padding: 14px 32px;
    border-radius: 30px;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 4px 5px rgba(0,0,0,0.3);

    @media (max-width: 480px) { width: 100%; }
`;

export const FeaturesGrid = styled(motion.div)` // <--- Convertido para motion
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 20px;
    width: 100%;
    @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

export const FeatureCard = styled(motion.div)` // <--- Convertido para motion
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

export const IconWrapper = styled.div`
    font-size: 3rem; 
    color: #ffffff;
    margin-bottom: 20px;
    filter: drop-shadow(0 0 10px rgba(255,255,255,0.4));
`;

export const FeatureTitle = styled.h3`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 15px;
    text-align: center;
`;

export const FeatureText = styled.p`
    font-size: 0.95rem !important; 
    line-height: 1.6;
    color: #e0e0e0;
    text-align: justify;
    text-align-last: center; 
    width: 100%;
    @media (max-width: 768px) { color: #525151ff; }
`;

export const ScrollArea = styled(motion.div)`
    position: absolute;
    bottom: 40px;
    
    /* Truque para centralizar absoluto sem transform */
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: fit-content; /* Importante para o margin auto funcionar */
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    opacity: 0.8;
    cursor: pointer;
    z-index: 5;
    
    @media (max-height: 700px) { display: none; }
`;

export const MouseIcon = styled.div`
    width: 26px;
    height: 42px;
    border: 2px solid #fff;
    border-radius: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    &::before {
        content: '';
        position: absolute;
        top: 6px;
        width: 4px;
        height: 8px;
        background-color: #fff;
        border-radius: 2px;
    }
`;

export const ScrollText = styled.span`
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.5px;
`;

/* --- SEÇÃO "COMO FUNCIONA" --- */
export const WorkflowSection = styled(motion.section)` // <--- Convertido para motion
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 20px 60px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    position: relative;
    z-index: 1;
`;

export const StepsContainer = styled(motion.div)` // <--- Convertido para motion
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    gap: 30px;
    @media (max-width: 900px) { flex-direction: column; align-items: center; gap: 50px; }
`;

export const StepItem = styled(motion.div)` // <--- Convertido para motion
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    max-width: 350px;

    &:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 25px;
        right: -50%; 
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.1) 100%);
        z-index: -1;
        @media (max-width: 900px) { display: none; }
    }
`;

export const StepNumber = styled(motion.div)` // <--- Convertido para motion
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ffffff 0%, #d4e4f7 100%);
    color: #022959;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

export const StepTitle = styled.h3`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 10px;
`;

export const StepDescription = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.5;
`;

/* --- CTA FINAL --- */
export const CTAContainer = styled(motion.div)` // <--- Convertido para motion
    width: 100%;
    max-width: 100%;
    margin: 40px auto 100px auto;
    padding: 120px 20px 60px 20px;
    background: linear-gradient(135deg, rgba(74, 144, 187, 0.49) 0%, rgba(1, 39, 58, 0.37) 100%);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;
    position: relative;
    z-index: 1;
    text-shadow: 0 4px 5px rgba(0,0,0,0.3);
    box-shadow: 0 20px 50px rgba(1, 145, 218, 0.3);

    h2 {
        font-family: 'Lobster Two', sans-serif;
        font-size: 3rem;
        color: #fff;
        margin: 0;
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.9);
        max-width: 600px;
        line-height: 1.6;
    }

    @media (max-width: 768px) {
        width: auto;
        padding: 40px 20px;
        h2 { font-size: 2rem; }
    }
`;

/* --- SEÇÃO INSPIRACIONAL --- */
export const InspirationSection = styled(motion.section)` // <--- Convertido para motion
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 50px 20px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    z-index: 1;
`;

export const BigQuote = styled.h2`
    font-family: 'Montserrat', 'Roboto', sans-serif;
    font-size: 3rem;
    font-weight: 400; 
    color: #ffffff;
    line-height: 1.3;
    margin-bottom: 20px;
    text-shadow: 0 4px 15px rgba(0,0,0,0.2);

    span {
        color: #bfe2fd; 
        font-style: italic;
    }

    @media (max-width: 768px) { font-size: 2.2rem; }
`;

export const QuoteTag = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 4px; 
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 15px;

    &::before, &::after {
        content: '';
        width: 30px;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.3);
    }
`;
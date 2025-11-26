import styled, { keyframes } from 'styled-components'

/* --- ANIMAÇÕES --- */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const float = keyframes`
  0% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
  100% { transform: translateX(-50%) translateY(0); }
`

/* --- WRAPPER GERAL --- */
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* Garante que o fundo cubra tudo, mas deixa o conteúdo esticar a página */
    min-height: 100vh; 
    
    background: radial-gradient(
    circle at 70% 30%, /* Posição do centro da "luz" */
    #cde4faff 0%,      /* Laranja/Pêssego mais claro */
    #b7d2ebff 20%,     /* Laranja um pouco mais vibrante */
    #216b99ff 70%,     /* Azul/Cinza aparece aqui */
    #0191daff 100%     /* Finaliza com o azul/cinza mais suave */
    );
    
    /* Previne scroll horizontal causado por animações ou larguras incorretas */
    overflow-x: hidden;
    /* Remove qualquer overflow-y aqui para deixar o navegador controlar o scroll principal */
    
    position: relative;
`

/* --- HERO SECTION (CONTEÚDO PRINCIPAL) --- */
export const HeroContainer = styled.main`
    width: 100%;
    /* Faz esta seção ocupar a altura da tela inteira */
    /* Ajuste o padding-top para compensar a altura do seu Header se ele for fixo */
    min-height: 100vh; 
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    padding: 120px 20px 80px 20px; 
    box-sizing: border-box;
    
    position: relative;
    z-index: 1;
    
    animation: ${fadeIn} 1s ease-out;
`;

/* --- NOVO CONTAINER GENÉRICO PARA CONTEÚDOS EXTRAS --- */
export const SectionContainer = styled.section`
    width: 100%;
    max-width: 1200px; 
    margin: 0 auto;
    padding: 80px 20px;
    
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    /* Garante que fique acima dos efeitos de fundo */
    position: relative;
    z-index: 1;

    p {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.2rem;
        line-height: 1.5;
        text-align: center;
        maxWidth: 800px;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        padding: 60px 20px;
    }
`;

/* Exemplo de título para seções novas */
export const SectionTitle = styled.h2`
    font-family: 'Lobster two', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px;
    
    text-shadow: 0 4px 5px rgba(0,0,0,0.3);
    color: #ffffff;
`;
/* --- NAVBAR (CABEÇALHO DA LANDING PAGE) --- */
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
    
    svg {
        font-size: 2rem;
    }
`;

export const NavLinks = styled.div`
    display: flex;
    gap: 40px;
    
    @media (max-width: 768px) {
        display: none; /* Esconde links no mobile para simplificar */
    }
`;

export const NavLink = styled.a`
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
        color: #ffffff;
    }
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



export const HeroTitle = styled.h1`
    font-family: 'Lobster Two', sans-serif;
    font-size: 4rem; /* 64px */
    font-weight: 800;
    line-height: 1.1;
    max-width: 900px;
    margin-bottom: 20px;
    letter-spacing: -1px;
    
    text-shadow: 0 4px 5px rgba(0,0,0,0.3);

    @media (max-width: 1024px) {
        font-size: 3rem;
    }

    @media (max-width: 768px) {
        font-size: 2.2rem;
        line-height: 1.2;
    }
`;

export const HeroSubtitle = styled.p`
    font-family: 'Lobster Two', sans-serif;
    font-size: 2rem;
    color: rgba(255, 255, 255, 1);
    max-width: 600px;
    line-height: 1.6;
    margin-bottom: 40px;
    font-weight: 600;

    text-shadow: 0 4px 5px rgba(0,0,0,0.3);

    @media (max-width: 768px) {
        font-size: 1.5rem;
        padding: 0 10px;
    }
`;


export const MiniHeroSubtitle = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: rgba(44, 44, 44, 1);
    max-width: 600px;
    line-height: 1.6;
    margin-top: 10px;
    font-weight: 600;
    gap: 10px;

    text-shadow: 0 4px 3px rgba(0,0,0,0.3);

    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0 10px;
    }
`;

export const ButtonGroup = styled.div`
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

// Botão Branco (Schedule a Demo)
export const PrimaryButton = styled.button`
    background-color: #353535ff;
    color: #ffffffff;
    border: none;
    padding: 14px 32px;
    border-radius: 30px;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.2s;
    box-shadow: 0 4px 5px rgba(0,0,0,0.3);

    &:hover {
        background-color: #ffffffff;
        color: #353535ff;
        transform: scale(1.05);
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;



/* --- NOVOS ESTILOS PARA OS CARDS GRID --- */

export const FeaturesGrid = styled.div`
    display: grid;
    /* Cria 4 colunas de tamanho igual */
    grid-template-columns: repeat(4, 1fr); 
    gap: 20px;
    width: 100%;

    /* Responsividade: vira 2 colunas em tablets */
    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    /* Responsividade: vira 1 coluna em celulares */
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const FeatureCard = styled.div`
    /* Efeito de Vidro (Glassmorphism) */
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    border-radius: 20px;
    padding: 30px 20px;
    
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza o ícone e título horizontalmente */
    
    transition: transform 0.3s ease, background 0.3s ease;

    &:hover {
        transform: translateY(-10px); /* Sobe um pouco ao passar o mouse */
        background: rgba(255, 255, 255, 0.2);
    }

`;

export const IconWrapper = styled.div`
    font-size: 3rem; /* Tamanho do ícone */
    color: #ffffff;
    margin-bottom: 20px;
    
    /* Um brilho suave atrás do ícone */
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
    font-size: 0.95rem !important; /* Força o override do estilo global se houver */
    line-height: 1.6;
    color: #e0e0e0;
    
    /* O que você pediu: Justificado */
    text-align: justify;
    /* Hack para navegadores que suportam: centraliza a última linha para ficar mais bonito */
    text-align-last: center; 
    
    width: 100%;
    @media (max-width: 768px) {
        color: #525151ff;
    }
`;



/* --- SCROLL INDICATOR --- */
export const ScrollArea = styled.div`
    /* Posicionado absolutamente no fundo do HeroContainer */
    position: absolute;
    
    /* --- CORREÇÃO: SUBI UM POUCO MAIS (de 30px para 80px) --- */
    /* Isso garante que ele fique visível em telas maiores sem parecer rodapé */
    bottom: 50px; 
    
    left: 50%;
    transform: translateX(-50%);
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    opacity: 0.8;
    
    animation: ${float} 2s infinite ease-in-out;
    cursor: pointer;
    z-index: 5;
    
    /* Esconde em telas muito baixas para não sobrepor botões */
    @media (max-height: 700px) {
        display: none;
    }

    /* Ajuste para mobile */
    @media (max-width: 768px) {
        bottom: 50px;
    }
`;

export const MouseIcon = styled.div`
    width: 26px;
    height: 42px;
    border: 2px solid #fff;
    border-radius: 20px;
    position: relative;
    display: flex;
    justify-content: center;

    /* A "rodinha" do mouse */
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
import styled, { keyframes } from 'styled-components'

/* --- ANIMAÇÕES --- */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

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

/* --- CONTAINER DA GRADE --- */
export const SectionContainer = styled.section`
    width: 100%;
    
    max-width: 1400px; 
    margin: 0 auto;
    
    padding: 140px 40px 80px 40px;
    
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    position: relative;
    z-index: 1;
    
    animation: ${fadeIn} 1s ease-out;

    @media (max-width: 768px) {
        padding: 120px 20px 60px 20px;
    }
`;

/* --- GRID DE EQUIPE --- */
export const TeamGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 15px;
    width: 100%;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

/* CARD DO MEMBRO */
export const TeamCard = styled.div<{ $bgImage: string }>`
    height: 700px; 
    width: 100%;
    
    background-image: url(${props => props.$bgImage});
    background-size: cover;
    background-position: center top; 
    background-repeat: no-repeat;
    
    border-radius: 4px; 
    position: relative;
    overflow: hidden;
    
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    transition: transform 0.4s ease, box-shadow 0.4s ease, filter 0.3s ease;
    

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        background-size: cover; 
        filter: grayscale(0%);
        z-index: 2; /* Traz para frente no hover */
    }

    @media (max-width: 1440px) {
        height: 600px;
    }

    @media (max-width: 768px) {
        height: 500px;
    }
`;

/* Overlay escuro na parte inferior para o texto */
export const MemberOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%; /* Ocupa a metade inferior para garantir o gradiente suave */
    
    /* Gradiente mais forte para garantir leitura */
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%);
    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 40px 20px;
    
    /* Texto levemente transparente até o hover */
    opacity: 0.9;
    transition: opacity 0.3s ease;
    
    ${TeamCard}:hover & {
        opacity: 1;
    }
`;

export const MemberName = styled.h3`
    font-family: 'Oswald', sans-serif;
    font-weight: 800;
    font-size: 2.2rem;
    color: #ffffff;
    text-transform: uppercase;
    margin: 0;
    text-align: center;
    letter-spacing: 1px;
    line-height: 1;
    
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
`;

export const MemberRole = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    color: #60a5fa; 
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-top: 10px;
    text-align: center;
    
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
`;
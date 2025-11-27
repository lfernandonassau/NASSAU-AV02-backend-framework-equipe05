import styled, { keyframes } from 'styled-components'
import { MdLock, MdPerson, MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { IAnimation } from './types'

/* --- Animações Sutis --- */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PageWrapper = styled.div`
    background: radial-gradient(
        circle at 70% 30%, 
        #cde4faff 0%,      
        #b7d2ebff 20%,     
        #216b99ff 70%,     
        #0191daff 100%     
    );
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    width: 100%;
    min-height: 100vh;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    overflow-x: hidden; 
`;

export const LoginNewScreen = styled.div<IAnimation>`
    display: flex;
    align-items: stretch;
    width: 100%;
    max-width: 1200px;
    min-height: 600px;
    
    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
    border-radius: 20px;
    overflow: hidden;

    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    
    ${({ $visivel }) => $visivel && `
        opacity: 1;
        transform: translateY(0);
    `}

    @media (max-width: 1024px) {
        flex-direction: column;
        max-width: 500px;
        min-height: auto;
    }
`;

/* --- LADO ESQUERDO (LOGIN) --- */
export const LoginContainer = styled.main`
    flex: 1.2;
    padding: 60px 50px;
    
    background: rgba(255, 255, 255, 0.15); 
    backdrop-filter: blur(10px);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (max-width: 1024px) {
        width: 100%;
        padding: 40px 30px;
        border-right: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(172, 232, 250, 0.18);
    }
`;

/* --- LADO DIREITO (BOAS VINDAS) --- */
export const WelcomeContainer = styled.main`
    flex: 1.8;
    padding: 60px;
    
    background: linear-gradient(135deg, rgba(7, 93, 150, 0.9), rgba(2, 28, 46, 0.95));
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Centraliza o conteúdo (Column) horizontalmente */
    text-align: center;
    position: relative;
    
    @media (max-width: 1024px) {
        display: none;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    /* Adicionado align-items center para centralizar Logo e Textos no Welcome */
    align-items: center; 
    justify-content: center;
    width: 100%;
    max-width: 380px;
    z-index: 1;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* Remove margens fixas aqui para controlar nos filhos se necessário */
`;

/* --- TIPOGRAFIA MELHORADA --- */

export const TitleLogin = styled.h1`
    font-family: 'Lobster Two', cursive;
    font-weight: 700;
    color: #ffffff;
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 5px;
    text-shadow: 0 4px 10px rgba(0,0,0,0.2);
    
    @media (max-width: 768px) {
        font-size: 3rem;
    }
`;

export const KanbanSubText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    text-align: center; 
    margin-bottom: 40px;
    letter-spacing: 0.5px;

    text-shadow: 0 3px 10px rgba(0,0,0,0.3);
`;

export const TitleWelcome = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    color: #ffffff;
    font-size: 2.5rem;
    text-align: center;
    line-height: 1.2;
    margin-bottom: 20px;
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
`;

export const WelcomeSubText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.85);
    font-size: 1.1rem;
    text-align: center; 
    line-height: 1.6;
    margin-bottom: 30px;
`;

export const TitleKanban = styled.h3`
    font-family: 'Lobster Two', cursive;
    font-weight: 400;
    color: #ffffff;
    font-size: 1.5rem;
    margin-top: 10px;
    margin-bottom: 40px;
    opacity: 0.8;
`;

/* --- LINKS E BOTÕES AUXILIARES --- */

export const EsqueciSubText = styled.a`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.85rem; 
    text-align: right;
    width: 100%;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.2s;
    
    margin-top: 5px;
    margin-bottom: 24px; 

    &:hover {
        color: #ffffff;
        text-decoration: underline;
    }
`;

export const TextoLivreSubText = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.85rem; 
    
    display: flex;
    align-items: center; 
    justify-content: center;
    
    margin: 20px 0;
    width: 100%;

    &::before, &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: rgba(255, 255, 255, 0.3); 
    }
    &::before { margin-right: 15px; }
    &::after { margin-left: 15px; }
`;

export const PageLogin = styled.img`
    width: 120px; 
    margin-bottom: 30px;
    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2));
    display: block; /* Garante comportamento de bloco */
`;

/* --- ÍCONES --- */
export const LoginIconStyled = styled(MdPerson)`
    color: rgba(255, 255, 255, 0.9);
    font-size: 20px;
`;
export const PasswordStyled = styled(MdLock)`
    color: rgba(255, 255, 255, 0.9);
    font-size: 20px;
`;
export const MagicEye = styled(MdVisibility)`
    color: rgba(255, 255, 255, 0.7);
    font-size: 20px;
    cursor: pointer;
    &:hover { color: white; }
`;
export const MagicEyeOff = styled(MdVisibilityOff)`
    color: rgba(255, 255, 255, 0.7);
    font-size: 20px;
    cursor: pointer;
    &:hover { color: white; }
`;
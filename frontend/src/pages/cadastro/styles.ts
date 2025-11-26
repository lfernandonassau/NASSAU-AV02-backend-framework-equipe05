import styled from 'styled-components';
import { IAnimation } from './types';
import { MdVisibility, MdVisibilityOff, MdEmail, MdLock } from 'react-icons/md';

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
    
    /* No mobile, centraliza a logo também */
    @media (max-width: 768px) {
        margin-bottom: 0;
    }
`;

export const LogoImage = styled.img`
    height: 32px;
`;

export const LogoText = styled.h1`
    font-family: 'Lobster Two', cursive;
    color: #ffffff;
    font-size: 24px;
    margin: 0;
    font-weight: 700;
`;

// WRAPPER GERAL
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
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
`;

// O CARD PRINCIPAL (Branco)
export const CardContainer = styled.div<IAnimation>`
    background-color: #ffffff;
    width: 100%;
    max-width: 900px; /* Mais largo para caber a sidebar */
    min-height: 550px;
    border-radius: 16px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
    
    display: flex;
    overflow: hidden; /* Para o conteudo não vazar as bordas arredondadas */
    
    /* Animação de entrada */
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    
    ${({ $visivel }) => $visivel && `
        opacity: 1;
        transform: translateY(0);
    `}

    @media (max-width: 768px) {
        flex-direction: column; /* No mobile vira coluna */
        min-height: auto;
        margin-top: 20px;
    }
<<<<<<< HEAD
=======
`
export const TitleLogin = styled.p`
    font-family: 'Lobster two';
    font-style: normal;
    font-weight: 700;
    color: #ffffffff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 15px;
    line-height: 75px;

`

export const TitleWelcome = styled.h2`
    font-family: 'Montserrat';
    font-weight: 700;
    color: #000000ff;
    font-size: 15px;
    text-align: center;
    padding-right: 500px;
    margin-top: -25px;
`

export const WelcomeSubText = styled.div`
    font-family: 'Montserrat', 'sans serif';
    font-weight: 400;
    color: #000000ff;

    background-color: #7bdcfa65;

    filter: 
        drop-shadow(0 8px 6px rgba(12, 24, 40, 0.25));
    &:hover {
    transform: translateY(-5px);
    filter: 
        drop-shadow(0 12px 10px rgba(12, 24, 40, 0.3));
    }

    border: 2px solid #ffffffff;
    border-radius: 10px;
    padding: 15px;
    background-image:
    width: 100%;
    font-size: 22px;
    text-align: center; 
    line-height: 35px;
    margin: 25px auto 15px auto;
    @media (max-width: 768px) {
      font-size: 20px;
    }
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #000000;
  font-size: 1rem;
  cursor: pointer;
  padding-left: 660px;
  margin-top: -10px;


  &:hover {
    color: #FFFFFF;
  }
>>>>>>> a19e89aafe6684bd61f3d51b03d2b4e6951f0e78
`;

// --- SIDEBAR (Esquerda - Azul/Roxo) ---
export const SidebarContainer = styled.div`
    width: 280px;
    background-color: #000000;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
    flex-shrink: 0;
    
    /* Decoração (Bolinha) */
    &::after {
        content: '';
        position: absolute;
        bottom: -50px;
        left: -50px;
        width: 150px;
        height: 150px;
        background-color: #0191daff;
        border-radius: 50%;
        filter: blur(40px);
        opacity: 0.8;
    }

    /* Outra decoração */
    &::before {
        content: '';
        position: absolute;
        bottom: 20px;
        right: 20px;
        width: 80px;
        height: 80px;
        background-color: #6cc4f0ff;
        border-radius: 50%;
        filter: blur(30px);
        opacity: 0.6;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 20px;
        flex-direction: row;
        justify-content: center;
        overflow: hidden;
        min-height: 100px;
        gap: 15px;
    }
`;

// Item do Passo (Bolinha + Texto)
export const StepItem = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    z-index: 2; /* Ficar acima das bolinhas decorativas */
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 5px;
        text-align: center;
    }
`;

// A Bolinha do número
export const StepNumber = styled.div<{ $active?: boolean }>`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid ${({ $active }) => $active ? 'transparent' : '#ffffff'};
    background-color: ${({ $active }) => $active ? '#bfe2fd' : 'transparent'};
    color: ${({ $active }) => $active ? '#022959' : '#ffffff'};
    
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    transition: all 0.3s ease;
`;

// O Texto ao lado (PASSO X / TÍTULO)
export const StepTexts = styled.div`
    display: flex;
    flex-direction: column;
    
    span {
        font-family: 'Montserrat', sans-serif;
    }

    .step-label {
        font-size: 10px;
        color: rgba(255,255,255,0.7);
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .step-title {
        font-size: 13px;
        font-weight: 700;
        color: #ffffff;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    @media (max-width: 768px) {
        display: none; /* Esconde o texto no mobile pra caber */
    }
`;

// --- ÁREA DO FORMULÁRIO (Direita - Branco) ---
export const FormContent = styled.div`
    flex: 1;
    padding: 40px 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Título topo, Form meio, Botões base */
    
    @media (max-width: 768px) {
        padding: 30px 20px;
    }
`;

export const FormHeader = styled.div`
    margin-bottom: 30px;

    h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
        color: #022959;
        font-weight: 700;
        margin: 0 0 10px 0;
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
        color: #9699aa;
        margin: 0;
        line-height: 1.5;
    }
`;

// --- ESTILOS GENÉRICOS REAPROVEITADOS ---
export const FormBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1; /* Ocupa o espaço disponível */
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
`;

// Botão "Próximo" Estilo Dark Blue
export const NextButton = styled.button`
    background-color: #022959;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    
    &:hover {
        background-color: #164a8a;
    }
`;

// Botão "Voltar" Estilo Texto
export const BackButton = styled.button`
    background: transparent;
    border: none;
    color: #9699aa;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
        color: #022959;
    }
`;

// Adaptação para o componente Input (Labels e Inputs mais limpos)
export const Label = styled.label`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #022959;
    font-weight: 500;
    margin-bottom: 5px;
    display: block;
`;

/* --- Utilitários Antigos Mantidos para Compatibilidade --- */
export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
`;

export const TextoLivreSubText = styled.span`
    font-family: 'Montserrat';
    color: #9699aa;
    font-size: 12px;
`;

export const TermsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
`;

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
    width: 18px;
    height: 18px;
    accent-color: #0191daff;
`;

export const TermsText = styled.p`
    font-family: 'Montserrat';
    font-size: 14px;
    color: #9699aa;
    span { color: #0191daff; text-decoration: underline; cursor: pointer; }
`;

export const ErrorText = styled.p`
    color: #ee374a;
    font-size: 12px;
    font-family: 'Montserrat';
    margin-top: 5px;
`;


export const MagicEye = styled(MdVisibility)`
    color: #9699aa;
    cursor: pointer;
    font-size: 20px;
    transition: color 0.2s;
    &:hover { color: #022959; }
`;

export const MagicEyeOff = styled(MdVisibilityOff)`
    color: #9699aa;
    cursor: pointer;
    font-size: 20px;
    transition: color 0.2s;
    &:hover { color: #022959; }
`;

export const LoginIconStyled = styled(MdEmail)`
    color: #022959;
    font-size: 20px;
`;

export const PasswordStyled = styled(MdLock)`
    color: #022959;
    font-size: 20px;
`;
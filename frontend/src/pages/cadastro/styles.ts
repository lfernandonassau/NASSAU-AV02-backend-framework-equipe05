import styled from 'styled-components';
import { IAnimation } from './types';
import { MdVisibility, MdVisibilityOff, MdEmail, MdLock, MdCheckCircle } from 'react-icons/md';

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
    max-width: 900px;
    min-height: 550px;
    border-radius: 16px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
    
    display: flex;
    overflow: hidden; 
    
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    
    ${({ $visivel }) => $visivel && `
        opacity: 1;
        transform: translateY(0);
    `}

    @media (max-width: 768px) {
        flex-direction: column;
        min-height: auto;
        margin-top: 20px;
    }
`;

// MINI SIDEBAR
export const SidebarContainer = styled.div`
    width: 280px;
    background: linear-gradient(160deg, #10b4f5ff 0%, #eeececff 100%); 
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
    flex-shrink: 0;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -50px;
        left: -50px;
        width: 150px;
        height: 150px;
        background-color: #eeececff; 
        border-radius: 50%;
        filter: blur(40px);
        opacity: 0.8;
    }

    &::before {
        content: '';
        position: absolute;
        bottom: 20px;
        right: 20px;
        width: 80px;
        height: 80px;
        background-color: #eeececff;
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

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    z-index: 2;
    
    @media (max-width: 768px) {
        display: none; /* Esconde logo na sidebar mobile para economizar espaço */
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

// Item do Passo
export const StepItem = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    z-index: 2;
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 5px;
        text-align: center;
    }
`;

export const StepNumber = styled.div<{ $active?: boolean }>`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid ${({ $active }) => $active ? 'transparent' : '#ffffff'};
    background-color: ${({ $active }) => $active ? '#ffffffff' : 'transparent'};
    color: ${({ $active }) => $active ? '#000000ff' : '#ffffff'};
    
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    transition: all 0.3s ease;
`;

export const StepTexts = styled.div`
    display: flex;
    flex-direction: column;
    
    span { font-family: 'Montserrat', sans-serif; }

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
        display: none; 
    }
`;

// ÁREA DO FORMULÁRIO (Direita)
export const FormContent = styled.div`
    flex: 1;
    padding: 40px 60px;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 768px) {
        padding: 30px 20px;
    }
`;

export const FormHeader = styled.div`
    margin-bottom: 30px;

    h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
        color: #10b4f5ff;
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

// COMPONENTES INTERNOS DO FORM (REUTILIZÁVEIS NOS STEPS)
export const FormBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
`;

export const Label = styled.label`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #222222ff;
    font-weight: 500;
    margin-bottom: 6px;
    display: block;
`;

export const ErrorText = styled.p`
    color: #ee374a;
    font-size: 12px;
    font-family: 'Montserrat';
    margin-top: 4px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
`;

export const NextButton = styled.button`
    background-color: #10b4f5ff;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    
    &:hover { background-color: #242424ff; }
`;

export const BackButton = styled.button`
    background: transparent;
    border: none;
    color: #9699aa;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: color 0.2s;

    &:hover { color: #10b4f5ff; }
`;

/* UTILITÁRIOS E ÍCONES  */
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
    accent-color: #10b4f5ff;
`;

export const TermsText = styled.p`
    font-family: 'Montserrat';
    font-size: 14px;
    color: #9699aa;
    span { 
        color: #10b4f5ff; 
        text-decoration: underline; 
        cursor: pointer; }
`;

export const LoginIconStyled = styled(MdEmail)` 
    color: #10b4f5ff; 
    font-size: 20px; 
`;
export const PasswordStyled = styled(MdLock)` 
    color: #10b4f5ff; 
    font-size: 20px; 
`;
export const MagicEye = styled(MdVisibility)` 
    color: #9699aa; cursor: pointer; 
    font-size: 20px; 
    &:hover { 
        color: #10b4f5ff; 
    } 
`;
export const MagicEyeOff = styled(MdVisibilityOff)` 
    color: #9699aa; 
    cursor: pointer; 
    font-size: 20px; 
    &:hover { 
        color: #10b4f5ff; 
    } 
`;

/*  TELA DE SUCESSO  */
export const SuccessContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    width: 100%;
    height: 100%;
    text-align: center;
`;

export const SuccessIcon = styled(MdCheckCircle)`
    font-size: 90px;
    color: #48bb78;
    margin-bottom: 20px;
`;

export const SuccessTitle = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: #022959;
    margin: 0 0 10px 0;
`;

export const SuccessMessage = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: #64748b;
    margin: 0;
    line-height: 1.6;
`;

export const RedirectText = styled.span`
    display: block;
    margin-top: 30px;
    font-size: 0.9rem;
    color: #94a3b8;
    font-weight: 600;
`;


// Container para Loading e Sucesso
export const CenteredContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const LoadingText = styled.p`
    font-family: 'Montserrat', sans-serif;
    color: #10b4f5ff;
    font-weight: 600;
    font-size: 1rem;
`;
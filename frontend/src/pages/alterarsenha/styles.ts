import styled, { keyframes } from 'styled-components';
import { MdLock, MdVisibility, MdVisibilityOff, MdCheckCircle } from 'react-icons/md';

/* --- ANIMAÇÕES --- */

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const popIn = keyframes`
  0% { transform: scale(0); opacity: 0; }
  80% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

/* --- LAYOUT GERAL --- */

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
`;

export const ResetCard = styled.div`
    background-color: #ffffff;
    width: 100%;
    max-width: 480px;
    padding: 40px;
    
    border-radius: 16px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.2);
    
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    animation: ${fadeInUp} 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);

    @media (max-width: 480px) {
        padding: 30px 20px;
    }
`;

/* --- COMPONENTES DO FORMULÁRIO --- */

export const Header = styled.div`
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LogoImage = styled.img`
    width: 80px;
    margin-bottom: 15px;
    filter: drop-shadow(0 5px 6px rgba(0, 0, 0, 0.45));
`;

export const Title = styled.h1`
    font-family: 'Lobster Two', cursive;
    font-weight: 700;
    color: #022959;
    font-size: 2.5rem;
    margin: 0 0 10px 0;
`;

export const Subtitle = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 0.95rem;
    color: #64748b;
    margin: 0;
    line-height: 1.5;
    max-width: 90%;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const ButtonGroup = styled.div`
    margin-top: 10px;
    width: 100%;
`;

/* --- ÍCONES ESTILIZADOS --- */

export const LockIcon = styled(MdLock)`
    color: #022959;
    font-size: 20px;
`;

export const MagicEye = styled(MdVisibility)`
    color: #9699aa;
    font-size: 20px;
    cursor: pointer;
    transition: color 0.2s;
    &:hover { color: #022959; }
`;

export const MagicEyeOff = styled(MdVisibilityOff)`
    color: #9699aa;
    font-size: 20px;
    cursor: pointer;
    transition: color 0.2s;
    &:hover { color: #022959; }
`;

/* --- ESTADOS DE SUCESSO (PAGE DE CARREGAMENTO) --- */

export const SuccessContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    width: 100%;
    animation: ${popIn} 0.5s ease-out;
`;

export const SuccessIcon = styled(MdCheckCircle)`
    font-size: 80px;
    color: #48bb78; /* Verde Sucesso */
    margin-bottom: 20px;
    filter: drop-shadow(0 4px 6px rgba(72, 187, 120, 0.3));
`;

export const SuccessTitle = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #022959;
    margin: 0 0 10px 0;
`;

export const SuccessMessage = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 0.95rem;
    color: #64748b;
    margin: 0;
    max-width: 80%;
    line-height: 1.5;
`;

export const RedirectText = styled.span`
    display: block;
    margin-top: 30px;
    font-size: 0.85rem;
    color: #94a3b8;
    font-weight: 500;
    animation: ${blink} 1.5s infinite;
`;

export const FooterArea = styled.div`
    margin-top: 20px;
`;
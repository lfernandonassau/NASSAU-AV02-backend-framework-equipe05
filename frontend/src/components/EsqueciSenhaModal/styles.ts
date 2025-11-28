import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  
  animation: ${fadeIn} 0.2s ease-out;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 450px;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
  
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  
  font-family: 'Montserrat', sans-serif;
  animation: ${slideUp} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #022959;
  margin: 0;
  line-height: 1.2;
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  margin-top: 8px;
  line-height: 1.5;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #94a3b8;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background-color: #f1f5f9;
    color: #ef4444;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 10px;
`;

// --- ESTADO DE SUCESSO ---
export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  gap: 15px;

  svg {
    font-size: 4rem;
    color: #48bb78; /* Verde sucesso */
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.2rem;
    color: #022959;
    font-weight: 700;
    margin: 0;
  }

  p {
    font-size: 0.95rem;
    color: #64748b;
    line-height: 1.5;
  }
`;
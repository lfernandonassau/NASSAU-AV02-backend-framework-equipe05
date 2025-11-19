import styled from "styled-components";

// --- Variáveis de Estilo ---
const colors = {
    darkBlue: '#006391c',
    lightGray: '#f8fafc',
    grayBorder: '#cbd5e1',
    textPrimary: '#0f172a',
    textLabel: '#1e293b',
    focusBlue: '#00b7d7',
    white: '#ffffff',
    errorRed: '#ff3333',
    textSecondary: '#475569', 
};


export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const ModalCard = styled.div`
  font-family: 'Montserrat';
  background: ${colors.white};
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 32px 64px rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${colors.grayBorder};
`;

export const ModalHeader = styled.div`
  background-color: ${colors.darkBlue};
  border-bottom: 1px solid ${colors.white};
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ModalTitle = styled.h2`
  font-family: 'Montserrat';
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${colors.white};
  font-size: 1rem;
  cursor: pointer;
  line-height: 1;
  padding: 0.25rem 0.5rem;

  &:hover {
    color: ${colors.textPrimary};
  }
`;

export const ModalBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const AvatarPreview = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: 2px solid ${colors.white};
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  object-fit: cover;
`;

// Componente para o texto de atribuição do usuário
export const UserAssignmentText = styled.span`
  font-size: 0.8rem;
  color: ${colors.textSecondary};
`;

export const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${colors.textLabel};
`;

// O TextInput agora aceita a prop hasError para estilização condicional
export const TextInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  background-color: ${colors.lightGray};
  border: 1px solid ${({ hasError }) => (hasError ? colors.errorRed : colors.grayBorder)};
  border-radius: 6px;
  font-size: 0.8rem;
  padding: 0.5rem 0.6rem;
  color: ${colors.textPrimary};
  outline: none;
  transition: border-color 0.1s ease;

  &:focus {
    border-color: ${colors.focusBlue};
    box-shadow: 0 0 3px rgba(0,183,215,0.25);
    background-color: ${colors.white};
  }
`;

export const ErrorMessage = styled.span`
  font-size: 0.75rem;
  color: ${colors.errorRed};
  font-weight: 500;
  margin-top: -0.5rem; 
  margin-bottom: 0.75rem;
  display: block;
`;

export const ModalFooter = styled.div`
  border-top: 1px solid ${colors.grayBorder};
  background-color: ${colors.lightGray};
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
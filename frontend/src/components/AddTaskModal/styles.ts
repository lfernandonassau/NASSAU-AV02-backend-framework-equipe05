import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.6); /* Fundo um pouco mais escuro e azulado */
  backdrop-filter: blur(4px); /* Efeito de vidro fosco no fundo */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000; /* Z-index alto para ficar acima de tudo */
`;

export const ModalCard = styled.div`
  font-family: 'Montserrat', sans-serif;
  background: #ffffff;
  width: 100%;
  max-width: 450px; /* Um pouco mais largo para respirar */
  border-radius: 12px; /* Bordas mais arredondadas */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  /* Animação de entrada suave */
  animation: modalFadeIn 0.2s ease-out;
  
  @keyframes modalFadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
`;

export const ModalHeader = styled.div`
  background-color: #2c2c2cff;
  padding: 1.25rem 1.5rem; /* Mais padding */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '';
    width: 4px;
    height: 16px;
    background-color: rgba(255,255,255,0.3);
    border-radius: 2px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  font-size: 1.5rem;

  &:hover {
    background: rgba(255,255,255,0.2);
  }
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem; /* Maior espaçamento entre campos */
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 0.5rem;
`;

export const AvatarPreview = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  object-fit: cover;
`;

export const UserAssignmentText = styled.span`
  font-size: 0.9rem;
  color: #1e293b;
  font-weight: 500;
  
  /* Dica visual de que é atribuído a ele */
  &::before {
    content: '👤 ';
    margin-right: 4px;
  }
`;

/* Agrupador de Label + Input para melhor organização */
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 600;
  color: #475569;
  margin-left: 2px;
`;

export const TextInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  background-color: #ffffff;
  border: 1.5px solid ${({ hasError }) => (hasError ? '#ef4444' : '#e2e8f0')};
  border-radius: 8px;
  font-size: 0.95rem;
  padding: 0.75rem 1rem; /* Input mais alto e confortável */
  color: #1e293b;
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    border-color: #006391;
    box-shadow: 0 0 0 3px rgba(0, 99, 145, 0.1); /* Ring focus sutil */
  }
`;

export const ErrorMessage = styled.span`
  font-size: 0.8rem;
  color: #ef4444;
  font-weight: 500;
  margin-top: -0.25rem;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &::before {
    content: '⚠️';
    font-size: 0.8rem;
  }
`;

export const ModalFooter = styled.div`
  background-color: #f8fafc;
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: flex-end; /* Alinha botões à direita (padrão UX) */
  gap: 1rem;
  border-top: 1px solid #e2e8f0;
`;
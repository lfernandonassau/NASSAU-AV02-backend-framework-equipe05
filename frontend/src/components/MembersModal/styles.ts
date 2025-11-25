import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); 
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  padding: 20px; 
  box-sizing: border-box;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 16px; 
  width: 100%;
  max-width: 480px;
  padding: 30px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  font-family: 'Montserrat', sans-serif; 
 
  
  max-height: 90vh; 
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SmallTitle = styled.span`
  font-size: 12px;
  color: #9ca3af; /* Cinza claro */
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const MainTitle = styled.h2`
  font-size: 18px;
  color: #111827;
  font-weight: 700;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #9ca3af;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  
  &:hover {
    color: #111827;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 400px;
  overflow-y: auto;
  
  /* Custom Scrollbar fina */
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e5e7eb;
    border-radius: 4px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

// Avatar genérico para imagem ou ícone
export const AvatarCircle = styled.div<{ $bgColor?: string; $isIcon?: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ $bgColor }) => $bgColor || '#f3f4f6'};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;

  /* Se for imagem */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Se for o ícone de adicionar */
  svg {
    font-size: 24px;
    color: #fff; /* Ícone branco */
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Name = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #111827;
`;

export const Role = styled.span`
  font-size: 12px;
  color: #9ca3af;
  font-weight: 400;
`;

// Botão Genérico que muda de estilo baseado na prop "variant"
export const ActionButton = styled.button<{ $variant?: 'add' | 'remove' }>`
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;

  /* Variante ADICIONAR  */
  ${({ $variant }) => $variant === 'add' && `
    background-color: #424242ff; 
    color: white;
    border: none;
    box-shadow: 0 2px 5px rgba(63, 63, 63, 0.3);

    &:hover {
      background-color: #2b2a2aff;
    }
  `}

  /* Variante REMOVER */
  ${({ $variant }) => $variant === 'remove' && `
    background-color: transparent;
    color: #9ca3af;
    border: 1px solid #e5e7eb;

    &:hover {
      border-color: #d1d5db;
      color: #6b7280;
    }
  `}
`;
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001; // Um pouco maior que o normal para garantir
  backdrop-filter: blur(2px);
`;

export const ModalContainer = styled.div`
  background: #fff;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: shake 0.3s ease-in-out; // Animação de "tremida" para erro

  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
  }
`;

export const IconWrapper = styled.div`
  color: #ef4444; // Vermelho erro
  font-size: 4rem;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const Message = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`;

export const CloseButton = styled.button`
  background: #ef4444; // Vermelho
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #dc2626; // Vermelho mais escuro
  }
`;
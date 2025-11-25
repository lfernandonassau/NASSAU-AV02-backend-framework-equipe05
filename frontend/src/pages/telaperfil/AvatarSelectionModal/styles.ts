import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 9999; /* Bem alto */
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.2s ease-out;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 450px;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  animation: ${slideUp} 0.3s ease-out;
  font-family: 'Montserrat', sans-serif;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 15px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  transition: color 0.2s;

  &:hover {
    color: #ef4444;
  }
`;

export const AvatarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-bottom: 20px;
  
  @media (max-width: 400px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const AvatarOption = styled.img`
  width: 100%;
  aspect-ratio: 1; /* Mantém quadrado */
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  border: 3px solid transparent;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
    border-color: #006391;
    box-shadow: 0 4px 10px rgba(0, 99, 145, 0.3);
  }
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #e2e8f0;
  margin: 10px 0 20px 0;
`;

export const UploadSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  p {
    font-size: 14px;
    color: #64748b;
    margin: 0;
  }
`;

export const UploadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #f1f5f9;
  color: #334155;
  border: 1px solid #cbd5e1;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  justify-content: center;

  &:hover {
    background-color: #e2e8f0;
    color: #0f172a;
    border-color: #94a3b8;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;
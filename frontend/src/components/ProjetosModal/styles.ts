import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

export const ModalCard = styled.div`
  font-family: 'Montserrat', sans-serif;
  background: #fff;
  width: 90%;
  max-width: 400px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  animation: fadeIn 0.2s ease-out;
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
`;

export const Header = styled.div`
  background-color: #006391;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

export const HeaderTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

export const CloseButton = styled.button`
  background: rgba(255,255,255,0.2);
  border: none;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background: rgba(255,255,255,0.3);
  }
`;

export const Body = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.span`
  font-size: 12px;
  color: #94a3b8;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const Value = styled.span`
  font-size: 15px;
  color: #1e293b;
  font-weight: 500;
`;

/* --- Componentes Específicos do Projeto --- */

export const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f1f5f9;

  strong {
    font-size: 18px;
    color: #1e293b;
  }
`;

export const ProjectIconWrapper = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f1f5f9;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
        font-size: 24px;
        color: #006391;
    }
`;

/* Barra de Progresso para o Modal */
export const ModalProgressContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
`;

export const ModalProgressBarBg = styled.div`
    width: 100%;
    height: 8px;
    background-color: #e2e8f0;
    border-radius: 4px;
    overflow: hidden;
`;

export const ModalProgressBarFill = styled.div<{ $width: number }>`
    width: ${({ $width }) => $width}%;
    height: 100%;
    background-color: #006391; 
    border-radius: 4px;
`;
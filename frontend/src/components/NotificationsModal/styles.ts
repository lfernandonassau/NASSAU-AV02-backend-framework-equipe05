import styled from "styled-components";

const colors = {
  white: "#ffffff",
  lightGray: "#f8fafc",
  grayBorder: "#e2e8f0",
  textPrimary: "#0f172a",
  textSecondary: "#64748b",
  darkBlue: "#006391",
  shadow: "rgba(0,0,0,0.15)",
};

export const Container = styled.div`
  position: fixed;
  top: 72px;
  right: 24px;

  width: 420px;
  max-height: 520px;

  background: ${colors.white};
  border-radius: 12px;
  border: 1px solid ${colors.grayBorder};

  box-shadow: 0px 12px 24px ${colors.shadow};

  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 999;
  animation: slideIn 0.18s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    width: 360px; 
    right: 20px;  
  }

  @media (max-width: 480px) {
    width: 90%;       
    right: 5%;        
    left: 5%;         
    top: 65px;        
    max-height: 70vh; 
  }
`

export const Header = styled.div`
  background: ${colors.white};
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${colors.grayBorder};
`;

export const Title = styled.h3`
  color: ${colors.textPrimary};
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  font-family: "Montserrat";
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${colors.textSecondary};
  font-size: 1.3rem;
  cursor: pointer;

  &:hover {
    color: ${colors.textPrimary};
  }
`;

export const Content = styled.div`
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: auto;
  scroll-behavior: smooth;

  /* Esconde a barra de scroll */
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const NotificationItem = styled.div`
  background: ${colors.white};
  padding: 0.9rem 1rem;
  border-radius: 10px;
  border: 1px solid ${colors.grayBorder};
  
  box-shadow: 0px 2px 4px rgba(0,0,0,0.04);

  display: flex;
  flex-direction: column;
  gap: 4px;

  transition: background 0.2s;

  &:hover {
    background: #f9fafb;
  }
`;

export const NotificationTitle = styled.span`
  font-size: 0.9rem;
  color: ${colors.textPrimary};
  font-weight: 600;
`;

export const NotificationTime = styled.span`
  font-size: 0.75rem;
  color: ${colors.textSecondary};
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 1.5rem 0;
  color: ${colors.textSecondary};
  font-size: 0.9rem;
`;

import styled from "styled-components";

const colors = {
  white: "#ffffff",
  grayBorder: "#e2e8f0",
  textPrimary: "#0f172a",
  textSecondary: "#64748b",

  readBlue: "#006391",
  unreadGray: "#9CA3AF",

  shadow: "rgba(0,0,0,0.08)",
};

export const Container = styled.div`
  position: fixed;
  top: 72px;
  right: 24px;

  width: 390px;
  max-height: 520px;

  background: ${colors.white};
  border-radius: 12px;
  border: 1px solid ${colors.grayBorder};
  box-shadow: 0px 8px 20px ${colors.shadow};

  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 999;

  @media (max-width: 768px) {
    width: 90%;
    right: 5%;
    left: 5%;
    top: 64px;
    max-height: 70vh;
  }
`;

export const Header = styled.div`
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
  flex: 1;
`;

export const NotificationItem = styled.div<{ $read?: boolean }>`
  background: ${({ $read }) => ($read ? colors.white : "rgba(59, 130, 246, 0.03)")};
  padding: 0.9rem 1rem;
  border-radius: 10px;
  border: 1px solid ${colors.grayBorder};

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: 0.15s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
    background: ${({ $read }) => ($read ? "#f9fafb" : "rgba(135, 175, 238, 0.06)")};
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #2563eb;
  display: inline-block;
  margin-left: 12px;
  flex-shrink: 0;
`;

/* BASE para botões do rodapé */
const FooterIconButton = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 8px;

  border: none;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  color: #6b7280;

  transition: 0.2s;

  svg {
    font-size: 22px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #111827;
  }
`;


export const ClearAllButton = styled(FooterIconButton)``;
export const MarkAllButton = styled(FooterIconButton)``;

export const Footer = styled.div`
  padding: 0.8rem 1.25rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  border-top: 1px solid ${colors.grayBorder};
`;

export const EmptyState = styled.div`
  height: 180px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 12px;
  color: #94a3b8;

  font-size: 0.95rem;
  font-family: "Montserrat", sans-serif;
  text-align: center;

  svg {
    font-size: 56px;
    color: #cbd5e1;
  }
`;

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

  width: 420px;
  max-height: 520px;

  background: ${colors.white};
  border-radius: 12px;
  border: 1px solid ${colors.grayBorder};

  box-shadow: 0px 8px 20px ${colors.shadow};

  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 999;
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
  scroll-behavior: smooth;
  flex: 1;
`;

export const NotificationItem = styled.div<{ $read?: boolean }>`
  background: ${colors.white};
  padding: 0.9rem 1rem;
  border-radius: 10px;
  border: 1px solid ${colors.grayBorder};

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 4px 10px rgba(0,0,0,0.06);
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

export const CheckIcon = styled.div<{ $read?: boolean }>`
  font-size: 1.2rem;
  color: ${({ $read }) => ($read ? colors.readBlue : colors.unreadGray)};
  display: flex;
  align-items: center;
`;

export const Footer = styled.div`
  padding: 0.8rem 1.25rem;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid ${colors.grayBorder};
`;

export const MarkAllButton = styled.button`
  background: transparent;
  border: none;
  color: ${colors.readBlue};
  font-size: 0.85rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 1.5rem 0;
  color: ${colors.textSecondary};
  font-size: 0.9rem;
`;

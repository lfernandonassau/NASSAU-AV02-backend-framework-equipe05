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

/* Blocos de Informação */
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

/* Avatar Destacado no Modal */
export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f1f5f9;

  img {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    
    strong {
      font-size: 18px;
      color: #1e293b;
    }
    span {
      font-size: 13px;
      color: #64748b;
    }
  }
`;

export const StatusBadgeModal = styled.span<{ $online?: boolean }>`
  align-self: flex-start;
  background-color: ${({ $online }) => $online ? '#48bb78' : '#cbd5e0'};
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
`;
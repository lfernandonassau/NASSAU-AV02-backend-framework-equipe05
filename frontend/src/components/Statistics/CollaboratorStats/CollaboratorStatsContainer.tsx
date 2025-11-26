import styled from "styled-components";

export const CollaboratorContainer = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  min-height: 350px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.06);
  border: 1px solid #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  box-sizing: border-box;
  overflow: hidden;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #0B1B3A;
    margin: 0 0 8px 0;
  }

  @media (max-width: 1024px) {
    min-height: 300px;
    padding: 20px;
  }

  @media (max-width: 768px) {
    min-height: 260px;
    padding: 16px;
    border-radius: 12px;

    h3 {
      font-size: 14px;
    }
  }
`;  

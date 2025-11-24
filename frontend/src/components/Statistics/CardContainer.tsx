import styled from "styled-components";

export const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  box-shadow: 0 6px 20px rgba(0,0,0,0.06);
  border: 1px solid #f1f1f1;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #0B1B3A;
    margin: 0 0 8px 0;
  }

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 12px;

    h3 {
      font-size: 14px;
    }
  }
`;


import styled from "styled-components";

export const ChartWrapper = styled.div`
  height: 300px;

  h3 {
    font-family: 'Montserrat', 'sans serif';
    font-size: 16px;
    font-weight: 600;
    color: #1f1f1f;
    margin-bottom: 12px;
  }

  @media (max-width: 900px) {
    height: 260px;
  }

  @media (max-width: 600px) {
    height: 220px;

    h3 {
      font-size: 14px;
      margin-bottom: 8px;
    }
  }
`;

import styled from "styled-components";

export const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #1f1f1f;
    margin-bottom: 10px;
  }

  svg,
  canvas {
    margin: auto;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 14px;
      text-align: center;
    }
  }
`;

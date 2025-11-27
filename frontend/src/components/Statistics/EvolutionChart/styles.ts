import styled from "styled-components";

export const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

h3 {
  font-family: "Montserrat", sans-serif;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: #0B1B3A;
  margin: 0 0 14px 0;
}

  svg,
  canvas {
    margin: 0;
  }

  @media (max-width: 768px) {
    h3 {
      text-align: left;
    }

  @media (max-width: 480px) {
  h3 {
    font-size: 13px;
  }  
}

  }
`;
import styled from "styled-components";

export const AreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: flex-start;

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
    margin: auto;
  }

  @media (max-width: 768px) {
    h3 {
      text-align: center;
    }
  }
`;

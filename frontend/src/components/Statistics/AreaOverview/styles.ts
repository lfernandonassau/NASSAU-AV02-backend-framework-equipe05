import styled from "styled-components";

export const AreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    margin-bottom: 10px;
    color: #021c2e;
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

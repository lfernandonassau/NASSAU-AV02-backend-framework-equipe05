import styled from "styled-components";

export const AreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;

  h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    margin-bottom: 10px;
    color: #021c2e;
  }

  @media (max-width: 1024px) {
    height: 280px;

    h3 {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 768px) {
    height: 260px;

    h3 {
      font-size: 0.9rem;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    height: 240px;

    h3 {
      font-size: 0.85rem;
    }
  }
`;

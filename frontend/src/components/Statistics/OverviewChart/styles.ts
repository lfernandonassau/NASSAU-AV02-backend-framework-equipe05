import styled from "styled-components";

export const PieWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
h3 {
  font-family: "Montserrat", sans-serif;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: #0B1B3A;
  margin: 0 0 14px 0;
  text-align: left !important;
}

  @media (max-width: 1024px) {
    height: 230px;
  }

  @media (max-width: 768px) {
    height: auto;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
  h3 {
    font-size: 13px;
  }
}
  
`;

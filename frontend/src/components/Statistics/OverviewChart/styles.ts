import styled from "styled-components";

export const PieWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 600;
  }

  @media (max-width: 1024px) {
    height: 230px;
  }

  @media (max-width: 768px) {
    height: 210px;
  }
`;

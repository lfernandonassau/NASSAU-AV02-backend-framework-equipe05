import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  h3 {
  font-family: "Montserrat", sans-serif;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: #0B1B3A;
  margin: 0 0 14px 0;
}
  @media (max-width: 480px) {
  h3 {
    font-size: 13px;
  }

  @media (max-width: 768px) {
  padding: 20px 16px;
  min-height: 300px;
}

}

`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:first-of-type {
    margin-top: 8px;
  }
`;


export const LabelIcon = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const TotalIcon = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const LabelText = styled.span`
  flex: 1;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #2E2E2E;
`;

export const TotalText = styled.span`
  flex: 1;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #2E2E2E;
  margin-bottom: 15px;
`;

export const Value = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #0B1B3A;
  font-family: 'Montserrat', sans-serif;
  min-width: 28px;
  text-align: right;
`;

export const Bar = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 10px;
  background: #E6E6E6;
  overflow: hidden;
  margin-bottom: 15px;
`;

export const Fill = styled.div<{ width: number; color: string }>`
  width: ${({ width }) => width}%;
  height: 100%;
  background: ${({ color }) => color};
  transition: width 0.3s ease;
`;
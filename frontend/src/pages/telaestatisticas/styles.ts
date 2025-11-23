import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f5f7fa;
  padding: 32px;
  padding-left: 385px; 
  box-sizing: border-box;
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 32px;
  color: #0b1b3a;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

export const ChartsRow = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;

  > div {
    flex: 1;
    height: 260px;
  }
`;

export const BottomRow = styled.div`
  width: 100%;
  height: 320px;
`;

export const CollaboratorSection = styled.div`
  width: 100%;
  margin-top: 32px;
`;

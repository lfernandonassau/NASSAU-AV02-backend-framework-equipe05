import styled from "styled-components";

/* ✅ Mesmo layout-base das outras telas */
export const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: #f5f7fa;
`;

export const Container = styled.div`
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-left: 385px; 
`;


export const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: #232323;
  margin: 0;
  text-align: left;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ChartsRow = styled.div`
  display: flex;
  gap: 24px;

  > div {
    flex: 1;
    height: 240px;
  }
`;

export const BottomRow = styled.div`
  width: 100%;
  height: 260px;
  margin-top: 32px; 
`;


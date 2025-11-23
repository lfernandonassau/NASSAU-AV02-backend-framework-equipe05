import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f5f7fa;
  padding: 32px;
  padding-left: 385px;

  @media (max-width: 1024px) {
    padding: 20px;
    padding-top: 80px;
    padding-left: 20px;
  }
`;


export const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: #0b1b3a;
  margin: 24px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
`;

export const ChartsRow = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;

  > div {
    flex: 1;
    height: 320px;
  }

  @media (max-width: 1024px) {
    > div {
      height: 300px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > div {
      width: 100%;
      height: 260px;
    }
  }
`;

export const BottomRow = styled.div`
  width: 100%;
  height: 340px;

  @media (max-width: 1024px) {
    height: 320px;
  }

  @media (max-width: 768px) {
    height: 280px;
  }
`;

export const CollaboratorSection = styled.div`
  width: 100%;
  padding-bottom: 40px;

  > div {
    height: auto;
    min-height: 200px;
  }

  @media (max-width: 768px) {
    > div {
      min-height: 220px;
    }
  }
`;

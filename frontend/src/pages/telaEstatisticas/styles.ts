import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-image: linear-gradient(150deg, #ece9e9ff, #ffffffff);
`;

export const Content = styled.div`
  flex: 1;
  padding: 32px 40px;
  margin-left: 350px;
  margin-top: 90px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 1024px) {
    margin-left: 0;
    padding: 24px 20px;
    margin-top: 110px;
  }

  @media (max-width: 768px) {
    padding: 18px 16px;
  }
`;

export const GreetingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 8px;
`;

export const GreetingImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 52px;
    height: 52px;
  }
`;

export const GreetingTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const GreetingTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #2e2e2e;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const GreetingSubtitle = styled.p`
  font-size: 14px;
  color: #6a6a6a;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const ChartsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const BottomRow = styled.div`
  width: 100%;
`;

export const CollaboratorSection = styled.div`
  width: 100%;
`;

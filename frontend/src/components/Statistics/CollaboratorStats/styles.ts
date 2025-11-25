import styled from "styled-components";

export const StatsContainer = styled.div`
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  box-sizing: border-box;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #0B1B3A;
    margin: 0;
  }
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #1f1f1f;
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
  justify-content: flex-start;
`;

export const StatItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  strong {
    font-size: 22px;
    font-weight: 700;
    color: #2e2e2e;
  }
`;

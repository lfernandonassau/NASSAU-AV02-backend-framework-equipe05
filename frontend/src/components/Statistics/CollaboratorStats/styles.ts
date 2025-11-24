import styled from "styled-components";

export const StatsContainer = styled.div`
  padding: 20px;

  h3 {
    font-family: "Montserrat", "sans serif";
    font-size: 16px;
    font-weight: 600;
    color: #1f1f1f;
    margin-bottom: 16px;
  }
`;

export const StatsList = styled.ul`
  font-family: "Montserrat", "sans serif";
  list-style: none;
  padding: 0;
  margin: 0;
  color: #1f1f1f;
  font-size: 14px;
  font-weight: 500;
`;

export const StatItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  strong {
    font-weight: 600;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

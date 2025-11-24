import styled, { css } from 'styled-components'
import { CopyrightProps } from '.';

export const CopyrightBar = styled.div<CopyrightProps>`
  width: 100%;
  padding: 20px;
  background: transparent;
  text-align: center;
  
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);

  ${({ variant }) => variant === "telas" && css`
        color: #555555ff;
    `}
`;

export const PrivacyTrigger = styled.button<CopyrightProps>`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
  margin-top: 10px;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }

  ${({ variant }) => variant === "telas" && css`
        color: #555555ff;
  `}
`;
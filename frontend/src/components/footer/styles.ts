import styled from "styled-components";
import { MdSms } from "react-icons/md";
import { FaGithubAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IContainerAnimationProps } from "./types";

export const FooterContainer = styled.footer<IContainerAnimationProps>`
  font-family: 'Montserrat';
  background: linear-gradient(180deg, #b9d9ff 0%, #ebf4ff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 20px 20px 20px;

  box-sizing: border-box;
  width: 100%;

  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  ${({ $visivel }) =>
    $visivel &&
    `
      opacity: 1;
      transform: translateY(0);
  `}
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 15px;
`;

export const Slogan = styled.h3`
  margin-top: 5px;
  margin-bottom: 35px;
  font-size: 17px;
  font-weight: 600;
  color: #0b1b3a;  
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 22px;
  margin-bottom: 45px;
`;

export const SocialIcon = styled.a`
  font-size: 26px;
  color: #0b1b3a;  
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
    opacity: 0.7;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 50px;
  padding-top: 20px;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    padding-top: 10px;
  }
`;

export const FooterSection = styled.div`
  flex: 1 1 200px;
  min-width: 180px;
  text-align: center;

  @media (max-width: 600px) {
    min-width: 0;

    &:first-child {
      grid-column: 1 / 3;
    }
  }
`;

export const FooterTitle = styled.h4`
  color: #0b1b3a;   
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  text-transform: uppercase;
`;

export const FooterText = styled.a`
  display: block;
  font-size: 13px;
  color: #0b1b3a;   
  margin: 4px 0;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: #1454b8; 
  }
`;

export const ContactRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin: 6px 0;
`;

export const Copyright = styled.p`
  margin-top: 35px;
  font-size: 11px;
  color: #0b1b3a;  
  border-top: 1px solid #0b1b3a33;
  padding-top: 12px;
  width: 100%;
  text-align: center;
`;

export const GitHubIco = styled(FaGithubAlt)`
  font-size: 26px;
  color: #0b1b3a; 
`;

export const EmailIco = styled(MdEmail)`
  font-size: 20px;
  color: #0b1b3a; 
`;

export const SmsIco = styled(MdSms)`
  font-size: 20px;
  color: #0b1b3a; 
`;

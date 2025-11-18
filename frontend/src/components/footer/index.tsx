import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterText,
  Copyright,
  GitHubIco,
  FooterDad,
  RightIcon,
  EmailIco,
  SmsIco,
} from "./styles";
import { IFooter } from "./types";


const FooterIcos = ( {rightIcon}:IFooter ) => {
  return (
    <FooterText>
      {rightIcon ? (<RightIcon>{rightIcon}</RightIcon>) : null}
    </FooterText>

  )

}

const Footer: React.FC = ( ) => {
  return (
    
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Sobre</FooterTitle>

          <FooterText>
          
          Kodan oferece um ambiente de gestão de projetos em formato Kanban, onde líderes e colaboradores podem criar projetos, organizar tarefas e acompanhar o progresso das equipes;
          
          </FooterText>

        </FooterSection>

        <FooterSection>

          <FooterTitle>Suporte</FooterTitle>
          <FooterDad>
            <FooterIcos rightIcon={<EmailIco/>}/>
            <FooterText href="kodanorg@enterprise.co">KodanOrg@enterprise.co</FooterText>
          </FooterDad>
          <FooterDad>
            <FooterIcos rightIcon={<SmsIco />}/>
            <FooterText href="#"> (82) 94002 - 8922 </FooterText>
          </FooterDad>

        </FooterSection>

        <FooterSection>
  
          <FooterTitle> contatos </FooterTitle>

          <FooterDad>
            <FooterIcos rightIcon={<GitHubIco/>}/>
            <FooterText href="https://github.com/Ryan27r">
              Ryan Rodrigues
            </FooterText>
          </FooterDad>
          <FooterDad>
            <FooterIcos rightIcon={<GitHubIco/>}/>
            <FooterText href="https://github.com/rafxys">
              Rafael Alexandre
            </FooterText>
          </FooterDad>
          <FooterDad>
            <FooterIcos rightIcon={<GitHubIco/>}/>
            <FooterText href="https://github.com/Sadousan">
              Samuel Douglas
            </FooterText>
          </FooterDad>
          <FooterDad>
            <FooterIcos rightIcon={<GitHubIco/>}/>
            <FooterText href="https://github.com/AlandersonSantos">
              Alanderson santos
            </FooterText>
          </FooterDad>
          
          
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} — Todos os direitos reservados para a kodan corporation
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

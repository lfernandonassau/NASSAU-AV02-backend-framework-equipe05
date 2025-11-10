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
          
          Kodan é uma plataforma web desenvolvida com o objetivo de aplicar conceitos de arquitetura MVC, APIs RESTful e integração entre front-end e back-end.A aplicação oferece um ambiente de gestão de projetos em formato Kanban, onde líderes e colaboradores podem criar projetos, organizar tarefas e acompanhar o progresso das equipes
          
          </FooterText>

        </FooterSection>

        <FooterSection>
          <FooterTitle>Links úteis</FooterTitle>
          <FooterText href="#">Início</FooterText>
          <FooterText href="#">Projetos</FooterText>
          <FooterText href="#">Contato</FooterText>
        </FooterSection>

        <FooterSection>
          
          <FooterTitle>Contato</FooterTitle>
          <FooterDad>
            <FooterIcos rightIcon={<EmailIco/>}/>
            <FooterText href="kodanorg@enterprise.co">KodanOrg@enterprise.co</FooterText>
          </FooterDad>

          <FooterDad>
            <FooterIcos rightIcon={<GitHubIco/>}/>
            <FooterText href="https://github.com/rafxys">
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
            <FooterText href="https://github.com/rafxys">
              Samuel Douglas
            </FooterText>
          </FooterDad>
          
          
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} — Desenvolvido por Samuel Douglas Santos Sadousan
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

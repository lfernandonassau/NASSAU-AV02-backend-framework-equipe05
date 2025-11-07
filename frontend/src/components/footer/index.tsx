import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterText,
  FooterLink,
  Copyright,
} from "./styles";

const Footer: React.FC = () => {
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
          <FooterLink href="#">Início</FooterLink>
          <FooterLink href="#">Projetos</FooterLink>
          <FooterLink href="#">Contato</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contato</FooterTitle>
          <FooterText>Email: samuel.douglas@example.com</FooterText>
          <FooterText>
            GitHub: <FooterLink href="#">@Sadousan</FooterLink>
          </FooterText>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} — Desenvolvido por Samuel Douglas Santos Sadousan
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

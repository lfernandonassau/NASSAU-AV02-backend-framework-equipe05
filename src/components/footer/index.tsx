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
            
            Kodan é uma plataforma web desenvolvidacom que oferece um ambiente de gestão de projetos em formato Kanban , onde líderes e colaboradores podem criar projetos, organizar tarefas e acompanhar o progresso das equipes.
            
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
          <FooterText>Email: samuel.douglas@SAudosan.com</FooterText>
          <FooterText>
            GitHub: <FooterLink href="#"> ... </FooterLink>
          </FooterText>
          <FooterText>
            <FooterLink href="#"> ... </FooterLink>
          </FooterText>
          <FooterText>
        <FooterLink href="#"> ... </FooterLink>
          </FooterText>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} copyright — Todos os direitos reservados
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

import React, { useEffect, useRef, useState } from "react";
import Tooltip from "@mui/material/Tooltip";

import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterText,
  ContactRow,
  Copyright,
  SocialRow,
  SocialIcon,
  Logo,
  Slogan,
  GitHubIco,
  EmailIco,
  SmsIco,
} from "./styles";

import PrivacyModal from "./PrivacyModal";

import LogoKodan from "../../assets/logo.svg";

const Footer: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [visivel, setVisivel] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const atual = ref.current;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          if (atual) obs.unobserve(atual);
        }
      },
      { threshold: 0.1 }
    );

    if (atual) obs.observe(atual);

    return () => {
      if (atual) obs.unobserve(atual);
    };
  }, []);

  return (
    <FooterContainer ref={ref} $visivel={visivel}>

      {/* LOGO */}
      <Logo src={LogoKodan} alt="Kodan Logo" />

      {/* SLOGAN */}
      <Slogan>Kodan — Projetos mais claros, equipes mais fortes</Slogan>

      {/* ÍCONES (GITHUBS DOS DEVs) */}
      <SocialRow>

        <Tooltip title="Ryan Rodrigues" arrow>
          <SocialIcon href="https://github.com/Ryan27r">
            <GitHubIco />
          </SocialIcon>
        </Tooltip>

        <Tooltip title="Rafael Alexandre" arrow>
          <SocialIcon href="https://github.com/rafxys">
            <GitHubIco />
          </SocialIcon>
        </Tooltip>

        <Tooltip title="Samuel Douglas" arrow>
          <SocialIcon href="https://github.com/Sadousan">
            <GitHubIco />
          </SocialIcon>
        </Tooltip>

        <Tooltip title="Alanderson Santos" arrow>
          <SocialIcon href="https://github.com/AlandersonSantos">
            <GitHubIco />
          </SocialIcon>
        </Tooltip>

        <Tooltip title="Daniel Manuel" arrow>
          <SocialIcon href="https://github.com/daniel2311x">
            <GitHubIco />
          </SocialIcon>
        </Tooltip>

      </SocialRow>

      {/* COLUNAS */}
      <FooterContent>

        {/* ----------------- SOBRE ----------------- */}
        <FooterSection>
          <FooterTitle>Sobre</FooterTitle>

          <FooterText>
            Kodan oferece um ambiente de gestão de projetos em formato Kanban,
            onde líderes e colaboradores podem criar projetos, organizar tarefas
            e acompanhar o progresso das equipes;
          </FooterText>
        </FooterSection>

        {/* ----------------- CONTATOS  ----------------- */}
        <FooterSection>
          <FooterTitle>Contatos</FooterTitle>

          <ContactRow>
            <EmailIco />
            <FooterText href="mailto:projetokodan@gmail.com">
              projetokodan@gmail.com
            </FooterText>
          </ContactRow>

          <ContactRow>
            <SmsIco />
            <FooterText href="#">
              (82) 94002 - 8922
            </FooterText>
          </ContactRow>
        </FooterSection>

        {/* ----------------- DADOS SENSÍVEIS  ----------------- */}
        <FooterSection>
          <FooterTitle>Dados Sensíveis</FooterTitle>

          <FooterText
            as="button"
            onClick={() => setOpenModal(true)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              width: "100%",
              textAlign: "center",  
            }}
          >
            Políticas de Privacidade
          </FooterText>
        </FooterSection>

      </FooterContent>

      {/* COPYRIGHT */}
      <Copyright>
        © {new Date().getFullYear()} — Todos os direitos reservados para a kodan corporation
      </Copyright>

      {/* MODAL */}
      <PrivacyModal open={openModal} onClose={() => setOpenModal(false)} />
    </FooterContainer>
  );
};

export default Footer;


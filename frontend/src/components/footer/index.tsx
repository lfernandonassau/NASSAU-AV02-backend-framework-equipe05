import React, { useEffect, useRef, useState } from "react";
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
  
  // Animação ao rolar a página
      const [containerVisivel, setParteDoisVisivel] = useState(false)
      
      //    Tipamos como HTMLDivElement porque é um <div>
      const containerRef = useRef<HTMLDivElement>(null)
  
      // IntersectionObserver
      useEffect(() => {
          const refAtual = containerRef.current // Guarda a referência
          
          // Cria o observador
          const observer = new IntersectionObserver(
              ([entry]) => { // O callback é chamado quando a visibilidade muda
                  if (entry.isIntersecting) {
                      // O elemento entrou na tela
                      setParteDoisVisivel(true)
                      
                      
                      // Para de observar, pois a animação só precisa rolar 1 vez
                      if (refAtual) {
                          observer.unobserve(refAtual)
                      }
                  }
              },
              {
                  threshold: 0.1 // Ativa quando 10% do elemento estiver visível
              }
          )
  
          // Manda o observador "assistir" o elemento do 'ref'
          if (refAtual) {
              observer.observe(refAtual)
          }
  
          // Limpa o observador quando o componente for desmontado
          return () => {
              if (refAtual) {
                  observer.unobserve(refAtual)
              }
          }
      }, [])
  
  
  
  
  return (
    
    <FooterContainer ref={containerRef} $visivel={containerVisivel}>
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

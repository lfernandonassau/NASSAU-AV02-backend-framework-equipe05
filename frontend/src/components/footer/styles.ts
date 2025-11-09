import styled from "styled-components";

// Container principal do rodapé
export const FooterContainer = styled.footer`
  font-family: 'Montserrat';
  background-color: #ffffffee;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px 20px 20px;
  border-top: 1px solid #000000ff;
`;

// Área interna com as seções
export const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;
`;

// Cada bloco de conteúdo dentro do rodapé
export const FooterSection = styled.div`
  flex: 1 1 250px;
  min-width: 200px;
`;

// Título de cada seção
export const FooterTitle = styled.h4`
  font-family: 'Lobster Two';
  color: #57c2f8ff;
  font-size: 20px;
  margin-bottom: 10px;
  letter-spacing: 1px;
`;

// Parágrafos e textos gerais
export const FooterText = styled.p`
  font-size: 12px;
  line-height: 1.5;
  margin: 4px 0;
  color: #000000ff;
`;

// Links do rodapé com animação de hover
export const FooterLink = styled.a`
  display: block;
  font-size: 12px;
  color: #000000ff;
  text-decoration: none;
  margin: 4px 0;
  transition: color 0.3s ease;

  &:hover {
    color: #00aaff;
  }
`;

// Texto de copyright
export const Copyright = styled.p`
  font-size: 10px;
  color: #888;
  margin-top: 30px;
  text-align: center;
  border-top: 1px solid #1e1e1e;
  padding-top: 15px;
  width: 100%;
  max-width: 1200px;
`;


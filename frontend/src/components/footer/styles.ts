import { FaGithubAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";
import { IContainerAnimationProps } from "./types";


// Container principal do rodapé
export const FooterContainer = styled.footer<IContainerAnimationProps>`
  font-family: 'Montserrat';
  background-image: linear-gradient(150deg, #9fcafcff, #ffffffff);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px 20px 20px;

  /* Animação ao rolar a pagina */
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1s ease-out, transform 1s ease-out;
    ${({ $visivel }) => $visivel && `
        opacity: 1;
        transform: translateY(0);
    `}


  @media (max-width: 768px) {
      max-width: 100%; /* Importante para não vazar */
      padding: 30px 10px 0 10px;
        
    }
`;

// Área interna com as seções
export const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 100px;
  padding-left: 100px;
`;

// Cada bloco de conteúdo dentro do rodapé
export const FooterSection = styled.div`
  flex: 1 1 250px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
`;



// Componente pai para o flex-box do footer redes sociais:
export const FooterDad = styled.div`
  display: flex;  
  flex-direction: row;
`
// Título de cada seção
export const FooterTitle = styled.h4`
  font-family: 'Montserrat', sans-serif;
  color: #000000ff;
  font-size: 20px;
  margin-bottom: 10px;
  letter-spacing: 1px;
`

// Parágrafos e textos gerais
export const FooterText = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  line-height: 1.5;
  margin: 4px 0;
  color: #000000ff;

  text-decoration: none;

  transition: color 0.3s ease;

  &:hover {
    color: #00aaff;
  }
  @media (max-width: 768px) {
      max-width: 100%; /* Importante para não vazar */
      font-size: 10px;
        
    }
`

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

export const GitHubIco = styled(FaGithubAlt)`
  color: #000000;
  margin-right: 8px;
  height: 18px;

`
export const EmailIco = styled(MdEmail)`
  color: #000000;
  margin-right: 8px;
  height: 18px;
`


export const RightIcon = styled.div`
    margin-right: 0;
    height: 20px;
`

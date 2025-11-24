import styled from "styled-components";

/* Container Principal do Footer */
export const FooterContainer = styled.footer`
  width: 100%;
  /* Fundo escuro semitransparente para contrastar com o gradiente da Home */
  background: rgba(0, 0, 0, 0.3); 
  backdrop-filter: blur(5px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  /* Garante que fique acima do background da página */
  position: relative;
  z-index: 10;
  
  margin-top: auto; /* Empurra o footer para o final se estiver num flex container */
`;

/* Área de Conteúdo (Grid de 3 colunas) */
export const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 60px 20px;
  
  display: grid;
  grid-template-columns: 1.2fr 1.5fr 1fr; /* Marca maior, Sobre médio, Contato menor */
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 60px;
  }
`;

/* --- Coluna 1: Marca --- */
export const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const LogoImage = styled.img`
  width: 140px; /* Ajuste conforme o tamanho real do seu SVG */
  height: auto;
  
  /* Filtro opcional para deixar o logo branco caso ele seja preto */
  /* filter: brightness(0) invert(1); */ 
`;

export const Slogan = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
`;

/* --- Colunas Genéricas --- */
export const SectionColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  p {
    font-family: 'Montserrat', sans-serif;
  }
  span {
    font-family: 'Montserrat', sans-serif;
  }
  
  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const SectionTitle = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const AboutText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  text-align: justify;
  
  @media (max-width: 900px) {
    text-align: center;
  }
`;

/* --- Contato e Ícones --- */
export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;

  svg {
    color: #ffffff;
  }
`;

export const GithubGrid = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 5px;
`;

export const GithubLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  color: #fff;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #000; 
    transform: translateY(-3px);
  }
`;

/* --- Barra de Copyright --- */
export const CopyrightBar = styled.div`
  width: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

export const PrivacyTrigger = styled.button`
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
`;
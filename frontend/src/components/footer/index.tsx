import { useState } from "react"
import { FaGithubAlt, FaEnvelope } from "react-icons/fa"
import LogoKodan from "../../assets/logo.svg"

import PrivacyModal  from "./PrivacyModal"

import {
  FooterContainer,
  FooterContent,
  BrandSection,
  LogoImage,
  Slogan,
  SectionColumn,
  SectionTitle,
  AboutText,
  ContactItem,
  GithubGrid,
  GithubLink,
  CopyrightBar,
  PrivacyTrigger 
} from "./styles"

const Footer = () => {
  // hook para controlar se o modal está aberto ou fechado
  const [isModalOpen, setIsModalOpen] = useState(false);

  const developers = [
    { name: "Samuel", url: "https://github.com/usuario1" },
    { name: "Ryan", url: "https://github.com/usuario2" },
    { name: "Rafael", url: "https://github.com/usuario3" },
    { name: "Alanderson", url: "https://github.com/usuario4" },
  ];

  return (
    <> 
      {/* Fragment (<>...</>) para agrupar o Footer e o Modal */}
      
      <FooterContainer>
        <FooterContent>
          <BrandSection>
            <LogoImage src={LogoKodan} alt="Logo Kodan" />
            <Slogan>Kodan — Projetos mais claros, equipes mais fortes.</Slogan>
          </BrandSection>

          <SectionColumn>
            <SectionTitle>Sobre o Projeto</SectionTitle>
            <AboutText>
              Kodan oferece um ambiente de gestão de projetos em formato Kanban,
              onde líderes e colaboradores podem criar projetos, organizar tarefas
              e acompanhar o progresso das equipes de forma intuitiva e eficaz.
            </AboutText>
          </SectionColumn>

          <SectionColumn>
            <SectionTitle>Contato & Time</SectionTitle>
            
            <ContactItem>
              <FaEnvelope />
              <span>projetokodan@gmail.com</span>
            </ContactItem>

            <p style={{ color: '#fff', fontSize: '0.9rem', marginTop: '15px', marginBottom: '8px' }}>
              Nossos Repositórios:
            </p>
            
            <GithubGrid>
              {developers.map((dev, index) => (
                <GithubLink 
                  key={index} 
                  href={dev.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title={`GitHub de ${dev.name}`}
                >
                  <FaGithubAlt />
                </GithubLink>
              ))}
            </GithubGrid>
          </SectionColumn>
        </FooterContent>

        <CopyrightBar>
          © {new Date().getFullYear()} Kodan. Todos os direitos reservados.
          <br />
          
          {/*  Botão que ativa o modal */}
          <PrivacyTrigger onClick={() => setIsModalOpen(true)}>
            Políticas de Privacidade & Termos de Uso
          </PrivacyTrigger>
          
        </CopyrightBar>
      </FooterContainer>

      {/* Modal fica aqui fora do container visual do footer, mas dentro do componente */}
      <PrivacyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export  { Footer }
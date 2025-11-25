import React from 'react'
import { MdClose } from 'react-icons/md'
import {
  Overlay,
  ModalCard,
  Header,
  HeaderTitle,
  CloseButton,
  Body,
  InfoBlock,
  Label,
  Value,
  ProjectHeader,
  ProjectIconWrapper,
  ModalProgressContainer,
  ModalProgressBarBg,
  ModalProgressBarFill
} from './styles'
import { LiaProjectDiagramSolid } from 'react-icons/lia';

// Interface do Projeto (mesma do Dashboard)
interface Project {
  id: number; 
  name: string; 
  tasks: string; 
  status: string; 
  completion: number;
}

interface ProjetosDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjetosModal: React.FC<ProjetosDetailsModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        
        <Header>
          <HeaderTitle>Detalhes do Projeto</HeaderTitle>
          <CloseButton onClick={onClose}>
            <MdClose />
          </CloseButton>
        </Header>

        <Body>
          <ProjectHeader>
            <ProjectIconWrapper>
               <LiaProjectDiagramSolid />
            </ProjectIconWrapper>
            <strong>{project.name}</strong>
          </ProjectHeader>

          <InfoBlock>
            <Label>Status</Label>
            <Value>{project.status}</Value>
          </InfoBlock>

          <InfoBlock>
            <Label>Tarefas Totais</Label>
            <Value>{project.tasks}</Value>
          </InfoBlock>

          <InfoBlock>
            <Label>Progresso ({project.completion}%)</Label>
            <ModalProgressContainer>
                <ModalProgressBarBg>
                    <ModalProgressBarFill $width={project.completion} />
                </ModalProgressBarBg>
            </ModalProgressContainer>
          </InfoBlock>
        </Body>

      </ModalCard>
    </Overlay>
  );
};

export { ProjetosModal }
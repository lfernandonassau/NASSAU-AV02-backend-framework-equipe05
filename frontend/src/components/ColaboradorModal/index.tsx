import React from 'react';
import { MdClose } from 'react-icons/md';
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
  UserProfile,
  StatusBadgeModal
} from './styles';

// Interface dos dados do autor (pode importar do index da pagina se preferir)
interface Author {
  id: number;
  name: string;
  email: string;
  funcao: string;
  date: string;
  img: string;
}

interface ColaboradorModalProps {
  author: Author | null;
  onClose: () => void;
}

const ColaboradorModal: React.FC<ColaboradorModalProps> = ({ author, onClose }) => {
  if (!author) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <Header>
          <HeaderTitle>Detalhes do Colaborador</HeaderTitle>
          <CloseButton onClick={onClose}>
            <MdClose />
          </CloseButton>
        </Header>

        <Body>
          <UserProfile>
            <img src={author.img} alt={author.name} />
            <div>
              <strong>{author.name}</strong>
              <span>{author.email}</span>
            </div>
          </UserProfile>

          <InfoBlock>
            <Label>Função</Label>
            <Value>{author.funcao}</Value>
          </InfoBlock>

          <InfoBlock>
            <Label>Último Review</Label>
            <Value>{author.date}</Value>
          </InfoBlock>

          <InfoBlock>
            <Label>Projeto Vinculado</Label>
            <Value>TaskLock</Value> {/* Dado estático baseado no seu código original */}
          </InfoBlock>
        </Body>
      </ModalCard>
    </Overlay>
  );
};

export  { ColaboradorModal }
import React from 'react';
import { createPortal } from 'react-dom'; // <--- Importação do Portal
import { MdClose, MdPersonAdd } from 'react-icons/md';
import {
  Overlay,
  ModalContainer,
  Header,
  TitleGroup,
  SmallTitle,
  MainTitle,
  CloseButton,
  ListContainer,
  ListItem,
  UserInfo,
  AvatarCircle,
  Texts,
  Name,
  Role,
  ActionButton
} from './styles';

interface Member {
  id: number;
  name: string;
  email: string;
  funcao: string; 
  img: string;
}

interface MembersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockMembers: Member[] = [
  { id: 1, name: "Rafael Alexandre", email: "rafael@kodan.com", funcao: "Fullstack Dev", img: "https://avatars.githubusercontent.com/u/179970243?v=4" },
  { id: 2, name: "Ryan", email: "ryan@kodan.com", funcao: " Frontend Dev", img: "https://avatars.githubusercontent.com/u/162740474?v=4" },
  { id: 3, name: "Samuel", email: "sadosan@kodan.com", funcao: "Backend Dev", img: "https://avatars.githubusercontent.com/u/122215538?v=4" },
  { id: 4, name: "Alandelon", email: "alandelon@kodan.com", funcao: "Fullstack Dev", img: "https://avatars.githubusercontent.com/u/173320062?v=4" },
  { id: 5, name: "Daniel", email: "daniel@kodan.com", funcao: " Frontend Dev", img: "https://avatars.githubusercontent.com/u/211064470?v=4" },
];

const MembersModal: React.FC<MembersModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // A mágica acontece aqui: createPortal renderiza o filho dentro do document.body
  return createPortal(
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        
        {/* Cabeçalho */}
        <Header>
          <TitleGroup>
            <SmallTitle>Tela de colaboradores</SmallTitle>
            <MainTitle>Monte sua equipe</MainTitle>
          </TitleGroup>
          <CloseButton onClick={onClose}>
            <MdClose />
          </CloseButton>
        </Header>

        <ListContainer>
          {/* Item Fixo: Adicionar Novo Membro */}
          <ListItem>
            <UserInfo>
              <AvatarCircle $bgColor="#363636ff" $isIcon>
                <MdPersonAdd />
              </AvatarCircle>
              <Texts>
                <Name>Adicionar novos colaboradores</Name>
                <Role>Nome/Função</Role>
              </Texts>
            </UserInfo>
            {/* Botão de Ação (Adicionar) */}
            <ActionButton $variant="add" onClick={() => alert("Adicionar novo!")}>
               Convidar
            </ActionButton>
          </ListItem>

          {/* Lista de Membros Existentes */}
          {mockMembers.map((member) => (
            <ListItem key={member.id}>
              <UserInfo>
                <AvatarCircle>
                  <img src={member.img} alt={member.name} />
                </AvatarCircle>
                <Texts>
                  <Name>{member.name}</Name>
                  <Role>{member.funcao}</Role>
                </Texts>
              </UserInfo>
              <ActionButton $variant="remove" onClick={() => alert(`Remover ${member.name}?`)}>
                Remove
              </ActionButton>
            </ListItem>
          ))}
        </ListContainer>

      </ModalContainer>
    </Overlay>,
    document.body // <--- Onde o modal será injetado no DOM (fora da hierarquia da página)
  );
};

export default MembersModal;
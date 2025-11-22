import React from 'react';
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
  role: string;
  avatarUrl: string;
}

interface MembersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Dados fictícios para replicar a imagem
const mockMembers: Member[] = [
  { id: 1, name: 'Ogunsanya Oyeleye', role: 'Head of Design', avatarUrl: 'https://i.pravatar.cc/150?img=11' },
  { id: 2, name: 'Emmanuel Ikechukwu', role: 'Lead Product Designer', avatarUrl: 'https://i.pravatar.cc/150?img=3' },
  { id: 3, name: 'Ufot Ubon', role: 'Illustrator', avatarUrl: 'https://i.pravatar.cc/150?img=7' },
  { id: 4, name: 'Joboson Chisa', role: 'Head of Brand & Communications', avatarUrl: 'https://i.pravatar.cc/150?img=8' },
  { id: 5, name: 'Chukwu Adaeze Victoria', role: 'Lead Media & Marketing Design', avatarUrl: 'https://i.pravatar.cc/150?img=5' },
];

const MembersModal: React.FC<MembersModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
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
              {/* Círculo de Adicionar  */}
              <AvatarCircle $bgColor="#363636ff" $isIcon>
                <MdPersonAdd />
              </AvatarCircle>
              <Texts>
                <Name>Adicionar novos colaboradores</Name>
                <Role>Nome/Função</Role>
              </Texts>
            </UserInfo>
            <ActionButton $variant="add">
              + Label
            </ActionButton>
          </ListItem>

          {/* Lista de Membros Existentes */}
          {mockMembers.map((member) => (
            <ListItem key={member.id}>
              <UserInfo>
                <AvatarCircle>
                  <img src={member.avatarUrl} alt={member.name} />
                </AvatarCircle>
                <Texts>
                  <Name>{member.name}</Name>
                  <Role>{member.role}</Role>
                </Texts>
              </UserInfo>
              <ActionButton $variant="remove" onClick={() => alert(`Remover ${member.name}?`)}>
                Remove
              </ActionButton>
            </ListItem>
          ))}
        </ListContainer>

      </ModalContainer>
    </Overlay>
  );
};

export default MembersModal;
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
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
import { api } from '../../services/api';

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
  /** ID do projeto atual (string vinda do PainelPage) */
  currentProjectId?: string;
}

// por enquanto mantém os mocks pra lista de membros existentes
const mockMembers: Member[] = [
  { id: 1, name: "Rafael Alexandre", email: "rafael@kodan.com", funcao: "Fullstack Dev", img: "https://avatars.githubusercontent.com/u/179970243?v=4" },
  { id: 2, name: "Ryan", email: "ryan@kodan.com", funcao: "Frontend Dev", img: "https://avatars.githubusercontent.com/u/162740474?v=4" },
  { id: 3, name: "Samuel", email: "sadosan@kodan.com", funcao: "Backend Dev", img: "https://avatars.githubusercontent.com/u/122215538?v=4" },
  { id: 4, name: "Alandelon", email: "alandelon@kodan.com", funcao: "Fullstack Dev", img: "https://avatars.githubusercontent.com/u/173320062?v=4" },
  { id: 5, name: "Daniel", email: "daniel@kodan.com", funcao: "Frontend Dev", img: "https://avatars.githubusercontent.com/u/211064470?v=4" },
];

const MembersModal: React.FC<MembersModalProps> = ({ isOpen, onClose, currentProjectId }) => {
  const [inviteEmail, setInviteEmail] = useState('');
  const [isSending, setIsSending] = useState(false);

  if (!isOpen) return null;

  async function handleInvite() {
    if (!currentProjectId) {
      alert('Selecione um projeto antes de convidar colaboradores.');
      return;
    }

    if (!inviteEmail.trim()) {
      alert('Digite o e-mail do colaborador.');
      return;
    }

    try {
      setIsSending(true);

      await api.post('/invites', {
        projectId: Number(currentProjectId),
        email: inviteEmail.trim(),
      });

      alert('Convite enviado com sucesso!');
      setInviteEmail('');
    } catch (err: any) {
      console.error('Erro ao enviar convite:', err?.response || err);
      const msg = err?.response?.data?.message || 'Não foi possível enviar o convite.';
      alert(msg);
    } finally {
      setIsSending(false);
    }
  }

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
                <Role>Digite o e-mail do colaborador</Role>
                {/* input simples depois estiliza no styles.ts */}
                <input
                  type="email"
                  placeholder="email@exemplo.com"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  style={{
                    marginTop: '0.5rem',
                    padding: '0.4rem 0.6rem',
                    borderRadius: 6,
                    border: '1px solid #d4d4d4',
                    fontSize: 14,
                    width: '100%',
                  }}
                />
              </Texts>
            </UserInfo>
            <ActionButton
              $variant="add"
              onClick={handleInvite}
              disabled={isSending}
            >
              {isSending ? 'Enviando...' : 'Convidar'}
            </ActionButton>
          </ListItem>

          {/* Lista de Membros Existentes (mock por enquanto) */}
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
              <ActionButton
                $variant="remove"
                onClick={() => alert(`Remover ${member.name}?`)}
              >
                Remover
              </ActionButton>
            </ListItem>
          ))}
        </ListContainer>
      </ModalContainer>
    </Overlay>,
    document.body
  );
};

export default MembersModal;

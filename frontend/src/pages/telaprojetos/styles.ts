import styled from 'styled-components'

// Wrapper Global
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: linear-gradient(150deg, #ece9e9ff, #ffffffff);
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 100vh;
    padding-left: 350px;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        flex-direction: column;
        padding-left: 0; 
    }
`

export const ContentWrapper = styled.div`
    flex: 1; 
    width: 100%;
    
    padding: 30px;
    padding-top: 100px;
    

    display: flex;
    flex-direction: column;
    gap: 40px;
    
    min-width: 0; 
    overflow-x: hidden; 
    box-sizing: border-box;
    
    

    @media (max-width: 1024px) {
        overflow-x: visible;
        padding-top: 10px;
        padding-top: 100px;
    }
`

// Container da Lista (Fundo transparente agora, pois os cards têm fundo branco)
export const Container = styled.div`
    width: 100%;
    max-width: 1150px; 
    
    gap: 20px;
    margin: 0; 

    background-color: #ffffff;
    border: 1px solid #8a8a8a60;
    border-radius: 10px; 
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    padding: 1.5rem 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 1540px) {
        max-width: 700px;
    }

    /* Responsividade: Sidebar vira Menu Hambúrguer/Topo */
    @media (max-width: 1024px) {
        /* Destrava a largura para preencher o espaço disponível */
        max-width: 100%;
        
        /* Centraliza o container na tela */
        margin: 0 auto;
        
        height: auto; 
        padding: 1.5rem;
    }

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

// --- ESTILOS INTERNOS DO CARD (Layout Horizontal) ---

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 15px;
`

export const ProjectInfoGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    flex: 1; /* Ocupa o espaço disponível */
    min-width: 0; /* Permite truncate do texto */
`

// O container do Ícone Genérico
export const ProjectIconBox = styled.div`
    width: 42px;
    height: 42px;
    border-radius: 10px;
    
    /* Gradiente bonito para o ícone */
    background: linear-gradient(135deg, #006391, #0091c2);
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: #fff;
    font-size: 20px;
    box-shadow: 0 2px 5px rgba(0, 99, 145, 0.3);
`

export const ProjectTexts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    overflow: hidden;
`

export const NameProject = styled.h3`
    font-family: 'Montserrat', sans-serif;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.2s;
`

export const SubtitleProject = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    color: #64748b;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
`

// Botões de ícone (Expandir, Menu)
export const IconButton = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    border-radius: 50%;
    color: #94a3b8;
    transition: all 0.2s ease;

    &:hover {
        background: #f1f5f9;
        color: #006391;
    }
`

/* BOTÃO DE CRIAR PROJETO  */
export const CreateButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    
    flex-shrink: 0;
    
    margin-left: auto;

    background-color: #2e2e2eff; 
    color: #ffffff;
    
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 5px rgba(0, 99, 145, 0.2);

    svg {
        font-size: 20px;
    }

    &:hover {
        background-color: #3b3b3bff;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(46, 46, 46, 0.3);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        padding: 6px 12px; 
        font-size: 0.8rem; 
        
        svg {
            font-size: 16px; /* Reduz ícone */
        }
    }

    /* Regra para mobile muito pequeno (ícone somente) */
    @media (max-width: 480px) {
        padding: 8px;
        span {
            display: none; 
        }
    }
`;

// Menu Dropdown
export const ProjectMenu = styled.div`
    z-index: 100;
    position: absolute;
    top: 45px;
    right: 10px;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
    padding: 5px;
    min-width: 140px;
    display: flex;
    flex-direction: column;
`

export const ProjectMenuItem = styled.button`
    width: 100%;
    padding: 8px 12px;
    border: none;
    background: transparent;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    text-align: left;
    cursor: pointer;
    color: #475569;
    border-radius: 4px;

    &:hover {
        background: #f1f5f9;
        color: #1e293b;
    }
`

// Área Expandida (Painel / Estatísticas)
export const ProjectActionsRow = styled.div`
    width: 100%;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #f1f5f9;

    display: flex;
    gap: 12px;
    justify-content: flex-end; /* Botões à direita */
    align-items: center;
    
    animation: slideDown 0.2s ease-out;
    @keyframes slideDown {
        from { opacity: 0; transform: translateY(-5px); }
        to { opacity: 1; transform: translateY(0); }
    }
`

export const ProjectActionButton = styled.button`
    border: 1px solid #e2e8f0;
    background: #fff;
    color: #475569;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 12px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 6px;

    &:hover {
        background: #006391;
        color: #fff;
        border-color: #006391;
    }
`

// Título da Página + Botão Criar
export const TitleRow = styled.div`
    width: 100%;
    max-width: 100%;
    
    margin-bottom: 20px;
    padding: 0;

    display: flex;
    align-items: center;

    justify-content: space-between; 

`

export const TitleProject = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #2d3748;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 15px;
    }

`

// Estilização do Modal Editar e Excluir dos Projetos

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  
  padding: 20px; 
  box-sizing: border-box;
`;

export const ModalCard = styled.div`
  font-family: 'Montserrat', sans-serif;
  background: #fff;
  
  /* --- AJUSTE DE TAMANHO --- */
  width: 100%;        
  max-width: 480px;   
  
  max-height: 90vh;   
  
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  animation: fadeIn 0.2s ease-out;
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
`;

export const ModalHeader = styled.div`
  background-color: transparent;
  padding: 1.25rem 1.5rem; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #2b2b2bff;
  border-bottom: 1px solid #f1f5f9;
  flex-shrink: 0; 
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1rem; /* Ajustado para 1rem (aprox 16px) para consistência */
  font-weight: 600;
  color: #363535ff;
`;

export const ModalCloseButton = styled.button`
  border: none;
  background: rgba(255,255,255,0.2); /* Fundo sutil no botão de fechar */
  width: 30px;
  height: 30px;
  border-radius: 50%;
  
  font-size: 1.2rem;
  line-height: 1;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  color: #302e2eff;
  transition: background 0.2s;

  &:hover {
    background: rgba(255,255,255,0.3);
  }
`;

export const ModalBody = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    
    overflow-y: auto; 
    color: #1e293b; 

    p {
      color: #1e293b;
      font-size: 0.95rem;
      line-height: 1.5;
      margin: 0;
    }

  
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  color: #0f172a; 
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s;


  &:focus {
    border-color: #006391;
    box-shadow: 0 0 0 3px rgba(0, 99, 145, 0.1);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
`;

export const ModalTextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  color: #0f172a;
  outline: none;
  resize: vertical;
  min-height: 80px;
  box-sizing: border-box;

  &:focus {
    border-color: #006391;
    box-shadow: 0 0 0 3px rgba(0, 99, 145, 0.1);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
`;

export const ModalCharCounter = styled.p`
  margin-top: 4px;
  margin-bottom: 0;
  font-size: 11px;
  text-align: right;
  color: #123d7aff;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 10px;
  
  padding-top: 10px;
  border-top: 1px solid #f1f5f9; 
`;

export const ModalSecondaryButton = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  background: #f1f5f9;
  color: #0f172a;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover { background: #e2e8f0; }
`;

export const ModalPrimaryButton = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  border: none;
  background: #363636ff;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover { background: #141414ff; }
`;

export const ModalDangerButton = styled(ModalPrimaryButton)`
  background: #ef4444;
  &:hover { background: #dc2626; }
`;

// --- PERFIL BAR (Inicial do Painel) ---
export const PerfilBar = styled.div`
    width: 100%;
    max-width: 100%; 
    margin: 0; 
    
    background-color: transparent; 
    
    border-radius: 10px;
    display: flex;
    
    flex-direction: row; 
    align-items: center; 
    gap: 15px;
    
    padding: 0 20px 0 0;
    


    box-sizing: border-box;

    @media (max-width: 1024px) {
        margin: 0 auto;
        padding: 10px 20px;
    }

    @media (max-width: 768px) {
        flex-direction: column; 
        align-items: center;
        text-align: center;
    }
`

export const PerfilTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const UserAvatar = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 3px solid #ffffff; 
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    object-fit: cover;

    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
    }
`

export const PerfilTitleBar = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;
    font-weight: 700;
    color: #444444ff;
    margin: 0;
    padding: 0;

    @media (max-width: 1024px) {
        font-size: 15px;
    }
`

export const PerfilTextSpanBar = styled.span`
    font-weight: 500;
    color: #4d4d4dff;
`

export const PerfilTextBar = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: #494949ff;
    margin: 0;
    padding: 0;

    @media (max-width: 1024px) {
        font-size: 15px;
    }
`

// State de mensagem vazia
export const EmptyStateMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
    text-align: center;
    gap: 15px;
    width: 100%;
    
    /* Estilização do Texto */
    p {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.1rem;
        font-weight: 500;
        color: #94a3b8; /* Um cinza suave para indicar vazio */
        margin: 0;
    }

    /* Opcional: Estilo para um ícone se quiser colocar junto */
    svg {
        font-size: 3rem;
        color: #cbd5e1;
        margin-bottom: 10px;
    }
`;
import styled from "styled-components";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: linear-gradient(150deg, #ece9e9ff, #ffffffff);
`

// Container Principal do Layout (Segura Sidebar + Conteúdo)
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


// Área de Conteúdo da Direita (Onde fica a lista branca)
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

/* Container com os projetos */
export const BoardOuterContainer = styled.div`
    width: 100%;
    max-width: 1150px; 
    
    
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
/* cabeçalho dentro do quadro branco (nome do projeto, ícone) */
export const BoardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color: #000;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #f0f0f0; 
    margin-bottom: 1rem;

    z-index: 10;
    position: relative;

    @media (max-width: 600px) {
        flex-direction: column; /* Um embaixo do outro */
        align-items: center;    /* Centraliza horizontalmente */
        gap: 1rem;              /* Espaço entre titulo e botão */
    }
`;

export const BoardInfoLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; 
    gap: .8rem;
    flex-wrap: wrap;

    flex-grow: 1;
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        
    }   
`;

export const BoardInfoTitleWrapper = styled.div<{ $isOpen: boolean }>`
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    position: relative; /* Importante para o SelectProjectModal se posicionar absolutamente a este elemento */
    padding: 4px 8px;
    border-radius: 6px;
    transition: background-color 0.2s;

    &:hover {
        background-color: #f1f5f9; /* Efeito visual ao passar o mouse */
    }

    /* Estilo da seta */
    .arrow-icon {
        color: #64748b;
        transition: transform 0.2s ease;
        transform: ${({ $isOpen }) => $isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}; /* Gira a seta quando aberto */
    }
`;

export const BoardInfoTitle = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #2d3748;
    margin: 0;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const BoardInfoIcon = styled.span`
    font-size: 1.5rem;
`;

/* área das colunas do kanban */
export const ColumnsWrapper = styled.div`
    display: flex;
    justify-content: flex-start; 
    align-items: flex-start;
    gap: 1.5rem;
    
    /* Comportamento de Scroll */
    overflow-x: auto; 
    overflow-y: hidden; 
    scroll-behavior: smooth;
    
    /* Scroll Snap: Melhora a experiência de rolagem horizontal */
    scroll-snap-type: x mandatory;
    
    /* Espaçamento para a barra de rolagem e para não cortar sombras laterais */
    padding: 4px 4px 12px 4px; 
    
    /*  SCROLLBAR ESTILIZADA */
    &::-webkit-scrollbar {
        height: 8px; 
    }

    &::-webkit-scrollbar-track {
        background: transparent; 
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #cbd5e1; 
        border-radius: 10px;       
        border: 2px solid #ffffff; 
        
        &:hover {
            background-color: #94a3b8; 
        }
    }

    @media (max-width: 1540px) {
        flex-direction: column; 
        overflow-x: visible;    
        align-items: stretch;   
        
        gap: 24px; 
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        
        /* Desativa o snap no modo vertical */
        scroll-snap-type: none;
        
        & > div {
            width: 100%;
            max-width: 100%;
            scroll-snap-align: start; /* Garante alinhamento se voltar para row */
        }
    }
`;
// Botão único para adicionar colaboradores
export const AddMemberButton = styled.button`
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

    @media (max-width: 480px) {
        padding: 8px;
        span {
            display: none; 
        }
    }
`;

/* Cor nos icons */
export const IconWrapper = styled.span<{ $accentColor: string }>`
    font-size: 1.1rem;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    
    /* Aplica a cor recebida via prop */
    color: ${({ $accentColor }) => $accentColor};
    
    
    
    svg {
        font-size: 1.2rem; 
    }
`


//  PERFIL BAR (Inicial do Painel)
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
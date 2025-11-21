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
    
    padding:30px;
    

    display: flex;
    flex-direction: column;
    gap: 40px;
    
    min-width: 0; 
    overflow-x: hidden; 
    box-sizing: border-box;
    
    

    @media (max-width: 1024px) {
        overflow-x: visible;
        padding-top: 10px;
    }
`

/* Container com os projetos */
export const BoardOuterContainer = styled.div`
    width: 100%;
    max-width: 1100px; 
    
    /* Desktop: Alinhado à esquerda próximo à sidebar */
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
`;

export const BoardInfoLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; 
    gap: .8rem;
    flex-wrap: wrap;
`;

export const BoardInfoTitle = styled.h1`
    font-size: 1.5rem; 
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    color: #333;
    margin: 0;
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
    
    overflow-x: auto; 
    padding-bottom: 10px; 
    
    &::-webkit-scrollbar {
        height: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 4px;
    }

    /* Configuração para empilhar */
    @media (max-width: 1540px) {
        flex-direction: column; 
        overflow-x: visible;    /* Remove scroll horizontal */
        align-items: stretch;   
        padding-bottom: 0;
        
        & > div {
            width: 100%;
            max-width: 100%;
        }
    }
`;
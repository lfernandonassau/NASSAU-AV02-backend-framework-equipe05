import styled from "styled-components";

export const ColumnWrapper = styled.div`
    font-family: 'Montserrat';

    background-color: #f5f5f5;
    border: 1px solid #8a8a8a;
    border-radius: 4px;

    width: 320px;
    min-width: 320px; 
    flex-shrink: 0; 


    display: flex;
    flex-direction: column;
    position: relative;

    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    /* --- RESPONSIVIDADE (Acompanha o Painel) --- */
    /* Quando a tela for menor que 1540px (onde definimos que empilha), 
       a coluna deve ocupar toda a largura disponível */
    @media (max-width: 1540px) {
        width: 100%;
        min-width: 0; /* Permite encolher se necessário */
        flex-shrink: 1;
        
        /* Opcional: Ajustar altura no mobile se achar que ficou muito alto */
        /* max-height: 500px; */
    }
`;


export const ColumnHeader = styled.div`
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #8a8a8a;
    background-color: #424242ff;
    border-radius: 4px 4px 0 0;
`;

export const ColumnTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .icon {
        font-size: 1rem;
        line-height: 1;
    }

    .text {
        font-weight: 600;
        font-size: 1rem;
        color: #ffffffff;
    }
    
    .count {
        font-size: 0.8rem;
        color: #ffffffcc;
    }
`;

export const CardsList = styled.div`
    padding: 0.75rem 1rem 3.5rem; 
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    /* --- AQUI ESTÁ O LIMITE DE CRESCIMENTO --- */
    /* Supondo que cada card tenha +/- 100px, 5 cards = ~500px */
    max-height: 500px; 
    /* Você pode usar vh se preferir: max-height: 55vh; */
    
    overflow-y: auto; 
    scroll-behavior: smooth;
    
    /* Esconde a barra de rolagem */
    &::-webkit-scrollbar { display: none; }
    scrollbar-width: none; 
    -ms-overflow-style: none; 
`;

export const AddButtonArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px; 

    position: absolute;
    bottom: 0; 
    left: 0;
    padding-bottom: 10px;
    padding-top: 15px; 
    
    border-radius: 0 0 4px 4px;
    
    /* --- TRUQUE VISUAL --- */
    /* Cria um fundo degradê para esconder os cards passando por trás */
    background: linear-gradient(to top, #f5f5f588 70%, #f5f5f500 100%);
    pointer-events: none; 
`;

// Estilo base compartilhado (opcional, mas ajuda a não repetir código)
const BaseCircleButton = styled.button`
    font-size: 1.1rem;
    font-weight: 500;
    border-radius: 999px;
    width: 32px;
    height: 32px;
    border: 2px solid #fff;
    box-shadow: 0 1px 7px rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
    pointer-events: auto; /* Reativa o clique no botão */
    transition: transform 0.2s ease, filter 0.2s ease;

    &:hover {
        filter: brightness(1.1);
        transform: scale(1.05);
    }
`;

export const AddButton = styled(BaseCircleButton)`
    background-color: #000000ff; 
    color: #ffffff; /* Garante que o ícone fique branco */

    /* Ajuste o tamanho do ícone aqui */
    svg {
        font-size: 20px; 
    }

    &:hover {
        background-color: #575757ff; /* Opcional: escurecer um pouco no hover */
    }
`;

// Novo Botão de Scroll
export const ScrollButton = styled(BaseCircleButton)`
    background-color: #000000ff; 
    color: #ffffffff; /* Ícone azul */
    

    svg {
        font-size: 16px;
    }
    
    &:hover {
        background-color: #575757ff;
    }
`;
import styled from "styled-components";

export const ColumnWrapper = styled.div`
    font-family: 'Montserrat';

    background-color: transparent;
    border-radius: 4px;

    width: 330px;
    min-width: 320px; 
    flex-shrink: 0; 


    display: flex;
    flex-direction: column;
    position: relative;

    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    scroll-snap-align: start;

    @media (max-width: 1540px) {
        width: 100%;
        min-width: 0; 
        flex-shrink: 1;
        
        
        /* max-height: 500px; */
    }
`;


export const ColumnHeader = styled.div`
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #c4bfbfff;
    background-color: transparent;
    border-radius: 4px 4px 0 0;
`;

export const ColumnTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    .text {
        font-weight: 600;
        font-size: 1rem;
        color: #272727ff;
        text-shadow: 0 4px 5px rgba(0,0,0,0.3);
    }
    
    .count {
        font-size: 0.8rem;
        color: #ffffffcc;
    }
`



export const CardsList = styled.div`
    padding: 0.75rem 1rem 3.5rem; 
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    max-height: 500px; 
    
    
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
    padding-top: 20px;
    border-radius: 0 0 4px 4px;
    
    background: linear-gradient(to top, #f5f5f557 80%, rgba(245, 245, 245, 0) 100%);
    
    pointer-events: none;

    z-index: 200; 
`;

// Estilo base compartilhado
const BaseCircleButton = styled.button`
    font-size: 1.1rem;
    font-weight: 500;
    border-radius: 999px;
    width: 32px;
    height: 32px;
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
    color: #ffffff; 

    svg {
        font-size: 20px; 
    }

    &:hover {
        background-color: #575757ff; 
    }
`;

// Novo Botão de Scroll
export const ScrollButton = styled(BaseCircleButton)`
    background-color: #000000ff; 
    color: #ffffffff; 
    

    svg {
        font-size: 16px;
    }
    
    &:hover {
        background-color: #575757ff;
    }
`;
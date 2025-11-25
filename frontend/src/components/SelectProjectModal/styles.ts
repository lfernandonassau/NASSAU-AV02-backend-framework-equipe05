
import styled from 'styled-components';
export const ModalContainer = styled.div`
    position: absolute;
    /* Ajuste fino da posição em relação ao botão "Nome do Projeto" */
    top: 100%; /* Fica logo abaixo do título */
    left: 0;
    z-index: 100; /* Garante que fique acima de outros elementos */
    
    width: 250px;
    max-height: 300px;
    overflow-y: auto;
    
    margin-top: 8px; /* Espacinho entre o título e o menu */
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #e2e8f0; /* Borda sutil */
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    
    animation: fadeIn 0.2s ease-out;

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-5px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;

export const ProjectList = styled.ul`
    list-style: none;
    padding: 8px 0;
    margin: 0;
`;

export const ProjectItem = styled.li<{ $isActive?: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    cursor: pointer;
    
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: ${({ $isActive }) => $isActive ? '#006391' : '#475569'}; /* Cor destaque se ativo */
    background-color: ${({ $isActive }) => $isActive ? '#f1f5f9' : 'transparent'}; /* Fundo destaque se ativo */

    transition: all 0.2s ease;

    &:hover {
        background-color: #f8fafc;
        color: #1e293b;
    }

    svg {
        color: ${({ $isActive }) => $isActive ? '#006391' : '#94a3b8'};
    }
`;

export const EmptyState = styled.li`
    padding: 16px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    color: #94a3b8;
`;
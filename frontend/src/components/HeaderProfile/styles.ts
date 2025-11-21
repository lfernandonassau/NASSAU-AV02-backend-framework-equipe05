import styled, { css } from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 60px; 
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px; /* Espaço entre os grupos de ícones */
    
    background-color: transparent; 
    margin-bottom: 20px;
    margin-top: -20px; 
    
    @media (max-width: 1050px) {
        justify-content: flex-end;
        
        margin-top: 0;
    }
    @media (max-width: 768px) {
        justify-content: flex-end;
        margin-top: 0;
    }
`;

export const SearchContainer = styled.div<{ $isOpen: boolean }>`
    display: flex;
    align-items: center;
    background-color: ${({ $isOpen }) => $isOpen ? '#fff' : 'transparent'};
    border-radius: 20px;
    padding: 5px;
    border: 1px solid ${({ $isOpen }) => $isOpen ? '#e0e0e0' : 'transparent'};
    transition: all 0.3s ease;
    box-shadow: ${({ $isOpen }) => $isOpen ? '0 2px 5px rgba(0,0,0,0.05)' : 'none'};
`;

export const SearchInput = styled.input<{ $isOpen: boolean }>`
    border: none;
    background: transparent;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #333;
    
    /* Animação de abrir/fechar */
    width: ${({ $isOpen }) => $isOpen ? '200px' : '0px'};
    opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
    padding: ${({ $isOpen }) => $isOpen ? '0 10px' : '0'};
    transition: all 0.3s ease;
    
    &::placeholder {
        color: #aaa;
    }

     /* CONTROLE DE TAMANHO */

    @media (max-width: 768px) {
        width: ${({ $isOpen }) => $isOpen ? '160px' : '0px'};
    }

    @media (max-width: 480px) {
        width: ${({ $isOpen }) => $isOpen ? '120px' : '0px'};
        font-size: 13px; /* Fonte levemente menor */
    }
`;

export const IconButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #555;
    padding: 0; /* Sem espaço interno */
    border-radius: 50%;
    transition: background 0.2s;

    svg {
        font-size: 22px;
    }

    &:hover {
        background-color: rgba(0,0,0,0.05);
        color: #006391;
    }
`;

export const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    padding: 5px 0;
    border-radius: 30px;
    transition: background 0.2s;

    &:hover {
        background-color: rgba(255,255,255,0.5); /* Fundo sutil ao passar o mouse */
    }
`;

export const Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #fff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

export const Divider = styled.div`
    width: 1px;
    height: 24px;
    background-color: #ccc;
    margin: 0 5px;
`;
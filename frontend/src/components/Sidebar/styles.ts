
import styled, { css } from 'styled-components';
import { IMenuItemStyled, ISidebarContainerStyled } from './types';

export const SidebarContainer = styled.aside<ISidebarContainerStyled>`
    width: 350px; 
    background-color: #ffffffce;
    border-right: 1px solid #e0e0e0;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    
    position: fixed; 
    left: 0;
    top: 0;          
    height: 100vh; 
    z-index: 1010;
    overflow-y: auto;

    box-shadow: 4px 0 15px rgba(0,0,0,0.05);
    transition: transform 0.3 ease-in-out;

    @media (max-width: 1024px) {
        position: relative; 
        width: 100%;
        width: 280px;
        transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(-100%)'}; 
        border-right: none;
        position: fixed;
        height: 100vh;
    }
`;

export const UserInfoSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f0f0f0;

    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid #2e2e2eff;
        margin-bottom: 10px;
        object-fit: cover;
    }

    /* Container dos textos para alinhar */
    div {
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    strong {
        font-family: 'Montserrat', sans-serif;
        color: #333;
        font-size: 16px;
        font-weight: 700;
    }

    span {
        font-family: 'Montserrat', sans-serif;
        color: #888;
        font-size: 12px;
        margin-top: 2px;
    }

    @media (max-width: 768px) {
        flex-direction: row;
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
        margin-right: 20px;
        
        img {
            width: 40px;
            height: 40px;
            margin-bottom: 0;
            margin-right: 10px;
            border-width: 1px;
        }
        
    }
`;

export const SidebarItem = styled.button<IMenuItemStyled>`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    background: transparent;
    cursor: pointer;
    transition: all 0.2s ease;
    
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #555;
    text-align: left;
    width: 100%;

    svg {
        font-size: 20px;
        color: #888;
        transition: color 0.2s;
    }

    &:hover {
        background-color: #e4e9eeff;
        color: #494949ff;
        svg { color: #494949ff; }
    }

    /* VARIANTE: ATIVO (Aba selecionada) */
    ${({ $active }) => $active && css`
        background-color: #ebedeeff;
        color: #39769eff;
        font-weight: 700;
        border-left: 10px solid #424242ff;
        svg { color: #39769eff; }
    `}

    /*  VARIANTE: LOGOUT */
    ${({ $variant }) => $variant === 'logout' && css`
        color: #d32f2f;
        
        svg { color: #d32f2f; }

        &:hover {
            background-color: #ffebee; /* Fundo vermelho bem claro */
            color: #b71c1c;
            svg { color: #b71c1c; }
        }
    `}



    /*  VARIANTE: PRIMARY/LOGIN  */
    ${({ $variant }) => $variant === 'primary' && css`
        color: #60c0f8ff;
        svg { color: #60c0f8ff; }
    `}

    /* VARIANTE: HIGHLIGHT/CADASTRO (Negrito)  */
    ${({ $variant }) => $variant === 'highlight' && css`
        font-weight: 700;
        color: #333;
    `}

    /* Ajustes Mobile */
    @media (max-width: 768px) {

        font-size: 12px;
        white-space: nowrap; 
        width: auto;
        border-left: none;
        border-bottom: ${({ $active }) => $active ? '2px solid #3b3b3bff' : 'none'};
        
        padding: 10px 15px;
        margin-top: 0; /* Remove margem do logout no mobile */
    }
`

// Botão do Menu Hambúrguer (Só aparece no Mobile)
export const MobileToggleBtn = styled.button`
    display: none;
    position: fixed;
    top: 15px;
    left: 15px;
    z-index: 1100; /* Acima de tudo, menos da sidebar aberta */
    background-color: #ffffff6e;
    border: 1px solid #000000ff;
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    
    color: #333;
    font-size: 24px;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        display: flex;
    }
`;

// Fundo escuro quando o menu abre
export const Overlay = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 1005;
    
    /* Animação de Opacidade */
    opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
    visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
    transition: opacity 0.3s ease, visibility 0.3s ease;
`;

// Botão de fechar dentro da Sidebar
export const CloseBtn = styled.button`
    display: none;
    align-self: flex-end;
    background: transparent;
    border: none;
    color: #555;
    font-size: 24px;
    cursor: pointer;
    margin-bottom: 10px;

    @media (max-width: 1024px) {
        display: block;
    }
`;



/* LOGO  */
export const SidebarLogo = styled.h2`
    font-family: 'Montserrat', cursive; 
    font-weight: 700;
    font-size: 25px;
    color: #2b2b2bff; 
    text-align: center;
    
    /* Espaçamento para separar do conteúdo */
    margin-top: -5px;
    margin-bottom: 30px;
    width: 100%;

    /* Previne quebra de linha indesejada */
    white-space: nowrap;

    @media (max-width: 1024px) {
        font-size: 30px;
        margin-bottom: 20px;
    }
`

export const LogoImage = styled.img`
    width: 60px;  /* Ajuste o tamanho conforme necessário */
    height: auto;
    display: block;
    margin: 20px auto 0 auto; /* Centraliza horizontalmente */
    
    
    /* O Segredo: drop-shadow para destacar o branco no fundo branco */
    filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.4)); 
`
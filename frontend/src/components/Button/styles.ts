import styled, { css } from 'styled-components'
import { IButtonStyled } from './types'

export const ButtonContainer = styled.button<IButtonStyled>`
    width: 100%;
    height: 48px; /* Mesma altura do Input para alinhar */
    border-radius: 8px;
    position: relative;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px; /* Espaço entre ícone e texto */
    
    font-family: 'Montserrat', sans-serif;
    font-size: 0.95rem; /* ~15px */
    font-weight: 600;
    
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    /* Estado desabilitado (ex: formulário inválido) */
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none !important;
    }

    /* --- VARIANTE 1: PRIMARY (Padrão - Azul Escuro) --- */
    /* Usado no botão "Próximo" ou "Entrar" */
    ${({ variant }) => variant === 'primary' && css`
        background-color: #022959;
        color: #ffffff;
        box-shadow: 0 4px 6px rgba(2, 41, 89, 0.2);

        &:hover:not(:disabled) {
            background-color: #164a8a; /* Um pouco mais claro no hover */
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(2, 41, 89, 0.3);
        }

        &:active:not(:disabled) {
            transform: translateY(0);
        }
    `}

    /* --- VARIANTE 2: SECONDARY (Branco) --- */
    /* Usado no lado colorido para "Cadastrar" */
    ${({ variant }) => variant === 'secondary' && css`
        background-color: #ffffff;
        color: #022959;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);

        &:hover {
            background-color: #f8fafc;
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(0,0,0,0.2);
        }
    `}

    /* --- VARIANTE 3: GOOGLE (Branco com borda) --- */
    ${({ variant }) => variant === 'google' && css`
        background-color: #ffffff;
        color: #334155; /* Cinza escuro */
        border: 1px solid #cbd5e1;
        font-weight: 500;

        &:hover {
            background-color: #f1f5f9;
            border-color: #94a3b8;
        }
    `}

    /* --- VARIANTE 4: LOGINB (Gradiente Moderno) --- */
    /* Mantendo compatibilidade com seu código antigo, mas mais bonito */
    ${({ variant }) => variant === 'loginb' && css`
        background: linear-gradient(135deg, #022959 0%, #006391 100%);
        color: #ffffff;
        box-shadow: 0 4px 6px rgba(0, 99, 145, 0.3);

        &:hover {
            filter: brightness(1.1);
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0, 99, 145, 0.4);
        }
    `}


    ${({ variant }) => variant === "taskbutton" && css`
        min-width: 130px; 
        max-width: 250px;
        width: auto;
        height: 35px;
        font-weight: 700;
        
        
        
        margin: 0; 

        background: none;
        background-color: #2c2c2cff;
        
        filter: drop-shadow(0 4px 3px rgba(12, 24, 40, 0.25));

        &::after {
            border-radius: 22px;
        }
        &:hover {
            color: #ffffffff;
            background: #3d3c3ccc;
            transform: translateY(-3px);
        }
    `}


    

`
export const DelTaskButton = styled.button`
    width: 100%;
    text-align: left;
    padding: 10px 16px;
    background: transparent;
    border: none;
    
    font-family: 'Montserrat', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    color: #334155; 
    
    cursor: pointer;
    transition: background-color 0.2s ease;
    
    filter: none;
    box-shadow: none;
    border-radius: 0;

    /* Efeito Hover simples de menu */
    &:hover {
        background-color: #f1f5f9; /* Slate-100 */
        color: #0f172a;
    }

    
    &:last-child {
        color: #ef4444; 
    }
    &:last-child:hover {
        background-color: #fef2f2; 
    }
`

export const LoginButton = styled.button`
    background: none;
    position: relative;
    font-family: 'Montserrat';
    border: none;
    font-size: 12px;
    font-weight: 400;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
    cursor: pointer;
`

export const HomeButton = styled.button`
    background: none;
    position: relative;
    font-family: 'Montserrat';
    border: none;
    font-size: 12px;
    font-weight: 400;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
    cursor: pointer;

`

export const PageButtons = styled.button`
    background: none;
    position: relative;
    font-family: 'Montserrat';
    border: none;
    font-size: 13px;
    font-weight: 500;
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;

    text-align: center;
    margin: 0 30px;

    &:hover {
        color: #023042ff;
    }

`

export const LeftIcon = styled.div`
    display: flex;
    align-items: center;
    font-size: 17px; 

`
import styled, { css } from 'styled-components';
import { IInput, IInputStyled } from './types';

export const InputContainer = styled.div<IInputStyled>`
    width: 100%;
    height: 48px;
    background-color: #fff;
    
    border: 1px solid #d1d5db; 
    border-radius: 8px;
    
    display: flex;
    align-items: center;
    padding: 0 12px; 
    margin-bottom: 5px; /* Espaço para o erro não colar */
    
    transition: border-color 0.2s, box-shadow 0.2s;

    /* Foco: Borda azul/roxa */
    &:focus-within {
        border-color: #483EFF;
        box-shadow: 0 0 0 3px rgba(72, 62, 255, 0.1);
    }

    /* Variante secundária (se existir) */
    ${({ variant }) => variant !== 'primary' && css`
        background: transparent;
        border: 1px solid #e5e7eb;
    `}
`;

export const LeftIcon = styled.div`
    margin-right: 10px;
    color: #9ca3af;
    display: flex;
    align-items: center;
    
    /* Muda cor do ícone quando focado */
    ${InputContainer}:focus-within & {
        color: #483EFF;
    }
`;

export const RightIcon = styled.div`
    margin-left: 10px;
    cursor: pointer;
    color: #9ca3af;
    display: flex;
    align-items: center;

    &:hover {
        color: #4b5563;
    }
`;

export const InputText = styled.input<IInputStyled>`
    background-color: transparent;
    border: 0;
    flex: 1;
    height: 100%;
    outline: none;
    
    
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #1f2937; 
    font-weight: 500;

    &::placeholder {
        color: #9ca3af; 
        font-weight: 400;
    }

    /* Remove o ícone de senha nativo do Edge */
    &::-ms-reveal,
    &::-ms-clear {
        display: none;
    }
`;

export const ErrorText = styled.p`
    color: #ef4444; 
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    margin-top: 4px;
    margin-bottom: 16px; /* Espaço até o próximo input */
    text-align: left;
    padding-left: 2px;
`;
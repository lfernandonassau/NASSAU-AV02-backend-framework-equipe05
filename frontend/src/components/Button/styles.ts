import styled, { css } from 'styled-components'
import { IButtonStyled } from './types'

export const ButtonContainer = styled.button<IButtonStyled>`
    background: #5ab4facb;
    border-radius: 10px;
    position: relative;
    font-family: 'Montserrat';
    color: #FFFFFF;
    padding: 6px 12px;
    min-width: 105px;
    border: none;
    margin-right: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0 6px 5px rgba(8, 16, 30, 0.35))
            drop-shadow(0 4px 3px rgba(12, 24, 40, 0.25));

    &:hover {
        background: #000000;
        opacity: 0.9;
        transform: translateY(-1px);
    
    }


    ${({variant}) => variant !== 'primary' && css`
        min-width: 200px;
        height: 40px;
        font-weight: 600;

        background: #59adeec9;
        filter: drop-shadow(0 15px 10px rgba(8, 16, 30, 0.35))
                drop-shadow(0 4px 3px rgba(12, 24, 40, 0.25));

        &::after {
            border-radius: 22px;
        }
        &:hover {
            background: #000000e0;
            transform: translateY(-5px);
        }
    `}

`


export const LoginButton = styled.button`
    background: #59adeec9;
    border-radius: 10px;
    position: relative;
    font-family: 'Montserrat';
    font-weight: 600;
    color: #FFFFFF;
    padding: 6px 12px;
    min-width: 105px;
    border: none;
    margin-right: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0 6px 5px rgba(8, 16, 30, 0.35))
            drop-shadow(0 4px 3px rgba(12, 24, 40, 0.25));

    &:hover {
        background: #000000;
        opacity: 0.9;
        transform: translateY(-1px);
    
    }
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
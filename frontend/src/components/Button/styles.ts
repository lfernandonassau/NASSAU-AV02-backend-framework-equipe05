import styled, { css } from 'styled-components'
import { IButtonStyled } from './types'

export const ButtonContainer = styled.button<IButtonStyled>`
    background: #5cc8f3ad;
    border-radius: 10px;
    font-family: 'Montserrat';
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    width: 100%; 
    max-width: 250px; 
    height: 35px; 
    padding: 0 15px; 
 
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 13px;
    font-weight: 400;

    z-index: 100;

    filter: drop-shadow(0 3px 3px rgba(8, 16, 30, 0.35))
            drop-shadow(0 2px 2px rgba(12, 24, 40, 0.25));

    &:hover {
        background: #ffffffff;
        color: #000000;
        opacity: 0.9;
        transform: translateY(-1px);
    }


    ${({ variant }) => variant !== 'primary' && css`
        min-width: 200px;
        height: 40px;
        font-weight: 600;

        background: radial-gradient(
            circle at 70% 30%,
            #cde4facb 0%,      
            #53acffbe 100%,
            #a1cef8ff 20%,
            #a1cef8ff 50%     
        );
        filter: 
            drop-shadow(0 4px 3px rgba(12, 24, 40, 0.25));

        &::after {
            border-radius: 22px;
        }
        &:hover {
            color: #000000ff;
            background: #ffffffe0;
            transform: translateY(-5px);
        }
    `}

    ${({ variant }) => variant === "loginb" && css`
        min-width: 150px;
        max-width: 250px;
        height: 35px;
        font-weight: 600;
        margin: 0 auto;

        background: radial-gradient(
            circle at 70% 30%,
            #cde4facb 0%,      
            #53acffbe 40%   
        );
        filter: 
            drop-shadow(0 4px 3px rgba(12, 24, 40, 0.25));

        &::after {
            border-radius: 22px;
        }
        &:hover {
            color: #000000ff;
            background: #ffffffe0;
            transform: translateY(-5px);
        }
    `}


    ${({ variant }) => variant === "google" && css`
        background: #0000005d;
        background-color: #85e3ff75;
        background-image: none;
        color: #ffffffff; 
        gap: 5px;

        max-width: 250px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 12px;
        
        &:hover {
            background: #0000005d;
            color: #ffffffff;
            opacity: 1;
        }
    `}

    ${({ variant }) => variant === "cadastrobutton" && css`
        background: #59adeec9;


        border-radius: 10px;
        position: relative;
        font-family: 'Montserrat';
        font-weight: 400;
        color: #FFFFFF;
        min-width: 100px;
        border: none;
        margin-right: 5px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        filter: drop-shadow(0 6px 5px rgba(8, 16, 30, 0.35));

        &:hover {
            background: #ffffffff;
            color: #000000;
            opacity: 0.9;
            transform: translateY(-1px);
        
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
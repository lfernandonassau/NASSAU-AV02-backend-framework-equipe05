import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
    background: #0a6bb4ff;
    border-radius: 10px;
    position: relative;
    font-family: 'Montserrat';
    color: #FFFFFF;
    padding: 6px 12px;
    min-width: 105px;
    border: none;
    margin-right: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    filter: drop-shadow(0 5px 2px rgba(0.10, 0.6, 0.8, 0.6));

    &:hover {
        background: #000000;
        opacity: 0.9;
    
    }


    ${({variant}) => variant !== 'primary' && css`
        min-width: 200px;
        height: 40px;
        font-weight: 600;

        background: #1b4668ff;
        filter: drop-shadow(2px 10px 6px rgba(0.10, 0.6, 0.8, 0.6));

        &::after {
            border-radius: 22px;
        }
        &:hover {
            background: #000000e0;
        }
    `}

`
export const HomeButton = styled.button`
    background: none;
    position: relative;
    font-family: 'Inter';
    border: none;
    font-style: normal;
    font-size: 12px;
    font-weight: 400;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
    cursor: pointer;

`
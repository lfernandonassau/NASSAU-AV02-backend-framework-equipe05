import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
    background: #043d69ff;
    border-radius: 10px;
    position: relative;
    font-family: 'Inter';
    color: #FFFFFF;
    padding: 6px 12px;
    min-width: 130px;
    border: none;
    margin-right: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background: #000000;
        opacity: 0.9;
    
    }


    ${({variant}) => variant !== 'primary' && css`
        min-width: 200px;
        height: 40px;
        font-weight: 600;

        background: #0487c4ff;

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
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
    cursor: pointer;

`
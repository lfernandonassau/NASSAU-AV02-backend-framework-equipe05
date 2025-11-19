import {styled, css} from 'styled-components'
import { IInputStyled } from './types'


export const InputContainer = styled.div<IInputStyled>`
    max-width: 100%;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #ffffffff;
    display: flex;
    align-items: center;
    margin-bottom: 35px;
    cursor: pointer;

    position: relative;

    input {
        
         &::placeholder {
            color: #b1adadea;
            font-size: 15px;
        }
            
    }
    ${({variant}) => variant !== 'primary' && css`
        max-width: 150px;
        height: 150px;
        margin-bottom: 0;
    
        background: transparent;
        flex: 1;
        border: 0;

        input {
            background-color: transparent;
            width: 100%;
            height: 20px;

            &::placeholder {
                color: #d8d7d7ea;
            }
            
        }
        
    `}
`
export const LeftIcon = styled.div`
    margin-right: 10px;

`
export const RightIcon = styled.div`
    margin-right: 0;
    height: 20px;
    cursor: pointer;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #ffffffff;

    flex: 1;
    width: 100%;
    border: 0;
    height: 100%;
    outline: none;

    /* Remove o ícone de senha nativo do Edge/Internet Explorer */
    &::-ms-reveal,
    &::-ms-clear {
        display: none;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;

    }

`

export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 12px;
    font-family: 'Montserrat';
    padding-right: 100px;
    margin-top: -15px;
    margin-bottom: 15px;
    

`

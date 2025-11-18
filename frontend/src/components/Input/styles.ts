import {styled, css} from 'styled-components'
import { IInputStyled } from './types'


export const InputContainer = styled.div<IInputStyled>`
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #ffffffff;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

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
`

export const InputText = styled.input`
    background-color: transparent;
    color: #ffffffff;
    width: 100%;
    border: 0;
    height: 30px;
    outline: none;

    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;

    }

`

export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 10px;
    font-family: 'Montserrat';
    

`

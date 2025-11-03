import {styled, css} from 'styled-components'


export const InputContainer = styled.div`
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #000000ff;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    ${props => props.$variant === 'secondary' && css`
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
                color: #ffffff9f; /* Ex: Texto do placeholder cinza claro */
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
    color: #000000ff;
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

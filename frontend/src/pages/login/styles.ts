import styled from 'styled-components'
import { MdLock, MdPerson, MdVisibility, MdVisibilityOff } from 'react-icons/md'
import LoginBackgroundImage from '../../assets/login-background.svg'
import { IAnimation } from './types'


export const LoginNewScreen = styled.div<IAnimation>`
    display: flex;
    align-items: stretch;
    width: 100%;
    max-width: 1200px;

    /* Animação ao rolar a pagina */
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1s ease-out, transform 1s ease-out;
    ${({ $visivel }) => $visivel && `
        opacity: 1;
        transform: translateY(0);
    `}

    @media (max-width: 1205px) {
      flex-direction: column;

      min-width: 0;
      width: 90%;
      max-width: 450px;
      
    }
`


export const LoginContainer = styled.main`
    width: 100%;
    max-width: 700px;
    padding: 100px;

    flex: 1;
    

    background-color: #62c4f183;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    border-radius: 10px 0 0 10px;
    filter: drop-shadow(0 0 10px rgba(0.10, 0.6, 0.8, 0.6));

    input {
        
         &::placeholder {
            color: #ffffffc0;
            font-size: 13px;
        }
            
    }

    @media (max-width: 1203px) {
        
        border-radius: 10px;
        padding: 40px 20px;
        max-width: 100%;
        border-radius: 10px;
    }
    

`


export const WelcomeContainer = styled.main`
    width: 100%;
    padding: 150px;
    flex: 2;


    background-image: linear-gradient(135deg, #075d9688, #021c2e86);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    
    border-radius: 0 10px 10px 0;
    filter: drop-shadow(0 0 10px rgba(0.10, 0.6, 0.8, 0.6));

    @media (max-width: 1203px) {
        display: none;
    }

`



export const PageWrapper = styled.div`
    background: radial-gradient(
    circle at 70% 30%, /* Posição do centro da "luz" */
    #cde4faff 0%,      /* Laranja/Pêssego mais claro */
    #b7d2ebff 20%,     /* Laranja um pouco mais vibrante */
    #216b99ff 70%,     /* Azul/Cinza aparece aqui */
    #0191daff 100%     /* Finaliza com o azul/cinza mais suave */
    );
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    
    width: 100%;
    
    box-sizing: border-box;

    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 768px) {
        
        padding: 200px 15px;
        align-items: flex-start;
        background-attachment: scroll;
    }

`



export const PageLogin = styled.img`
    padding-top: 20px;

`


export const Column = styled.div`
    flex: 1;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`
export const TitleKanban = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    color: #ffffffff;
    font-size: 15px;
`
export const TitleLogin = styled.p`
    font-family: 'Lobster two';
    font-style: normal;
    font-weight: 700;
    color: #ffffffff;
    font-size: 50px;
    text-align: center;
    margin-bottom: 15px;
    line-height: 75px;

`

export const TitleWelcome = styled.h2`
    font-family: 'Lobster Two';
    font-weight: 700;
    color: #ffffffff;
    font-size: 40px;
    text-align: center;
    line-height: 50px;
`

export const WelcomeSubText = styled.p`
    font-family: 'Montserrat', 'sans serif';
    font-style: normal;
    font-weight: 300;
    color: #ffffffff;
    font-size: 15px;
    
    text-align: center; 
    line-height: 25px;
    margin: 25px auto 15px auto;
    @media (max-width: 768px) {
      font-size: 20px;
    }
`

export const KanbanSubText = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    color: #ffffffff;
    font-size: 18px;
    text-align: center; 
    max-width: 420px;
    margin-bottom: 35px;
    line-height: 25px;
    margin: 0 auto 20px auto;
`

export const EsqueciSubText = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    color: #ffffffff;
    font-size: 9px; 
    text-align: center;
    margin-top: -10px;
    margin-left: 110px;
    margin-bottom: 20px;
    width: 100%;
    cursor: pointer;
`
export const TextoLivreSubText = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    color: #ffffffff;
    font-size: 10px; 
    
    display: flex;
    align-items: center; 
    justify-content: center;
    
    margin-top: 5px;
    margin-bottom: 25px;
    width: 100%;
    cursor: pointer;

    /* --- Linhas --- */
    
    &::before,
    &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: #ffffff50; 
    }

    /* Espaçamento entre a linha e o texto */
    &::before {
        margin-right: 20px;
    }

    &::after {
        margin-left: 20px;
    }
`

export const CriarContaText = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    color: #000000;
    font-size: 10px;
    text-align: center; 
    max-width: 420px;
    line-height: 19px;

    margin-top: 0;
`
export const LoginIconStyled = styled(MdPerson)`
    color: #ffffffff;
    margin-right: 5px;
    font-size: 15px;
`
export const PasswordStyled = styled(MdLock)`
    color: #ffffffff;
    margin-right: 5px;
    font-size: 15px;
`

export const MagicEye = styled(MdVisibility)`
    color: #ffffffff;
    margin-right: 5px;
    font-size: 15px;
`

export const MagicEyeOff = styled(MdVisibilityOff)`
    color: #ffffffff;
    margin-right: 5px;
    font-size: 15px;
`

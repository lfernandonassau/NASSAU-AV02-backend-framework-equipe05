import styled from 'styled-components'
import { MdLock, MdPerson, MdVisibility, MdVisibilityOff } from 'react-icons/md'
import LoginBackgroundImage from '../../assets/login-background.svg'

export const LoginContainer = styled.main`
    width: 100%;
    max-width: 450px;
    padding: 30px;

    background-color: #ffffff9c;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    border-radius: 0 10px 10px 0;
    filter: drop-shadow(0 0 10px rgba(0.10, 0.6, 0.8, 0.6));

    @media (max-width: 768px) {
      max-width: 100%; 
      border-radius: 0 0 10px 10px;
    }
    

`


export const WelcomeContainer = styled.main`
    width: 100%;
    max-width: 450px;
    padding: 30px;

    background-color: #9fcafcb9;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    
    border-radius: 10px 0 0 10px;
    filter: drop-shadow(0 0 10px rgba(0.10, 0.6, 0.8, 0.6));

    @media (max-width: 768px) {
      
        padding: 7px 10px 30px 2px;
        max-width: 100%; 
        border-radius: 10px 10px 0 0;
    }

`
export const PageWrapper = styled.div`
    background-image: url(${LoginBackgroundImage});
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        
        padding: 60px 15px;
        align-items: flex-start;
        background-attachment: scroll;
    }

`
export const PageLogin = styled.img`
    padding-top: 20px;

`


export const LoginNewScreen = styled.div`
    display: flex;
    align-items: stretch;
    width: 100%;
    max-width: 800px;

    @media (max-width: 768px) {
      flex-direction: column; /* << MÁGICO: Empilha os containers */
      max-width: 450px; /* Largura de 1 coluna */
    }
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
    color: #000000ff;
    font-size: 50px;
    text-align: center;
    margin-bottom: 15px;
    line-height: 75px;

`

export const TitleWelcome = styled.h2`
    font-family: 'Lobster Two';
    font-weight: 700;
    color: #ffffffff;
    font-size: 50px;
    text-align: center;
    margin-bottom: 15px;
    line-height: 40px;
`

export const WelcomeSubText = styled.p`
    font-family: 'Montserrat', 'sans serif';
    font-style: normal;
    font-weight: 300;
    color: #000000ff;
    font-size: 18px;
    text-align: center; 
    max-width: 420px;
    line-height: 25px;
    margin: 20px auto 10px auto;
    @media (max-width: 768px) {
      font-size: 20px;
    }
`

export const KanbanSubText = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    color: #000000;
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
    color: #000000ff;
    font-size: 9px; 
    text-align: center;
    margin-bottom: 20px;
    width: 100%;
    cursor: pointer;
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
export const EmailEstilizado = styled(MdPerson)`
    color: #000000ff;
    margin-right: 5px;
    font-size: 15px;
`
export const PasswordEstilizado = styled(MdLock)`
    color: #000000ff;
    margin-right: 5px;
    font-size: 15px;
`

export const MagicEye = styled(MdVisibility)`
    color: #000000ff;
    margin-right: 5px;
    font-size: 15px;
`

export const MagicEyeOff = styled(MdVisibilityOff)`
    color: #000000ff;
    margin-right: 5px;
    font-size: 15px;
`

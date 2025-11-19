import styled from 'styled-components'
import { MdLock, MdPerson, MdVisibility, MdVisibilityOff } from 'react-icons/md'
import RegisterBackgroundImage from '../../assets/register-background.svg'
import { IAnimation } from './types'
import { FaRegIdCard, FaUser } from 'react-icons/fa'




export const LoginContainer = styled.main`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    flex: 1;

    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;



    @media (max-width: 1600px) {
        padding: 50px;
        max-width: 100%;
        border-radius: 10px;
    }
    

`


export const WelcomeContainer = styled.main`
    width: 100%;
    height: 800px;
    padding: 40px;
    flex: 2;

    background: radial-gradient(
    circle at 70% 30%, /* Posição do centro da "luz" */
    #cde4faff 0%,      /* Laranja/Pêssego mais claro */
    #b7d2ebff 20%,     /* Laranja um pouco mais vibrante */
    #216b99ff 70%,     /* Azul/Cinza aparece aqui */
    #0191daff 100%     /* Finaliza com o azul/cinza mais suave */
    );

  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    border-radius: 20px;
    filter: drop-shadow(0 0 10px rgba(0.10, 0.6, 0.8, 0.6));

    @media (max-width: 1600px) {
        display: none;
    }

`
export const PageWrapper = styled.div`
    background-color: #0f2b3dff;
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

export const FormContainer = styled.form`
    width: 100%;
    max-width: 350px; /* Define a largura "Grande" dos seus inputs aqui */
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;


export const PageLogin = styled.img`
    padding-top: 20px;

`


export const LoginNewScreen = styled.div<IAnimation>`
    display: flex;
    align-items: center;

    width: 100%;
    max-width: 1400px;
    min-weight: 700px;
    

    /* Animação ao rolar a pagina */
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1s ease-out, transform 1s ease-out;
    ${({ $visivel }) => $visivel && `
        opacity: 1;
        transform: translateY(0);
    `}

    @media (max-width: 768px) {
      flex-direction: column; 
      max-width: 450px; 
    }
`


export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`
export const TitleKanban = styled.h2`
    font-family: 'Lobster Two', 'cursive';
    font-style: normal;
    font-weight: 700;
    color: #ffffffff;
    font-size: 55px;
`
export const TitleLogin = styled.p`
    font-family: 'Lobster two';
    font-style: normal;
    font-weight: 700;
    color: #ffffffff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 15px;
    line-height: 75px;

`

export const TitleWelcome = styled.h2`
    font-family: 'Montserrat';
    font-weight: 700;
    color: #ffffffff;
    font-size: 30px;
    text-align: center;
`

export const WelcomeSubText = styled.p`
    font-family: 'Montserrat', 'sans serif';
    font-style: normal;
    font-weight: 600;
    color: #ffffffff;

    width: 100%;
    

    font-size: 25px;
    text-align: center; 
    line-height: 35px;
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
    font-size: 15px;
    text-align: center; 
    max-width: 420px;
    margin-bottom: 35px;
    line-height: 25px;
    margin: 0 auto 20px auto;
    padding-bottom: 10px;

`

export const PossuiContaSubText = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    color: #ffffffff;
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

export const CpfIconStyled = styled(FaRegIdCard)`
    color: #ffffffff;
    margin-right: 5px;
    font-size: 15px;
`

export const NameIconStyled = styled(MdPerson)`
    color: #ffffffff;
    margin-right: 5px;
    font-size: 15px;
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

import styled from 'styled-components'
import { MdLock, MdPerson, MdVisibility, MdVisibilityOff } from 'react-icons/md'
import RegisterBackgroundImage from '../../assets/register-background.svg'
import { IAnimation } from './types'
import { FaRegIdCard, FaUser } from 'react-icons/fa'


export const RegisterNewScreen = styled.div<IAnimation>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 150px;
    width: 100%;
    max-width: 1400px;
    padding: 0 20px;

    

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
      min-width: 0;
      width: 100%;
      max-width: 500px; 
      gap: 10px;
    }

    @media (max-width: 1366px) {
        gap: 50px;  */ 
    }
`

export const RegisterContainer = styled.main`
    width: 100%;
    max-width: 450px;
    padding: 40px;
    flex: 1;
    margin: 20px auto;

    background-color: #47b8da7c;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-radius: 10px;



    @media (max-width: 1600px) {
        
        width: 90%;
        margin: 20px auto;
    }
    
    @media (max-width: 480px) {
        width: 95%;
        margin: 10px auto;
        
    }

`


export const WelcomeContainer = styled.main`
    width: 100%;
    height: 100%;
    min-height: 600px;
    padding: 40px;
    flex: 2;

    background: transparent;

  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    border-radius: 20px;

    @media (max-width: 1366px) {
        flex: 1; 
        padding: 20px; 
    }

    /* O verdadeiro pulo do gato para isso não QUEBRAR nunca mais!!!! */  
    @media (max-width: 1250px) {
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
        
        padding: 20px 15px;
        align-items: center;
        background-attachment: scroll;]
        height: auto;
    }

`

export const FormContainer = styled.form`
    width: 100%;
    max-width: 350px; /* Define a largura "Grande" dos seus inputs aqui */
    display: flex;
    flex-direction: column;
    margin-top: 20px;

   
`;





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

    @media (max-width: 768px) {
        font-size: 30px;
    }
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
    color: #000000ff;
    font-size: 15px;
    text-align: center;
    padding-right: 500px;
    margin-top: -25px;
`

export const WelcomeSubText = styled.p`
    font-family: 'Montserrat', 'sans serif';
    font-weight: 400;
    color: #000000ff;

    background-color: #7bdcfa65;

    filter: 
        drop-shadow(0 8px 6px rgba(12, 24, 40, 0.25));
    &:hover {
    transform: translateY(-5px);
    filter: 
        drop-shadow(0 12px 10px rgba(12, 24, 40, 0.3));
    }

    border: 2px solid #ffffffff;
    border-radius: 10px;
    padding: 15px;
    background-image:
    width: 100%;
    font-size: 22px;
    text-align: center; 
    line-height: 35px;
    margin: 25px auto 15px auto;
    @media (max-width: 768px) {
      font-size: 20px;
    }
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #000000;
  font-size: 1rem;
  cursor: pointer;
  padding-left: 660px;
  margin-top: -10px;


  &:hover {
    color: #FFFFFF;
  }
`;

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
    font-size: 10px; 
    text-align: center;
    margin: 10px;
    width: 100%;
    cursor: pointer;
    margin-top: -15px;
    margin-bottom: 20px;

    a {
        color: #084e88ff;
    }
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

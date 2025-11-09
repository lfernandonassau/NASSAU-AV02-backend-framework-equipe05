import { FaArrowCircleDown } from 'react-icons/fa'
import styled, { keyframes } from 'styled-components'


type IScrollIndicatorProps = {
  $show: boolean;
}

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-8px);
  }
`

export const ScrollDownIndicator = styled.div<IScrollIndicatorProps>`
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);

    color: #086194ff; 
    font-size: 2rem;
    cursor: pointer;
  
    z-index: 10;

    animation: ${bounce} 2.5s infinite;

    /* transição suave */
    transition: opacity 0.4s ease-out, visibility 0.4s ease-out;

    /* prop $show para mudar o CSS */
    opacity: ${({ $show }) => ($show ? 1 : 0)};
    visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};


`

export const AbaixoIcon = styled(FaArrowCircleDown)`
    margin-top: 2px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: linear-gradient(150deg, #9fcafcff, #ffffffff);


`

export const Container = styled.main`
    flex: 1;
    width: 100%;
    max-width: 50%;
    margin: 0 auto;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    position: relative; 
    z-index: 1;

    @media (max-width: 768px) {
        /* Aumenta a largura em telas menores para melhor visualização */
        max-width: 100%; /* Permite ocupar a tela inteira */
        padding: 0 15px; /* Adiciona um respiro nas laterais (espaço interno) */
        
        margin-top: 100px;
        margin-bottom: 150px;
    }
    /* Breakpoint para Laptops/Tablets Maiores na vertical (1024px para baixo) */
    @media (max-width: 1024px) {
        max-width: 70%; 
    }


    
`


export const ParteDoisContainer = styled.footer`
    flex: 1;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    position: relative; 
    z-index: 1;
    
    background-color: #086194ff;

    @media (max-width: 768px) {
        max-width: 100%;
        padding: 30px;
        flex-direction: column;
        margin-top: 100px;
        margin-bottom: 50px;
        display: flex;
    }

`;



export const ImageContainer = styled.img`
    display: block;
    max-width: 100%;
    height: auto;
    margin: 30px auto 0;
    border-radius: 16px;
    transition: all 0.3s ease-in-out;
    

    filter: drop-shadow(0 25px 18px rgba(8, 16, 30, 0.35))
            drop-shadow(0 8px 6px rgba(12, 24, 40, 0.25));
    &:hover {
    transform: translateY(-5px);
    filter: drop-shadow(0 35px 25px rgba(8, 16, 30, 0.4))
            drop-shadow(0 12px 10px rgba(12, 24, 40, 0.3));
    }

    @media (max-width: 768px) {
    max-width: 95%;
    padding: 0;
    }

    @media (max-width: 768px) {
        height: 300px;
        margin-top: 10px;
    }
`

export const TitleKanban = styled.h2`
    font-family: 'Lobster Two';
    font-weight: 700;
    color: #ffffffff;
    font-size: 50px;
    text-align: center;
    width: 800px;
    margin-bottom: 15px;
    line-height: 75px;

    @media (max-width: 768px) {
        max-width: 100%; /* Importante para não vazar */
        font-size: 35px; 
        line-height: 1.2;
        
    }
`

export const TitleColor = styled.h2`
    color: #086194ff;
    font-size: 'Lobster two';
    @media (max-width: 768px) {
        max-width: 100%; /* Importante para não vazar */
        font-size: 40px; 
        line-height: 1.2;
        
    }

`

export const KanbanText = styled.p`
    font-family: 'Montserrat';
    font-weight: 600;
    color: #000000;

    font-size: 20px;
    text-align: center; 

    max-width: 420px;
    width: 100%;
    margin-bottom: 20px;
    line-height: 22px;
    margin: 0 auto 20px auto;

    @media (max-width: 768px) {
        max-width: 100%; /* Importante para não vazar */
        font-size: 20px; 
        line-height: 1.0;
        
    }
`

export const PartTwoText = styled.h2`
    font-family: 'Lobster Two';
    font-weight: 700;
    color: #ffffffff;
    font-size: 35px;
    text-align: center;
    width: 900px;
    margin-bottom: 15px;
    line-height: 75px;

    @media (max-width: 768px) {
        max-width: 100%; /* Importante para não vazar */
        font-size: 35px; 
        line-height: 1.2;
        
    }
`

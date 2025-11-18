import { FaArrowCircleDown } from 'react-icons/fa'
import { HiChevronDoubleDown } from 'react-icons/hi';
import { ImEye, ImRocket } from 'react-icons/im';
import { MdChecklist, MdDashboardCustomize } from 'react-icons/md';
import styled, { keyframes } from 'styled-components'


type IScrollIndicatorProps = {
    $show: boolean
}

type IAnimation = {
    $visivel: boolean
}

type IContainerAnimationProps = {
    $visivel: boolean
}

/* Lista dos keyframes utilizados na home */

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

    @media (max-width: 1024px) {
        top: 87%;
    }


`

export const AbaixoIcon = styled(HiChevronDoubleDown)`
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
        
        max-width: 90%; 
        padding: 0 15px; 
        
        margin-top: 100px;
        margin-bottom: 150px;
    }


    
`


export const ParteDoisContainer = styled.div<IContainerAnimationProps>`
    flex: 1;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    margin-top: 70px;
    display: flex;
    flex-direction: row;
    padding: 150px;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    
    position: relative; 
    z-index: 1;
    
    background-image: linear-gradient(135deg, #075d96ff, #021c2e);


    /* Animação ao rolar a pagina */
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1s ease-out, transform 1s ease-out;
    ${({ $visivel }) => $visivel && `
        opacity: 1;
        transform: translateY(0);
    `}

    @media (max-width: 768px) {
        padding: 50px;
        flex-direction: column;
        max-width: 100%;
        
    }

`


export const HomeSection = styled.div`
    border-top: 1px solid #1e1e1e;
    
`

export const ParteTresContainer = styled.div<IContainerAnimationProps>`
    display: flex;
    flex-direction: row;
    flex: 1;
    position: relative; 
    z-index: 1;
    padding: 150px;

    background-color: #ffffffff;

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
        padding: 50px;
    }

`



export const ImageContainer = styled.img`
    max-width: 100%;
    height: auto;
    margin: 30px auto 0;

    flex: 1;
    min-width: 0;

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
        max-width: 100%;
        height: 300px;
        margin-top: 10px;
    }
`
export const ImageContainerTwo = styled.img`
    max-width: 100%;
    height: auto;
    

    flex: 1;
    min-width: 0;

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
        max-width: 100%;
        height: 300px;
        margin-top: 10px;
    }
`


export const TitleKanban = styled.h2<IAnimation>`
    font-family: 'Lobster Two';
    font-weight: 700;
    color: #ffffffff;
    font-size: 50px;
    text-align: center;

    width: 100%;
    max-width: 800px;

    margin-bottom: 15px;
    line-height: 75px;

    /* Parte da animação */
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    ${({ $visivel }) => $visivel && `
        opacity: 1;
        transform: translateY(0);
    `}

    @media (max-width: 768px) {
        max-width: 100%; /* Importante para não vazar */
        font-size: 35px; 
        line-height: 1.2;
        
    }
`

export const Animation = styled.div<IAnimation>`
    /* Parte da animação */
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    ${({ $visivel }) => $visivel && `
        opacity: 1;
        transform: translateY(0);
    `}
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

export const KanbanText = styled.p<IAnimation>`
    font-family: 'Montserrat';
    font-weight: 700;
    color: #000000;

    font-size: 18px;
    text-align: center; 

    max-width: 600px;
    width: 100%;
    margin-bottom: 20px;
    line-height: 22px;
    margin: 0 auto 20px auto;

    /* Estado inicial (antes de 'visivel' ser true) */
    opacity: 0;
    transform: translateY(20px);
    
    /* A transição que será aplicada */
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    ${({ $visivel }) => $visivel && `
        opacity: 1;
        transform: translateY(0);
    `}

    @media (max-width: 768px) {
        max-width: 100%; /* Importante para não vazar */
        font-size: 20px; 
        line-height: 1.0;
        
    }
`

export const PartTwoText = styled.h2`
    font-family: 'Montserrat';
    font-weight: 700;
    color: #ffffffff;
    font-size: 30px;
    

    max-width: 1000px;
    width: 100%;
    
    line-height: 35px;

    @media (max-width: 768px) {
        max-width: 100%; /* Importante para não vazar */
        font-size: 18px; 
        line-height: 25px;
        
        text-align: center;
        
    }
`
export const ParagraphText = styled.p`
    font-family: 'Montserrat';
    font-weight: 500;
    line-height: 25px;
    color: #ffffffff;
    font-size: 15px;

    @media (max-width: 768px) {
        max-width: 100%; /* Importante para não vazar */
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        
    }
`

export const TresParagraphText = styled.p`
    text-align: center;
    font-family: 'Montserrat';
    font-weight: 500;

    padding: 15px;
    line-height: 22px;
    color: #000000ff;
    font-size: 11px;

    @media (max-width: 768px) {
        max-width: 100%; /* Importante para não vazar */
        font-size: 10px;
        line-height: 15px;
        
    }
`

export const TresParagraphH = styled.h1`
    text-align: center;
    font-family: 'Montserrat';
    font-weight: 500;

    line-height: 35px;
    color: #000000ff;
    font-size: 15px;

    @media (max-width: 768px) {
        max-width: 100%; /* Importante para não vazar */
        font-size: 13px;
        line-height: 30px;
        
    }
`



/*Icons da Home (Terceiro Container)  */

export const CardsIcon = styled(MdDashboardCustomize)`
    height: 30px;
    width: 30px;
    color: #086194ff;

    &:hover {
    transform: translateY(-5px);
    filter: drop-shadow(0 10px 5px rgba(12, 24, 40, 0.3));
    }
    

`


export const VisualIcon = styled(ImEye)`
    height: 30px;
    width: 30px;
    color: #086194ff;
    &:hover {
    transform: translateY(-5px);
    filter: drop-shadow(0 10px 5px rgba(12, 24, 40, 0.3));
    }
    


`

export const ImpulsionIcon = styled(ImRocket)`
    height: 30px;
    width: 30px;
    color: #086194ff;
    &:hover {
    transform: translateY(-5px);
    filter: drop-shadow(0 10px 5px rgba(12, 24, 40, 0.3));
    }
    

`

export const CheckListIcon = styled(MdChecklist)`
    height: 30px;
    width: 30px;
    color: #086194ff;
    &:hover {
    transform: translateY(-5px);
    filter: drop-shadow(0 10px 5px rgba(12, 24, 40, 0.3));
    }
    

`



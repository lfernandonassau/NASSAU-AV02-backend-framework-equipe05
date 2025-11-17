import { FaArrowCircleDown } from 'react-icons/fa'
import { HiChevronDoubleDown } from 'react-icons/hi';
import { ImEye, ImRocket } from 'react-icons/im';
import { MdChecklist, MdDashboardCustomize } from 'react-icons/md';
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


export const ParteDoisContainer = styled.div`
    flex: 1;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    
    position: relative; 
    z-index: 1;
    
    background-color: #075d96ff;

    @media (max-width: 768px) {
        flex-direction: column;
        max-width: 100%;
        
    }

`


export const HomeSection = styled.div`
    border-top: 1px solid #1e1e1e;
    
`

export const ParteTresContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    position: relative; 
    z-index: 1;
    padding: 70px;

    background-color: #ffffffff;

    @media (max-width: 768px) {
        flex-direction: column;
        

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


export const TitleKanban = styled.h2`
    font-family: 'Lobster Two';
    font-weight: 700;
    color: #ffffffff;
    font-size: 50px;
    text-align: center;

    width: 100%;
    max-width: 800px;

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
    font-weight: 700;
    color: #000000;

    font-size: 20px;
    text-align: center; 

    max-width: 600px;
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
    font-weight: 500;
    color: #ffffffff;
    font-size: 80px;
    

    max-width: 900px;
    width: 100%;
    
    line-height: 90px;

    @media (max-width: 768px) {
        max-width: 100%; /* Importante para não vazar */
        font-size: 35px; 
        line-height: 2.0;
        text-align: center;
        
    }
`
export const ParagraphText = styled.p`
    font-family: 'Montserrat';
    font-weight: 500;
    line-height: 45px;
    color: #ffffffff;
    font-size: 13px;

    @media (max-width: 768px) {
        max-width: 100%; /* Importante para não vazar */
        font-size: 15px;
        line-height: 25px;
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

`


export const VisualIcon = styled(ImEye)`
    height: 30px;
    width: 30px;
    color: #086194ff;

`

export const ImpulsionIcon = styled(ImRocket)`
    height: 30px;
    width: 30px;
    color: #086194ff;

`

export const CheckListIcon = styled(MdChecklist)`
    height: 30px;
    width: 30px;
    color: #086194ff;

`



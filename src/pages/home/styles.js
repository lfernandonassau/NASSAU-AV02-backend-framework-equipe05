import styled from 'styled-components'

export const BackWrapper = styled.div`
    background-color: #91becfff;
`



export const Container = styled.main`
    width: 100%;
    max-width: 50%;
    margin: 0 auto;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    @media (max-width: 768px) {
        /* Aumenta a largura em telas menores para melhor visualização */
        max-width: 100%; /* Permite ocupar a tela inteira */
        padding: 0 15px; /* Adiciona um respiro nas laterais (espaço interno) */
        
        /* Note que 'margin: 0 auto;' no estilo principal já garante a centralização */
        
    }

    @media (max-width: 480px) {
        /* Garante que o padding seja menor em telas muito estreitas */
        padding: 0 10px;
    }
    /* Breakpoint para Laptops/Tablets Maiores na vertical (1024px para baixo) */
    @media (max-width: 1024px) {
        max-width: 70%; /* Usa 70% da tela em tablets grandes */
    }


    
`


export const ImageContainer = styled.img`
    display: block; /* Essencial para que margin: auto funcione */
    max-width: 100%; /* Garante a responsividade */
    height: auto;
    margin: 0 auto; /* Centraliza horizontalmente */
    margin-top: 30px;
    filter: drop-shadow(2px 35px 15px rgba(0.10, 0.6, 0.8, 0.6));

    @media (max-width: 480px) {
        /* Reduz o tamanho da fonte para smartphones */
        height: 300px;
        max-width: 95%;
        padding: 0;
    }
    @media (max-width: 768px) {
        padding: 0;
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

    /* Media Query para garantir que o texto não seja o problema */
    @media (max-width: 850px) {
        max-width: 100%; 
        line-height: 1.2;
    }

    @media (max-width: 480px) {
        /* Reduz o tamanho da fonte para smartphones */
        font-size: 20px;
    }
    @media (max-width: 768px) {
        max-width: 100%; /* Importante para não vazar */
        font-size: 20px; 
        line-height: 1.2;
        
    }
`

export const TitleColor = styled.h2`
    color: #086194ff;
    font-size: 'Lobster two';

`

export const KanbanText = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 550;
    color: #000000;

    font-size: 20px;
    text-align: center; 

    max-width: 420px;
    width: 100%;
    margin-bottom: 20px;
    line-height: 22px;
    margin: 0 auto 20px auto;
`

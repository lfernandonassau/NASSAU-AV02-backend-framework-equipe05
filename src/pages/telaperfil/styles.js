import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh; /* Garante que cubra a altura inteira da tela */
    background-color: #FAFAFA;

    /* Adicionei 'flex' aqui para ajudar a centralizar o <Container> principal, que tem margem automática.
    */
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const Container = styled.main`
    width: 100%;
    max-width: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    text-align: center;
`


export const ImageContainer = styled.img`
    display: block; /* Essencial para que margin: auto funcione */
    max-width: 100%; /* Garante a responsividade */
    height: auto;
    margin: 0 auto; /* Centraliza horizontalmente */
    margin-top: 30px;
    filter: drop-shadow(2px 35px 15px rgba(0.10, 0.6, 0.8, 0.6));
`

export const TitleKanban = styled.h2`
    font-family: 'Lobster Two';
    font-style: normal;
    font-weight: 700;
    color: #ffffffff;
    font-size: 50px;
    text-align: center;
    width: 800px;
    margin-bottom: 15px;
    line-height: 75px;

`

export const TitleColor = styled.h2`
    color: #086194ff;

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

import styled from 'styled-components';


export const FooterContainer = styled.footer`
    background-color: #000000ff;
    display: flex;
    flex-direction: row; /* Adicionado para empilhar a área principal e o copyright */
    align-items: center; /* Centraliza o conteúdo horizontalmente, se o width não for 100% */
`
export const Container = styled.main`
    width: 100%;
    max-width: 50%;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const FooterText = styled.p`
    text-align: center;


`
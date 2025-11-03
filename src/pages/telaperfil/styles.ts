import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh; /* Garante que cubra a altura inteira da tela */
    background-image: linear-gradient(150deg, #9fcafcff, #ffffffff);

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

    @media (max-width: 768px) {
        /* Aumenta a largura em telas menores para melhor visualização */
        max-width: 90%; 
        margin-top: 40px; /* Reduz a margem superior um pouco */
    }
`
export const PerfilContainer = styled.div`
    width: 100%;
    max-width: 100%;
    padding: 20px;

    background-color: #ffffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    
    border-radius: 10px;
    filter: drop-shadow(0 0 5px rgba(0.10, 0.6, 0.8, 0.6));


`

export const ImageContainer = styled.img`
    display: block; /* Essencial para que margin: auto funcione */
    max-width: 100%; /* Garante a responsividade */
    height: 100px;
    border-radius: 50px;
    
`

export const TitleKanban = styled.p`
    font-family: 'Lobster Two';
    font-style: normal;
    font-weight: 700;
    color: #000000ff;
    font-size: 20px;
    text-align: center;
    width: 800px;
    margin-bottom: 15px;
    line-height: 30px;

    @media (max-width: 480px) {
        /* Reduz o tamanho da fonte para smartphones */
        font-size: 32px;
    }

`

export const TitleColor = styled.p`
    color: #000000ff;
    font-style: 'Montserrat';
    font-size: 20px;
    font-weight: 500;

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

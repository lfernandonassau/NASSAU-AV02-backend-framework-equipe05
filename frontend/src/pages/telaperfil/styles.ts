import styled from 'styled-components'

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
    margin-top: 150px;
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column; 
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;

    @media (max-width: 768px) {
        /* Aumenta a largura em telas menores para melhor visualização */
        max-width: 100%; /* Permite ocupar a tela inteira */
        padding: 0 15px; /* Adiciona um respiro nas laterais (espaço interno) */
        
        margin-top: 100px;
        margin-bottom: 50px;
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



export const NameProject = styled.p`
    font-family: 'Montserrat';
    color: #000000ff;
    font-size: 20px;
    width: 200px;
    margin-bottom: 15px;
    line-height: 30px;

    @media (max-width: 480px) {
        /* Reduz o tamanho da fonte para smartphones */
        font-size: 32px;
    }

`

export const TitleProject = styled.p`
    font-family: 'Montserrat';
    color: #000000ff;
    font-size: 25px;
    width: 400px;
    margin-bottom: 15px;
    line-height: 30px;

    @media (max-width: 480px) {
        font-size: 32px;
    }
`

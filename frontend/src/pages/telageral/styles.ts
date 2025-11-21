import styled from 'styled-components'

// Wrapper Global (Fundo Gradiente)
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: linear-gradient(150deg, #ece9e9ff, #ffffffff);
`

// Container Principal do Layout (Segura Sidebar + Conteúdo)
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 100vh;

    padding-left: 350px;
    box-sizing: border-box;


    @media (max-width: 1024px) {
        flex-direction: column;
        padding-left: 0; 
    }
`

// Área de Conteúdo da Direita (Onde fica a lista branca)
export const ContentWrapper = styled.div`
    flex: 1; 
    width: 100%;
    
    padding:30px;
    

    display: flex;
    flex-direction: column;
    gap: 40px;
    
    min-width: 0; 
    overflow-x: hidden; 
    box-sizing: border-box;
    
    

    @media (max-width: 1024px) {
        overflow-x: visible;
        padding-top: 10px;
    }
`

// Container Branco para conteúdo
export const Container = styled.div`
    width: 100%;
    max-width: 1200px; 
    margin: 0; 
    
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;

    box-sizing: border-box;
    
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    @media (max-width: 1366px) {
        max-width: 100%; 
    }
        
    @media (max-width: 1024px) {
        margin: 0 auto;
        max-width: 100%;
    }

    @media (max-width: 768px) {
        padding: 20px;
    }
`

export const PerfilBar = styled.div`
    width: 100%;
    max-width: 900px; 
    margin: 0; 
    
    /* Transparente ou Branco? No seu código anterior estava transparent, mas se quiser destaque use branco */
    background-color: transparent; 
    
    border-radius: 10px;
    display: flex;
    
    /* MUDANÇA: Row para alinhar Foto <-> Texto */
    flex-direction: row; 
    align-items: center; /* Centraliza verticalmente */
    gap: 20px; /* Espaço entre a foto e o texto */
    
    padding: 0 20px 20px 0; /* Espaçamento */

    box-sizing: border-box;

    @media (max-width: 1024px) {
        margin: 0 auto;
        max-width: 100%;
        padding: 10px 20px 20px 20px;
    }

    @media (max-width: 768px) {
        flex-direction: column; /* No mobile volta a empilhar se faltar espaço */
        align-items: center;
        text-align: center;
        padding-top: 10px;
    }
`

// Container para agrupar os textos (Titulo e Subtitulo)
export const PerfilTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

// Estilo para a Foto do Usuário na Tela Geral
export const UserAvatar = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 3px solid #ffffff; /* Borda branca para destacar no fundo colorido */
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    object-fit: cover;

    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
    }
`

export const PerfilTitleBar = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;
    font-weight: 700;
    color: #444444ff;
    margin: 0;
    padding: 0;

    @media (max-width: 1024px) {
        font-size: 15px;
    }

`
export const PerfilTextSpanBar = styled.span`
    font-weight: 500;
    color: #4d4d4dff;

`

export const PerfilTextBar = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: #494949ff;
    margin: 0;
    padding: 0;

    @media (max-width: 1024px) {
        font-size: 15px;
    }

`
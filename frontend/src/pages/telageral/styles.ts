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
    padding-top: 60px;

    display: flex;
    flex-direction: column;
    gap: 40px;
    
    min-width: 0; 
    overflow-x: hidden; 
    box-sizing: border-box;
    
    

    @media (max-width: 1024px) {
        overflow-x: visible;
        padding: 20px;
        padding-top: 40px; 
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
    max-width: 700px; 
    margin: 0; 
    
    background-color: #72e3ffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
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

export const PerfilTitleBar = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    font-weight: 700;
    color: #ffffffff;
    margin: 0;
    padding: 0;

    @media (max-width: 1024px) {
        font-size: 12px;
    }

`
export const PerfilTextSpanBar = styled.span`
    font-weight: 400;
    color: #ffffffff;
    @media (max-width: 1024px) {
        font-size: 12px;
    }

`

export const PerfilTextBar = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: #ffffffff;
    margin: 0;
    padding: 0;

    @media (max-width: 1024px) {
        font-size: 12px;
    }

`
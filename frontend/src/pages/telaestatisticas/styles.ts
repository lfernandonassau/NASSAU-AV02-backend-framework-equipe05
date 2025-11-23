import styled from 'styled-components'

// Wrapper Global
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

// Área de Conteúdo da Direita
export const ContentWrapper = styled.div`
    flex: 1; 
    width: 100%;
    padding: 30px;
    padding-top: 100px;
    
    min-width: 0; 
    overflow-x: hidden; 
    box-sizing: border-box;
    
    

    @media (max-width: 1024px) {
        overflow-x: visible;
        padding: 10px; 
        padding-top: 100px;
    }
`

//  Container Branco da Lista de Projetos
export const Container = styled.div`
    width: 100%;
    max-width: 700px; 
    
    /* Desktop: Alinhado à esquerda próximo à sidebar */
    margin: 0; 

    background-color: #ffffff;
    border: 1px solid #8a8a8a60;
    border-radius: 10px; 
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    gap: 20px;
    padding: 1.5rem 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 1540px) {
        max-width: 700px;
    }

    /* Responsividade: Sidebar vira Menu Hambúrguer/Topo */
    @media (max-width: 1024px) {
        
        /* Centraliza o container na tela */
        margin: 0 auto;
        
        height: auto; 
        padding: 1.5rem;
    }

    @media (max-width: 768px) {
        padding: 1rem;
    }
`

// --- Estilos dos Cards de Projeto ---

export const TitleProject = styled.p`
    font-family: 'Montserrat';
    font-weight: 700;
    color: #000000ff;
    font-size: 25px;
    width: 100%;
    margin-bottom: 20px;
    line-height: 30px;
    border-bottom: 1px solid #cbd5e1;
    padding-bottom: 15px;

    @media (max-width: 480px) {
        font-size: 20px;
    }
`

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const NameProject = styled.p`
    font-family: 'Montserrat';
    color: #000000ff;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;

    @media (max-width: 480px) {
        font-size: 16px;
    }
`

export const ProjectActionsRow = styled.div`
    width: 100%;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #f1f5f9;

    display: flex;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap; 
`

export const ProjectActionButton = styled.button`
    border: none;
    border-radius: 999px;
    padding: 8px 16px;
    font-size: 13px;
    font-weight: 600;
    font-family: 'Montserrat';
    cursor: pointer;
    background: #0ea5e9;
    color: #ffffff;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: all 0.2s ease;
    min-width: 100px;
    justify-content: center;

    &:hover {
        filter: brightness(0.9);
        transform: translateY(-1px);
    }
`
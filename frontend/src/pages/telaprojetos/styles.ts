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
    
    min-width: 0; 
    overflow-x: hidden; 
    box-sizing: border-box;
    
    

    @media (max-width: 1024px) {
        overflow-x: visible;
        padding: 10px; 
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

/* ...seus estilos existentes... */

/* Título + botão de adicionar */
export const TitleRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const SubtitleProject = styled.p`
    font-family: 'Montserrat';
    font-size: 14px;
    color: #64748b;
    margin-top: 4px;
    line-height: 1.4;
`

export const IconButton = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border-radius: 999px;
    transition: background 0.15s ease;

    &:hover {
    background: #e2e8f0;
    }
`

/* pra conseguir posicionar o menu de opções */
export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative; /* importante pro ProjectMenu ficar alinhado ao card */
`

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`

/* Menu dropdown dos três pontinhos */
export const ProjectMenu = styled.div`
    z-index: 9999;
    position: absolute;
    top: 40px;
    right: 0;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #cbd5e1;
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.18);
    padding: 6px 0;
    min-width: 140px;
    
`

export const ProjectMenuItem = styled.button`
    width: 100%;
    padding: 8px 14px;
    border: none;
    background: transparent;
    font-family: 'Montserrat';
    font-size: 13px;
    text-align: left;
    cursor: pointer;
    color: #0f172a;

    &:hover {
    background: #f1f5f9;
    }
`

/* ------- MODAL ------- */

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`

export const ModalCard = styled.div`
    font-family: 'Montserrat';
    background: #ffffff;
    width: 100%;
    max-width: 420px;
    border-radius: 10px;
    box-shadow: 0 32px 64px rgba(15, 23, 42, 0.35);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #cbd5e1;
`

export const ModalHeader = styled.div`
    background-color: #0284c7;
    padding: 1rem 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ModalTitle = styled.h2`
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
`

export const ModalCloseButton = styled.button`
    border: none;
    background: transparent;
    font-size: 1.4rem;
    line-height: 1;
    cursor: pointer;
    color: #ffffff;
`

export const ModalBody = styled.div`
    padding: 1.2rem 1.4rem 1.4rem;
    font-size: 0.95rem;
    color: #0f172a;

    p {
    margin-bottom: 1.4rem;
    line-height: 1.5;
    }
`

export const ModalInput = styled.input`
    width: 100%;
    padding: 0.7rem 0.9rem;
    border-radius: 6px;
    border: 1px solid #cbd5e1;
    font-size: 0.95rem;
    outline: none;

    &:focus {
    border-color: #0284c7;
    box-shadow: 0 0 0 1px rgba(2, 132, 199, 0.3);
    }
`

export const ModalCharCounter = styled.p`
    margin-top: 6px;
    margin-bottom: 1rem;
    font-size: 11px;
    text-align: right;
    color: #64748b;
`

export const ModalActions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
`

export const ModalSecondaryButton = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 999px;
    border: 1px solid #cbd5e1;
    background: #e2e8f0;
    color: #0f172a;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
    background: #cbd5e1;
    }
`

export const ModalPrimaryButton = styled.button`
    padding: 0.5rem 1.2rem;
    border-radius: 999px;
    border: none;
    background: #0284c7;
    color: #ffffff;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;

    &:hover {
    background: #0369a1;
    }
    `

    export const ModalDangerButton = styled(ModalPrimaryButton)`
    background: #dc2626;

    &:hover {
    background: #b91c1c;
    }
`

export const ModalTextArea = styled.textarea`
    width: 100%;
    padding: 0.7rem 0.9rem;
    border-radius: 6px;
    border: 1px solid #cbd5e1;
    font-size: 0.95rem;
    outline: none;
    resize: vertical;
    min-height: 70px;
    max-height: 160px;

    &:focus {
    border-color: #0284c7;
    box-shadow: 0 0 0 1px rgba(2, 132, 199, 0.3);
    }
`


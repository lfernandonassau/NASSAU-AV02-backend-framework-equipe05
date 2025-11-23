import styled from 'styled-components'

export const ProjectCardContainer = styled.div`
    background-color: #ffffff;
    
    /* Visual de lista/tabela limpa */
    border: 1px solid #e2e8f0;
    border-radius: 12px; 
    margin-bottom: -1px; /* Espaço entre os cards */

    position: relative;
    padding: 16px 20px;
    
    display: flex;
    flex-direction: column; /* Mantém coluna para expandir detalhes embaixo */
    
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    
    /* Sombra suave inicial */
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);

    &:hover {
        border-color: #cbd5e1;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        transform: translateY(-2px);

        /* Destaque sutil no texto ao passar o mouse */
        h3 {
            color: #006391;
        }
    }
`;
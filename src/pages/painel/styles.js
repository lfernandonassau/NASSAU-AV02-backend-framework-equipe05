import styled from "styled-components";

export const PageWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient( #9fcafcff, #ffffffff);
    padding-top: 60px;
    display: flex;
    flex-direction: column;
`;

/* container branco centralizado que engloba o título + colunas */
export const BoardOuterContainer = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;

    background-color: #ffffff;
    border: 1px solid #8a8a8a60;
    border-radius: 4px;
    box-shadow: 0 24px 32px rgba(0,0,0,0.15);

    padding: 1.5rem 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;
`;

/* cabeçalho dentro do quadro branco (nome do projeto, ícone) */
export const BoardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    color: #000;
    padding-bottom: 1rem;
`;

export const BoardInfoLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: .5rem;
    flex-wrap: wrap;
`;

export const BoardInfoTitle = styled.h1`
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: .5rem;
    color: #000;
`;

export const BoardInfoIcon = styled.span`
    font-size: .9rem;
`;

/* área das colunas do kanban */
export const ColumnsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 1.5rem;
    overflow-x: auto;
    padding-top: 0.5rem;
`;

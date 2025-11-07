import styled from "styled-components";

export const ColumnWrapper = styled.div`
    

    font-family: 'Montserrat';

    background-color: #f5f5f5;
    border: 1px solid #8a8a8a;
    border-radius: 4px;

    width: 320px;
    min-width: 320px;
    max-height: calc(100vh - 120px);

    display: flex;
    flex-direction: column;
    position: relative;

    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    
`;


export const ColumnHeader = styled.div`
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #8a8a8a;
    background-color: #0063918c;
    border-radius: 4px 4px 0 0;
`;

export const ColumnTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .icon {
    font-size: 1rem;
    line-height: 1;
    }

    .text {
    font-weight: 600;
    font-size: 1rem;
    color: #ffffffff;
    }
`;

export const CardsList = styled.div`
    padding: 0.75rem 1rem 3.5rem; /* respiro no fim pras cards não ficarem coladas com o botão + */
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    overflow-y: auto;
`;

export const AddButtonArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    position: absolute;
    bottom: 0.5rem;
    left: 0;
`;

export const AddButton = styled.button`
    font-size: 1.1rem;
    font-weight: 500;
    border-radius: 999px;
    width: 32px;
    height: 32px;
    border: 2px solid #fff;
    box-shadow: 0 1px 7px rgba(0,0,0,0.4);

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    outline: none;

    &:hover {
    filter: brightness(0.9);
    }
`;


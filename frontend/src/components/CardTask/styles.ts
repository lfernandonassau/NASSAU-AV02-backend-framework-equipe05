import styled from "styled-components";

interface ICardContainerProps {
    $menuOpen?: boolean;
}

export const CardContainer = styled.div<ICardContainerProps>`
    position: relative;
    overflow: visible;   /* garante que o menu pode “sair” do card */
    background-color: #f5f5f5;
    border: 1px solid #cfcfcf;
    border-radius: 6px;
    padding: 0.75rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    min-width: 240px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.08);
    transition: all 0.25s ease;


    /* Se o menu estiver aberto, este card sobe na pilha (z-index 100). 
       Se não, fica normal (z-index 1 ou auto). */
    z-index: ${({ $menuOpen }) => ($menuOpen ? 100 : 1)};

    position: relative;
    &:hover {
    transform: translateY(-1px);
    background-color: #ffffff;
    cursor: grab;
    }
    &[data-dragging="true"] {
    cursor: grabbing;
    transform: translateZ(0) scale(.99);
    box-shadow: 0 8px 24px rgba(90, 181, 250, 0.25);
    }
`;


export const StatusBar = styled.div`
    width: 100%;
    height: 4px;
    border-radius: 4px;
`;

export const TopRow = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5rem;
`;

export const Title = styled.div`
    font-size: 0.9rem;
    font-weight: 600;
    color: #0f172a;
    line-height: 1.3;
`;

export const Subtitle = styled.div`
    font-size: 0.75rem;
    font-weight: 400;
    color: #6b7280;
    line-height: 1.2;
    margin-top: 0.25rem;
`;

export const OptionsButton = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 3px;

    span {
    width: 4px;
    height: 4px;
    background-color: #0f172a;
    border-radius: 999px;
    display: block;
    }

    &:hover span {
    background-color: #475569;
    }
`;

export const BottomRow = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: nowrap;
`;

export const UserBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
`;

export const UserIcon = styled.span`
    font-size: 0.8rem;
    line-height: 1;
    color: #0f172a;
    display: flex;
    align-items: center;
`;

export const AvatarsRow = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

export const Avatar = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 999px;
    border: 2px solid #f5f5f5;
    object-fit: cover;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);

    &:not(:first-child) {
    margin-left: -8px;
    }
`;

export const DateText = styled.span`
    font-size: 0.7rem;
    color: #4b5563;
    white-space: nowrap;
`;

    export const Actions = styled.div`
    position: relative;
    flex: 0 0 auto;
`;


export const TextCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;            /* aproxima título e subtítulo */
    flex: 1 1 auto;      /* ocupa o espaço livre */
    min-width: 0;        /* permite ellipsis funcionar */
    padding-right: .5rem;/* respiro do botão à direita */

    /* reforço do cursor do handle global */
    cursor: inherit;
`;



export const OptionsMenu = styled.div`
    position: absolute;
    top: 100%; /* Posiciona logo abaixo do botão */
    right: 0;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    min-width: 160px;
    z-index: 1000;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 4px 0; /* Pequeno padding vertical interno */
`;
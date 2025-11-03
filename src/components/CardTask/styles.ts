import styled from "styled-components";

export const CardContainer = styled.div`
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

    &:hover {
    transform: translateY(-1px);

    background-color: #ffffff;
    cursor: pointer;
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

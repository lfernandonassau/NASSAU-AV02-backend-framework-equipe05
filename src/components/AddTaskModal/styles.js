import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999; /* acima do header fixo */
`;

export const ModalCard = styled.div`
    background: #fff;
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
    box-shadow: 0 32px 64px rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #cbd5e1;
`;

export const ModalHeader = styled.div`
    background-color: #f8fafc;
    border-bottom: 1px solid #cbd5e1;
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const ModalTitle = styled.h2`
    font-size: 0.95rem;
    font-weight: 600;
    color: #0f172a;
    display: flex;
    flex-direction: column;
    line-height: 1.4;
`;

export const CloseButton = styled.button`
    background: transparent;
    border: none;
    color: #475569;
    font-size: 1rem;
    cursor: pointer;
    line-height: 1;
    padding: 0.25rem 0.5rem;

    &:hover {
    color: #0f172a;
    }
`;

export const ModalBody = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const AvatarPreview = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 999px;
    border: 2px solid #fff;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    object-fit: cover;
`;

export const Label = styled.label`
    font-size: 0.8rem;
    font-weight: 600;
    color: #1e293b;
`;

export const TextInput = styled.input`
    width: 100%;
    background-color: #f8fafc;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    font-size: 0.8rem;
    padding: 0.5rem 0.6rem;
    color: #0f172a;
    outline: none;

    &:focus {
    border-color: #00b7d7;
    box-shadow: 0 0 0 3px rgba(0,183,215,0.25);
    background-color: #fff;
    }
`;

export const ModalFooter = styled.div`
    border-top: 1px solid #cbd5e1;
    background-color: #f8fafc;
    padding: 0.75rem 1rem;

    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
`;

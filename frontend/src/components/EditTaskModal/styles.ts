import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;

    user-select: none;
`;

export const ModalCard = styled.div`
    font-family: 'Montserrat', sans-serif;
    background: #fff;
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
    box-shadow: 0 32px 64px rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #cbd5e1;
    
    animation: fadeIn 0.2s ease-out;
    @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
    }
`;

export const ModalHeader = styled.div`
    /* Mantendo o padrão azul do seu sistema, ou use #3d3d3dff se quiser diferenciar edição */
    background-color: #0063918c; 
    border-bottom: 1px solid #ffffff;
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ModalTitle = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    line-height: 1.4;
`;

export const CloseButton = styled.button`
    background: transparent;
    border: none;
    color: #ffffff;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 4px;
    border-radius: 50%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    transition: background-color 0.2s;

    &:hover {
        background-color: rgba(255,255,255,0.2);
        color: #ffffff;
    }
`;

export const ModalBody = styled.div`
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 0.95rem;
    color: #223;
`;

export const ModalFooter = styled.div`
    border-top: 1px solid #cbd5e1;
    background-color: #f8fafc;
    padding: 1rem;
    
    display: flex;
    flex-direction: row; 
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem; 
`;

/* --- Estilos Específicos para o Formulário de Edição --- */

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Label = styled.label`
    font-size: 0.85rem;
    font-weight: 600;
    color: #334155; /* Slate-700 */
    margin-left: 2px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px 12px;
    border-radius: 6px;
    border: 1px solid #cbd5e1;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    color: #0f172a;
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box; /* Garante que padding não estoure a largura */

    &:focus {
        border-color: #006391;
        box-shadow: 0 0 0 3px rgba(0, 99, 145, 0.1);
    }

    &::placeholder {
        color: #94a3b8;
    }
`;
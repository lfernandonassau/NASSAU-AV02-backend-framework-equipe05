import styled from "styled-components"

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;

    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`

export const ModalCard = styled.div`
    font-family: 'Montserrat';
    background: #fff;
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
    box-shadow: 0 32px 64px rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #cbd5e1;
`

export const ModalHeader = styled.div`
    background-color: #3d3d3dff;
    border-bottom: 1px solid #ffffffff;
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const ModalTitle = styled.h2`
    font-family: 'Montserrat';
    font-size: 1rem;
    font-weight: 700;
    color: #ffffffff;
    display: flex;
    flex-direction: column;
    line-height: 1.4;
`

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
`

export const ModalBody = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    font-size: .95rem;
    color: #223;
`

export const ModalFooter = styled.div`
    border-top: 1px solid #cbd5e1;
    background-color: #f8fafc;
    padding: 0.75rem 1rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    flex-direction: row; 
    flex-wrap: wrap; 
    gap: 1rem;

`
import styled from 'styled-components';

export const Container = styled.header`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    position: fixed;
    top: 0;
    right: 0;
    left: 350px;
    z-index: 999;
    background: transparent;
    backdrop-filter: blur(2px);
    padding: 0 40px;

    @media (max-width: 1050px) {
        justify-content: flex-end;
    }

    @media (max-width: 1024px) {
        left: 0;
        padding: 0 20px;
        justify-content: flex-end;
    }

    @media (max-width: 768px) {
        gap: 12px;
        padding: 0 15px;
    }
`;

export const SearchContainer = styled.div<{ $isOpen: boolean }>`
    display: flex;
    align-items: center;
    background-color: ${({ $isOpen }) => ($isOpen ? '#fff' : 'transparent')};
    border-radius: 20px;
    padding: 5px;
    border: 1px solid ${({ $isOpen }) => ($isOpen ? '#e0e0e0' : 'transparent')};
    transition: all 0.3s ease;
    box-shadow: ${({ $isOpen }) => ($isOpen ? '0 2px 5px rgba(0,0,0,0.05)' : 'none')};
`;

export const SearchInput = styled.input<{ $isOpen: boolean }>`
    border: none;
    background: transparent;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #333;
    width: ${({ $isOpen }) => ($isOpen ? '200px' : '0px')};
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    padding: ${({ $isOpen }) => ($isOpen ? '0 10px' : '0')};
    transition: all 0.3s ease;

    &::placeholder {
        color: #aaa;
    }

    @media (max-width: 768px) {
        width: ${({ $isOpen }) => ($isOpen ? '160px' : '0px')};
    }

    @media (max-width: 480px) {
        width: ${({ $isOpen }) => ($isOpen ? '120px' : '0px')};
        font-size: 13px;
    }
`;

export const IconButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #555;
    padding: 0;
    border-radius: 50%;
    transition: background 0.2s;
    flex-shrink: 0;

    svg {
        font-size: 22px;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
        color: #006391;
    }
`;

export const ProfileWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const ProfileToggle = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 4px;
`;

export const Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Divider = styled.div`
    width: 1px;
    height: 24px;
    background-color: #ccc;
    margin: 0 5px;
`;

export const NotificationWrapper = styled.div`
    position: relative;
    cursor: pointer;
`;

export const NotificationBadge = styled.span`
    position: absolute;
    top: -4px;
    right: -4px;
    background: #006391;
    color: #fff;
    font-size: 10px;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProfileMenuContainer = styled.div`
    position: absolute;
    top: 45px;
    right: 0;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    width: 150px;
    display: flex;
    flex-direction: column;
    z-index: 10;
`;

export const LogoutMenuItem = styled.button`
    padding: 10px 12px;
    background: transparent;
    border: none;
    text-align: left;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #d93025;

    &:hover {
        background: #ffe5e5;
    }
`;


/* --- NOVO: Container de Sugestões (Dropdown) --- */
export const SuggestionsList = styled.ul`
    position: absolute;
    top: 100%; /* Logo abaixo do search container */
    left: 0;
    right: 0;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    list-style: none;
    padding: 5px 0;
    margin-top: 5px;
    z-index: 1000;
    border: 1px solid #f0f0f0;
    
    /* Limita a altura se tiver muitos projetos */
    max-height: 200px;
    overflow-y: auto; 

    /* Scrollbar bonita */
    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 4px;
    }
`;

export const SuggestionItem = styled.li`
    padding: 10px 15px;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    color: #333;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: background 0.2s;

    &:hover {
        background-color: #f5f5f5;
        color: #006391;
    }

    svg {
        font-size: 16px;
        color: #999;
    }
`;

export const NoResults = styled.li`
    padding: 15px;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    color: #999;
    text-align: center;
`;
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 100%; 
    margin: 0; 
    
    background-color: transparent; 
    
    border-radius: 10px;
    display: flex;
    
    flex-direction: row; 
    align-items: center; 
    gap: 15px;
    
    padding: 0 20px 0 0;
    
    box-sizing: border-box;

    @media (max-width: 1024px) {
        margin: 0 auto;
        padding: 10px 20px;
    }

    @media (max-width: 768px) {
        flex-direction: column; 
        align-items: center;
        text-align: center;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const UserAvatar = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 3px solid #ffffff; 
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    object-fit: cover;

    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
    }
`;

export const TitleBar = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;
    font-weight: 700;
    color: #444444ff;
    margin: 0;
    padding: 0;

    @media (max-width: 1024px) {
        font-size: 15px;
    }
`;

export const TextSpanBar = styled.span`
    font-weight: 500;
    color: #4d4d4dff;
`;

export const DescriptionBar = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: #494949ff;
    margin: 0;
    padding: 0;

    @media (max-width: 1024px) {
        font-size: 15px;
    }
`;
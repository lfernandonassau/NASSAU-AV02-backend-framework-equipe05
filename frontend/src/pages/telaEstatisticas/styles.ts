import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-image: linear-gradient(150deg, #ece9e9ff, #ffffffff);
`;

export const Content = styled.div`
  flex: 1;
  padding: 32px 40px;
  
  margin-left: 350px; 
  margin-top: 90px; 

  display: flex;
  flex-direction: column;
  gap: 32px; /* Espaço entre o PerfilBar e os Gráficos */

  @media (max-width: 1024px) {
    margin-left: 0;
    padding: 24px 20px;
    margin-top: 110px;
  }

  @media (max-width: 768px) {
    padding: 18px 16px;
  }
`;

export const ChartsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const BottomRow = styled.div`
  width: 100%;
`;

export const CollaboratorSection = styled.div`
  width: 100%;
`;

// PERFIL BAR 
export const PerfilBar = styled.div`
    width: 100%;
    
    margin-bottom: 10px; 
    
    background-color: transparent;
    display: flex;
    flex-direction: row; 
    align-items: center; 
    gap: 15px;
  
    padding: 0; 
    
    box-sizing: border-box;

    @media (max-width: 768px) {
        flex-direction: column; 
        align-items: flex-start;
        text-align: left;
        gap: 10px;
    }
`

export const PerfilTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const UserAvatar = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 3px solid #ffffff; 
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    object-fit: cover;

    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
    }
`

export const PerfilTitleBar = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #444444;
    margin: 0;

    @media (max-width: 1024px) {
        font-size: 20px;
    }
    @media (max-width: 768px) {
        font-size: 18px;
    }
`

export const PerfilTextSpanBar = styled.span`
    font-weight: 500;
    color: #4d4d4d;
`

export const PerfilTextBar = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: #666;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 13px;
    }
`

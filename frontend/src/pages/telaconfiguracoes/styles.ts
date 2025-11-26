import styled from 'styled-components';

// --- REUTILIZANDO ESTRUTURA DE LAYOUT ---
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: linear-gradient(150deg, #ece9e9ff, #ffffffff);
`

// Container Principal do Layout (Segura Sidebar + Conteúdo)
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 100vh;

    padding-left: 350px;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        flex-direction: column;
        padding-left: 0; 
    }
`
// Área de Conteúdo da Direita
export const ContentWrapper = styled.div`
    flex: 1; 
    width: 100%;
    
    padding: 90px 30px 30px 30px; 

    display: flex;
    flex-direction: column;
    gap: 30px; /* Aumento do gap para separar Header, PerfilBar e as Tabelas */
    
    min-width: 0; 
    overflow: visible; 
    box-sizing: border-box; 

    @media (max-width: 1024px) {
        overflow-x: visible;
        padding-top: 90px;
        padding-left: 20px;
        padding-right: 20px;
    }
`

// --- CONTAINER PRINCIPAL BRANCO ---
export const SettingsContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0; /* Alinhado a esquerda */
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    border: 1px solid #e2e8f0;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 1024px) {
        margin: 0 auto;
        padding: 20px;
        max-width: 100%;
    }
`;

export const PageTitle = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #1e293b;
    padding-bottom: 15px;
    border-bottom: 1px solid #e2e8f0;
    margin: 0;
`;

// --- SEÇÕES DE CONFIGURAÇÃO ---
export const SettingsSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;

    svg {
        color: #006391;
        font-size: 22px;
    }

    h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        font-weight: 600;
        color: #334155;
        margin: 0;
    }
`;

// --- LINHA DE CONFIGURAÇÃO (Label + Switch/Select) ---
export const SettingRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #f1f5f9;

    &:last-child {
        border-bottom: none;
    }
`;

export const SettingInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        font-weight: 500;
        color: #1e293b;
        margin: 0;
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        color: #64748b;
        margin: 0;
    }
`;

// --- COMPONENTE SWITCH (TOGGLE) ---
export const SwitchLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 48px;
    height: 26px;
    cursor: pointer;
`;

export const SwitchInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
        background-color: #006391; /* Azul Kodan */
    }

    &:checked + span:before {
        transform: translateX(22px);
    }
`;

export const SwitchSlider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;

    &:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
    }
`;

// --- SELECT CUSTOMIZADO ---
export const StyledSelect = styled.select`
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #cbd5e1;
    background-color: #f8fafc;
    color: #334155;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    cursor: pointer;
    outline: none;

    &:focus {
        border-color: #006391;
    }
`;

// --- BOTÃO DE PERIGO (DELETE ACCOUNT) ---
export const DangerZone = styled.div`
    margin-top: 20px;
    padding: 20px;
    background-color: #fef2f2;
    border: 1px solid #fee2e2;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
        color: #991b1b;
        margin: 0 0 5px 0;
        font-size: 15px;
        font-family: 'Montserrat', sans-serif;
    }
    p {
        color: #b91c1c;
        font-size: 12px;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
    }
`;

export const DangerButton = styled.button`
    background-color: #ef4444;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background-color: #dc2626;
    }
`;

// PERFIL BAR (Inicial do Painel)
export const PerfilBar = styled.div`
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
        width: 60px;
        height: 60px;
    }
`

export const PerfilTitleBar = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;
    font-weight: 700;
    color: #444444ff;
    margin: 0;
    padding: 0;

    @media (max-width: 1024px) {
        font-size: 15px;
    }
`

export const PerfilTextSpanBar = styled.span`
    font-weight: 500;
    color: #4d4d4dff;
`

export const PerfilTextBar = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: #494949ff;
    margin: 0;
    padding: 0;

    @media (max-width: 1024px) {
        font-size: 15px;
    }
`
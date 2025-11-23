import styled from 'styled-components'

// Wrapper Global (Fundo Gradiente)
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: linear-gradient(150deg, #ece9e9a9, #ffffffff);
    
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

// --- PERFIL BAR (Boas Vindas) ---
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

// --- ESTILOS DAS TABELAS (NOVO) ---

export const CardTable = styled.div`
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 5px 14px rgba(0, 0, 0, 0.05);
    padding: 24px;
    width: 100%; 
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-x: auto; 

    @media (max-width: 768px) {
        padding: 16px;
        border-radius: 12px;
    }
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const TableTitle = styled.h3`
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #2d3748;
    margin: 0;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-family: 'Montserrat', sans-serif;
    /* Removemos o min-width fixo grande para permitir que a tabela se adapte no mobile */
`;

// Adicionamos a prop $hideOnMobile
export const Th = styled.th<{ $hideOnMobile?: boolean }>`
    text-align: left;
    font-size: 10px;
    color: #a0aec0;
    font-weight: 700;
    text-transform: uppercase;
    padding: 12px 0;
    border-bottom: 1px solid #e2e8f0;
    letter-spacing: 0.5px;

    /* Se a prop for passada, esconde a coluna em telas menores que 740px */
    @media (max-width: 740px) {
        display: ${({ $hideOnMobile }) => $hideOnMobile ? 'none' : 'table-cell'};
    }
`;

export const Tr = styled.tr`
    &:not(:last-child) {
        border-bottom: 1px solid #f7fafc;
    }
    &:hover {
        background-color: #fbfbfb;
    }
`;

export const Td = styled.td<{ $hideOnMobile?: boolean }>`
    padding: 16px 0;
    vertical-align: middle;

    /* Mesma lógica para as células de dados */
    @media (max-width: 740px) {
        display: ${({ $hideOnMobile }) => $hideOnMobile ? 'none' : 'table-cell'};
    }
`;

// Componentes internos da Tabela
export const AuthorCell = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;
export const AuthorImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 12px;
    object-fit: cover;
`;
export const AuthorInfo = styled.div`
    display: flex;
    flex-direction: column;
    strong { font-size: 14px; color: #2d3748; font-weight: 600; }
    span { font-size: 12px; color: #718096; }
`;
export const FunctionInfo = styled.div`
    display: flex;
    flex-direction: column;
    strong { font-size: 13px; color: #2d3748; font-weight: 600; }
    span { font-size: 12px; color: #718096; }
`;
export const StatusBadge = styled.span<{ $online?: boolean }>`
    background-color: ${({ $online }) => $online ? '#48bb78' : '#cbd5e0'};
    color: #ffffff;
    padding: 4px 10px;
    border-radius: 8px;
    font-size: 11px;
    font-weight: 700;
`;
export const DateText = styled.span`
    font-size: 13px;
    font-weight: 600;
    color: #2d3748;
`;

// Botão Desktop (TaskLock)
export const ActionButton = styled.button`
    background: transparent;
    border: none;
    font-size: 12px;
    font-weight: 600;
    color: #718096;
    cursor: pointer;
    transition: color 0.2s;

    &:hover { color: #006391; }

    /* Esconde este botão no mobile */
    @media (max-width: 740px) {
        display: none;
    }
`;

// --- NOVO BOTÃO MOBILE (Ver mais) ---
export const ViewMoreButton = styled.button`
    display: none; /* Padrão escondido */
    
    background: transparent;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 6px 12px;
    font-size: 11px;
    font-weight: 600;
    color: #006391;
    cursor: pointer;
    white-space: nowrap;
    transition: background-color 0.2s;

    &:hover {
        background-color: #f0f9ff;
    }

    /* Aparece apenas no mobile */
    @media (max-width: 740px) {
        display: inline-block; 
    }
`;
// ------------------------------------

// --- ESTILOS ESPECÍFICOS PARA A TABELA DE PROJETOS ---

export const ProjectIcon = styled.span`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    vertical-align: middle;

    svg {
        font-size: 15px;
        color: #000000;
    }
`;

export const ProjectName = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #2d3748;
`;

export const BudgetText = styled.span`
    font-size: 13px;
    font-weight: 600;
    color: #2d3748;
`;

// Barra de Progresso
export const ProgressContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 120px;
`;

export const ProgressText = styled.span`
    font-size: 12px;
    font-weight: 600;
    color: #006391; /* Azul do tema */
`;

export const ProgressBarBg = styled.div`
    width: 100%;
    height: 4px;
    background-color: #e2e8f0;
    border-radius: 2px;
    overflow: hidden;
`;

export const ProgressBarFill = styled.div<{ $width: number }>`
    width: ${({ $width }) => $width}%;
    height: 100%;
    background-color: #006391; /* Azul do tema */
    border-radius: 2px;
`;
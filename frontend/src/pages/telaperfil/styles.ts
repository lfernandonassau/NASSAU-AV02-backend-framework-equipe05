import styled from 'styled-components'

// --- ESTRUTURA DE LAYOUT (Igual ao PainelPage) ---

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: linear-gradient(150deg, #ece9e9ff, #ffffffff);
`

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

export const ContentWrapper = styled.div`
    flex: 1; 
    width: 100%;
    padding: 30px;
    padding-top: 100px;
    
    min-width: 0; 
    overflow-x: hidden; 
    box-sizing: border-box;
    
    

    @media (max-width: 1024px) {
        overflow-x: visible;
        padding: 10px; 
        padding-top: 100px;
    }
`

// --- CONTAINER BRANCO DO PERFIL ---

export const Container = styled.div`
    width: 100%;
    max-width: 1150px; 
    
    gap: 20px;
    
    margin: 0; 

    background-color: #ffffff;
    border: 1px solid #8a8a8a60;
    border-radius: 10px; 
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    padding: 1.5rem 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 1540px) {
        max-width: 700px;
    }

    /* Responsividade: Sidebar vira Menu Hambúrguer/Topo */
    @media (max-width: 1024px) {
        /* Destrava a largura para preencher o espaço disponível */
        max-width: 100%;
        
        /* Centraliza o container na tela */
        margin: 0 auto;
        
        height: auto; 
        padding: 1.5rem;
    }

    @media (max-width: 768px) {
        padding: 1rem;
    }
`

export const TitleProject = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: #333;
    font-size: 24px;
    width: 100%;
    margin: 0;
    padding-bottom: 15px;
    border-bottom: 1px solid #e2e8f0;
`

export const SectionTitle = styled.h3`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #555;
    font-size: 18px;
    margin-bottom: 10px;
`

// --- ÁREA DA FOTO E NOME ---

export const ProfileHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;

    justify-content: space-between;

    @media (max-width: 600px) {
        flex-direction: column;
        text-align: center;
    }
`

export const ProfileAvatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid #5fbbe6ff;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`

/* Grupo da Esquerda (Foto + Texto) */
export const ProfileLeftGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 22px;
        margin: 0;
        color: #333;
    }

    span {
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        color: #777;
    }

    button {
        margin-top: 5px;
        background: none;
        border: none;
        color: #4486a5ff;
        font-weight: 600;
        cursor: pointer;
        text-align: left;
        padding: 0;
        font-size: 14px;

        &:hover {
            text-decoration: underline;
        }
        
        @media (max-width: 600px) {
            text-align: center;
        }
    }
`


/* --- NOVO: Menu da Direita (Nav) --- */
export const ProfileNav = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    @media (max-width: 600px) {
        flex-direction: column;
        width: 100%;
    }
`;


/* Botões do Menu (Overview, Teams, Projects) */
export const ProfileNavLink = styled.button<{ $active?: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;
    
    background-color: ${({ $active }) => $active ? '#ffffff' : 'transparent'};
    border: ${({ $active }) => $active ? '1px solid #e2e8f0' : 'none'};
    border-radius: 8px;
    padding: 10px 16px;
    
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    font-weight: ${({ $active }) => $active ? '700' : '600'};
    color: ${({ $active }) => $active ? '#0f172a' : '#64748b'};
    
    cursor: pointer;
    transition: all 0.2s ease;
    
    /* Sombra suave apenas no ativo */
    box-shadow: ${({ $active }) => $active ? '0 4px 6px -1px rgba(0, 0, 0, 0.05)' : 'none'};

    /* Para mudar a cor do icon e tamanho em informações pessoais e projetos */
    svg {
        font-size: 18px;
        color: ${({ $active }) => $active ? '#363636ff' : '#64748b'};
    }

    &:hover {
        background-color: #ffffff;
        color: #0f172a;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        
        svg {
            color: #3f3f3fff;
        }
    }

    @media (max-width: 600px) {
        width: 100%;
        justify-content: center;
    }
`;

// --- GRID DO FORMULÁRIO ---

export const FormGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 20px;

    /* Inputs que ocupam a linha toda */
    .full-width {
        grid-column: 1 / -1; 
    }

    /* --- SOBRESCREVENDO A COR DO INPUT APENAS NESTA PÁGINA --- */
    input {
        color: #0f172a !important; /* Preto/Azul escuro para o texto digitado */
        font-weight: 500;
        
        /* Se quiser ajustar o placeholder também */
        &::placeholder {
            color: #94a3b8 !important;
        }
        
        /* Se precisar forçar uma borda mais visível no fundo branco */
        border-bottom: 1px solid #cbd5e1;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr; 
    }
`


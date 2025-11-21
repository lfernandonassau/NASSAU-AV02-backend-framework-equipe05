
import React, { useState } from 'react';
import { CloseBtn, MobileToggleBtn, Overlay, SidebarContainer, SidebarItem, UserInfoSection } from './styles'
import { IProfileSidebar } from './types' 
import { MdPerson, MdLock, MdNotifications, MdHelp, MdExitToApp, MdDashboard, MdLogin, MdHome, MdMenu, MdClose } from 'react-icons/md'
import { LuLayoutPanelLeft, LuKanban } from "react-icons/lu"
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ activeTab, onChangeTab, autenticado = false }: IProfileSidebar) => { 
    
    // Estado para controlar se o menu está aberto no mobile
    const [isOpen, setIsOpen] = useState(false);
    
    const navigate = useNavigate();

    const handleLogout = () => {
        alert("Saindo...");
        navigate('/login');
    }
    // Função auxiliar para navegar e fechar o menu (UX melhor no mobile)
    const handleTabClick = (tabName: string) => {
        onChangeTab(tabName);
        setIsOpen(false); // Fecha o menu ao clicar em um item
    };

    // 1. USUÁRIO LOGADO
    if (autenticado) {
        return (
            <>
                {/* Botão Flutuante (Só aparece < 1024px) */}
                <MobileToggleBtn onClick={() => setIsOpen(true)}>
                    <MdMenu />
                </MobileToggleBtn>

                {/* Fundo escuro (Só aparece quando isOpen = true) */}
                <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />

                <SidebarContainer $isOpen={isOpen}>
                    <CloseBtn onClick={() => setIsOpen(false)}>
                        <MdClose />
                    </CloseBtn>

                    <UserInfoSection>
                        <img src="https://avatars.githubusercontent.com/u/179970243?v=4" alt="Foto de Perfil" />
                        <div>
                            <strong>Rafael Alexandre</strong>
                            <span>@adminstrator</span>
                        </div>
                    </UserInfoSection>

                    <SidebarItem 
                        $active={activeTab === 'geral'} 
                        onClick={() => handleTabClick('geral')}
                    >
                        <MdDashboard /> Página inicial
                    </SidebarItem>

                    <SidebarItem 
                        $active={activeTab === 'projetos'} 
                        onClick={() => handleTabClick('projetos')}
                    >
                        <LuKanban /> Gerenciamento de Projetos
                    </SidebarItem>

                    <SidebarItem 
                        $active={activeTab === 'painel'} 
                        onClick={() => handleTabClick('painel')}
                    >
                        <LuLayoutPanelLeft /> Painel
                    </SidebarItem>

                    <SidebarItem 
                        $active={activeTab === 'seguranca'} 
                        onClick={() => handleTabClick('seguranca')}
                    >
                        <MdPerson /> Minha conta
                    </SidebarItem>

                    <SidebarItem 
                        $active={activeTab === 'notificacoes'} 
                        onClick={() => handleTabClick('notificacoes')}
                    >
                        <MdNotifications /> Notificações
                    </SidebarItem>
                    
                    <SidebarItem onClick={() => alert('Abrir Configurações')}>
                        <MdLock /> Configurações
                    </SidebarItem>

                    <SidebarItem onClick={() => alert('Abrir Ajuda')}>
                        <MdHelp /> Ajuda e Suporte
                    </SidebarItem>

                    <SidebarItem onClick={handleLogout} $variant="logout">
                        <MdExitToApp /> Sair
                    </SidebarItem>
                </SidebarContainer>
            </>
        );
    }

    // 2. USUÁRIO VISITANTE
    return (
        <>
            <MobileToggleBtn onClick={() => setIsOpen(true)}>
                <MdMenu />
            </MobileToggleBtn>

            <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />

            <SidebarContainer $isOpen={isOpen}>
                <CloseBtn onClick={() => setIsOpen(false)}>
                    <MdClose />
                </CloseBtn>

                <UserInfoSection>
                    <img src="https://via.placeholder.com/60" alt="Guest" /> 
                    <div>
                        <strong>Visitante</strong>
                        <span>Bem-vindo ao Kodan</span>
                    </div>
                </UserInfoSection>

                <SidebarItem onClick={() => navigate('/')}>
                    <MdHome /> Ir para Home
                </SidebarItem>

                <SidebarItem onClick={() => navigate('/login')} $variant="primary">
                    <MdLogin /> Fazer Login
                </SidebarItem>

                <SidebarItem onClick={() => navigate('/cadastro')} $variant="highlight">
                    <MdPerson /> Cadastre-se
                </SidebarItem>
            </SidebarContainer>
        </>
    );
};

export { Sidebar }
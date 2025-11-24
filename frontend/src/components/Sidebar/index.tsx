import React, { useState } from 'react';
import { CloseBtn, LogoImage, MobileToggleBtn, Overlay, SidebarContainer, SidebarDivider, SidebarItem, SidebarLogo, UserInfoSection } from './styles'
import { IProfileSidebar } from './types' 
import { MdPerson, MdLock, MdNotifications, MdHelp, MdExitToApp, MdDashboard, MdLogin, MdHome, MdMenu, MdClose, MdSettings, MdBarChart } from 'react-icons/md'
import { LuLayoutPanelLeft } from "react-icons/lu"
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'


// IMPORTAR HOOK DE IDIOMA 
import { useLanguage } from '../../context/LanguageContext';

const Sidebar = ({ activeTab, onChangeTab, autenticado = false }: IProfileSidebar) => { 

    // Se não estiver autenticado, não mostra nada (retorna null)
    // Isso substitui aquele return gigante de "Visitante"
    if (!autenticado) return null;


    // --- 2. USAR TRADUÇÃO ---
    const { t } = useLanguage()
    
    // Estado para controlar se o menu está aberto no mobile
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation() // Hook para saber a rota atual

    const handleLogout = () => {
        alert("Saindo...")
        navigate('/login')
    }

    // Função auxiliar para verificar se o botão deve estar ativo baseado na URL
    const isActive = (route: string) => {
        // Se for a rota exata OU se for uma sub-rota (ex: /projetos/detalhes)
        if (route === '/geral' && location.pathname === '/geral') return true
        return location.pathname.startsWith(route) && route !== '/geral'
    }

    const handleNavigation = (route: string) => {
        navigate(route)      
        setIsOpen(false)     
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

                    <LogoImage src={logo} alt="Logo Kodan" />
                    <SidebarLogo>kodan.</SidebarLogo>

                    <SidebarDivider/>

                    <SidebarItem 
                        $active={location.pathname === '/dashboard'} 
                        onClick={() => handleNavigation('/dashboard')}
                    >
                        <MdDashboard /> Dashboard
                    </SidebarItem>

                    <SidebarItem 
                        $active={isActive('/projetos')} 
                        onClick={() => handleNavigation('/projetos')}
                    >
                        <LiaProjectDiagramSolid /> {t('sidebar.projects')}
                    </SidebarItem>

                    <SidebarItem 
                        $active={isActive('/painel')} 
                        onClick={() => handleNavigation('/painel')}
                    >
                        <LuLayoutPanelLeft /> {t('sidebar.board')}
                    </SidebarItem>

                    <SidebarItem 
                        $active={isActive('/estatisticas')} 
                        onClick={() => handleNavigation('/estatisticas')}
                    >
                        <MdBarChart /> {t('sidebar.stats')}
                    </SidebarItem>

                    <SidebarItem 
                        $active={isActive('/perfil')} 
                        onClick={() => handleNavigation('/perfil')}
                    >
                        <MdPerson /> {t('sidebar.account')}
                    </SidebarItem>

                    <SidebarDivider/>

                    
                    <SidebarItem 
                        $active={isActive('/configuracoes')}
                        onClick={() => handleNavigation('/configuracoes')}
                    >
                        <MdSettings /> {t('sidebar.settings')}
                    </SidebarItem>

                    <SidebarItem 
                    onClick={() => alert('Abrir Ajuda')}
                    >
                        <MdHelp /> {t('sidebar.help')}
                    </SidebarItem>

                    <SidebarItem 
                    onClick={handleLogout}
                    $variant="logout">
                        <MdExitToApp /> {t('sidebar.logout')}
                    </SidebarItem>
                </SidebarContainer>
            </>
        );
    }

    
};

export{Sidebar} ;

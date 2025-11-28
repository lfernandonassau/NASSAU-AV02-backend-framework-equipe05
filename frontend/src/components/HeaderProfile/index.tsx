import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import {
    Container,
    SearchContainer,
    SearchInput,
    IconButton,
    ProfileWrapper,
    Avatar,
    Divider,
    NotificationWrapper,
    NotificationBadge,
    ProfileMenuContainer,
    LogoutMenuItem,
    ProfileToggle
} from './styles';

import { IHeaderProfile } from './types';
import { MdNotificationsNone, MdSearch, MdKeyboardArrowDown, MdClose } from 'react-icons/md';
import { TbLogout2 } from 'react-icons/tb';
import NotificationsModal from '../NotificationsModal';
import { useNotifications } from '../../context/NotificationContext';

// IMPORTAÇÃO DO CONTEXTO DE AUTENTICAÇÃO
import { useAuth } from '../../context/AuthContext';

const HeaderProfile = ({ onSearch }: IHeaderProfile) => {
    
    // 1. Consumimos o user diretamente do contexto
    // Sempre que 'updateUser' for chamado na TelaPerfil, esse 'user' aqui muda
    // e o componente renderiza de novo automaticamente.
    const { user, signOut } = useAuth(); 
    
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [showNotifications, setShowNotifications] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const {
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        clearNotifications,
    } = useNotifications();

    // --- LÓGICA DE DADOS DO USUÁRIO ---
    // Definimos as variáveis diretamente no corpo do componente (sem useEffect/useState para isso).
    // Isso garante a reatividade imediata.
    const DEFAULT_AVATAR = 'https://avatars.githubusercontent.com/u/179970243?v=4';
    
    // Se user.imagemUrl existir, usa ela. Se não, usa o default.
    const avatarUrl = user?.imagemUrl ? user.imagemUrl : DEFAULT_AVATAR;
    
    // Se user.name existir, usa. Senão "Usuário".
    const userName = user?.name || "Usuário";
    // ----------------------------------

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen)
        if (!isSearchOpen) {
            setTimeout(() => inputRef.current?.focus(), 100)
        } else {
            setSearchText('')
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
        if (onSearch) onSearch(e.target.value)
    };

    const handleLogout = () => {
        signOut(); 
        navigate('/login'); 
    };

    // Fecha o menu se clicar fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.profile-menu')) {
                setIsProfileMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <>
            <Container>
                <SearchContainer $isOpen={isSearchOpen}>
                    <SearchInput
                        ref={inputRef}
                        $isOpen={isSearchOpen}
                        placeholder="Nome do projeto..."
                        value={searchText}
                        onChange={handleInputChange}
                    />
                    <IconButton onClick={toggleSearch} aria-label={isSearchOpen ? "Fechar busca" : "Abrir busca"}>
                        {isSearchOpen ? <MdClose /> : <MdSearch />}
                    </IconButton>
                </SearchContainer>

                <NotificationWrapper
                  onClick={() => setShowNotifications(prev => !prev)}
                  role="button"
                  aria-haspopup="dialog"
                  aria-expanded={showNotifications}
                  tabIndex={0}
                >
                    <IconButton aria-label="Notificações">
                        <MdNotificationsNone />
                    </IconButton>

                    {unreadCount > 0 && (
                        <NotificationBadge>{unreadCount}</NotificationBadge>
                    )}
                </NotificationWrapper>

                <Divider />

                <ProfileWrapper className="profile-menu">
                    <ProfileToggle onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}>
                        {/* AQUI É O PULO DO GATO: Usamos a variável calculada lá em cima */}
                        <Avatar src={avatarUrl} alt={userName} />
                        <MdKeyboardArrowDown size={20} color="#555" />
                    </ProfileToggle>

                    {isProfileMenuOpen && (
                        <ProfileMenuContainer>
                            <div style={{ padding: '10px 12px', fontSize: '12px', color: '#666', borderBottom: '1px solid #eee' }}>
                                {/* Exibe o nome atualizado */}
                                {userName}
                            </div>
                            <LogoutMenuItem onClick={handleLogout}>
                                <TbLogout2 size={18} />
                                Logout
                            </LogoutMenuItem>
                        </ProfileMenuContainer>
                    )}
                </ProfileWrapper>
            </Container>

            {showNotifications && (
                <NotificationsModal
                    onClose={() => setShowNotifications(false)}
                    notifications={notifications}
                    onRead={markAsRead}
                    onReadAll={markAllAsRead}
                    onClearAll={clearNotifications} 
                />
            )}
        </>
    );
};

export { HeaderProfile };
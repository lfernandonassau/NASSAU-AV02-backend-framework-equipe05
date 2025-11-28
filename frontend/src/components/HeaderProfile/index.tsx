import React, { useState, useRef, useEffect, useMemo } from 'react'; 
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
    ProfileToggle,
    SuggestionsList,
    SuggestionItem,
    NoResults
} from './styles';

import { IHeaderProfile } from './types';
import { MdNotificationsNone, MdSearch, MdKeyboardArrowDown, MdClose, MdFolderOpen } from 'react-icons/md'; // Adicionei o ícone de pasta
import { TbLogout2 } from 'react-icons/tb';
import NotificationsModal from '../NotificationsModal';
import { useNotifications } from '../../context/NotificationContext';
import { useNavigate } from 'react-router-dom';

// Simulação de dados (Em produção viria da API ou Contexto)
const MOCK_PROJECTS = [
    { id: 1, name: "TaskLock App" },
    { id: 2, name: "Kodan Dashboard" },
    { id: 3, name: "Marketing Campaign" },
    { id: 4, name: "Website Redesign" },
    { id: 5, name: "Mobile App MVP" },
    { id: 6, name: "API Integration" }
];

const HeaderProfile = ({ onSearch }: IHeaderProfile) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [showNotifications, setShowNotifications] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false); // Controle do dropdown

    const inputRef = useRef<HTMLInputElement>(null);
    const searchContainerRef = useRef<HTMLDivElement>(null); // Ref para fechar ao clicar fora
    const navigate = useNavigate();

    const {
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        clearNotifications,
    } = useNotifications();

    // Filtra projetos baseado no texto digitado
    const filteredProjects = useMemo(() => {
        if (!searchText.trim()) return [];
        return MOCK_PROJECTS.filter(p => 
            p.name.toLowerCase().includes(searchText.toLowerCase())
        );
    }, [searchText]);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            setSearchText('');
            setShowSuggestions(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setSearchText(val);
        setShowSuggestions(val.length > 0); // Mostra sugestões se tiver texto
        if (onSearch) onSearch(val);
    };

    const handleProjectClick = (projectName: string) => {
        setSearchText(projectName);
        setShowSuggestions(false);
        if (onSearch) onSearch(projectName);
        // navigate(`/projects/${projectId}`);
    };

    const handleLogout = () => {
        navigate('/login');
    };

    // Fecha sugestões ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
            // Lógica existente do menu profile
            const target = event.target as HTMLElement;
            if (!target.closest('.profile-menu')) {
                setIsProfileMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const userImage = 'https://avatars.githubusercontent.com/u/179970243?v=4';

    return (
        <>
            <Container>
                {/* ref aqui para controlar o clique fora */}
                <div style={{ position: 'relative' }} ref={searchContainerRef}>
                    <SearchContainer $isOpen={isSearchOpen}>
                        <SearchInput
                            ref={inputRef}
                            $isOpen={isSearchOpen}
                            placeholder="Buscar projeto..."
                            value={searchText}
                            onChange={handleInputChange}
                            onFocus={() => { if(searchText) setShowSuggestions(true); }}
                        />
                        <IconButton onClick={toggleSearch} aria-label={isSearchOpen ? "Fechar busca" : "Abrir busca"}>
                            {isSearchOpen ? <MdClose /> : <MdSearch />}
                        </IconButton>
                    </SearchContainer>

                    {/* LISTA DE SUGESTÕES */}
                    {isSearchOpen && showSuggestions && (
                        <SuggestionsList>
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map(project => (
                                    <SuggestionItem 
                                        key={project.id} 
                                        onClick={() => handleProjectClick(project.name)}
                                    >
                                        <MdFolderOpen />
                                        {project.name}
                                    </SuggestionItem>
                                ))
                            ) : (
                                <NoResults>Nenhum projeto encontrado</NoResults>
                            )}
                        </SuggestionsList>
                    )}
                </div>

                <NotificationWrapper onClick={() => setShowNotifications(prev => !prev)}>
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
                        <Avatar src={userImage} alt="User" />
                        <MdKeyboardArrowDown size={20} color="#555" />
                    </ProfileToggle>

                    {isProfileMenuOpen && (
                        <ProfileMenuContainer>
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
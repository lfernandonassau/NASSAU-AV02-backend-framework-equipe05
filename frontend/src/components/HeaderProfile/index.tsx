import React, { useState, useRef, useEffect } from 'react'
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
import { useNavigate } from 'react-router-dom';

const HeaderProfile = ({ onSearch }: IHeaderProfile) => {
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
        navigate('/login');
    };

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

    const userImage = 'https://avatars.githubusercontent.com/u/179970243?v=4';

    return (
        <>
            <Container>
                <SearchContainer $isOpen={isSearchOpen}>
                    <SearchInput
                        ref={inputRef}
                        $isOpen={isSearchOpen}
                        placeholder="t('header.search')"
                        value={searchText}
                        onChange={handleInputChange}
                    />
                    <IconButton onClick={toggleSearch} aria-label={isSearchOpen ? "Fechar busca" : "Abrir busca"}>
                        {isSearchOpen ? <MdClose /> : <MdSearch />}
                    </IconButton>
                </SearchContainer>

                {/* Toggle no clique para abrir/fechar o modal */}
                <NotificationWrapper
                  onClick={() => setShowNotifications(prev => !prev)}
                  role="button"
                  aria-haspopup="dialog"
                  aria-expanded={showNotifications}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setShowNotifications(prev => !prev);
                    }
                  }}
                >
                    <IconButton aria-label="Notificações">
                        <MdNotificationsNone />
                    </IconButton>

                    {unreadCount > 0 && (
                        <NotificationBadge aria-label={`${unreadCount} notificações não lidas`}>{unreadCount}</NotificationBadge>
                    )}
                </NotificationWrapper>

                <Divider />

                <ProfileWrapper className="profile-menu">
                    <ProfileToggle onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} aria-haspopup="menu" aria-expanded={isProfileMenuOpen}>
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

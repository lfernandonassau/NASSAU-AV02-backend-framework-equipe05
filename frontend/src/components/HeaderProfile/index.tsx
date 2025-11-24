import React, { useState, useRef } from 'react'
import {
    Container,
    SearchContainer,
    SearchInput,
    IconButton,
    ProfileWrapper,
    Avatar,
    Divider
} from './styles'
import { IHeaderProfile } from './types'

import { MdNotificationsNone, MdSearch, MdKeyboardArrowDown, MdClose } from 'react-icons/md'
import NotificationsModal from '../NotificationsModal'

import { useNotifications } from '../../context/NotificationContext'

// 1. Importar useLanguage
import { useLanguage } from '../../context/LanguageContext'

const HeaderProfile = ({ onSearch }: IHeaderProfile) => {

    // 2. Usar t para traduzir
    const { t } = useLanguage()
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchText, setSearchText] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

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

    const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications();

    const [showNotifications, setShowNotifications] = useState(false)

    const userImage = "https://avatars.githubusercontent.com/u/179970243?v=4"

    return (
        <>
            <Container>

                {/* Campo de busca */}
                <SearchContainer $isOpen={isSearchOpen}>
                    <SearchInput
                        ref={inputRef}
                        $isOpen={isSearchOpen}
                        placeholder="t('header.search')"
                        value={searchText}
                        onChange={handleInputChange}
                    />
                    <IconButton onClick={toggleSearch}>
                        {isSearchOpen ? <MdClose /> : <MdSearch />}
                    </IconButton>
                </SearchContainer>

                {/* Sino GLOBAL com contador */}
                <div style={{ position: "relative", cursor: "pointer" }}>
                    <IconButton onClick={() => setShowNotifications(true)}>
                        <MdNotificationsNone />
                    </IconButton>

                    {unreadCount > 0 && (
                        <span style={{
                            position: "absolute",
                            top: -4,
                            right: -4,
                            background: "#006391",
                            color: "#fff",
                            fontSize: "10px",
                            borderRadius: "50%",
                            width: "16px",
                            height: "16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            {unreadCount}
                        </span>
                    )}
                </div>

                <Divider />

                {/* Perfil */}
                <ProfileWrapper onClick={() => alert("Menu de Perfil futuro")}>
                    <Avatar src={userImage} alt="User" />
                    <MdKeyboardArrowDown size={20} color="#555" />
                </ProfileWrapper>

            </Container>

            {/* Modal usando contexto */}
            {showNotifications && (
                <NotificationsModal
                    onClose={() => setShowNotifications(false)}
                    notifications={notifications}
                    onRead={markAsRead}
                    onReadAll={markAllAsRead}
                />
            )}
        </>
    )
}

export { HeaderProfile };
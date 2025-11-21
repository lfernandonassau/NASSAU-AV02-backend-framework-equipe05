import React, { useState, useRef, useEffect } from 'react';
import { 
    Container, 
    SearchContainer, 
    SearchInput, 
    IconButton, 
    ProfileWrapper, 
    Avatar,
    Divider
} from './styles'
import { IHeaderProfile } from './types';
import { MdNotificationsNone, MdSearch, MdKeyboardArrowDown, MdClose } from 'react-icons/md'
import NotificationsModal from '../NotificationsModal'

const HeaderProfile = ({ onSearch }: IHeaderProfile) => {

    const [showNotifications, setShowNotifications] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchText, setSearchText] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen) {
            // Foca no input após abrir (pequeno delay para animação)
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            setSearchText(''); // Limpa ao fechar se quiser
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        if (onSearch) onSearch(e.target.value);
    };

    // URL da imagem
    const userImage = "https://avatars.githubusercontent.com/u/179970243?v=4"

    return (<>
        <Container>
            
            {/* Área de Busca */}
            <SearchContainer $isOpen={isSearchOpen}>
                <SearchInput 
                    ref={inputRef}
                    $isOpen={isSearchOpen} 
                    placeholder="Buscar..." 
                    value={searchText}
                    onChange={handleInputChange}
                />
                <IconButton onClick={toggleSearch}>
                    {isSearchOpen ? <MdClose /> : <MdSearch />}
                </IconButton>
            </SearchContainer>

            {/* Notificações */}
            <IconButton onClick={() => setShowNotifications(true)}>
                <MdNotificationsNone />
            </IconButton>

            <Divider />

            {/* Perfil Minimalista */}
            <ProfileWrapper onClick={() => alert("Menu de Perfil")}>
                <Avatar src={userImage} alt="User" />
                <MdKeyboardArrowDown size={20} color="#555" />
            </ProfileWrapper>

        </Container>
        {showNotifications && (
                <NotificationsModal
                    onClose={() => setShowNotifications(false)}
                    notifications={[]} // Lista vazia padrão por enquanto
                />
            )}
        </>
    )
}

export { HeaderProfile };
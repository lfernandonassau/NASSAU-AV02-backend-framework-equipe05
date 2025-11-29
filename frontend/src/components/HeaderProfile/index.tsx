import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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
} from './styles'

import { IHeaderProfile } from './types'
import {
    MdNotificationsNone,
    MdSearch,
    MdKeyboardArrowDown,
    MdClose,
} from 'react-icons/md'
import { TbLogout2 } from 'react-icons/tb'
import NotificationsModal from '../NotificationsModal'

import { useAuth } from '../../context/AuthContext'
import { api } from '../../services/api'

type InviteNotification = {
    id: number
    title: string
    time: string
    read: boolean
}

const HeaderProfile = ({ onSearch }: IHeaderProfile) => {
    const { user, signOut } = useAuth()

    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [showNotifications, setShowNotifications] = useState(false)
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    const [notifications, setNotifications] = useState<InviteNotification[]>([])
    const unreadCount = notifications.filter((n) => !n.read).length

    const DEFAULT_AVATAR =
        'https://avatars.githubusercontent.com/u/179970243?v=4'

    const avatarUrl = user?.imagemUrl ? user.imagemUrl : DEFAULT_AVATAR
    const userName = user?.name || 'Usuário'

    const toggleSearch = () => {
        setIsSearchOpen((prev) => !prev)
        if (!isSearchOpen) {
            setTimeout(() => inputRef.current?.focus(), 100)
        } else {
            setSearchText('')
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
        if (onSearch) onSearch(e.target.value)
    }

    const handleLogout = () => {
        signOut()
        navigate('/login')
    }

    // Abre/fecha sino e, ao abrir, carrega convites
    const handleToggleNotifications = () => {
        setShowNotifications((prev) => {
            const willOpen = !prev
            if (willOpen) {
                loadInvites()
            }
            return willOpen
        })
    }

    async function loadInvites() {
        try {
            const { data } = await api.get('/invites/me')
            const mapped: InviteNotification[] = data.map((inv: any) => ({
                id: Number(inv.id),
                title: `Convite para o projeto "${inv.project.title}"`,
                time: new Date(inv.createdAt).toLocaleString('pt-BR'),
                read: false,
            }))
            setNotifications(mapped)
        } catch (err: any) {
            console.error('Erro ao carregar convites:', err?.response || err)
        }
    }

    // Função realmente assíncrona de aceitar convite
    async function acceptInvite(id: number) {
        try {
            await api.post(`/invites/${id}/accept`)

            // remove convite aceito
            setNotifications((prev) => prev.filter((n) => n.id !== id))
            // se quiser forçar reload dos projetos:
            // window.location.reload()
        } catch (err: any) {
            console.error('Erro ao aceitar convite:', err?.response || err)
            const msg =
                err?.response?.data?.message ||
                'Não foi possível aceitar o convite.'
            alert(msg)
        }
    }

    // Wrapper síncrono pro modal (não retorna Promise)
    const handleRead = (id: string | number) => {
        const numericId = Number(id)
        if (Number.isNaN(numericId)) {
            console.warn('ID de convite inválido:', id)
            return
        }

        void acceptInvite(numericId)
    }


    const handleReadAll = () => {
        const ids = notifications.map((n) => n.id)
        // dispara tudo em paralelo, mas sem retornar Promise pro modal
        void (async () => {
            await Promise.all(ids.map((id) => acceptInvite(id)))
        })()
    }

    const handleClearAll = () => {
        setNotifications([])
    }

    // Fecha o menu de perfil se clicar fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            if (!target.closest('.profile-menu')) {
                setIsProfileMenuOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

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
                    <IconButton
                        onClick={toggleSearch}
                        aria-label={isSearchOpen ? 'Fechar busca' : 'Abrir busca'}
                    >
                        {isSearchOpen ? <MdClose /> : <MdSearch />}
                    </IconButton>
                </SearchContainer>

                <NotificationWrapper
                    onClick={handleToggleNotifications}
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
                    <ProfileToggle
                        onClick={() =>
                            setIsProfileMenuOpen((prev) => !prev)
                        }
                    >
                        <Avatar src={avatarUrl} alt={userName} />
                        <MdKeyboardArrowDown size={20} color="#555" />
                    </ProfileToggle>

                    {isProfileMenuOpen && (
                        <ProfileMenuContainer>
                            <div
                                style={{
                                    padding: '10px 12px',
                                    fontSize: '12px',
                                    color: '#666',
                                    borderBottom: '1px solid #eee',
                                }}
                            >
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
                    onRead={handleRead}
                    onReadAll={handleReadAll}
                    onClearAll={handleClearAll}
                />
            )}
        </>
    )
}

export { HeaderProfile }

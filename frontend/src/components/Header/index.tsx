import { MdSearch, MdKeyboardArrowDown } from 'react-icons/md';
import logo from '../../assets/logo.svg';

import { useForm } from 'react-hook-form';
import {
    BuscarInputContainer,
    FeedPicture,
    HamburgerButton,
    HamburguerIcon,
    HeaderContainer,
    NavContainer,
    Row,
    TitleBorder,
    UserPicture,
    Wrapper,
    ProfileMenuContainer,
    ProfileMenuItem,
    NotificationWrapper,
    NotificationBadge,
    ProfileMenuWrapper,
    ProfileToggle
} from './styles';

import { HomeButton, PageButtons } from '../Button/styles';
import { useNavigate } from 'react-router-dom';
import { Input } from '../Input';
import { IHeader } from './types';
import { Button } from '../Button';

import NotificationsModal from '../NotificationsModal';
import { useEffect, useState } from 'react';
import { useNotifications } from '../../context/NotificationContext';

const Header = ({ autenticado, variant = 'primary' }: IHeader) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications();
    const navigate = useNavigate();

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setShowNotifications(false);
                setIsProfileMenuOpen(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

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

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const { control } = useForm({
        mode: 'onChange',
        defaultValues: {
            campoDeBusca: ''
        }
    });

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <>
            <Wrapper $isScrolled={isScrolled} variant={variant}>
                <HeaderContainer>
                    <Row>
                        <img src={logo} onClick={() => navigate('/')} />
                        <TitleBorder onClick={() => navigate('/')}>kodan.</TitleBorder>
                    </Row>

                    {autenticado ? (
                        <Row>
                            <HomeButton onClick={() => navigate('/')}>Home</HomeButton>

                            <BuscarInputContainer>
                                <Input
                                    name="Buscar"
                                    control={control}
                                    placeholder='Buscar...'
                                    rightIcon={<MdSearch />}
                                    variant="secondary"
                                />
                            </BuscarInputContainer>

                            <NotificationWrapper onClick={() => setShowNotifications(true)}>
                                <FeedPicture />
                                {unreadCount > 0 && (
                                    <NotificationBadge>{unreadCount}</NotificationBadge>
                                )}
                            </NotificationWrapper>

                            <ProfileMenuWrapper className="profile-menu">
                                <ProfileToggle onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}>
                                    <UserPicture src="https://avatars.githubusercontent.com/u/179970243?v=4" />
                                    <MdKeyboardArrowDown size={20} />
                                </ProfileToggle>

                                {isProfileMenuOpen && (
                                    <ProfileMenuContainer>
                                        <ProfileMenuItem onClick={() => navigate('/perfil')}>
                                            Meu Perfil
                                        </ProfileMenuItem>

                                        <ProfileMenuItem onClick={handleLogout}>
                                            Logout
                                        </ProfileMenuItem>
                                    </ProfileMenuContainer>
                                )}
                            </ProfileMenuWrapper>

                        </Row>
                    ) : (
                        <>
                            <NavContainer $isOpen={isMobileMenuOpen}>
                                <a href="#sobre"><PageButtons>Sobre</PageButtons></a>
                                <a href="#servicos"><PageButtons>Serviços</PageButtons></a>
                                <a href="#footer"><PageButtons>Contato</PageButtons></a>
                            </NavContainer>

                            <Row>
                                <PageButtons onClick={() => navigate('/login')}>
                                    Entrar
                                </PageButtons>
                                <Button
                                    title="Cadastrar"
                                    variant='cadastrobutton'
                                    onClick={() => navigate('/cadastro')}
                                />

                                <HamburgerButton
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                >
                                    <HamburguerIcon />
                                </HamburgerButton>
                            </Row>
                        </>
                    )}
                </HeaderContainer>
            </Wrapper>

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

export { Header };

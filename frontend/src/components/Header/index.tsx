import { MdSearch } from 'react-icons/md';
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
} from './styles';

import { HomeButton, PageButtons } from '../Button/styles';
import { useNavigate } from 'react-router-dom';
import { Input } from '../Input';
import { IHeader } from './types';
import { Button } from '../Button';

import NotificationsModal from '../NotificationsModal';
import { useEffect, useState } from 'react';

// ✅ IMPORTA O CONTEXTO GLOBAL
import { useNotifications } from '../../context/NotificationContext';

const Header = ({ autenticado, variant = 'primary' }: IHeader) => {

    // ✅ Menu Hamburguer
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // ✅ Modal
    const [showNotifications, setShowNotifications] = useState(false);

    // ✅ Dados vindos do Contexto
    const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications();

    // ✅ Fecha modal no ESC
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setShowNotifications(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // ✅ Controle do scroll
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ✅ Formulário
    const { control } = useForm({
        mode: 'onChange',
        defaultValues: {
            campoDeBusca: ''
        }
    });

    const navigate = useNavigate();

    return (
        <>
            <Wrapper $isScrolled={isScrolled} variant={variant}>
                <HeaderContainer>
                    <Row>
                        <img src={logo} alt="Kodan Logo" onClick={() => navigate('/')} />
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

                            {/* ✅ Sino com contador global */}
                            <div style={{ position: "relative", cursor: "pointer" }}>
                                <FeedPicture onClick={() => setShowNotifications(true)} />

                                {unreadCount > 0 && (
                                    <span style={{
                                        position: "absolute",
                                        top: -6,
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

                            <UserPicture src="https://avatars.githubusercontent.com/u/179970243?v=4" />
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

            {/* ✅ Modal usando contexto */}
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

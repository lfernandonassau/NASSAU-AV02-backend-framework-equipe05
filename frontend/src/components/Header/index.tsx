import React, { useEffect, useState } from 'react';
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

// IMPORTA O MODAL DE NOTIFICAÇÕES
import NotificationsModal from '../NotificationsModal';

const Header = ({ autenticado, variant = 'primary' }: IHeader) => {

    // Menu Hamburguer
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Estado do modal de notificações
    const [showNotifications, setShowNotifications] = useState(false);

    // Fecha modal no ESC
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setShowNotifications(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Controle do scroll do header
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // react-hook-form
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

                    {/* SE ESTIVER AUTENTICADO */}
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

                            {/* Botão de notificações */}
                            <FeedPicture
                                onClick={() => setShowNotifications(true)}
                                style={{ cursor: 'pointer' }}
                            />

                            <UserPicture src="https://avatars.githubusercontent.com/u/179970243?v=4" />
                        </Row>
                    ) : (
                        <>
                            <NavContainer $isOpen={isMobileMenuOpen}>
                                <a href="#sobre">
                                    <PageButtons>Sobre</PageButtons>
                                </a>
                                <a href="#servicos">
                                    <PageButtons>Serviços</PageButtons>
                                </a>
                                <a href="#footer">
                                    <PageButtons>Contato</PageButtons>
                                </a>
                            </NavContainer>

                            <Row>
                                <PageButtons 
                                onClick={() => navigate('/login')}>
                                    Entrar
                                </PageButtons>
                                <Button
                                    title="Cadastrar"
                                    variant='cadastrobutton'
                                    onClick={() => navigate('/register')}
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

            {/* Modal de Notificações */}
            {showNotifications && (
                <NotificationsModal
                    onClose={() => setShowNotifications(false)}
                    notifications={[]}   // Lista vazia padrão
                />
            )}
        </>
    )
}

export { Header };

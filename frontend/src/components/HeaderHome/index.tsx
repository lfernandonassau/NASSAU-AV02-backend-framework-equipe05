import logo from '../../assets/logo.svg';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// CONTEXTO GLOBAL
import { useNotifications } from '../../context/NotificationContext';
import { LogoArea, NavBar, NavLink, NavLinks, SignInButton, MobileMenuButton, MobileMenu, MobileLink, AuthButtons, RightSide } from './styles';

const HeaderHome = () => {

    // Menu Hamburguer
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    // Dados do contexto
    const navigate = useNavigate();

    // Fecha modal no ESC
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Controle de scroll
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Formulário
    const { control } = useForm({
        mode: 'onChange',
        defaultValues: { campoDeBusca: '' }
    });

    const handleLogout = () => {
        navigate('/login');
    };

    const handleNavigate = (path: string) => {
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    return (
        <NavBar isScrolled={isScrolled}>
            <LogoArea onClick={() => handleNavigate('/')}>
                <img src={logo} alt="Logo" /> <span>kodan.</span>
            </LogoArea>

            {/* Links desktop */}
            <NavLinks>
                <NavLink href="#sobre">Sobre nós</NavLink>
                <NavLink href="#">Contato</NavLink>
                <NavLink onClick={() => handleNavigate('/equipe')}>Nossa equipe</NavLink>
            </NavLinks>

            <RightSide>
                <AuthButtons>
                    <SignInButton 
                    onClick={() => handleNavigate('/login')}>
                        Entrar
                    </SignInButton>
                    <SignInButton 
                    onClick={() => handleNavigate('/cadastro')}>
                        Cadastrar
                    </SignInButton>
                </AuthButtons>
                {/* Botão Mobile */}
                <MobileMenuButton
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span />
                    <span />
                    <span />
                </MobileMenuButton>
            </RightSide>
            
            

            {/* Menu Mobile */}
            <MobileMenu isOpen={isMobileMenuOpen}>
                <MobileLink href="#sobre">Sobre nós</MobileLink>
                <MobileLink href="#">Contato</MobileLink>
                <MobileLink onClick={() => navigate('/equipe')}>Nossa equipe</MobileLink>
            </MobileMenu>
            
        </NavBar>
    );
};

export { HeaderHome };

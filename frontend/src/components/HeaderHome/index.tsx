import logo from '../../assets/logo.svg';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { LogoArea, NavBar, NavLink, NavLinks, SignInButton, MobileMenuButton, MobileMenu, MobileLink, AuthButtons, RightSide } from './styles';

const HeaderHome = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navigate = useNavigate();
    const location = useLocation(); // Hook para saber a página atual

    // Controle de Scroll
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // LÓGICA DE NAVEGAÇÃO E SCROLL
    // Esse useEffect verifica se chegamos na Home vindo de outra página com um pedido de scroll
    useEffect(() => {
        // Se estivermos na home e houver um estado ou hash de destino
        if (location.pathname === '/' && location.state?.targetId) {
            const element = document.getElementById(location.state.targetId);
            if (element) {
                // Pequeno timeout para garantir que a página renderizou antes de rolar
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
            // Limpa o state para não rolar de novo num refresh
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    // Função Inteligente de Clique
    const handleScrollLink = (e: React.MouseEvent, targetId: string) => {
        e.preventDefault(); // Impede o comportamento padrão do href="#"

        if (location.pathname === '/') {
            // CENÁRIO A: JÁ ESTOU NA HOME -> Só rola
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // CENÁRIO B: ESTOU EM OUTRA PAGE -> Navega para Home e avisa para rolar
            navigate('/', { state: { targetId: targetId } });
        }
        
        setIsMobileMenuOpen(false); // Fecha menu mobile se estiver aberto
    };

    const handleNavigate = (path: string) => {
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    // Fecha modal no ESC
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsMobileMenuOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <NavBar isScrolled={isScrolled}>
            <LogoArea onClick={() => handleNavigate('/')}>
                <img src={logo} alt="Logo" /> <span>kodan.</span>
            </LogoArea>

            <NavLinks>
                {/* APLICAÇÃO DA FUNÇÃO NOS LINKS */}
                
                <NavLink href="#features" onClick={(e) => handleScrollLink(e, 'features')}>
                    Sobre nós
                </NavLink>

                <NavLink onClick={() => handleNavigate('/equipe')}>
                    Nossa equipe
                </NavLink>
            </NavLinks>

            <RightSide>
                <AuthButtons>
                    <SignInButton onClick={() => handleNavigate('/login')}>
                        Entrar
                    </SignInButton>
                    <SignInButton onClick={() => handleNavigate('/cadastro')}>
                        Cadastrar
                    </SignInButton>
                </AuthButtons>
                
                <MobileMenuButton
                    isOpen={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span /><span /><span />
                </MobileMenuButton>
            </RightSide>

            <MobileMenu isOpen={isMobileMenuOpen}>
                {/* Mesma lógica para o Mobile */}
                <MobileLink href="#features" onClick={(e) => handleScrollLink(e, 'features')}>
                    Sobre nós
                </MobileLink>
                <MobileLink href="#">Contato</MobileLink>
                <MobileLink onClick={() => handleNavigate('/nossa-equipe')}>
                    Nossa equipe
                </MobileLink>
            </MobileMenu>
            
        </NavBar>
    );
};

export { HeaderHome };
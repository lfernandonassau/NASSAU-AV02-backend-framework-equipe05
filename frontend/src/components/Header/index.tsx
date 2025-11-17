import React, { useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md'
import logo from '../../assets/logo.svg'

import { useForm } from 'react-hook-form'

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
} from './styles'
import { HomeButton, PageButtons } from '../Button/styles'
import { useNavigate } from 'react-router-dom'
import { Input } from '../Input'
import { IHeader } from './types'
import { Button } from '../Button'


const Header = ({autenticado, variant = 'primary'}:IHeader) => {

    // Menu Hamburguer para eventuais projetos mobile
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


    // --> Menu muda de acordo com o scroll da página
    // Detecta se a página foi rolada para baixo
    const [isScrolled, setIsScrolled] = useState(false)
    // Efeito colateral para monitorar o scroll
    useEffect(() => {
        
        const handleScroll = () => {
            if (window.scrollY > 10) { // Se rolar mais que 10px
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        // Adiciona o "escutador"
        window.addEventListener('scroll', handleScroll)

        // Limpa o "escutador" quando o componente é desmontado
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []) // O array vazio [] garante que isso rode apenas uma vez
    const { control } = useForm({
        mode: 'onChange',
        defaultValues: {
            campoDeBusca: ''
        }
    })
    const navigate = useNavigate()
    return (
    <Wrapper $isScrolled={isScrolled} variant={variant}>
        <HeaderContainer>
            <Row>
                <img src={logo} alt="Kodan Logo" onClick={() => navigate('/')}/>
                <TitleBorder onClick={() => navigate('/')}>kodan.</TitleBorder>
            </Row>
            {/* --- 2. LÓGICA CONDICIONAL DE LAYOUT (Centro e Direita) --- */}
            
            {autenticado ? (
                
                // SE ESTIVER AUTENTICADO (Layout de 2 colunas)
                // Renderiza APENAS UMA Row na direita com tudo
                <Row>
                    <HomeButton onClick={() => navigate('/')}>Home</HomeButton>
                    <BuscarInputContainer>
                        <Input name="Buscar" control={control} placeholder='Buscar...' rightIcon={<MdSearch/>} variant="secondary" />
                    </BuscarInputContainer>
                    <FeedPicture />
                    <UserPicture src="https://avatars.githubusercontent.com/u/179970243?v=4"/>
                </Row>

            ) : (

                // SE NÃO ESTIVER AUTENTICADO (Layout de 3 colunas)
                // Renderiza DOIS elementos separados:
                // 1. O NavContainer (centro)
                // 2. A Row (direita)
                <>
                    <NavContainer $isOpen={isMobileMenuOpen}>
                        <PageButtons onClick={() => navigate('/')}>Sobre</PageButtons>
                        <PageButtons onClick={() => navigate('/')}>Serviços</PageButtons>
                        <PageButtons onClick={() => navigate('/')}>Contato</PageButtons>
                        
                        
                        
                    </NavContainer>

                    <Row>
                        <PageButtons onClick={() => navigate('/login')}>Entrar</PageButtons>
                        <Button title="Cadastrar"></Button>
                        <HamburgerButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <HamburguerIcon />
                        </HamburgerButton>
                    </Row>
                </>
            )}
        </HeaderContainer>

    </Wrapper> // Vai ficar por volta de tudo, é todo o background
    )
}


export { Header }
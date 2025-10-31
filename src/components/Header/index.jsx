import React from 'react'
import { MdSearch } from 'react-icons/md'
import logo from '../../assets/logo.svg'
import { Button } from '../Button'
import {
    BuscarInputContainer,
    HeaderContainer,
    Row,
    TitleBorder,
    TitleMenu,
    Wrapper,
} from './styles'
import { HomeButton } from '../Button/styles'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'


const Header = () => {

    const navigate = useNavigate()
  return (
    <Wrapper>
        <HeaderContainer>
            <Row>
                <img src={logo} alt="" />
                <TitleMenu>
                    Kodan
                </TitleMenu>
            </Row>
            <Row>
                <HomeButton onClick={() => null}>Home</HomeButton>
                <Button title="Entrar" onClick={() => navigate('/login')}></Button>
                <Button title="Cadastrar"></Button>
                <BuscarInputContainer>
                    <Input placeholder='Buscar...' rightIcon={<MdSearch/>} variant="" />
                </BuscarInputContainer>
            </Row>
        </HeaderContainer>

    </Wrapper> // Vai ficar por volta de tudo, é todo o background
  )
}


export { Header }
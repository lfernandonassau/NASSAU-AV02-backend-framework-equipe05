import React from 'react'
import logo from '../../assets/logo.svg'
import { Button } from '../Button'
import {
    BuscarInputContainer,
    HeaderContainer,
    Input,
    Menu,
    MenuRight,
    Row,
    TitleMenu,
    Wrapper,
} from './styles'
import { HomeButton } from '../Button/styles'

const Header = () => {
  return (
    <Wrapper>
        <HeaderContainer>
            <Row>
                <img src={logo} alt="Logo"/>
                <TitleMenu>Kodan</TitleMenu>
            </Row>
            <Row>
                <HomeButton onClick={() => null}>Home</HomeButton>
                <Button title="Entrar"></Button>
                <Button title="Cadastrar"></Button>
                <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
            </Row>
        </HeaderContainer>

    </Wrapper> // Vai ficar por volta de tudo, é todo o background
  )
}


export { Header }
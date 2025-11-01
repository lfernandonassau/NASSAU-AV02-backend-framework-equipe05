import React from 'react'
import { MdSearch } from 'react-icons/md'
import logo from '../../assets/logo.svg'
import { Button } from '../Button'
import {
    BuscarInputContainer,
    FeedPicture,
    HeaderContainer,
    Row,
    UserPicture,
    Wrapper,
} from './styles'
import { HomeButton } from '../Button/styles'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'


const Header = ({autenticado, variant = 'primary'}) => {

    const navigate = useNavigate()
  return (
    <Wrapper variant={variant}>
        <HeaderContainer>
            <Row>
                <img src={logo} alt="Kodan Logo" onClick={() => navigate('/')}/>
            </Row>
            <Row>
                {autenticado ?(<>
                    <HomeButton onClick={() => navigate('/')}>Home</HomeButton>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' rightIcon={<MdSearch/>} variant="" />
                    </BuscarInputContainer>
                    <FeedPicture />
                    <UserPicture src="https://avatars.githubusercontent.com/u/179970243?v=4"/>
                    </>) : (
                    <>
                        
                        <Button title="Entrar" onClick={() => navigate('/login')}></Button>
                        <Button title="Cadastrar"></Button>
                    </>
                )}
            </Row>
        </HeaderContainer>

    </Wrapper> // Vai ficar por volta de tudo, é todo o background
  )
}


export { Header }
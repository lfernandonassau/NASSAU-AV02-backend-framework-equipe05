import React from 'react'
import { MdSearch } from 'react-icons/md'
import logo from '../../assets/logo.svg'

import { useForm } from 'react-hook-form'

import {
    BuscarInputContainer,
    FeedPicture,
    HeaderContainer,
    Row,
    UserPicture,
    Wrapper,
} from './styles'
import { HomeButton, LoginButton } from '../Button/styles'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'
import { yupResolver } from '@hookform/resolvers/yup'


const Header = ({autenticado, variant = 'primary'}) => {

    const { control } = useForm({
        mode: 'onChange',
        defaultValues: {
            campoDeBusca: ''
        }
    })
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
                        <Input  name="Buscar" control={control} placeholder='Buscar...' rightIcon={<MdSearch/>} variant="secondary" />
                    </BuscarInputContainer>
                    <FeedPicture />
                    <UserPicture src="https://avatars.githubusercontent.com/u/179970243?v=4"/>
                    </>) : (
                    <>
                        
                        <LoginButton onClick={() => navigate('/login')}>Entrar</LoginButton>
                        <LoginButton title="Cadastrar">Cadastrar</LoginButton>
                    </>
                )}
            </Row>
        </HeaderContainer>

    </Wrapper> // Vai ficar por volta de tudo, é todo o background
    )
}


export { Header }
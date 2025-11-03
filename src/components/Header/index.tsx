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
import { HomeButton } from '../Button/styles'
import { useNavigate } from 'react-router-dom'
import { Input } from '../Input'
import { IHeader } from './types'
import { Button } from '../Button'


const Header = ({autenticado, variant = 'primary'}:IHeader) => {

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
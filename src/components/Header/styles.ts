import { MdNotifications } from 'react-icons/md'
import { css, styled } from 'styled-components'
import { IHeaderStyled } from './types'

export const HeaderContainer = styled.div`
    width: 100%;
    max-width: 90%;
    height: 47px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;


`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Wrapper = styled.div<IHeaderStyled>`
    /*background: linear-gradient(1deg, #02416bff, #0e0d0dff); */
    background: transparent;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    ${({variant}) => variant !== 'primary' && css`
        background-color: #0063918c;
    `}

`

export const BuscarInputContainer = styled.div`
    width: 170px;
    height: 30px;
    background: #0000001a;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 420px) {
        /* Oculta a barra de pesquisa em telas de smartphone */
        display: none;
    }
`

export const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;

`

export const TitleBorder = styled.div`
    background-color: #0063918c;
    border-radius: 20px;
    text-align: center;
    padding: 5px 10px 4px 10px;

`



export const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;

`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #FFFFFF;
    margin-right: 20px;

`
export const FeedPicture = styled(MdNotifications)`
    width: 25px;
    height: 20px;
    border-radius: 22px;
    margin-right: 10px;

`


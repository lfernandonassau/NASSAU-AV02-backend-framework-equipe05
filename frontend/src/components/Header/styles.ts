import { MdNotifications } from 'react-icons/md'
import { css, styled } from 'styled-components'
import { IHeaderStyled, INavContainerProps } from './types'
import { PageButtons } from '../Button/styles'
import { FaBars } from 'react-icons/fa6'

export const HeaderContainer = styled.div`
    width: 100%;
    max-width: 90%;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    user-select: none;
`

export const NavContainer = styled.div<INavContainerProps>`
    display: flex;
    align-items: center;
    padding-left: 100px;

    @media (max-width: 768px) {
        display: none; 

        ${({ $isOpen }) => $isOpen && css`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px; 
            position: absolute;
            z-index: 1000;
            top: 50px;
            left: 0;
            right: 0;
            background: #4eb2ecbe; 
            padding: 20px;
            
            & > ${PageButtons} {
                width: 100%;
                max-width: 300px;
                font-size: 1rem;
                padding: 5px;
            }
        `}
    }
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
    background-color: transparent;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: background-color 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;
    background-color: transparent;
    backdrop-filter: blur(0px);

    ${({ $isScrolled }) => $isScrolled && css`
        background-color: #75caf170; 
        backdrop-filter: blur(10px); 
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    `}

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
        display: none;
    }
`

export const Menu = styled.a`
    font-family: 'Open Sans';
    font-size: 12px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
`

export const TitleBorder = styled.div`
    color: #ffffffff;
    border-radius: 20px;
    text-align: center;
    padding: 5px 10px 4px 0;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 17px;
    cursor: pointer;
`

export const MenuRight = styled.a`
    font-family: 'Open Sans';
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
    margin-right: 6px;
    cursor: pointer;
`

export const FeedPicture = styled(MdNotifications)`
    width: 25px;
    height: 20px;
    border-radius: 22px;
    margin-right: 10px;
    cursor: pointer;
`

export const HamburguerIcon = styled(FaBars)`
    color: #FFFFFF;
`

export const HamburgerButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: #FFFFFF; 
    font-size: 1.6rem; 
    cursor: pointer;
    z-index: 1001;
    padding: 5px;
    height: 35px;

    @media (max-width: 768px) {
        display: block;
    }
`

export const NotificationWrapper = styled.div`
    position: relative;
    cursor: pointer;
`

export const NotificationBadge = styled.span`
    position: absolute;
    top: -6px;
    right: -4px;
    background: #006391;
    color: #fff;
    font-size: 10px;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProfileMenuWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`

export const ProfileToggle = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 4px;
`

export const ProfileMenuContainer = styled.div`
    position: absolute;
    top: 45px;
    right: 0;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
    width: 150px;
    display: flex;
    flex-direction: column;
    z-index: 10;
`

export const ProfileMenuItem = styled.button`
    padding: 10px 12px;
    background: transparent;
    border: none;
    text-align: left;
    cursor: pointer;
    font-size: 14px;
    color: #000;

    &:hover {
        background: #f2f2f2;
    }
`

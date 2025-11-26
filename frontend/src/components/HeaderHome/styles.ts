import styled from "styled-components";
import { INavBarProps } from "./types";

/* --- NAVBAR (CABEÇALHO DA LANDING PAGE) --- */
export const NavBar = styled.nav<INavBarProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    width: 100%;
    box-sizing: border-box;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    background: ${({ isScrolled }) =>
        isScrolled ? "rgba(51, 51, 51, 0.26)" : "rgba(255, 255, 255, 0)"};

    backdrop-filter: ${({ isScrolled }) =>
        isScrolled ? "blur(14px)" : "blur(6px)"};

    z-index: 999;

    transition: background 0.3s ease, backdrop-filter 0.3s ease, padding 0.3s ease;


        @media (max-width: 1200px) {
        padding: 1rem 2rem; 
    }

    @media (max-width: 768px) {
        padding: 1rem 1.5rem;
    }
`;

/* LOGO */
export const LogoArea = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 700;
    gap: 6px;
    cursor: pointer;

    img {
        height: 33px;
        margin-right: -10px;
    }

    span {
        font-size: 1.2rem;
        font-family: "Montserrat", sans-serif;
        color: rgba(255, 255, 255, 0.85);
    }
`;

/* DESKTOP LINKS */
export const NavLinks = styled.div`
    font-family: "Montserrat", sans-serif;
    display: flex;
    gap: 50px;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;

    @media (max-width: 1100px) {
        gap: 30px; 
        font-size: 0.9rem; 
    }

    
    @media (max-width: 1000px) {
        gap: 20px;
    }

    @media (max-width: 900px) {
        display: none;
    }
`;

export const NavLink = styled.a`
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
        color: #ffffff;
    }
`;

export const RightSide = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;

    z-index: 10;

    @media (max-width: 768px) {
        gap: 10px;
    }
`;

/* BOTÃO ENTRAR */
export const SignInButton = styled.button`
    background-color: #353535ff;
    color: #ffffff;
    border: none;
    padding: 10px 25px;
    border-radius: 30px;
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
    white-space: nowrap;
    transition: transform 0.2s, box-shadow 0.2s;

    box-shadow: 0 4px 5px rgba(0,0,0,0.3);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
        
    @media (max-width: 1100px) {
        padding: 8px 18px;
        font-size: 0.85rem;
    }

    @media (max-width: 768px) {
        padding: 8px 14px;  
        font-size: 0.8rem;
    }
`;

export const AuthButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 850px) {
        gap: 8px;
        margin-right: 0;  /* remove o espaço extra */
    }

    @media (max-width: 768px) {
        gap: 6px;
    }
`;

/* BOTÃO HAMBÚRGUER */
export const MobileMenuButton = styled.button<{ isOpen: boolean }>`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 26px;
    height: 22px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 9999; 

    span {
      display: block;
      width: 100%;
      height: 3px;
      background: white;
      border-radius: 5px;
      transition: all 0.3s ease;
      transform-origin: center;
    }

    /* Transformar em X */
    ${({ isOpen }) =>
      isOpen &&
      `
        span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        span:nth-child(2) { opacity: 0; }
        span:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }
      `}
  }
`;

/* MENU MOBILE ABERTO */
export const MobileMenu = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    height: 100vh;
    width: 50%;
    background: rgba(36, 36, 36, 0.41);
    backdrop-filter: blur(12px);

    display: flex;
    flex-direction: column;
    justify-content: center;    
    align-items: center;        

    gap: 2.5rem;                 
    transition: right 0.35s ease-in-out;
    z-index: 1000;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const MobileLink = styled.a`
    color: #fff;
    font-size: 1.4rem;
    font-weight: 600;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
    }
`;

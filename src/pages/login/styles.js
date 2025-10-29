import styled from 'styled-components'
import { MdEmail, MdLock } from 'react-icons/md'

export const LoginContainer = styled.main`
    width: 100%;
    max-width: 50%;
    margin: 0 auto;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;

`
export const Wrapper = styled.div`
    max-width: 300px;

`

export const Column = styled.div`
    flex: 1;

`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const ImageContainer = styled.img`
    display: block; /* Essencial para que margin: auto funcione */
    max-width: 100%; /* Garante a responsividade */
    height: auto;
    margin: 0 auto; /* Centraliza horizontalmente */
    margin-top: 30px;

`

export const TitleKanban = styled.h2`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    color: #0684beff;
    font-size: 50px;
    text-align: center;
    width: 800px;
    margin-bottom: 15px;
    line-height: 75px;

`
export const TitleLogin = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    color: #000000ff;
    font-size: 50px;
    text-align: center;
    margin-bottom: 15px;
    line-height: 75px;

`

export const TitleColor = styled.h2`
    color: #000000;

`

export const KanbanSubText = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    color: #000000;
    font-size: 18px;
    text-align: center; 
    max-width: 420px;
    margin-bottom: 35px;
    line-height: 25px;
    margin: 0 auto 20px auto;
`

export const EsqueciSubText = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    color: #001F36;
    font-size: 10px; 
    line-height: 19px;
    padding-left: 100px;
    margin: 0 0 4px 0;
`

export const CriarContaText = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    color: #000000;
    font-size: 10px;
    text-align: center; 
    max-width: 420px;
    line-height: 19px;

    margin-top: 0;
`
export const EmailEstilizado = styled(MdEmail)`
    color: #000000;
    margin-right: 5px;
    font-size: 20px;
`
export const PasswordEstilizado = styled(MdLock)`
    color: #000000;
    margin-right: 5px;
    font-size: 20px;
`
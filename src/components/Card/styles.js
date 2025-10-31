import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 50%;
    background-color: #ffffffff;
    border: 1px solid #000000;
    border-radius: 20px;
    position: relative;
    margin-bottom: 5px;
`


export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;

    div {
        margin-left: 10px;
    }

    h4 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #000000ff;
    
    }

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #000000ff;
    }
`

export const UserPicture = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 60px;
    border: 1px solid #000000ff;
`


export const PostInfo = styled.div`
    margin-bottom: 12px;

    h4{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #000000ff;
    
    }

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: #000000;
    
    }

`

export const HasInfo = styled.div`
    margin-top: 12px;

    h4{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: #000000ff;
    
    }

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        color: #000000;    
    }

`





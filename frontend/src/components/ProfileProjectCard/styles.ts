import styled from 'styled-components'



export const ProjectCardContainer = styled.div`
    background-color: #f5f5f5;
    border: 1px solid #0000008e;
    border-radius: 6px;

    

    padding: 10px;
    display: flex;
    flex-direction: column;
    
    transition: all 0.25s ease;

    &:hover {
    background-image: linear-gradient(150deg, #9fcafcff, #ffffffff);
    color: #FFFFFF;
    transform: translateY(-1px);
    cursor: pointer;
    p {
        color: #FFFFFF;
        font-weight: 700;
    }
    }
    
`
import styled from 'styled-components'



export const ProjectCardContainer = styled.div`
    background-color: #f5f5f5;
    border: 1px solid #0000008e;
    border-radius: 6px;

    
    position: relative;
    padding: 10px;
    display: flex;
    flex-direction: column;
    overflow: visible;
    transition: all 0.25s ease;

    &:hover {
    background: #414040ff ;
    color: #FFFFFF;
    transform: translateY(-1px);  /* como contornar o cross dessa propriedade ? ela faz o card do projeto sobrepor o menu */
    cursor: pointer;
        p {
            color: #eceaeaff;
            font-weight: 700;
        }
        svg {
            color: #eceaeaff;
        }
    }
    
`
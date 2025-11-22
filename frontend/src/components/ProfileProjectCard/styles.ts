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
    background: radial-gradient(
    circle at 70% 30%, /* Posição do centro da "luz" */
    #cde4faff 0%,      /* Laranja/Pêssego mais claro */
    #b7d2ebff 20%,     /* Laranja um pouco mais vibrante */
    #80cff3ff 70%,     /* Azul/Cinza aparece aqui */
    #b1ddf7ff 100%     /* Finaliza com o azul/cinza mais suave */
    );
    color: #FFFFFF;
    transform: translateY(-1px);  /* como contornar o cross dessa propriedade ? ela faz o card do projeto sobrepor o menu */
    cursor: pointer;
    p {
        color: #000000ff;
        font-weight: 700;
    }
    }
    
`
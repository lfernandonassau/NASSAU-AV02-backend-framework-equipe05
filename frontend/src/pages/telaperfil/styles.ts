import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: linear-gradient(150deg, #9fcafcff, #ffffffff);
`

export const ProjectActionsRow = styled.div`
    width: 100%;
    margin-top: 12px;
    padding-top: 10px;
    border-top: 1px solid #cbd5e1;

    display: flex;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
`


export const ProjectActionButton = styled.button`
    border: none;
    border-radius: 999px;
    padding: 6px 14px;
    font-size: 13px;
    font-family: 'Montserrat';
    cursor: pointer;
    background: #0ea5e9;
    color: #ffffff;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: filter 0.15s ease;
    min-width: 110px;
    height: 36px;
    justify-content: center;

    &:hover {
    filter: brightness(0.75);
    }
`


export const Container = styled.main`
    flex: 1;
    width: 100%;
    max-width: 50%;
    margin: 0 auto;
    margin-top: 150px;
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;

    @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 15px;
    margin-top: 100px;
    margin-bottom: 50px;
    }

    @media (max-width: 480px) {
    padding: 0 10px;
    }

    @media (max-width: 1024px) {
    max-width: 70%;
    }
`

export const NameProject = styled.p`
    font-family: 'Montserrat';
    color: #000000ff;
    font-size: 20px;
    width: 200px;
    margin-bottom: 15px;
    line-height: 30px;

    @media (max-width: 480px) {
    font-size: 32px;
    }
`

export const TitleProject = styled.p`
    font-family: 'Montserrat';
    color: #000000ff;
    font-size: 25px;
    width: 400px;
    margin-bottom: 15px;
    line-height: 30px;

    @media (max-width: 480px) {
    font-size: 32px;
    }
`

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`



// modal, por enquanto, n está sendo utilizado nessa página
// // 🔹 A partir daqui: estilos do modal

// export const Overlay = styled.div`
//     position: fixed;
//     inset: 0; /* top, right, bottom, left = 0 */
//     background: rgba(0, 0, 0, 0.45);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     z-index: 999;

//     user-select: none;
//     -webkit-user-select: none;
// `

// export const ModalCard = styled.div`
//     font-family: 'Montserrat';
//     background: #ffffff;
//     width: 100%;
//     max-width: 380px;
//     border-radius: 10px;
//     box-shadow: 0 24px 48px rgba(0, 0, 0, 0.25);
//     padding: 20px;
//     display: flex;
//     flex-direction: column;
//     gap: 16px;
// `


// export const ModalTitle = styled.h3`
//     font-size: 18px;
//     margin: 0;
//     color: #0f172a;
// `

// export const ModalProjectName = styled.p`
//     font-size: 14px;
//     margin: 0;
//     color: #475569;
// `

// export const ModalActions = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 8px;
//     margin-top: 8px;
// `

// export const ModalButton = styled.button`
//     border: none;
//     border-radius: 6px;
//     padding: 10px 12px;
//     font-size: 14px;
//     cursor: pointer;
//     font-family: 'Montserrat';
//     background: #0ea5e9;
//     color: #ffffff;
//     transition: filter 0.15s ease;

//     &:hover {
//     filter: brightness(0.95);
//     }

//     &.secondary {
//     background: #e2e8f0;
//     color: #0f172a;
//     }
// `

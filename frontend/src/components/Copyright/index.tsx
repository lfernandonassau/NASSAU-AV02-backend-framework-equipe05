import React from 'react'

import { CopyrightStyled } from './styles'
const Copyright = () => {
  return (
    <CopyrightStyled>
            © {new Date().getFullYear()} — Todos os direitos reservados para a kodan corporation
    </CopyrightStyled>
  )
}

export { Copyright }
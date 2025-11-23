import React from 'react'
import {  ProjectCardContainer } from './styles'


type ProjectCardProps = {
  children: React.ReactNode
  onClick?: () => void
  style?: React.CSSProperties
  className?: string
}

const ProjectCard = ({ children, style, onClick, className }: ProjectCardProps) => {


  return (
    <ProjectCardContainer 
      onClick={onClick} 
      style={style} 
      className={className}>
    {children}
    </ProjectCardContainer>
  )
}

export { ProjectCard }
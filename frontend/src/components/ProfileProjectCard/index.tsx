import React from 'react'
import {  ProjectCardContainer } from './styles'

type ProjectCardProps = {
  children: React.ReactNode;
  onClick?: () => void
};

const ProjectCard = ({ children, onClick }: ProjectCardProps) => {


  return (
    <ProjectCardContainer onClick={onClick}>
      {children}
    </ProjectCardContainer>
  )
}

export { ProjectCard }
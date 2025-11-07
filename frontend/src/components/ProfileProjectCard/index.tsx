import React from 'react'
import {  ProjectCardContainer } from './styles'

type ProjectCardProps = {
  children: React.ReactNode; 
};

const ProjectCard = ({ children }: ProjectCardProps) => {


  return (
    <ProjectCardContainer>
      {children}
    </ProjectCardContainer>
  )
}

export { ProjectCard }
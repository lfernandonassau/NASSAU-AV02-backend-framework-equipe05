
import { ProjectCard } from '../../components/TelaProjectCard'
import { Header } from '../../components/Header'
import { Container, NameProject, TitleProject } from './styles'
import {  Wrapper } from './styles'

const TelaPerfil = ({variant= 'secondary'}) => {
    return (<>
        <Wrapper>
            <Header autenticado={true} variant={variant} />
            <Container>
                <TitleProject>Gerenciamento de Projetos</TitleProject>
                <ProjectCard>
                    <NameProject>Nome do Projeto</NameProject>
                </ProjectCard>
                <ProjectCard>
                    <NameProject>Nome do Projeto</NameProject>
                </ProjectCard>
                <ProjectCard>
                    <NameProject>Nome do Projeto</NameProject>
                </ProjectCard>
            </Container>
        </Wrapper>
    </>)
}

export { TelaPerfil }
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

// Reutilizando componentes globais
import { HeaderHome } from '../../components/HeaderHome'
import { Footer } from '../../components/footer'

import Alan from '../../assets/Alan.jpg'
//import Daniel from '../../assets/Daniel.jpg'
import Rafael from '../../assets/Rafael.png'
import Ryan from '../../assets/Ryan.png'
import Samuel from '../../assets/Samuel.jpg'
//import Batman from '../../assets/Batman.jpg'

import { 
    Wrapper, 
    SectionContainer,
    TeamGrid,
    TeamCard,
    MemberOverlay,
    MemberName,
    MemberRole
} from './styles'

// Dados fictícios 
const TEAM_MEMBERS = [
    {
        id: 1,
        name: "RAFAEL ALEXANDRE",
        role: "CEO & FULLSTACK DEV",
        image: Rafael
    },
    {
        id: 2,
        name: "Sadosan",
        role: "FULLSTACK DEV",
        image: Samuel
    },
    {
        id: 3,
        name: "Alanderson",
        role: "BACKEND SPECIALIST",
        image: Alan
    },
    {
        id: 4,
        name: "Ryan",
        role: "FRONTEND LEAD",
        image: Ryan
    },
    {
        id: 5,
        name: "Daniel",
        role: "MARKETING",
        image: ""//Daniel
    },
    {
        id: 6,
        name: "Batman",
        role: "O HOMEM MORCEGO",
        image: ""//Batman 
    }
];

const NossaEquipe = () => {
    const navigate = useNavigate();

    // Scroll para o topo ao abrir a página
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Wrapper>
            <HeaderHome/>
            
            {/* Grid de Membros ocupa quase toda a tela agora */}
            <SectionContainer>
                <TeamGrid>
                    {TEAM_MEMBERS.map((member) => (
                        <TeamCard key={member.id} $bgImage={member.image}>
                            <MemberOverlay>
                                <MemberName>{member.name}</MemberName>
                                <MemberRole>{member.role}</MemberRole>
                            </MemberOverlay>
                        </TeamCard>
                    ))}
                </TeamGrid>
            </SectionContainer>

            <Footer />
        </Wrapper>
    )
}

export { NossaEquipe }
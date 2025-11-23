import { useState, useRef } from 'react' // Importe useRef
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form' 

import { Sidebar } from '../../components/Sidebar'
import { HeaderProfile } from '../../components/HeaderProfile'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { MdBuild, MdGroup, MdPublic } from 'react-icons/md'; 
import { FaBoxOpen } from 'react-icons/fa'; 

import { 
    Wrapper,           
    ContentContainer,  
    ContentWrapper,    
    Container,         
    TitleProject,
    ProfileHeader,
    ProfileLeftGroup, 
    ProfileAvatar,
    ProfileInfo,
    ProfileNav,       
    ProfileNavLink,   
    FormGrid,
    SectionTitle,
    HiddenInput // Importe o input invisível
} from './styles'; 
import { LiaProjectDiagramSolid } from 'react-icons/lia'

// Imagem inicial padrão
const DEFAULT_AVATAR = "https://avatars.githubusercontent.com/u/179970243?v=4";

const TelaPerfil = () => {
    const [activeTab, setActiveTab] = useState('perfil');
    const [profileSubTab, setProfileSubTab] = useState('overview'); 
    
    // --- LÓGICA DA FOTO ---
    const [avatarUrl, setAvatarUrl] = useState(DEFAULT_AVATAR);
    const fileInputRef = useRef<HTMLInputElement>(null); // Referência ao input oculto

    const navigate = useNavigate();

    const { control, handleSubmit } = useForm({
        defaultValues: {
            nome: "Rafael Alexandre",
            email: "rafael@kodan.com",
            cpf: "",
            bio: ""
        }
    });

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        if (tab === 'projetos') navigate('/home');
        if (tab === 'painel') navigate('/painel');
    };

    // Ao clicar no botão "Alterar foto", simula um clique no input file
    const handleChangeAvatarClick = () => {
        fileInputRef.current?.click();
    };

    // Quando o usuário seleciona um arquivo
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Cria uma URL temporária para exibir a imagem imediatamente
            const previewUrl = URL.createObjectURL(file);
            setAvatarUrl(previewUrl);
            
            // Aqui você também faria o upload para o backend se necessário
            console.log("Arquivo selecionado:", file);
        }
    };

    const handleSearch = (val: string) => console.log("Buscar:", val);
    const onSubmit = (data: any) => console.log("Dados salvos:", data);

    return (
        <Wrapper>
            <ContentContainer>
                <Sidebar 
                    autenticado={true}
                    activeTab={activeTab} 
                    onChangeTab={handleTabChange} 
                />

                <ContentWrapper>
                    <HeaderProfile userImage={avatarUrl} onSearch={handleSearch} />
                    
                    <Container>
                        <TitleProject>Perfil do usuário</TitleProject>
                        
                        <ProfileHeader>
                            <ProfileLeftGroup>
                                {/* Usa o estado avatarUrl */}
                                <ProfileAvatar src={avatarUrl} alt="Foto de perfil" />
                                
                                <ProfileInfo>
                                    <h2>Rafael Alexandre</h2>
                                    <span>rafael@kodan.com</span>
                                    
                                    {/* Input invisível conectado via ref */}
                                    <HiddenInput 
                                        type="file" 
                                        ref={fileInputRef} 
                                        accept="image/*" // Aceita apenas imagens
                                        onChange={handleFileChange}
                                    />
                                    
                                    {/* Botão que aciona o input */}
                                    <button type="button" onClick={handleChangeAvatarClick}>
                                        Alterar foto
                                    </button>
                                </ProfileInfo>
                            </ProfileLeftGroup>

                            <ProfileNav>
                                <ProfileNavLink 
                                    $active={profileSubTab === 'overview'} 
                                    onClick={() => setProfileSubTab('overview')}
                                >
                                    <MdBuild /> INFORMAÇÕES
                                </ProfileNavLink>

                                <ProfileNavLink 
                                    $active={profileSubTab === 'projects'} 
                                    onClick={() => setProfileSubTab('projects')}
                                >
                                    <LiaProjectDiagramSolid /> PROJETOS
                                </ProfileNavLink>
                            </ProfileNav>
                        </ProfileHeader>

                        {/* CONTEÚDO: INFORMAÇÕES */}
                        {profileSubTab === 'overview' && (
                            <>
                                <SectionTitle>Informações Pessoais</SectionTitle>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <FormGrid>
                                        <div className="full-width">
                                            <Input name="nome" placeholder="Nome Completo" control={control} />
                                        </div>
                                        <div>
                                            <Input name="email" placeholder="E-mail" control={control} />
                                        </div>
                                        <div>
                                            <Input name="CPF" placeholder="CPF" control={control} />
                                        </div>
                                        <div className="full-width">
                                            <Input name="bio" placeholder="Bio / Descrição" control={control} />
                                        </div>
                                    </FormGrid>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                                        <Button title="Salvar Alterações" variant="primary" type="submit" />
                                    </div>
                                </form>
                            </>
                        )}


                        {/* CONTEÚDO: PROJETOS */}
                        {profileSubTab === 'projects' && (
                            <div>
                                <SectionTitle>Meus Projetos</SectionTitle>
                                <p style={{ color: '#666' }}>
                                    Lista de projetos específicos deste usuário.
                                </p>
                            </div>
                        )}
                        
                    </Container>
                </ContentWrapper>

            </ContentContainer>
        </Wrapper>
    );
}

export { TelaPerfil }
import React from 'react';
import { useAuth } from '../../context/AuthContext';

import {
    Container,
    UserAvatar,
    TextContainer,
    TitleBar,
    TextSpanBar,
    DescriptionBar
} from './styles';

const DEFAULT_AVATAR = 'https://avatars.githubusercontent.com/u/179970243?v=4';

const PerfilHomeBar = () => {
    // Consome os dados globais do usuário automaticamente
    const { user } = useAuth();

    const avatarUrl = user?.imagemUrl || DEFAULT_AVATAR;
    const userName = user?.name ? `${user.name},` : 'Usuário Kodan,';

    return (
        <Container>
            <UserAvatar src={avatarUrl} alt={`Foto de ${userName}`} />
            
            <TextContainer>
                <TitleBar>
                    👋 {userName}{' '}
                    <TextSpanBar>aqui você quem manda!</TextSpanBar>
                </TitleBar>
                
                <DescriptionBar>
                    Configure do seu jeito. Como quiser.
                </DescriptionBar>
            </TextContainer>
        </Container>
    );
};

export { PerfilHomeBar }
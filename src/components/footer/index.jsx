import React from 'react';
import {
    Container,
    FooterContainer,
    FooterText
} from './styles'; 




const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <FooterText>Todos os direitos reservados, menos pro alan</FooterText>
                <FooterText>Ass: Samuel Douglas Santos Sadousan</FooterText>
            </Container>
        </FooterContainer>
    );
}

export default Footer;
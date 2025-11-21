export interface IHeader {
    autenticado?: boolean;
    variant?: string;
}

export interface IHeaderStyled {
    variant?: string;
    $isScrolled: boolean;
    
}

export interface INavContainerProps {
    $isOpen: boolean; // Informa que $isOpen é um booleano
}


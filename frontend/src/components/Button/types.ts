export interface IButton {
    title: string;
    type?: string;
    variant?: string;
    disabled?: boolean;
    onClick?: () => void;
}

export interface IButtonStyled {
    variant?: string;

}
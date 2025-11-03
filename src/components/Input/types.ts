export interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
    control: any
    errorMessage?: string;
    variant?: string;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    name: string;
    placeholder?: string;
}

export interface IInputStyled {
    variant?: string;
}
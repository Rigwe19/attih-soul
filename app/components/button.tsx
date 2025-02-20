import React from 'react';
import { cn } from "./utils"
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className = '',
}) => {
    const defaultClasses = `p-2.5 cursor-pointer border-0 text-white uppercase`;

    return (
        <button
            className={cn(defaultClasses, className)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;

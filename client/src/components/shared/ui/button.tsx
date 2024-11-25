import { HTMLProps } from "react"
import { cn } from "../utils/cn"

type ButtonProps = HTMLProps<HTMLButtonElement> & {
    value: string
    type: 'submit'
}

export const Button = ({ value, type = 'submit', children, className, ...props }: ButtonProps) => {
    return (
        <button type={type}
            className={cn('text-button', className)}
            {...props}
        >
            {children || value}
        </button>
    )
}
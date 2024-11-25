import { HTMLProps } from "react"
import { cn } from "../utils/cn"

export type InputProps = HTMLProps<HTMLInputElement> & {

}

export const Input = ({ type, value, placeholder, className, ...props }: InputProps) => {
    return <input autoComplete="off" type={type} value={value} placeholder={placeholder} className={cn("border rounded-[10px] p-2 w-full", className)} {...props} />
}
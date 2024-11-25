
import { Input, InputLabel } from "shared/ui"
import { InputFormProps } from "../model/types"
import { cn } from "shared/utils/cn"

export const InputForm = ({ changeHandler, errorMessage, hasError, label, value, type, className, ...props }: InputFormProps) => {
    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e.currentTarget.value)

    return (
        <label className="flex flex-col gap-1 relative">
            <InputLabel label={label} />
            <Input
                type={type}
                value={value}
                onChange={handleChangeValue}
                className={cn(className, `${hasError ? 'border-error' : 'border-grey-200'}`)}
                {...props}
            />
            {hasError && <p className="text-error absolute -bottom-6 left-0">{errorMessage}</p>}
        </label>
    )
}
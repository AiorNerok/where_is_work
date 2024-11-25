import { InputForm } from "entities/input-form"
import { usePaymentFormStore } from "../store/payment-form-store"

export const CVC = () => {
    const { cvc, isCvcValid, handleChangeCVC } = usePaymentFormStore()

    return <div className="relative">
        <InputForm
            label='Код'
            value={cvc}
            changeHandler={handleChangeCVC}
            hasError={!isCvcValid && cvc.length > 0}
            errorMessage={'Ошибка валидации'}
            name='cvv'
            maxLength={3}
            type="password"
            placeholder="***"
            className="text-transparent"
        />
        <span className="absolute top-[37px] left-2">{cvc?.toString().replace(/./g, '*')}</span>
    </div>
}
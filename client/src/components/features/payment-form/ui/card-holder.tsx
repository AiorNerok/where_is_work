import { InputForm } from "entities/input-form"
import { usePaymentFormStore } from "../store/payment-form-store"

export const CardHolder = () => {
    const { cardHolder, isCardHolderValid, handleChangeCardHolder } = usePaymentFormStore()

    return <InputForm
        type="text"
        placeholder='RYAN GOSLING'
        name='cardHolder'
        label='Владелец карты'
        errorMessage='Ошибка валидации'
        value={cardHolder}
        changeHandler={handleChangeCardHolder}
        hasError={!isCardHolderValid && cardHolder.length > 0}
        required
    />
}

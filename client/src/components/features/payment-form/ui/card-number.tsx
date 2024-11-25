import { InputForm } from "entities/input-form"
import { usePaymentFormStore } from "../store/payment-form-store"

export const CardNumber = () => {
    const { cardNumber, isCardNumberValid, handleChangeCardNumber } = usePaymentFormStore()

    return <InputForm
        type="text"
        value={cardNumber}
        maxLength={19}
        placeholder='0000 0000 0000 0000'
        name='cardNumber'
        label='Номер карты'
        errorMessage='Ошибка валидации'
        hasError={!isCardNumberValid && cardNumber.length > 0}
        changeHandler={handleChangeCardNumber}
        required
    />
}

import { InputForm } from "entities/input-form"
import { usePaymentFormStore } from "../store/payment-form-store"

export const ExpiryDate = () => {
    const { expiryDate, isExpiryDateValid, handleChangeExpiryDate } = usePaymentFormStore()

    return <InputForm
        changeHandler={handleChangeExpiryDate}
        value={expiryDate}
        hasError={!isExpiryDateValid && expiryDate.length > 0}
        name='expiryDate'
        label={'Месяц/Год'}
        type="text"
        errorMessage='Ошибка валидации'
        placeholder='12/26'
        maxLength={5}
        required
    />
}

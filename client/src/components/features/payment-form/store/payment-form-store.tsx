import { create } from 'zustand'

type PaymentFormStore = {
    cvc: string
    isCvcValid: boolean
    handleChangeCVC: (value: string) => void

    expiryDate: string
    isExpiryDateValid: boolean
    handleChangeExpiryDate: (value: string) => void

    cardHolder: string
    isCardHolderValid: boolean
    handleChangeCardHolder: (value: string) => void

    cardNumber: string
    isCardNumberValid: boolean
    handleChangeCardNumber: (value: string) => void
}

export const usePaymentFormStore = create<PaymentFormStore>()((set) => ({
    cvc: '',
    isCvcValid: false,
    handleChangeCVC: (value) => {
        if (value && !/^\d+$/.test(value)) {
            return
        }

        const isCvcValid = /^\d{3}$/.test(value);

        set({ isCvcValid, cvc: value });
    },

    expiryDate: '',
    isExpiryDateValid: false,
    handleChangeExpiryDate: (value) => {
        const cleanedValue = value.replace(/\D/g, '');
        const isExpiryDateValid = /^(0[1-9]|1[0-2])(2[1-6])$/.test(cleanedValue);

        let formattedValue = value;

        if (value.length > 2) {
            formattedValue = `${cleanedValue.slice(0, 2)}/${cleanedValue.slice(2, 4)}`;
        }

        set({ isExpiryDateValid, expiryDate: formattedValue });
    },


    cardHolder: '',
    isCardHolderValid: false,
    handleChangeCardHolder: (value) => {
        if (!/^[A-Za-z\s]+$/.test(value)) {
            return;
        }

        if (value.split(' ').length > 2) {
            return;
        }

        const cardHolder = value.toUpperCase();
        const isCardHolderValid = /^[A-Za-z]+\s[A-Za-z]+$/.test(value);

        set({ isCardHolderValid, cardHolder });
    },

    cardNumber: '',
    isCardNumberValid: false,
    handleChangeCardNumber: (value) => {
        if (value && !/^\d*$/.test(value.replace(/\s+/g, ''))) {
            return;
        }

        const cardNumber = value
            .replace(/\s+/g, '')
            .replace(/(.{4})/g, '$1 ')
            .trim()

        const isCardNumberValid = /^\d{13,19}$/.test(value.replaceAll(' ', ''))

        set({ cardNumber, isCardNumberValid });
    },
}))
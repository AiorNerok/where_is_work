import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'shared/ui';
import processedIcon from 'shared/assets/processed.svg';
import { CardHolder } from './card-holder';
import { ExpiryDate } from './expiry-date';
import { CVC } from './cvc';
import { CardNumber } from './card-number';
import { usePaymentFormStore } from '../store/payment-form-store';
import { fetchGetPid, fetchPayCheck } from '../api/import';
import { Status } from '../api/response-status';

export const PaymentForm: React.FC = () => {
    const navigate = useNavigate();

    const [isFormValid, setIsFormValid] = useState(false)
    const [isButtonProcessed, setIsButtonProcessed] = useState(false)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const { isCardHolderValid, isCardNumberValid, isCvcValid, isExpiryDateValid, cardHolder, cardNumber, cvc, expiryDate } = usePaymentFormStore()

    useEffect(() => {
        const result = (isCardHolderValid && isCardNumberValid && isCvcValid && isExpiryDateValid)
        setIsFormValid(result)
    }, [isCardHolderValid, isCardNumberValid, isCvcValid, isExpiryDateValid])

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const pidResult = await fetchGetPid({
            cvc,
            cardholder: cardHolder,
            expire: expiryDate,
            pan: cardNumber
        });

        const statusPayment = await fetchPayCheck({ pid: pidResult.result.pid })
        setIsButtonProcessed(true)
        setIsButtonDisabled(true)
        
        if ('status' in statusPayment) {
            switch (statusPayment.status) {
                case Status.OK:
                    navigate('/ok')
                    break;
                case Status.FAIL:
                    navigate('/fail')
                    break;
            }
        } else {
            if ('message' in statusPayment) {
                if (statusPayment.message === 'err') {
                    console.error('Ошибка сервера')
                } else if (statusPayment.message === 'invalid pid') {
                    console.error('Невалидный PID')
                }
            } else {
                console.error('Неизвестная ошибка')
            }
            navigate('/fail')
        }
    };

    return (
        <form onSubmit={handleSubmit} className="rounded-[10px] w-[457px] h-[464px] flex flex-col justify-around p-5 bg-white border border-grey-200 shadow-[0_25px_40px_#1C273114]">
            <h2 className='text-title text-grey-1000'>Оплата банковской картой</h2>
            <CardNumber />
            <div className='flex justify-between gap-[77px]'>
                <ExpiryDate />
                <CVC />
            </div>
            <CardHolder />
            <div className='flex justify-end'>
                <Button
                    disabled={!isFormValid || isButtonDisabled}
                    className='w-[123px] h-[48px] flex items-center justify-center bg-primary text-white disabled:bg-grey-100 disabled:text-grey-400 rounded-[10px]' type='submit' value='Оплатить'>
                    {isButtonProcessed && <img className='animate-spin' src={processedIcon} alt='processed' />}
                </Button>
            </div>
        </form>
    );
};

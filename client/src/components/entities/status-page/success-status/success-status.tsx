import iconSuccess from "shared/assets/success.svg"


export const SuccessStatus = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center rounded-[10px] w-[457px] h-[464px] border border-grey-200 shadow-[0_25px_40px_#1C273114]">
                <img src={iconSuccess} alt="success" />
                <h2 className="text-title text-grey-1000">Оплата прошла успешно</h2>
            </div>
        </div>
    )
}
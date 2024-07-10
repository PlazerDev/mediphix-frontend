import LogoImg from "../../assets/images/mediphix_withoutPadding.jpg"

function SelectCheckbox() {
    return (
        <div>
            <div className=' flex justify-center items-center mt-10'>
                <div className='bg-[var(--card-background)] w-[62%] h-auto rounded-[25px] p-8 pt-0 flex flex-col items-center'>
                    <div className='flex justify-center w-full m-0'>
                        <img src={LogoImg} alt="Logo" className='w-[120px] h-[60px]' />
                    </div>
                    <p className="text-[var(--text-c)] w-full">
                        Which of the following best describes you?

                    </p>
                    <div className="flex flex-row">
                        <input type="checkbox" className="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectCheckbox

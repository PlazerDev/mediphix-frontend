import React from 'react';

interface FormButtonSetProps {
    nxt: string;
    onBackClick?: () => void;
    onNextClick?: () => void;
    backDisplay: boolean;
}

const FormButtonSet: React.FC<FormButtonSetProps> = (props) => {

    return (
        <div className='w-full'>
            <div className='flex flex-row gap-5 place-items-end w-full mt-4'>
                {props.backDisplay == false ? (
                    <>
                        <button
                            className='ml-auto p-3 border-[1px] border-black rounded-[20px] w-[30%] hover:opacity-45 font-semibold '
                            onClick={props.onBackClick}
                        >
                            Back
                        </button>
                        <button
                            className='p-3  bg-[var(--accent)] border-2 rounded-[20px] w-[30%] hover:opacity-90 font-semibold '
                            onClick={props.onNextClick}
                        >
                            {props.nxt}
                        </button>
                    </>) : (<button
                        className='p-3 ml-auto bg-[var(--accent)] border-2 rounded-[20px] w-[30%] hover:opacity-90 font-semibold '
                        onClick={props.onNextClick}
                    >
                        {props.nxt}
                    </button>)}

            </div>
        </div>
    );
}

export default FormButtonSet;

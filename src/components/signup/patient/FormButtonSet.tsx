import React from 'react';

interface FormButtonSetProps {
    nxt: string;
}

function FormButtonSet({ nxt }: FormButtonSetProps) { // Destructuring nxt from props
    return (
        <div>
            <div className='flex flex-row gap-5 place-items-end w-full mt-4'>
                <button className='ml-auto p-3 border-[1px] border-black rounded-[20px] w-[30%] hover:opacity-45 font-semibold'>Back</button>
                <button className='p-3 bg-[var(--accent)] border-2 rounded-[20px] w-[30%] hover:opacity-90 font-semibold'>
                    {nxt}
                </button>
            </div>
        </div>
    );
}

export default FormButtonSet;

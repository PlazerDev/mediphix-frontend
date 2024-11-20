/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "../../Loading";

interface VerificationProps {
  formData: any;
  isLoading: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  Voptions: string[]; // array of verification titles or options
  Vdata: string[]; // array of verification data
}


function Verification(props:VerificationProps) {
  return (
    <div className='w-full'>
      <p className='text-[var(--text-c)]'>Here is a preview of the details you have been entered.</p>
      <div className='flex flex-row gap-6 p-5 ml-3 mt-3 mb-5 border-2 rounded-[10px] gap-x-18 flex-shrink-0 gap-y-5  flex-wrap border-dotted-[var(--text-c)]'>
        {Vdata.map((option:any, index:any) => (
          <div className='w-[180px]' key={index}>
            <p className='text-[var(--text-c)] text-sm'>{Voptions[index]}</p>
            <p>{formData[option]}</p>
          </div>
        ))}
        
      </div>

      <div className=' z-1 absolute top-[50%] left-[45%] '>
        {isLoading === true ? <Loading footer={false}/> : null}

       </div> 

    </div>
  )
}

export default Verification

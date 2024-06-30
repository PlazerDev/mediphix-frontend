import PatientNavigation from '../navigation/PatientNavigation'
import { Breadcrumb } from 'antd';
const { RangePicker } = DatePicker;
import { DatePicker, Space } from 'antd';

const SelectDoctor = () => {
  return (
    <div>
      <PatientNavigation />
      <div>
        <p className='text-xl font-bold ml-[1%] mt-[1%]'>Create an Appointment</p>
      </div>
      <div>
          <Breadcrumb className='ml-[1%]'
    items={[
      {
        title: 'Appointments',
      },
      {
        title: <a href="">Create an appointment</a>,
      },
      
      
    ]}
  />
         </div>

    <div className='flex ml-[1%] mt-[1%]'>
    <select className='border-2 border-gray-300 rounded-lg w-[20%]'>
        <option value="option1">Doctor Name</option>
        </select>
        <input type="text" placeholder='Enter Doctor Name Here' className='rounded-lg focus:outline-none placeholder:text-[var(--text-c)] w-[69%]  ' />
        <button className='bg-[#FF7300] text-white rounded-lg ml-[0.1%] w-[10%] h-[40px] pl-[1%] '>Search</button> 
    
    
    
    
    
    
    
    
    </div>   
















    </div>
   
  )
}

export default SelectDoctor

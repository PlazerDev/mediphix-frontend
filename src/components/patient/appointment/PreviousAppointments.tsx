import { DatePicker, Space } from 'antd';
import { Breadcrumb } from 'antd';
import AppointmentTableDetails from './AppointmentTableDetails';
const { RangePicker } = DatePicker;

const PreviousAppointments = () => {
  return (
    
        <div>
        <div>
        <p className='text-xl font-bold ml-[1%] mt-[3%]'>Previous Appointments</p>
        </div>
            
        <div>
          <Breadcrumb className='ml-[1%]'
    items={[
      {
        title: 'Appointments',
      },
      {
        title: <a href="">Previous Appointments</a>,
      },
      
      
    ]}
  />
         </div>

        <div className='flex ml-[1%] mt-10'>
        <Space direction="vertical" size={15}>
        <RangePicker />
        </Space>
        
        <select className='border-2 border-gray-300 rounded-lg  ml-[1%]'>
        <option value="option1">Doctor Name</option>
        </select>
        <input type="text" placeholder='Type Here' className='rounded-lg focus:outline-none placeholder:text-[var(--text-c)] ml-[0.1%] w-[40%] pl-5 ' />
        <button className='bg-[#FF7300] text-white rounded-lg ml-[0.1%] w-[10%] h-[40px] pl-10 '>Search</button> 
        </div>
       
       <div>
       <AppointmentTableDetails/>
       </div>
      
        

        </div>
        

        
  )
}

export default PreviousAppointments

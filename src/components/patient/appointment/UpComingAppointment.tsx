import { DatePicker, Space } from 'antd';
import { Breadcrumb } from 'antd';
import AppointmentTableDetails from './AppointmentTableDetails';
import PatientNavigation from '../navigation/PatientNavigation';
const { RangePicker } = DatePicker;



const UpComingAppointment = () => {
    return (    
        <div>
          <div>
            <PatientNavigation />
          </div>


           <div>
             <p className='text-xl font-bold ml-[1%] mt-[1%]'>Upcoming Appointments</p>
           </div>

          <div>
          <Breadcrumb className='ml-[1%]'
    items={[
      {
        title: 'Appointments',
      },
      {
        title: <a href="">Upcoming Appointments</a>,
      },
      
      
    ]}
  />
         </div>

        <div className='flex ml-[1%] mb-[1%] mt-[1%]'>
        <Space direction="vertical" size={15}>
        <RangePicker style={{ height: '50px' }} />
        </Space>
        
        {/* <select className='border-2 border-gray-300 rounded-lg ml-[1%] '>
        <option value="option1">Doctor Name</option>
        </select> */}
        <input type="text" placeholder='Type Here' className='rounded-lg focus:outline-none placeholder:text-[var(--text-c)] ml-[0.1%] w-[55%] pl-5 ' />
        <button className='bg-[#FF7300] text-white rounded-lg ml-[0.1%] w-[10%] h-[50px] pl-[0.5%]'>Search</button> 
        </div>
       
       
       
      
       <div className='mt-[-2%]'>
         <AppointmentTableDetails/>
       </div>
       </div>
      
  )
}

export default UpComingAppointment

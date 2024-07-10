import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';

const { Dragger } = Upload;

const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

function EmailandDocumetsFrom(props) {
    return (
        <div>
            <div className='text-left w-full mt-5'>
                <p className='text-[var(--text-c)]'>Enter your email here. During the verification phase, you will receive an OTP code for this email</p>
            </div>

            <div className='text-left w-[100%] mt-5 flex flex-row flex-wrap gap-x-[10%] gap-y-4'>
                <div className='w-[100%] mb-0'>
                    <p className='ml-2'>Email: <span className='text-red-600'>*</span></p>
                    <input
                        type="text"
                        name="email"
                        className='border-2 w-[45%] h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                        placeholder='Enter Your  Email'
                        value={props.formData.email}
                        onChange={props.handleChange}
                    />
                </div>
                <div className='w-[45%] mb-0'>
                    <p className='ml-2'>Password: <span className='text-red-600'>*</span></p>
                    <input
                        type="password"
                        name="slmc"
                        className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                        placeholder='Enter Your Password'
                        value={props.formData.password}
                        onChange={props.handleChange}
                    />
                </div>
                <div className='w-[45%] mb-0'>
                    <p className='ml-2'>Confirm Password: <span className='text-red-600'>*</span></p>
                    <input
                        type="text"
                        name="slmc"
                        className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                        placeholder='Enter Your Password again'
                        value={props.formData.repassword}
                        onChange={props.handleChange}
                    />
                </div>

                <div className='w-full mb-5'>
                    <p className='ml-2'>Upload Documets: <span className='text-red-600'>*</span></p>
                   <div className='flex flex-row gap-x-10'>
                   <Dragger {...props}>
                        <p className="ant-upload-drag-icon ">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Front Side Of Your ID.
                        </p>
                    </Dragger>
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon ">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Back Side Of Your ID.
                        </p>
                    </Dragger>
                   </div>
                </div>





            </div>

        </div>
    )
}

export default EmailandDocumetsFrom

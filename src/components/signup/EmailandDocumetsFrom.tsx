/* eslint-disable @typescript-eslint/no-explicit-any */
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import React, { useState } from 'react';

const { Dragger } = Upload;

const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });
};

interface EmailandDocumetsFromProps {
    formData: any,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    validationErrors: any;
}

function EmailandDocumetsFrom(props: EmailandDocumetsFromProps) {
    const [frontIdBase64, setFrontIdBase64] = useState<string>('');
    const [backIdBase64, setBackIdBase64] = useState<string>('');

    const uploadprops: UploadProps = {
        name: 'file',
        multiple: false,
        beforeUpload: async (file) => {
            const base64 = await convertFileToBase64(file);
            if (file.name.includes('front')) {
                setFrontIdBase64(base64);
                props.formData.idfront = base64;
            } else {
                setBackIdBase64(base64);
                props.formData.idback = base64;
            }
            return false; // Prevent upload
        },
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
                        name="password"
                        className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                        placeholder='Enter Your Password'
                        value={props.formData.password}
                        onChange={props.handleChange}
                    />
                </div>
                <div className='w-[45%] mb-0'>
                    <p className='ml-2'>Confirm Password: <span className='text-red-600'>*</span></p>
                    <input
                        type="password"
                        name="confirmpass"
                        className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                        placeholder='Enter Your Password again'
                        value={props.formData.confirmpass}
                        onChange={props.handleChange}
                    />
                </div>

                <div className='w-full mb-5'>
                    <p className='ml-2'>Upload Documents: <span className='text-red-600'>*</span></p>
                    <div className='flex flex-row gap-x-10'>
                        <Dragger {...uploadprops}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Front Side Of Your ID.
                            </p>
                        </Dragger>
                        <Dragger {...uploadprops}>
                            <p className="ant-upload-drag-icon">
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
    );
}

export default EmailandDocumetsFrom;

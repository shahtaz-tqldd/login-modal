import React, { useState } from 'react';
import bd from '../assets/icons/bd.png';
import logo from '../assets/icons/logo.png';
import { BiChevronRight, BiLockOpenAlt, BiUser } from 'react-icons/bi'
import { BsCheckCircleFill, BsShieldLock } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import OtpInput from 'react-otp-input';
import Journey from './Journey';


const LoginModal = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpForgot, setOtpForgot] = useState('');
  const [steps, setSteps] = useState(1)
  let storedNumbers = ['+8801521305382', '+8801711469554'];
  let storedOTP = ['1234', '2345'];

  const userData = [
    {
      name: "Shahtaz Rahman Shanto",
      email: "shahtaz67@gmail.com",
      phone: "",
      isVerified: false,
      password: ""
    },
    {
      name: "Rahman Shahtaz",
      email: "shahtazrahman17@gmail.com",
      phone: "",
      isVerified: false,
      password: ""
    }
  ]

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/\D/g, '');
    if (sanitizedValue.length <= 11) {
      setPhoneNumber(sanitizedValue);
    }
  };
  const handleSubmitPhone = () => {
    const getNumber = '+88' + phoneNumber
    if (storedNumbers.includes(getNumber)) {
      setSteps(5)
    }
    if (!storedNumbers.includes(getNumber)) {
      setSteps(2)
    }
  }
  const handlePasswordSubmit = () => {
    if (2 > 1) {
      setSteps(4)
    }
  }
  const handleSubmitOTPPhone = () => {
    const getOTP = otp
    if (storedOTP.includes(getOTP)) {
      setSteps(3)
    }
  }

  const handleSubmitForgotPass = () => {
    setSteps(3)
  }

  const handleUserDetails = (e) => {
    e.preventDefault()
    const fullname = e.target.fullname.value
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email)
    if (fullname && (email && password)) {
      console.log("tr")
      setSteps(4)
    }
  }

  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10'>
      <div className='bg-gray-700 w-full h-24 absolute top-0 left-0 rounded-t-md z-[10]'>
        <div className='flex gap-2 items-center my-auto h-full ml-6'>
          <img src={logo} alt="" className='h-12 mb-1' />
          <h2 className='text-white text-lg'>Get started with ayykori </h2>
        </div>
      </div>

      <div className='mt-[70px] mx-2 lg:block md:block hidden'>
        <Journey setSteps={setSteps} />
      </div>
      <div className='lg:mt-10 mt-[60px] mx-2'>
        <div className=''>
          {
            steps === 1 && (
              <div style={{ zIndex: 999 }} className='relative bg-white border lg:p-10 md:p-8 p-5 min-h-[400px] rounded-lg flex flex-col justify-center'>
                <h1 className='text-3xl font-bold text-gray-700 mb-10'>Start your cashback journey</h1>
                <h3 className='text-sm text-gray-600'>Start with your phone number</h3>
                <form onSubmit={handleSubmitPhone} className=''>
                  <div className='h-[80px]'>
                    <div className='relative mt-3'>
                      <input
                        type='text'
                        placeholder='Phone'
                        value={phoneNumber}
                        maxLength={11}
                        onChange={handleInputChange}
                        required
                        className='border border-gray-300 py-2 pl-[74px] pr-2 rounded-md focus:outline-none focus:border-primaryColor text-gray-700 w-full'
                      />
                      <div className='absolute top-1/2 -translate-y-1/2 left-2 flex items-center gap-2 text-gray-500'>
                        <img src={bd} alt="" className='h-4' />
                        +88
                      </div>
                    </div>
                  </div>
                  <button type='submit' className='w-fit bg-primaryColor pt-1 pb-1.5 px-6 text-white flex items-center gap-1 rounded-full group hover:opacity-80 transition duration-300'>Next <BiChevronRight className='group-hover:translate-x-1 transition duration-300 mt-0.5' /></button>
                  <div className='mt-4 text-sm text-gray-700 lg:hidden md:hidden block'>
                    Want to know how cashback work?
                    <button onClick={() => setSteps(7)} className='text-blue-500'>Click here</button>
                  </div>
                </form>
              </div>
            )
          }
          {
            steps === 5 && (
              <div style={{ zIndex: 999 }} className='relative bg-white border lg:p-10 md:p-8 p-5 min-h-[400px] rounded-lg flex flex-col justify-center'>
                <h1 className='text-3xl font-bold text-gray-700 mb-4'>Start your cashback journey</h1>
                <h3 className='text-sm text-gray-600'>Enter your password</h3>
                <form onSubmit={handlePasswordSubmit}>
                  <div className='h-[120px] mt-3'>
                    <div className='relative mt-3'>
                      <input
                        type='text'
                        placeholder='Phone'
                        value={phoneNumber}
                        maxLength={11}
                        onChange={handleInputChange}
                        required
                        disabled
                        className='border border-gray-300 py-2 pl-[74px] pr-2 rounded-md focus:outline-none focus:border-primaryColor text-gray-700 w-full'
                      />
                      <div className='absolute top-1/2 -translate-y-1/2 left-2 flex items-center gap-2 text-gray-500'>
                        <img src={bd} alt="" className='h-4' />
                        +88
                      </div>
                    </div>
                    <div className='relative mt-3'>
                      <input
                        type='password'
                        placeholder='Password'
                        required
                        className='border border-gray-300 py-2 pl-8 pr-2 rounded-md focus:outline-none focus:border-primaryColor text-gray-700 w-full'
                      />
                      <div className='absolute top-1/2 -translate-y-1/2 left-2 flex items-center gap-2 text-gray-500'>
                        <BiLockOpenAlt />
                      </div>

                    </div>
                  </div>
                  <button type='submit' className='w-fit bg-primaryColor pt-1 pb-1.5 px-6 text-white flex items-center gap-1 rounded-full group hover:opacity-80 transition duration-300'>Login <BiChevronRight className='group-hover:translate-x-1 transition duration-300 mt-0.5' /></button>
                </form>
                <button onClick={() => setSteps(6)} className='mt-7 text-red-500 hover:text-red-600 transition duration-300 flex items-center gap-2 text-sm'> <BsShieldLock />Forgot your password?</button>
              </div>
            )
          }
          {
            steps === 2 && (
              <div style={{ zIndex: 999 }} className='relative bg-white border lg:p-10 md:p-8 p-5 min-h-[400px] rounded-lg flex flex-col justify-center'>
                <h1 className='text-3xl font-bold text-gray-700 mb-10'>Start your cashback journey</h1>
                <h3 className='text-sm text-gray-600'>Submit your OTP Code</h3>
                <div className='h-[100px] mt-6'>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    inputStyle={{ height: '40px', width: '40px', border: '1px solid #ccc', borderRadius: '6px' }}
                    renderSeparator={<span>&emsp;</span>}
                    renderInput={(props) => <input {...props} />}
                  />
                  <h2 className='text-sm text-gray-600 mt-6'>Didn't receive OTP? <button className='text-red-600'>Resend</button></h2>
                </div>
                <button onClick={handleSubmitOTPPhone} className='w-fit bg-primaryColor pt-1 pb-1.5 px-6 text-white flex items-center gap-1 rounded-full group hover:opacity-80 transition duration-300'>Next <BiChevronRight className='group-hover:translate-x-1 transition duration-300 mt-0.5' /></button>
              </div>
            )
          }
          {
            steps === 3 && (
              <div style={{ zIndex: 999 }} className='relative bg-white border lg:px-10 md:px-8 px-5 min-h-[400px] rounded-lg flex flex-col justify-center'>
                <h1 className='text-3xl font-bold text-gray-700 '>Final step</h1>
                <h3 className='text-sm text-gray-600'>If you have previous account in ayykori, don't worry about openning new account</h3>
                <form onSubmit={handleUserDetails}>
                  <div className='h-[170px] mt-3'>
                    <div className='relative'>
                      <input
                        id='fullname'
                        name='fullname'
                        type='text'
                        placeholder='Your fullname'
                        required
                        className='border border-gray-300 py-2 pl-8 pr-2 rounded-md focus:outline-none focus:border-primaryColor text-gray-700 w-full'
                      />
                      <div className='absolute top-1/2 -translate-y-1/2 left-2 flex items-center gap-2 text-gray-500'>
                        <BiUser />
                      </div>
                    </div>
                    <div className='mt-3 relative'>
                      <input
                        id='email'
                        type='email'
                        placeholder='Your Email'
                        name='email'
                        required
                        className='border border-gray-300 py-2 pl-8 pr-2 rounded-md focus:outline-none focus:border-primaryColor text-gray-700 w-full'
                      />
                      <div className='absolute top-1/2 -translate-y-1/2 left-2 flex items-center gap-2 text-gray-500'>
                        <HiOutlineMail />
                      </div>
                    </div>
                    <div className='relative mt-3'>
                      <input
                        id='password'
                        type='password'
                        placeholder='Password'
                        required
                        name='password'
                        className='border border-gray-300 py-2 pl-8 pr-2 rounded-md focus:outline-none focus:border-primaryColor text-gray-700 w-full'
                      />
                      <div className='absolute top-1/2 -translate-y-1/2 left-2 flex items-center gap-2 text-gray-500'>
                        <BiLockOpenAlt />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className='w-fit bg-primaryColor pt-1 pb-1.5 px-5 text-white flex items-center gap-1 rounded-full group hover:opacity-80 transition duration-300'>Continue <BiChevronRight className='group-hover:translate-x-1 transition duration-300 mt-0.5' /></button>
                </form>
                <h2 className='text-sm mt-3'>By clicking "Continue”, I agree to Ayykori's <a href="https://www.ayykori.net/" target='_blank' className='text-blue-500'>Terms of Use</a> and <a href="https://www.ayykori.net/" target='_blank' className='text-blue-500'>Privacy Policy</a></h2>
              </div>
            )
          }
          {
            steps === 4 && (
              <div className='h-[100px] mt-36 flex flex-col items-center gap-2'>
                <BsCheckCircleFill className='text-7xl text-primaryColor rounded-full' />
                <h2 className='text-4xl font-bold text-gray-700'>Welcome onboard</h2>
              </div>
            )
          }
          {
            steps === 6 && (
              <div style={{ zIndex: 999 }} className='relative bg-white border lg:p-10 md:p-8 p-5 min-h-[400px] rounded-lg flex flex-col justify-center'>
                <h1 className='text-3xl font-bold text-gray-700 mb-10'>Start your cashback journey</h1>
                <h3 className='text-sm text-gray-600'>Provide OTP from your phone</h3>
                <div className='h-[100px] mt-3'>
                  <OtpInput
                    value={otpForgot}
                    onChange={setOtpForgot}
                    numInputs={4}
                    inputStyle={{ height: '40px', width: '40px', border: '1px solid #ccc', borderRadius: '6px' }}
                    renderSeparator={<span>&emsp;</span>}
                    renderInput={(props) => <input {...props} />}
                  />
                  <h2 className='text-sm text-gray-600 mt-6'>Didn't receive OTP? <button className='text-red-600'>Resend</button></h2>
                </div>
                <button onClick={handleSubmitForgotPass} className='w-fit bg-primaryColor pt-1 pb-1.5 px-6 text-white flex items-center gap-1 rounded-full group hover:opacity-80 transition duration-300'>Next <BiChevronRight className='group-hover:translate-x-1 transition duration-300 mt-0.5' /></button>
              </div>
            )
          }
          {
            steps === 7 && (
              <Journey setSteps={setSteps} />
            )
          }
        </div>
      </div>
    </div >
  );
}

export default LoginModal;

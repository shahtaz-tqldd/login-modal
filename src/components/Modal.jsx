import React from 'react'
import { HiXMark } from 'react-icons/hi2'

const Modal = ({ isOpen, setIsOpen, height, width, children }) => {
  return (
    <div className={`fixed bg-black bg-opacity-20 top-0 right-0 left-0 bottom-0 grid place-items-center`}>
      <div
        style={{ height: height, maxWidth: width, width:'full' }}
        className={`relative lg:p-8 md:p-6 p-4 mx-3 bg-gradient-to-tr from-blue-50 via-purple-50 to-emerald-50 rounded-md border shadow-lg ${isOpen ? 'fade-in' : 'fade-out'}`}
      >
        <HiXMark onClick={() => setIsOpen(!isOpen)} className='bg-slate-500 text-white absolute text-3xl top-4 right-5 cursor-pointer hover:bg-slate-200 text-gray-600 hover:text-gray-800 p-1 rounded-full transition duration-300 z-[100]' />
        {children}
      </div>
    </div>
  )
}

export default Modal

// bg-gradient-to-tr from-blue-50 via-purple-100 to-emerald-100

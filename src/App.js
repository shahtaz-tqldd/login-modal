import { useState } from 'react';
import Modal from './components/Modal';
import LoginModal from './components/LoginModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="h-screen grid place-items-center bg-gradient-to-r from-pink-50 via-blue-50 to-green-50">
      <div>
        <h2 className='text-xl mb-5 text-gray-700'>Start your financial journey<br /><b> with Ayykori</b></h2>
        <button onClick={()=>setIsModalOpen(!isModalOpen)} className='py-2 px-4 bg-emerald-500 text-white rounded-md font-bold text-sm border-2 border-emerald-500 hover:bg-transparent hover:text-emerald-500 transition duration-300'>Get Started</button>
      </div>
      {
        isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
            height={500}
            width={840}
            children={<LoginModal/>}
          />
        )
      }

    </div>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>



      {/*# header */}
      <header className='w-[100%] h-[100vh]  border-solid border-red-500 border-[2px]'>
        {/* navbar */}
        <div className='w-[100%] h-[12vh] border-solid border-purple-800 border-[2px] flex justify-between items-center'>
          <h1 className='font-bold text-[26px] ml-[10px]'>magnifico</h1>

          <ul className='flex'>
            <li className='font-bold text-[14px] m-[15px]'>Products</li>
            <li className='font-bold text-[14px] m-[15px]'>Solutions</li>
            <li className='font-bold text-[14px] m-[15px]'>Services</li>
            <li className='font-bold text-[14px] m-[15px]'>Help Center</li>
            <li className='font-bold text-[14px] m-[15px]'>Pricing</li>
          </ul>

          <div className='mr-[10px]'>
            <button className='w-[100px]  h-[7vh]  text-[#2563EB]'>Log In</button>
            <button className=' w-[150px] h-[7vh] text-[white] rounded-[12px] bg-[#2563EB]'>Sign Up Free</button>
          </div>

        </div>


        {/* maincards */}
        <div className='w-[95%] m-auto flex justify-center'>

          {/* card_left */}
          <div className='w-[50%] h-[85vh] border-solid border-red-700 border-[2px] flex flex-col justify-center'>
            <h1 className='text-[60px] font-bold'>Team projects, <br /> done well</h1>
            <p className='text-[#475569]'>The only platform that gives your team all the tools needed to work <br /> together on their awesome projects. </p>
            <div>
              <input placeholder='Enter work email'  className='w-[280px] h-[8vh] rounded-[12px] m-[12px] border-solid border-black-100 border-[2px] ' />
              <button className=' w-[150px] h-[7vh] text-[white] rounded-[12px] bg-[#2563EB]'>Sign Up Free</button>
              <img src='src/assets/1.png' />
            </div>
          </div>


          {/* card_right */}
          <div className='w-[50%] h-[85vh] border-solid border-red-700 border-[2px]'></div>

        </div>

      </header>


    </>
  )
}

export default App


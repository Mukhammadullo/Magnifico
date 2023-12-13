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

          <div>
            <button>Log In</button>
            <button>Sign Up Free</button>
          </div>


        </div>


      </header>


    </>
  )
}

export default App


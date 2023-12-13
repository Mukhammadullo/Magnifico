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
        <div className='w-[100%] h-[12vh] border-solid border-purple-800 border-[2px]'>
          <h1>magnifico</h1>
        </div>


      </header>


    </>
  )
}

export default App


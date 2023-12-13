import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>



      {/*# header */}
      <header className='w-[100%] h-[100vh] '>
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
          <div className='w-[50%] h-[85vh]  flex flex-col justify-center'>
            <h1 className='text-[60px] font-bold'>Team projects, <br /> done well</h1>
            <p className='text-[#475569]'>The only platform that gives your team all the tools needed to work <br /> together on their awesome projects. </p>
            <div>
              <input placeholder='Enter work email' className='w-[300px] h-[7vh] rounded-[12px] m-[12px] border-solid border-black-100 border-[2px] ' />
              <button className=' w-[150px] h-[7vh] text-[white] rounded-[12px] bg-[#2563EB]'>Sign Up Free</button>
              <img src='src/assets/1.png' />
            </div>
          </div>


          {/* card_right */}
          <div className='w-[50%] h-[85vh]   flex justify-center items-center'>
            <img src='src/assets/Left.png' />
          </div>

        </div>

      </header>


      {/* section1 */}
      <section className='w-[100%] h-[80vh]  flex'>
        <div className='w-[50%] h-[80vh]  flex justify-center items-center'>
          <img src='src/assets/section1.png' />
        </div>
        <div className='w-[50%] h-[80vh]  flex flex-col justify-center'>
          <h1 className='text-[55px] font-bold'>Enjoy your time <br /> working</h1>
          <p className='text-[#475569] text-[18px] m-[5px]'>Etiam condimentum duis molestie malesuada volutpat pellentesque sed.<br /> Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis <br /> massa tellus imperdiet aenean nulla id.</p>
          <p className='text-[#2563EB] text-[16px] m-[5px]'>See how it helped others</p>
        </div>
      </section>


      {/* section2 */}
      <section className='w-[95%] h-[80vh]  m-auto flex '>
        <div className='w-[50%] h-[80vh]  flex flex-col justify-center'>
          <h1 className='text-[55px] font-bold'>Enjoy your time <br /> working</h1>
          <p className='text-[#475569] text-[18px] m-[5px]'>Etiam condimentum duis molestie malesuada volutpat pellentesque sed.<br /> Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis <br /> massa tellus imperdiet aenean nulla id.</p>
          <p className='text-[#2563EB] text-[16px] m-[5px]'>See how it helped others</p>
        </div>
        <div className='w-[50%] h-[80vh]  flex justify-center items-center'>
          <img src='src/assets/Right.png' />
        </div>
      </section>


      {/* section3 */}
      <section className='w-[95%] h-[65vh] rounded-[12px] m-auto '>
        <img src='src/assets/Section.png' className='w-[100%] h-[65vh]' />
      </section>



      {/* section4 */}
      <section className='w-[95%] m-auto h-[80vh]  flex'>
        <div className='w-[50%] h-[80vh]  flex flex-col justify-center'>
          <h1 className='text-[55px] font-bold'>Improve workflow</h1>

          <div className='flex'>
            <div className='w-[160px] h-[40px] border-solid border-black-100 border-[2px]'>Research</div>
            <div className='w-[160px] h-[40px] border-solid border-black-100 border-[2px]'>Plan</div>
            <div className='w-[160px] h-[40px] border-solid border-black-100 border-[2px]'>Design</div>
          </div>

          <p className='text-[#475569] text-[18px] m-[5px]'>Etiam condimentum duis molestie malesuada volutpat pellentesque sed.<br /> Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis <br /> massa tellus imperdiet aenean nulla id.</p>
          <p className='text-[#2563EB] text-[16px] m-[5px]'>See how it helped others</p>
        </div>
        <div className='w-[50%] h-[80vh]  flex justify-center items-center'>
          <img src='src/assets/Left (2).png' />
        </div>
      </section>


      {/* section5 */}
      <section className='w-[95%] h-[40vh]  m-auto rounded-[12px] bg-[#312E81] flex flex-col justify-center items-center'>
        <h1 className='text-[35px] font-bold'>Join the community today</h1>
        <p className='text-[white] m-[10px]'>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac <br /> varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
        <button className=' w-[150px] h-[7vh] text-[white] rounded-[12px] bg-[#2563EB]'>Sign Up Free</button>

      </section>


      {/* footer */}

      <footer className='w-[100%] h-[10vh]  flex justify-between items-center'>

        <div className='flex ml-[10px]'>
          <p className='font-bold'>magnifico</p>
          <p>@ 2023. All rights reserved.</p>
        </div>

        <ul className='flex mr-[10px]'>
          <li className='m-[5px]'>Terms</li>
          <li className='m-[5px]'>Privacy</li>
          <li className='m-[5px]'>Support</li>
          <li className='m-[5px]'>About</li>
          <li className='m-[5px]'>Resources</li>
          <li className='m-[5px]'>Contact</li>
        </ul>
      </footer>

    </>
  )
}

export default App


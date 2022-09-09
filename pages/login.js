import React from 'react'
import Logo from '../public/images/logo.png';
import Image from 'next/image';

const Login = () => {

  return (
    <div className='w-full h-screen bg-gradient-to-l hover:bg-gradient-to-r from-[#0B5345] to-[#154360] transition ease-in-out delay-150 overflow-y-hidden overflow-x-hidden' >
      <div className='w-[100%] flex justify-center items-center '
      >
        <div className=' w-[90%] mt-[100px] z-[100]  z-1 py-8 sm:w-[40%] md:w-[25%] flex flex-col items-center bg-indigo-100 rounded-xl hover:bg-indigo-100 duration-300'>
          <div className="imgwrapper w-16 h-16 mt-8 animate-bounce">
            <Image src={Logo} className='rounded-lg' alt="logo"></Image>
          </div>
          <input className='w-[80%] h-[45px] mt-8 border-2 rounded-lg px-2  hover:border-violet-500' placeholder='username'>
          </input>
          <input className='w-[80%] h-[45px] mt-8 border-2 rounded-lg px-2 outline-1 hover:border-violet-500' placeholder='password'>
          </input>
          <button type="button" className='hover:bg-gradient-to-r from-violet-500 text-white rounded bg-sky-500 mt-8 text-center items-center justify-center py-2  w-[50%] ' >
            Login
          </button>
        </div>
      </div>
      <div className="smallParent">

        {[...Array(14)].map((e, i) => <div className="items" key={i}></div>)}
        {/* <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div>
        <div className="items"></div> */}
      </div>
    </div>
  )
}

export default Login
import React from 'react'
import Logo from '../public/images/logo.png';
import Image from 'next/image';

const Login = () => {

  return (
    <>
      <div className='w-full h-screen flex flex-column bg-gradient-to-l hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 justify-center items-center'>
        <div className=' w-[90%] z-1 py-8 sm:w-[40%] md:w-[25%] flex flex-col items-center bg-indigo-100 rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-100 duration-300'>
            <div className="imgwrapper w-16 h-16 mt-8 animate-bounce">
            <Image src={Logo} className='rounded-lg'  alt="logo"></Image>
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
            <div className="items"></div>
            <div className="items"></div>
            <div className="items"></div>
            <div className="items"></div>
            <div className="items"></div>
            <div className="items"></div>
            <div className="items"></div>
        </div>
    </>
  )
}

export default Login
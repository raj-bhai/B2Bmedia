import React, { useState, useEffect } from 'react'
import Logo from '../public/images/logo.png';
import Image from 'next/image';
import axios from 'axios';
import url from '../constants/url';
import { useRouter } from 'next/router';
import LoadingScreen from '../components/Loader/LoadingScreen';

const Login = () => {

  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setShowError(true)
    } else {
      setShowError(false)
    }
  }, [emailError, passwordError])

  const Validate = () => {
    if (!email.length) {
      setEmailError(true);
      setErrorText("Enter email");
      return;
    }
    if (!password.length) {
      setPasswordError(true);
      setErrorText("Enter password");
      return;
    }
    Login()
  }

  const Login = () => {
    setLoading(true);
    axios.post(`${url.apiRoot}/auth/signIn`, {
      "email": email,
      "password": password
    })
      .then(res => {
        if (res.data.success) {
          console.log("Success");
          router.push('/dashboard');
        }
        // localStorage.setItem("ensowebtoken", response.data.access_token);
      })
      .catch(err => {
        console.log("Login Error :");
        setEmailError(true);
        setErrorText("Invalis credentials");
        setLoading(false);
        // throw error
      });
  }

  if (loading) {
    return (<LoadingScreen />)
  }

  return (
    <div className='w-full h-screen bg-gradient-to-l hover:bg-gradient-to-r from-[#0B5345] to-[#154360] transition ease-in-out delay-150 overflow-y-hidden overflow-x-hidden'
    // style={{
    //   backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBRDEB4tj6eMrqePmLQGfDa448-ULi1pKyaA&usqp=CAU")`,
    //   backgroundSize: 'cover'

    // }}

    >
      <div className='w-[100%] flex justify-center items-center '
      >
        
        <div className=' w-[90%] mt-[100px] z-[100]  z-1 py-8 sm:w-[40%] md:w-[25%] flex flex-col items-center bg-indigo-100 rounded-xl hover:bg-indigo-100 duration-300'>
          <div className="imgwrapper w-16 h-16 mt-8 animate-bounce">
            <Image src={Logo} className='rounded-lg' alt="logo"></Image>
          </div>
          <input className='w-[80%] h-[45px] mt-8 border-2 rounded-lg px-2  hover:border-violet-500' placeholder='username'
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            onFocus={() => {
              setEmailError(false)
            }}
          >
          </input>
          <input className='w-[80%] h-[45px] mt-8 border-2 rounded-lg px-2 outline-1 hover:border-violet-500' placeholder='password'
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            onFocus={() => {
              setPasswordError(false)
            }}
          >
          </input>
          <div className='w-[80%] h-[20px] mt-[5px] px-[5px] flex justify-between'>
            <h1 className='text-[12px] text-[red] font-semibold' >{showError ? errorText : ""}</h1>
            <h1 className='text-[14px] cursor-pointer hover:text-sky-500 hover:font-semibold ' >Forgot Password?</h1>
          </div>
          <button type="button" className='hover:bg-gradient-to-r from-violet-500 text-white rounded bg-sky-500 mt-8 text-center items-center justify-center py-2  w-[50%] '
            onClick={() => {
              Validate()
            }}
          >
            Login
          </button>
        </div>
      </div>
      <div className="smallParent">


        {/* {[...Array(14)].map((e, i) => <div className="items" key={i}></div>)} */}
      </div>
    </div>

  )
}

export default Login
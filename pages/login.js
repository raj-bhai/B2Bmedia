import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import axios from 'axios';
import url from '../constants/url';
import { useRouter } from 'next/router';
import LoadingScreen from '../components/Loader/LoadingScreen';
import { GoogleLogin } from 'react-google-login';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'



import {
  FacebookLoginButton,
  GoogleLoginButton,
  // GithubLoginButton,
  // AmazonLoginButton,
  // InstagramLoginButton,
  // LinkedInLoginButton,
  // MicrosoftLoginButton,
  // TwitterLoginButton,
  // AppleLoginButton,
} from 'react-social-login-buttons';



const Login = () => {

  const router = useRouter()
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [placeholder, setPlaceHolder] = useState('enter whatsapp number')
  const backgroundGradient = ' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]';

  const clientId = '1036453217553-382m7c1vsrsuqt0o08fkrsngjfi39bhh.apps.googleusercontent.com';


  //facebook login

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});


  const [picture, setPicture] = useState('');
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [fbId, setFbId] = useState('');


  const responseFacebook = async (response) => {
    // console.log(response);
    if (response.accessToken) {
      // console.log("name :", response.name);
      // console.log("email :", response.email);
      // console.log("fbId :", response.id);
      Login(response.name, response.email, "", "facebook", false, response.id, "")
    } else {
    }
  }

  const Login = (name, email, number, type, isAdmin, fbId, googleId) => {
    axios.post(`${url.apiRoot}/auth/signIn`, {
      name: name,
      email: email,
      number: number,
      type: type,
      isAdmin: isAdmin,
      fbId: fbId,
      googleId: googleId
    })
      .then(res => {
        if (res.data.success) {
          router.push('/home')
          console.log("Success");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }


  useEffect(() => {
    if (emailError || passwordError) {
      setShowError(true)
    } else {
      setShowError(false)
    }
  }, [emailError, passwordError])

  // axios.post(`${url.apiRoot}/auth/signIn`, {
  //   "email": email,
  //   "password": password
  // })
  //   .then(res => {
  //     if (res.data.success) {     ---------------------------------------------------------POST API STRUCTURE
  //       console.log("Success");
  //     }
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

  const SentOtp = () => {

  }

  const VerifyOtp = () => {
    axios.post(`${url.apiRoot}/auth/verifyOtp`, {
      number: "919954546495",
      otp: "123456"
    })
      .then(res => {
        if (res.data.success) {
          console.log("Success");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  // const Validate = () => {
  //   if (!email.length) {
  //     setEmailError(true);
  //     setErrorText("Enter email");
  //     return;
  //   }
  //   if (!password.length) {
  //     setPasswordError(true);
  //     setErrorText("Enter password");
  //     return;
  //   }
  //   Login()
  // }

  // const Login = () => {
  //   setLoading(true);
  //   axios.post(`${url.apiRoot}/auth/signIn`, {
  //     "email": email,
  //     "password": password
  //   })
  //     .then(res => {
  //       if (res.data.success) {
  //         console.log("Success");
  //         router.push('/dashboard');
  //       }
  //       // localStorage.setItem("ensowebtoken", response.data.access_token);
  //     })
  //     .catch(err => {
  //       console.log("Login Error :");
  //       setEmailError(true);
  //       setErrorText("Invalis credentials");
  //       setLoading(false);
  //       // throw error
  //     });
  //  }

  if (loading) {
    return (<LoadingScreen />)
  }

  const onSuccess = (res) => {
    console.log('success:', res);
  };
  const onFailure = (err) => {
    console.log('failed:', err);
  };

  const onSignIn = (googleUser) => {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }



  return (
    <>
      {/* <head>
        <title>Login</title>
      </head> */}
      <div className={'w-full h-screen transition ease-in-out delay-150 overflow-y-hidden overflow-x-hidden' + backgroundGradient}
      // style={{
      //   backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBRDEB4tj6eMrqePmLQGfDa448-ULi1pKyaA&usqp=CAU")`,
      //   backgroundSize: 'cover'

      // }}

      >
        <div className='w-[100%] flex justify-center items-center '
        >
          <div className=' w-[90%] mt-[100px] z-[100]  z-1 py-8 sm:w-[40%] md:w-[25%] flex flex-col items-center bg-indigo-100 rounded-xl hover:bg-indigo-100 duration-300'>
            <div
            // className="animate-bounce"
            >
              <Image src="/images/favicon.png" width={100} height={100} className='rounded-lg' alt="logo"></Image>
            </div>
            <input className='w-[80%] h-[45px] mt-[20px] border-2 rounded-lg px-2  hover:border-violet-500'
              placeholder={otpSent ? "enter 6 digit otp" : "enter whatsapp number"}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              onFocus={() => {
                setEmailError(false)
              }}
            >
            </input>
            <button type="button" className='hover:bg-gradient-to-r from-violet-500 text-white rounded bg-sky-500 mt-[10px] text-center items-center justify-center py-2  w-[80%] '
              onClick={() => {
                setOtpSent(!otpSent)
              }}
            >
              {otpSent ? 'Login' : 'Sent Otp'}
            </button>
            <div className='w-[80%]  border-[1px] mt-[30px] ' >
              <FacebookLogin
                appId="3349740341947591"
                //  autoLoad={true}
                fields="name,email"
                callback={responseFacebook}
                render={renderProps => (
                  <FacebookLoginButton
                    onClick={renderProps.onClick}
                  />
                )}
              />
            </div>
            <div className='w-[80%] h-[50px]  border-[1px] ' >
              <GoogleLogin
                clientId={clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={false}
                style={{ width: 500 }}
                render={renderProps => (
                  <GoogleLoginButton
                    onClick={renderProps.onClick}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="smallParent">


          {/* {[...Array(14)].map((e, i) => <div className="items" key={i}></div>)} */}
        </div>

      </div>
    </>
  )
}

export default Login
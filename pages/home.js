import React, { useState, useEffect, useRef } from 'react'
import Logo from '../public/images/logo.png';
import Image from 'next/image';
import axios from 'axios';
import url from '../constants/url';
import { useRouter } from 'next/router';
import LoadingScreen from '../components/Loader/LoadingScreen';
import AnimatedText from 'react-animated-text-content';
import {
    FaReact,
    FaTwitter,
    FaFacebookSquare,
    FaInstagram
} from 'react-icons/fa';


const Home = () => {
    const [headerStyle, setHeaderStyle] = useState('h-[100px]');
    const [textContainerStyle, setTextContainerStyle] = useState('pt-[100px]');
    const [aboutStyle, setAboutStyle] = useState('');
    const scroll = useRef(null)

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            setOffset(window.pageYOffset);
            if (window.pageYOffset > 50) {
                setHeaderStyle('bg-[#2E4053] fixed h-[80px] top-[0px]');
                setTextContainerStyle('pt-[250px]')
                if ((335 > window.pageYOffset) && (window.pageYOffset > 156)) {
                    setTextContainerStyle('pt-[350px]')
                }
                if ((380 > window.pageYOffset) && (window.pageYOffset > 280)) {
                    setTextContainerStyle('pt-[450px]')
                }
                // if ((window.pageYOffset > 720) && (window.pageYOffset > 770)) {
                //     setAboutStyle('pt-[20px]')
                // }
                // if ((window.pageYOffset > 720) && (window.pageYOffset > 770)) {
                //     setAboutStyle('pt-[20px]')
                // }
                // if ((window.pageYOffset > 770) && (window.pageYOffset > 840)) {
                //     setAboutStyle('pt-[70px]')
                // }
            } else {
                setHeaderStyle('h-[100px]');
                setTextContainerStyle('pt-[100px]')
            }
        };
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    console.log(offset);
    return (
        <div className='w-full px-[0px] py-[0px]  bg-gradient-to-l hover:bg-gradient-to-r from-[#0B5345] to-[#154360] transition ease-in-out delay-150 overflow-y-hidden overflow-x-hidden'
            ref={scroll}
        >
            <div className={'w-[100%] h-[800px] '} id="home"
                style={{
                    backgroundImage: `url("https://res.cloudinary.com/drgvislmm/image/upload/v1663567484/WebsiteImages/SL_101619_24150_55_cszay4.jpg")`,
                    backgroundSize: 'cover',
                }}
            >
                <div id="header" className={'w-[100%] border-[0px] flex items-center z-50 ' + headerStyle}
                    style={{}}
                >
                    <div className='w-[50%] border-[0px] flex ' >
                        <div className='w-[10%] ml-[20px] ' >
                            <FaReact
                                color='white'
                                size={40}
                            />
                        </div>
                        <div className='flex space-x-[18px] items-center' >
                            <div
                                style={{
                                    borderBottomWidth: (window.pageYOffset < 645) ? 2 : 0
                                }}
                            >
                                <h1 className='text-white font-normal text-[18px] cursor-pointer '
                                    onClick={() => {
                                        document.getElementById('home').scrollIntoView()
                                    }}
                                >Home</h1>
                            </div>
                            <h1 className='text-white font-normal text-[18px] cursor-pointer '
                                onClick={() => {
                                    document.getElementById('about').scrollIntoView()
                                }}
                            >About</h1>
                            <h1 className='text-white font-normal text-[18px] cursor-pointer '
                                onClick={() => {
                                    document.getElementById('services').scrollIntoView()
                                }}
                            >Services</h1>
                            <h1 className='text-white font-normal text-[18px] cursor-pointer '
                                onClick={() => {
                                    document.getElementById('portfolio').scrollIntoView()
                                }}
                            >Portfolio</h1>
                            <h1 className='text-white font-normal text-[18px] cursor-pointer'
                                onClick={() => {
                                    document.getElementById('contact').scrollIntoView()
                                }}
                            >Contact</h1>
                        </div>
                    </div>
                    <div className='w-[50%] border-[0px] space-x-[18px] flex justify-end items-center pr-[30px] ' >
                        <FaFacebookSquare
                            color='white'
                            size={25}
                        />
                        <FaInstagram
                            color='white'
                            size={25}
                        />
                        <FaTwitter
                            color='white'
                            size={25}
                        />
                    </div>
                </div>
                <div className={`w-[50%] h-[200px] border-[0px] ml-[100px] ` + textContainerStyle}
                    style={{ zIndex: -1 }}
                >
                    <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            // ease: 'ease-in-out', 
                        }}
                        animationType="float"
                        interval={0.06}
                        duration={0.8}
                        tag="p"
                        className="text-white transition-all text-[17px] leading-relaxed animate-text"
                        includeWhiteSpaces
                        threshold={0.5}
                        rootMargin="20%"
                    >
                        WELCOME TO MY WORLD
                    </AnimatedText>
                    <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="float"
                        interval={0.06}
                        duration={0.8}
                        tag="p"
                        className="text-white transition-all text-[50px] leading-relaxed italic"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        Hi, I'm Tonmoy
                    </AnimatedText>
                    <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="float"
                        interval={0.06}
                        duration={0.8}
                        tag="p"
                        className="text-white transition-all text-[50px] leading-relaxed italic"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        Welcome to our platform
                    </AnimatedText>
                </div>
            </div>
            <div className='w-[100%] h-[700px] bg-[#212F3C] flex items-center justify-center ' id='about'
            // style={{
            //     backgroundImage: `url("https://res.cloudinary.com/drgvislmm/image/upload/v1663603125/WebsiteImages/SL_043021_42650_02_wxjo50.jpg")`,
            //     backgroundSize: 'cover',
            // }}
            >
                <div className={'w-[70%] h-[80%] border-[0px] ' + aboutStyle}
                >
                    <h1 className='text-white text-[80px] font-bold ' >About us</h1>
                    <div className='flex border-[0px] mt-[30px] w-[100%] h-[200px] ' >
                        <div className=' w-[25%] h-[100%] border-[0px] flex items-center justify-center ' >
                            <img src="https://res.cloudinary.com/drgvislmm/image/upload/v1663606102/WebsiteImages/avtar_lnzfdl.png" alt="Girl in a jacket"
                                className='w-[180px] h-[180px] rounded-[100px] '
                            ></img>
                        </div>
                        <div className=' w-[75%] h-[100%] border-[0px] ' >
                            <h1
                                className='text-white text-[19px] leading-[30px] italic font-normal mt-[10px]'
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div id="services" className='w-[100%] h-[700px] bg-[#273746] flex items-center justify-center '>

            </div>
            <div id="portfolio" className='w-[100%] h-[700px] bg-[#2E4053] flex items-center justify-center '>

            </div>
            <div id="contact" className='w-[100%] h-[700px] bg-[#273746] flex items-center justify-center '>

            </div>
            <div className='w-[100%] h-[200px] bg-[#424949] flex items-center justify-center' id="footer" >
                <div className='flex border-[0px] w-[200px] h-[40px] items-center justify-between' >
                    <FaFacebookSquare
                        color='white'
                        size={35}
                    />
                    <FaInstagram
                        color='white'
                        size={35}
                    />
                    <FaTwitter
                        color='white'
                        size={35}
                    />
                </div>
            </div>

        </div>
    )
}

export default Home
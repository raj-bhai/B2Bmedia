import React, { useState, useEffect, useRef } from 'react'
import Logo from '../public/images/logo.png';
import Image from 'next/image';
import axios from 'axios';
import url from '../constants/url';
import { useRouter } from 'next/router';
import LoadingScreen from '../components/Loader/LoadingScreen';
import AnimatedText from 'react-animated-text-content';
import TextTransition, { presets } from "react-text-transition";
import {
    FaReact,
    FaTwitter,
    FaFacebookSquare,
    FaInstagram,
    FaAngleDoubleUp,
    FaFileAlt,
    FaScroll,
    FaMicrophone,
    FaYoutube,
    FaPhotoVideo
} from 'react-icons/fa';

const TEXTS = [
    "Forest",
    "Building",
    "Tree",
    "Color"
];

const SERVICES = [
    {
        name: "Script",
        description: "Our Scriptwriters Knows Exactly how To Mould the story as per your need."
    },
    {
        name: "Voiceover",
        description: "A good voice quality really grabs the attention of user."
    },
    {
        name: "Video",
        description: "We have the best video editor for every niche."
    },
    {
        name: "Thumbnail",
        description: "An Eye-catchy thumbnail is really important that's why we have the creative people"
    },
];

const AboutUsText = "We are a group of young YouTube specialists and enthusiasts dedicated to establishing a viable career path for YouTubers. Our goal is to assist individuals in acing their YouTube journey and turning YouTube into a revenue-generating platform through content improvement."
const Home = () => {
    const [headerStyle, setHeaderStyle] = useState('h-[100px]');
    const [textContainerStyle, setTextContainerStyle] = useState('pt-[100px]');
    const [aboutStyle, setAboutStyle] = useState('');
    const [showArrowUp, setShowArrowUp] = useState(false);
    const [homeBG, setHomeBG] = useState(0);
    const scroll = useRef(null)

    const [offset, setOffset] = useState(0);

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    const bgImages = [
        "url(https://res.cloudinary.com/drgvislmm/image/upload/v1663691577/WebsiteImages/27263_szxh1r.jpg)",
        // "url(https://res.cloudinary.com/drgvislmm/image/upload/v1663567484/WebsiteImages/SL_101619_24150_55_cszay4.jpg)",
        "url(https://res.cloudinary.com/drgvislmm/image/upload/v1663689788/WebsiteImages/rm373batch2-08_ikx2nb.jpg)"
    ]

    useEffect(() => {
        const timer = setTimeout(() => {
            if (homeBG < bgImages.length - 1) {
                setHomeBG(homeBG + 1)
            } else {
                setHomeBG(0)
            }
        }, 15000);
        return () => clearTimeout(timer);
    }, [homeBG])

    useEffect(() => {
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onScroll = () => {
        setOffset(window.pageYOffset);
        if (window.pageYOffset > 50) {
            setHeaderStyle('bg-[#2E4053] fixed h-[80px] top-[0px]');
            setTextContainerStyle('pt-[250px]');
            setShowArrowUp(true)
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
            setShowArrowUp(false);
            setHeaderStyle('h-[100px]');
            setTextContainerStyle('pt-[100px]')
        }
    };

    console.log(offset);
    return (
        <div className='w-full px-[0px] py-[0px] bg-[#17202A] overflow-y-hidden overflow-x-hidden'
            ref={scroll}
        >
            <div className={'w-[100%] h-[800px] '} id="home"
                style={{
                    // backgroundImage: `url("https://res.cloudinary.com/drgvislmm/image/upload/v1663567484/WebsiteImages/SL_101619_24150_55_cszay4.jpg")`,
                    backgroundImage: bgImages[homeBG],
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
                            <div>
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
                {/* AroowUpIcon */}
                {
                    showArrowUp &&
                    <div id="goToTop" className='fixed border-[0px] w-[80px] bottom-[30px] right-[30px] h-[80px] flex items-center justify-center ' >
                        <FaAngleDoubleUp
                            size={45}
                            onClick={() => {
                                document.getElementById('home').scrollIntoView()
                            }}
                            className='text-white hover:text-[#F0F3F4] cursor-pointer hover:animate-bounce'
                        />
                    </div>
                }
                <div className={`w-[50%] h-[200px] border-[0px] ml-[100px] ` + textContainerStyle}
                    style={{ zIndex: -1 }}
                >
                    <AnimatedText
                        type="chars" // animate words or chars
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
                        className="text-white  text-[17px] leading-relaxed animate-text"
                        includeWhiteSpaces
                        threshold={0.5}
                        rootMargin="20%"
                    >
                        WELCOME TO MY WORLD
                    </AnimatedText>
                    <AnimatedText
                        type="chars" // animate words or chars
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
                        className="text-white  text-[50px] leading-relaxed italic"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        Hi, I'm Tonmoy
                    </AnimatedText>
                    <AnimatedText
                        type="chars" // animate words or chars
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
                        className="text-white  text-[50px] leading-relaxed italic"
                        includeWhiteSpaces
                        threshold={0.5}
                        rootMargin="50%"
                    >
                        Welcome to our platform
                    </AnimatedText>
                </div>
            </div>
            <div className='w-[100%] h-[700px] bg-[#212F3C] flex items-center justify-center ' id='about'
                style={{
                    backgroundImage: `url("https://res.cloudinary.com/drgvislmm/image/upload/v1663689788/WebsiteImages/rm373batch2-08_ikx2nb.jpg")`,
                    backgroundSize: 'cover',
                }}
            >
                <div className={'w-[70%] h-[80%] border-[0px] ' + aboutStyle}
                >
                    <AnimatedText
                        type="chars" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            // ease: 'ease-in-out', 
                        }}
                        animationType="float"
                        interval={0.05}
                        duration={0}
                        tag="p"
                        className="text-white text-[80px] font-semibold animate-text"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        About us
                    </AnimatedText>
                    {/* <h1 className='text-white text-[80px] font-bold ' >About us</h1> */}
                    <div className='flex border-[0px] mt-[30px] w-[100%] h-[200px] '
                    >
                        <div className=' w-[25%] h-[100%] border-[0px] flex items-center justify-center ' >
                            <img src="https://res.cloudinary.com/drgvislmm/image/upload/v1663606102/WebsiteImages/avtar_lnzfdl.png" alt="Girl in a jacket"
                                className='w-[180px] h-[180px] rounded-[100px] '
                            ></img>
                        </div>
                        <div className=' w-[75%] h-[100%] border-[0px] ' >
                            <h1
                                className='text-white text-[19px] leading-[30px] italic font-normal mt-[10px]'
                            >{AboutUsText}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div id="services" className='w-[100%] h-[700px] bg-[#273746] flex items-center justify-center '
                style={{
                    backgroundImage: `url("https://res.cloudinary.com/drgvislmm/image/upload/v1663921647/WebsiteImages/6150452_nxhsth.jpg")`,
                    backgroundSize: 'cover',
                }}
            >
                <div className='w-[90%] h-[80%] border-[0px] ' >
                    <div className='w-[100%] h-[20%] border-[0px] flex items-center justify-center  ' >
                        <h1 className='text-white text-[45px] ' >Services we provide</h1>
                    </div>
                    <div className='w-[100%] h-[80%] border-[0px] flex items-center justify-between flex-wrap gap-x-[10px] gap-y-[10px] ' >
                        {SERVICES.map((e, i) => <div className="border-[1px] h-[350px] w-[280px] px-[10px] py-[10px] rounded-lg">
                            <div className='flex items-center gap-[10px]' >
                                {(i === 0) &&
                                    <FaScroll
                                        color='white'
                                        size={25}
                                    />
                                }
                                {(i === 1) &&
                                    <FaMicrophone
                                        color='white'
                                        size={25}
                                    />
                                }
                                {(i === 2) &&
                                    <FaYoutube
                                        color='white'
                                        size={25}
                                    />
                                }
                                {(i === 3) &&
                                    <FaPhotoVideo
                                        color='white'
                                        size={25}
                                    />
                                }
                                <h1 className='text-[white] text-[25px]' >
                                    {e.name}</h1>
                            </div>
                            <div>
                                <h1 className='text-[white] text-[16px]' >
                                    {e.description}</h1>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
            <div id="portfolio" className='w-[100%] h-[700px] bg-[#060606] flex items-center justify-center '>
                <div className=' w-[80%] h-[80%] border-[0px] ' >
                    <div className='w-[100%] h-[25%] border-[0px] flex items-center justify-center ' >
                        <h1 className='text-[#F7F9F9] text-[30px] ' >Some of our successfully delivered work</h1>
                        {/* <TextTransition springConfig={presets.molasses}
                            className='text-white text-[30px] '
                        >
                            {TEXTS[index % TEXTS.length]}
                        </TextTransition> */}
                    </div>
                    <div className='w-[100%] h-[75%] border-[0px] flex flex-wrap  gap-x-[50px] justify-center ' >
                        {[...Array(6)].map((e, i) => <div className="border-[0px] h-[200px] w-[300px] flex items-center justify-center">
                            <img src="https://res.cloudinary.com/drgvislmm/image/upload/v1663776103/WebsiteImages/Screenshot_19_ivsskc.png" alt="Girl in a jacket"
                                className='w-[80%] h-[80%] hover:w-[85%] hover:h-[85%] rounded-lg cursor-pointer '
                            ></img>
                        </div>)}
                    </div>
                </div>
            </div>
            <div id="contact" className='w-[100%] h-[700px] bg-[#273746] flex items-center justify-center '
            // style={{
            //     backgroundImage: `url("https://res.cloudinary.com/drgvislmm/image/upload/v1663691577/WebsiteImages/27263_szxh1r.jpg")`,
            //     backgroundSize: 'cover',
            // }}
            >
                <div className='w-[50%] h-[80%] border-[0px] px-[10px] py-[10px] ' >
                    <h1 className='text-white text-[50px] font-bold' >Connect with us</h1>
                    <div className='w-[100%] h-[100px] border-[0px]' >
                        <h1
                            className='text-white text-[18px]'
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
                    </div>
                    <div className='w-[100%] h-[80px] border-[0px] flex justify-between items-center' >
                        <input className='w-[48%] h-[50px] border-[1px] text-white rounded-lg bg-transparent px-[20px] ' placeholder='your name' ></input>
                        <input className='w-[48%] h-[50px] border-[1px] text-white rounded-lg bg-transparent px-[20px] ' placeholder='your email' ></input>
                    </div>
                    <div className='w-[100%] h-[80px] border-[0px] flex justify-between items-center' >
                        <input className='w-[100%] h-[50px] rounded-lg border-[1px] text-white bg-transparent px-[20px]' placeholder='Write a subject' ></input>
                    </div>
                    <div className='w-[100%] border-[0px] flex justify-between items-center' >
                        <textarea placeholder="Your message" className='w-[100%] text-white py-[10px] h-[50px] rounded-lg border-[1px] bg-transparent px-[20px]'></textarea>
                    </div>
                    <div className='w-[100%] flex items-center h-[100px] border-[0px] justify-center' >
                        <button className='w-[150px] h-[50px] border-[1px] hover:bg-[#0E6655] hover:border-0 rounded-lg text-white text-[17px] font-semibold' type="button">Submit</button>
                    </div>
                </div>
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
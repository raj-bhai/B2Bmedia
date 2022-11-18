import React, { useState, useEffect, useRef, useMemo, } from 'react'
import Logo from '../public/images/logo.png';
import Image from 'next/image';
import axios from 'axios';
import url from '../constants/url';
import { useRouter } from 'next/router';
import LoadingScreen from '../components/Loader/LoadingScreen';
import AnimatedText from 'react-animated-text-content';
import TextTransition, { presets } from "react-text-transition";
import Header from '../components/Home/header';
import MovingText from 'react-moving-text'
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
    FaPhotoVideo,
    FaWhatsapp,
    FaPlayCircle
} from 'react-icons/fa';
import Globe from '../components/Home/globe';
import Services from '../components/Home/services';

const TEXTS = [
    "Forest",
    "Building",
    "Tree",
    "Color"
];

const SERVICES = [
    {
        name: "Script Writing",
        image: "/images/user/scriptW.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        name: "Voice over",
        image: "/images/user/voice-over.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        name: "Thumbnail",
        image: "/images/user/thumbnail.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        name: "Video Editing",
        image: "/images/user/video-edit0.png",
        image1: "/images/user/video-edit1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
];

const WORKS = [
    {
        uri: "https://res.cloudinary.com/drgvislmm/image/upload/v1663776103/WebsiteImages/Screenshot_19_ivsskc.png"
    },
    {
        uri: "https://res.cloudinary.com/drgvislmm/image/upload/v1663776103/WebsiteImages/Screenshot_19_ivsskc.png"
    },
    {
        uri: "https://res.cloudinary.com/drgvislmm/image/upload/v1663776103/WebsiteImages/Screenshot_19_ivsskc.png"
    },
    {
        uri: "https://res.cloudinary.com/drgvislmm/image/upload/v1663776103/WebsiteImages/Screenshot_19_ivsskc.png"
    },
    {
        uri: "https://res.cloudinary.com/drgvislmm/image/upload/v1663776103/WebsiteImages/Screenshot_19_ivsskc.png"
    },
    {
        uri: "https://res.cloudinary.com/drgvislmm/image/upload/v1663776103/WebsiteImages/Screenshot_19_ivsskc.png"
    },
];



const uderlineText = 'underline underline-offset-8 decoration-sky-500';

const AboutUsText = "We are a group of young YouTube specialists and enthusiasts dedicated to establishing a viable career path for YouTubers. Our goal is to assist individuals in acing their YouTube journey and turning YouTube into a revenue-generating platform through content improvement."
const Home = () => {
    const [headerStyle, setHeaderStyle] = useState(' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]');
    const [textContainerStyle, setTextContainerStyle] = useState('');
    const [showMainText, setShowMaiinText] = useState(true);
    const [aboutStyle, setAboutStyle] = useState('');
    const [serviceStyle, setServiceStyle] = useState('');
    const [homeH1, setHomeH1] = useState('');
    const [AboutH1, setAboutH1] = useState('');
    const [ServicesH1, setServicesH1] = useState('');
    const [PricingH1, setPricingH1] = useState('');
    const [ContactH1, setContactH1] = useState('');
    const [showArrowUp, setShowArrowUp] = useState(false);
    const [homeBG, setHomeBG] = useState(0);
    const scroll = useRef(null);
    const HomeRef = useRef(null);
    const AboutRef = useRef(null);
    const ServicesRef = useRef(null);
    const PortfolioRef = useRef(null)
    const PricingRef = useRef(null);
    const ContactRef = useRef(null);
    const textPrimaryCol = ' text-[#ECF0F1]';
    const backgroundGradient = ' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]';
    const textHover = 'hover:text-yellow-200'

    const [offset, setOffset] = useState(0);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);
    const [showText4, setShowText4] = useState(false);
    const [showText5, setShowText5] = useState(false);

    const [index, setIndex] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    setTimeout(() => {
        setShowText2(true)
    }, 1000);

    setTimeout(() => {
        setShowText3(true)
    }, 1500);

    setTimeout(() => {
        setShowText4(true)
    }, 2000);

    setTimeout(() => {
        setShowText5(true)
    }, 2500);

    useEffect(() => {
        HomeFocused()
    }, [])

    const bgImages = [
        "url(https://res.cloudinary.com/drgvislmm/image/upload/v1663691577/WebsiteImages/27263_szxh1r.jpg)",
        "url(https://res.cloudinary.com/drgvislmm/image/upload/v1664009359/WebsiteImages/90595_gi3aj3.jpg)",
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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const onScroll = () => {
        setOffset(window.pageYOffset);
        console.log("gg :", AboutRef.current?.clientHeight)
        if (window.pageYOffset > 50) {
            setHeaderStyle(' bg-[#107840]');
            // setTextContainerStyle('pt-[250px]');
            // setTextContainerStyle('fixed top-[0px]');
            setShowArrowUp(true)
            // if ((335 > window.pageYOffset) && (window.pageYOffset > 156)) {
            //     setTextContainerStyle('pt-[350px]')
            // }
            // if ((380 > window.pageYOffset) && (window.pageYOffset > 280)) {
            //     setTextContainerStyle('pt-[450px]')
            // }
            // if ((window.pageYOffset > 720) && (window.pageYOffset > 770)) {
            //     setAboutStyle('pt-[20px]')
            // }
            // if ((window.pageYOffset > 720) && (window.pageYOffset > 770)) {
            //     setAboutStyle('pt-[20px]')
            // }
            // if ((window.pageYOffset > 770) && (window.pageYOffset > 840)) {
            //     setAboutStyle('pt-[70px]')
            // }
            // if ((window.pageYOffset > 1444) && (window.pageYOffset < 1716)) {
            //     setServiceStyle('fixed top-[100px]');
            // }
            if ((window.pageYOffset > 400)) {
                setShowMaiinText(false);
            } else {
                setShowMaiinText(true);
            }

            if ((window.pageYOffset > HomeRef.current?.clientHeight - 100)) {
                if ((window.pageYOffset > HomeRef.current?.clientHeight + AboutRef.current?.clientHeight - 100)) {
                    if ((window.pageYOffset > HomeRef.current?.clientHeight + AboutRef.current?.clientHeight + ServicesRef.current?.clientHeight - 100)) {
                        if ((window.pageYOffset > HomeRef.current?.clientHeight + AboutRef.current?.clientHeight + ServicesRef.current?.clientHeight + PricingRef.current?.clientHeight + PortfolioRef.current?.clientHeight - 150)) {
                            ContactFocused()
                        } else {
                            PricingFocused()
                        }
                    } else {
                        ServiceFocused()
                    }
                } else {
                    AboutFocused()
                }
            } else {
                HomeFocused()
            }

            if ((window.pageYOffset > 1716)) {
                setServiceStyle('')
            }
        } else {
            setShowArrowUp(false);
            setShowMaiinText(true);
            setHeaderStyle(' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]');
            setTextContainerStyle('');
            setServiceStyle('');
            HomeFocused()
        }
    };


    const HomeFocused = (scroll) => {
        setHomeH1(uderlineText);
        if (scroll) {
            document.getElementById('home').scrollIntoView();
        }
        setAboutH1('');
        setServicesH1('');
        setPricingH1('');
        setContactH1('');
    }


    const AboutFocused = (scroll) => {
        setHomeH1('');
        if (scroll) {
            document.getElementById('about').scrollIntoView();
        }
        setAboutH1(uderlineText);
        setServicesH1('');
        setPricingH1('');
        setContactH1('');
    }

    const ServiceFocused = (scroll) => {
        setHomeH1('');
        if (scroll) {
            document.getElementById('services').scrollIntoView();
        }
        setAboutH1('');
        setServicesH1(uderlineText);
        setPricingH1('');
        setContactH1('')
    }

    const PricingFocused = (scroll) => {
        setHomeH1('');
        if (scroll) {
            document.getElementById('pricing').scrollIntoView();
        }
        setAboutH1('');
        setServicesH1('');
        setPricingH1(uderlineText);
        setContactH1('')
    }

    const ContactFocused = (scroll) => {
        setHomeH1('');
        if (scroll) {
            document.getElementById('contact').scrollIntoView();
        }
        setAboutH1('');
        setServicesH1('');
        setPricingH1('');
        setContactH1(uderlineText);
    }

    console.log(offset);
    return (
        <div className={'w-full px-[0px] py-[0px] overflow-y-hidden overflow-x-hidden' + backgroundGradient}
            ref={scroll}
        >
            <div className={'w-[100%] h-[500px] sm:h-[700px] border-[0px]'} id="home" ref={HomeRef}>
                <Header
                    className={headerStyle}
                />
                {/* AroowUpIcon */}
                {
                    showArrowUp &&
                    <div id="goToTop" className='fixed border-[0px] w-[80px] bottom-[30px] right-[30px] h-[80px] flex items-center justify-center ' >
                        <FaAngleDoubleUp
                            onClick={() => {
                                document.getElementById('home').scrollIntoView()
                            }}
                            className='text-white sm:text-[40px] text-[25px] hover:text-[#F0F3F4] cursor-pointer hover:animate-bounce'
                        />
                    </div>
                }
                <img
                    src="/images/user/circle0.png"
                    className=' absolute right-[0px] bottom-[-100px] '
                    alt="star" />
                {
                    // showMainText &&
                    <div className='border-[0px] flex items-center w-[100%] h-[500px] sm:h-[500px] justify-between mt-[80px] z-[100] ' >

                        <div className={`sm:w-[45%] w-[100%] sm:mr-[0px] mr-[20px]  border-[0px] sm:ml-[0px] ml-[20px]  ` + textContainerStyle}
                        >
                            <div className='w-[600px] h-[80%] border-[0px] ml-[50px] mt-[80px] flex ' >
                                <div className='w-[50px] h-[100%] border-[0px]' >
                                    <img
                                        src="/images/user/star.png"
                                        className='w-[40px] h-[40px] mt-[-10px] '
                                        alt="star" />
                                </div>
                                <div>
                                    <div className='w-[500px] border-[0px] ' >
                                        {/* <h1 className='text-yellow-200 text-[50px] leading-[50px] text-left font-semibold  ' >Stand out of the crowd</h1> */}
                                        <MovingText
                                            type="flipFromLeftToCenter"
                                            duration="1000ms"
                                            delay="100ms"
                                            direction="normal"
                                            timing="ease"
                                            iteration={1}
                                            fillMode="none"
                                            className='text-yellow-200 text-[50px] leading-[50px] text-left font-semibold  '
                                        >
                                            Stand out of the crowd
                                        </MovingText>

                                        {/* <h1 className='text-white text-[40px] leading-[45px] mt-[30px] text-left font-normal ' >{'Creating videos is never so been easy'}</h1> */}
                                        <div className='mt-[28px] h-[100px]' >
                                            {
                                                showText2 &&
                                                <MovingText
                                                    type="fadeIn"
                                                    duration="1s"
                                                    delay="0s"
                                                    direction="normal"
                                                    timing="ease"
                                                    iteration={1}
                                                    fillMode="forwards"
                                                    presences="letters"
                                                    className='text-white text-[40px] leading-[45px] text-left font-normal '
                                                >
                                                    {'Creating videos is never so been easy'}
                                                </MovingText>
                                            }
                                        </div>
                                        <div className='w-[100%] h-[50px] border-[0px] mt-[10px] flex items-center ' >
                                            <img
                                                src="/images/user/path.png"
                                                className=' ml-[10px] mt-[-30px] '
                                                alt="star" />
                                        </div>
                                        <div className='w-[100%] h-[50px] border-[0px] mt-[-10px]  ' >
                                            {
                                                showText3 &&
                                                <MovingText
                                                    type="fadeIn"
                                                    duration="1s"
                                                    delay="0s"
                                                    direction="normal"
                                                    timing="ease"
                                                    iteration={1}
                                                    fillMode="forwards"
                                                    presences="letters"
                                                    className='text-white leading-[25px] '
                                                >
                                                    {'Just focus on your business we will create content for your business without limits'}
                                                </MovingText>
                                                // <h1 className='text-white leading-[25px] ' >Just focus on your business we will create content for your business without limits</h1>
                                            }
                                        </div>
                                        <div className='w-[100%] h-[50px] mt-[30px]' >
                                            {
                                                showText4 &&
                                                <MovingText
                                                    type="flipFromLeftToCenter"
                                                    duration="1s"
                                                    delay="0s"
                                                    direction="normal"
                                                    timing="ease"
                                                    iteration={1}
                                                    fillMode="forwards"
                                                    presences="letters"
                                                // className='text-white leading-[25px] '
                                                >
                                                    <div className='w-[100%] h-[50px] border-[0px] flex items-center justify-between ' >
                                                        <div className='w-[120px] h-[40px] bg-white rounded-md flex items-center justify-center cursor-pointer hover:animate-bounce ' >
                                                            <h1 className='text-[#000] font-bold ' >Get Started</h1>
                                                        </div>

                                                        <div className='w-[150px] h-[40px] rounded-md flex items-center justify-end cursor-pointer hover:animate-bounce  ' >
                                                            <FaPlayCircle
                                                                color='#fff'
                                                                size={20}
                                                            />
                                                            <h1 className='text-white text-[15px] font-normal ml-[5px]' >Watch Demos</h1>
                                                        </div>
                                                    </div>
                                                </MovingText>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[50%] h-[500px] border-[0px] flex justify-end pr-[50px] ' >
                            <Globe />
                        </div>
                    </div>
                }
            </div>
            <div
                className='w-[100%] sm:h-[700px] sm:pt-[0px] sm:pb-[0px] pt-[80px] pb-[30px] relative' id='about' ref={AboutRef}
            >
                <img
                    src="/images/user/circle1.png"
                    className=' absolute top-[100px] '
                    alt="star" />
                <img
                    src="/images/user/whiteRing.png"
                    className=' absolute  right-[0px] bottom-[0px]'
                    alt="star" />
                <div className='w-[100%] h-[100px] border-[0px] flex items-center justify-between px-[50px] ' >
                    <div className='w-[200px] border-[0px] align-bottom text-center ' >
                        <h1 className='text-[#fff] text-[35px] leading-tight font-semibold  ' >4.8K</h1>
                        <h1 className='text-[#E0E5F3] text-[18px] leading-tight font-normal  ' >Projects Completed</h1>
                    </div>
                    <div className='w-[200px] border-[0px] align-bottom text-center ' >
                        <h1 className='text-[#fff] text-[35px] leading-tight font-semibold  ' >12+</h1>
                        <h1 className='text-[#E0E5F3] text-[18px] leading-tight font-normal  ' >In Progress</h1>
                    </div>
                    <div className='w-[200px] border-[0px] align-bottom text-center ' >
                        <h1 className='text-[#fff] text-[35px] leading-tight font-semibold  ' >2.5K+</h1>
                        <h1 className='text-[#E0E5F3] text-[18px] leading-tight font-normal  ' >World wide clients</h1>
                    </div>
                    <div className='w-[200px] border-[0px] align-bottom text-center ' >
                        <h1 className='text-[#fff] text-[35px] leading-tight font-semibold  ' >120+</h1>
                        <h1 className='text-[#E0E5F3] text-[18px] leading-tight font-normal  ' >Popular</h1>
                    </div>
                </div>
                <div className='w-[100%] h-[500px] border-[0px] flex  ' >
                    <img
                        src="/images/user/star.png"
                        className=' absolute right-[200px] top-[150px] '
                        alt="star" />
                    <div className=' w-[50%] h-[100%] border-[0px] flex justify-center items-center ' >
                        <img
                            src="/images/user/service.png"
                            className=' border-[0px] '
                            alt="star" />
                    </div>
                    <div className=' w-[50%] h-[100%] border-[0px] flex justify-center items-center ' >
                        <div>
                            <div className='border-[0px] w-[80%]' >
                                <h1 className=' text-[#fff] text-[50px] font-semibold ' >Non-Stoppable service</h1>
                            </div>
                            <div className='border-[0px] w-[80%] ' >
                                <h1 className=' text-[#E0E5F3] text-[20px] leading-tight ' >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id purus pretium sagittis diam quis massa. Nulla ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam dignissim duis purus.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="services" ref={ServicesRef} className='w-[100%] relative sm:pt-[0px] px-[80px] gap-[100px] pt-[80px] border-[0px] flex items-center justify-center '
            // style={{
            //     backgroundImage: `url("https://res.cloudinary.com/drgvislmm/image/upload/v1663921647/WebsiteImages/6150452_nxhsth.jpg")`,
            //     backgroundSize: 'cover',
            // }}
            >
                <img
                    src="/images/user/circle2.png"
                    className=' absolute top-[-100px] left-[0px]    '
                    alt="star" />
                <img
                    src="/images/user/circle3.png"
                    className=' absolute top-[450px] right-[0px]    '
                    alt="star" />

                <div className='w-[100%] border-[0px] flex justify-evenly pl-[100px] items-center ' >
                    <div className='w-[350px] border-[0px]' >
                        <h1 className=' text-[65px] text-yellow-200 font-semibold leading-none ' >Divided by Countries</h1>
                        <h1 className='text-[#fff] text-[25px] mt-[5px] ' >United by GrowGrip</h1>
                    </div>
                    <div className='relative border-[0px] ' >
                        <img
                            src="/images/user/globe1.png"
                            className=' sm:w-[550px] sm:h-[550px] '
                            alt="star" />
                        <img
                            src="/images/user/dottedPath1.png"
                            className=' absolute top-[0px] sm:w-[400px] sm:h-[400px] sm:left-[80px] sm:top-[50px] '
                            alt="star" />
                    </div>
                </div>

            </div>
            <div id="pricing" ref={PricingRef} className='w-[100%]  flex items-center justify-center '>
                <div className='w-[100%]' >
                    <Services />
                </div>
                {/* <div className=' sm:w-[80%] w-[90%] h-[80%] border-[0px] ' >
                    <div className='border-[0px] w-[100%] sm:h-[20%] h-[60px] flex items-center sm:justify-start justify-center ' >
                        <h1 className={' sm:text-[40px] text-[20px] font-semibold ' + textPrimaryCol} >Package Deals for Cash Cow Channels</h1>
                    </div>
                </div> */}
            </div>
            <div id="portfolio" ref={PortfolioRef} className='w-[100%] border-[0px]  sm:h-[700px] bg-[#060606] flex items-center justify-center '>
                <div className=' w-[80%] h-[80%] border-[0px] ' >
                    <div className='w-[100%] h-[25%] border-[0px] flex items-center justify-center ' >
                        <h1 className='text-[#F7F9F9] sm:text-[30px] text-[18px] ' >Some of our successfully delivered work</h1>
                        {/* <TextTransition springConfig={presets.molasses}
                            className='text-white text-[30px] '
                        >
                            {TEXTS[index % TEXTS.length]}
                        </TextTransition> */}
                    </div>
                    <div className='w-[100%] h-[75%] border-[0px] flex flex-wrap  gap-x-[50px] justify-center ' >
                        {WORKS.map((e, i) => <div key={i} className="border-[0px] h-[200px] w-[300px] flex items-center justify-center">
                            <img src={e.uri} alt="Girl in a jacket"
                                className='w-[80%] h-[80%] hover:w-[85%] hover:h-[85%] rounded-lg cursor-pointer '
                            ></img>
                        </div>)}
                    </div>
                </div>
            </div>
            <div id="contact" ref={ContactRef} className='w-[100%] border-[0px] sm:h-[700px] bg-[#060606] flex items-center justify-center '
            // style={{
            //     backgroundImage: `url("https://res.cloudinary.com/drgvislmm/image/upload/v1664009359/WebsiteImages/90595_gi3aj3.jpg")`,
            //     backgroundSize: 'cover',
            // }}
            >
                <div className='sm:w-[50%] sm:h-[80%] w-[90%] border-[0px] px-[10px] py-[10px] ' >
                    <h1 className='text-white sm:text-[50px] text-[18px] font-bold' >Connect with us</h1>
                    <div className='w-[100%] sm:h-[100px] border-[0px]' >
                        <h1
                            className='text-white sm:text-[18px] text-[15px]'
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
                    </div>
                    <div className='w-[100%] sm:h-[80px] border-[0px] sm:flex flex:wrap justify-between items-center' >
                        <input className='sm:w-[48%] w-[100%] sm:mt-[0px] mt-[20px] h-[50px] border-[1px] text-white rounded-lg bg-transparent px-[20px] ' placeholder='your name' ></input>
                        <input className='sm:w-[48%] w-[100%]  sm:mt-[0px] mt-[20px] h-[50px] border-[1px] text-white rounded-lg bg-transparent px-[20px] ' placeholder='your email' ></input>
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
            <div className='w-[100%] sm:h-[80px] border-[0px] bg-[#0B5345] flex items-center justify-center' id="footer" >
                <div className='sm:flex sm:w-[90%] h-[80%] border-[0px] items-center justify-between' >
                    <div className=' w-[100%] sm:w-[400px] h-[50%] sm:mt-[0px] mt-[10px] border-[0px] flex items-center justify-center sm:justify-start sm:gap-[10px] gap-[5px]' >
                        <FaWhatsapp
                            color='white'
                            className='text-[20px] sm:text-[30px] cursor-pointer '
                            onClick={() => {
                                window?.open("https://wa.me/918413802010")
                            }}
                        />
                        <h1 className='text-white text-[15px] sm-text-[18px] cursor-pointer'
                            onClick={() => {
                                window?.open("https://wa.me/918413802010")
                            }}
                        >8413802010</h1>
                    </div>
                    <div className='flex border-[0px] w-[400px] sm:w-[200px] h-[40px] items-center justify-center gap-[20px]' >
                        <FaFacebookSquare
                            color='white'
                            className='text-[20px] sm:text-[30px] cursor-pointer '
                            onClick={() => {
                                window?.open("https://www.facebook.com/raj.kiran.1800")
                            }}
                        />
                        <FaInstagram
                            color='white'
                            className='text-[20px] sm:text-[30px] cursor-pointer '
                            onClick={() => {
                                window?.open("https://www.instagram.com/iamrajklwr/?hl=en")
                            }}
                        />
                        <FaTwitter
                            color='white'
                            className='text-[20px] sm:text-[30px] cursor-pointer '
                            onClick={() => {
                                window?.open("https://twitter.com/iamrajkalwar")
                            }}
                        />
                    </div>
                    <div className='sm:w-[400px] w-[100%] h-[50%] border-[0px] flex items-center sm:justify-end justify-center' >
                        <h1 className='text-white text-[15px] sm:text-[17px] sm:pb-[0px] pb-[10px] ' >{`2022 ${`©`} brandName`}</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
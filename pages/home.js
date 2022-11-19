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
import MovingText from 'react-moving-text';
import PricingCard from '../components/Home/pricingCard';
import CustomPlan from '../components/Home/customPlan';
import {
    FaTwitter,
    FaFacebookSquare,
    FaInstagram,
    FaAngleDoubleUp,
    FaWhatsapp,
    FaPlayCircle
} from 'react-icons/fa';
import Globe from '../components/Home/globe';
import Services from '../components/Home/services';
import Review from '../components/Home/review';
import Contact from '../components/Home/contact';
import Footer from '../components/Home/footer';

const TEXTS = [
    "Forest",
    "Building",
    "Tree",
    "Color"
];

const ProjectTypes = [
    "All",
    "Tech",
    "Misc.",
    "Crypto"
]

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

    const [domLoaded, setDomLoaded] = useState(false);

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

    const gradiantText1 = ' text-transparent bg-clip-text bg-gradient-to-r from-[#F0F3F4] via-[#B2BABB] to-[#F0F3F4]';
    const gradiantText2 = ' text-transparent bg-clip-text bg-gradient-to-r from-[#F0F3F4] via-[#5D9B81] via-[#93D900] to-[#93D900]';

    const [offset, setOffset] = useState(0);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);
    const [showText4, setShowText4] = useState(false);
    const [showText5, setShowText5] = useState(false);

    const [index, setIndex] = useState(0);

    //selected pricing
    const [pricingIndex, setPricingIndex] = useState(1);

    //selected project types (ex: All, Tech, Crypto)
    const [projectIndex, setprojectIndex] = useState(1);


    useEffect(() => {
        setDomLoaded(true);
    }, []);

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
        domLoaded &&
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
                    <div className='border-[0px] flex flex-wrap items-center w-[100%] justify-between mt-[80px] z-[100] ' >

                        <div className={`sm:w-[100%] md:w-[700px] w-[100%] sm:mr-[0px] mr-[20px]  border-[0px] sm:ml-[0px] ml-[20px]  ` + textContainerStyle}
                        >
                            <div className='sm:w-[600px] w-[100%] h-[80%] border-[0px] ml-[50px] mt-[80px] flex ' >
                                <div className='w-[50px] h-[100%] border-[0px]' >
                                    <img
                                        src="/images/user/star.png"
                                        className='w-[40px] h-[40px] mt-[-10px] '
                                        alt="star" />
                                </div>
                                <div>
                                    <div className='border-[0px] ' >
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
            <div id="services" ref={ServicesRef} className='w-[100%] relative sm:pt-[0px] px-[80px] gap-[100px] pt-[80px] border-[0px] flex items-center justify-center '>
                <img
                    src="/images/user/circle2.png"
                    className=' absolute top-[-100px] left-[0px]    '
                    alt="star" />
                <img
                    src="/images/user/circle3.png"
                    className=' absolute top-[450px] right-[0px]    '
                    alt="star" />

                <div className='w-[100%] border-[0px] flex justify-evenly pl-[100px] items-center ' >
                    <div className='w-[650px] border-[0px]' >
                        <h1 className=' text-[65px] text-yellow-200 font-semibold leading-none ' >Divided by Countries</h1>
                        <h1 className='text-[#fff] text-[35px] mt-[10px] font-medium ' >United by GrowGrip</h1>
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
            </div>
            <div id="portfolio" ref={PortfolioRef} className='w-[100%] relative border-[0px] flex items-center justify-center '>
                <img
                    src="/images/user/circle4.png"
                    className=' absolute left-[0px] top-[-50px]  '
                    alt="person7" />
                <img
                    src="/images/user/circle5.png"
                    className=' absolute right-[0px] bottom-[0px]  '
                    alt="person7" />
                <div className=' w-[70%] h-[400px] border-[0px] flex ' >
                    <div className=' w-[25%] h-[100%] border-[0px] flex items-center justify-center ' >
                        <img
                            src="/images/user/person7.png"
                            className=' sm:w-[176px] sm:h-[248px] '
                            alt="person7" />
                    </div>
                    <div className='w-[75%] px-[40px] ' >
                        <div className=' w-[100%] h-[120px] mt-[80px] border-[0px] font-semibold flex items-center '  >
                            <h1 className=' text-[#fff] text-[50px] ' >Simple, transparent pricing</h1>
                        </div>
                        <div>
                            <h1 className=' text-[#fff] text-[25px] leading-[30px] ' >Super affordable plans , for content creators, startups and enterprises  and for everyone . </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[100%] flex item-center justify-center' >
                <div className=' w-[90%] border-[0px] mt-[50px] flex gap-[80px] flex-wrap items-center justify-center ' >
                    <PricingCard
                        for="small"
                        type="Basic"
                        index={0}
                        amount={'$69'}
                        seletedIndex={pricingIndex}
                        desc="5 min video with 500 words"
                        onFocus={() => {
                            console.log('gg')
                        }}
                        onClick={() => {
                            setPricingIndex(0)
                        }}
                    />
                    <PricingCard
                        for="startups"
                        type="Pro"
                        index={1}
                        amount={'$199'}
                        seletedIndex={pricingIndex}
                        desc="10 min video with 1000 words"
                        onFocus={() => {
                            console.log('gg')
                        }}
                        onClick={() => {
                            setPricingIndex(1)
                        }}
                    />
                    <PricingCard
                        for="business"
                        type="Enterprise"
                        index={2}
                        amount={'$399'}
                        seletedIndex={pricingIndex}
                        desc="15 min video with 2000 words"
                        onFocus={() => {
                            console.log('gg')
                        }}
                        onClick={() => {
                            setPricingIndex(2)
                        }}
                    />
                </div>
            </div>
            <div className='w-[100%]  flex justify-center border-[0px] sm:pt-[100px]' >
                <img
                    src="/images/user/circle6.png"
                    className=' absolute right-[0px] '
                    alt="person7" />
                <div className='h-[250px] border-[0px] flex ' >
                    <div className='sm:w-[600px] h-[100%] flex items-center ' >
                        <div>
                            <h1 className={`text-[#fff] text-[40px] font-semibold ${gradiantText1}`} >Confused about the plans</h1>
                            <h1 className={`text-[#fff] text-[60px] font-bold ${gradiantText2}`} >Dont worry</h1>
                        </div>
                    </div>
                    <div className='h-[100%] border-l-[0px] flex items-center justify-center ' >
                        <img
                            src="/images/user/girl1.png"
                            className=' sm:w-[250px] sm:h-[250px] '
                            alt="person7" />
                    </div>
                </div>
            </div>
            <div className='w-[100%]  flex justify-center border-[0px] ' >
                <CustomPlan />
            </div>
            <div className='w-[100%] border-[0px] flex items-center justify-center '>
                <div className=' w-[80%] border-[0px] mt-[100px]  ' >
                    <h1 className=' text-[#fff] text-[30px] font-semibold ' >Our Latest Projects</h1>
                    <div className=' w-[100%] flex flex-wrap gap-[50px] mt-[20px] pb-[50px] ' >
                        {
                            ProjectTypes.map((item, index) => {
                                return (
                                    <h1 key={index} className={` text-[19px] cursor-pointer ${projectIndex == index ? ' text-[#31FF52]' : ' text-[#fff]'}`}
                                        onClick={() => {
                                            setprojectIndex(index)
                                        }}
                                    >{item}</h1>
                                )
                            })
                        }
                        <div className='w-[100%] flex flex-wrap border-[0px] gap-[20px] justify-center ' >
                            {
                                [...Array(8)].map((item, index) => {
                                    return (
                                        <img
                                            key={index}
                                            src={`/images/user/project${index + 1}.png`}
                                            className=' sm:w-[550px] sm:h-[350px] rounded-[20px] '
                                            alt="project1" />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[100%] border-[0px] flex items-center justify-center mb-[50px] relative ' >
                <img
                    src={`/images/user/circle9.png`}
                    className=' absolute right-[0px] top-[30%] '
                    alt="project1" />
                <Review />
            </div>
            <div className='w-[100%] border-[0px] flex items-center justify-center mb-[50px] relative ' >
                <Contact />
            </div>
            <div className='w-[100%] border-[0px] flex items-center justify-center' id="footer" >
                <Footer />
            </div>
            <div className='w-[100%] border-[0px] h-[100px] flex items-center justify-center' id="footer" >
                <div className='sm:flex sm:w-[90%] h-[80%] border-[0px] items-center justify-between' >
                    <div className=' w-[100%] sm:w-[400px] h-[50%] sm:mt-[0px] mt-[10px] border-[0px] flex items-center justify-center sm:justify-start sm:gap-[10px] gap-[5px]' >
                        {/* <FaWhatsapp
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
                        >8413802010</h1> */}
                        <h1 className='text-white text-[15px] sm-text-[18px]' >{`2022 ${`©`} All Rights Reserved`}</h1>
                    </div>
                    <div className='flex border-[0px] w-[400px] sm:w-[200px] h-[40px] items-center justify-center gap-[10px]' >
                        <FaFacebookSquare
                            color='white'
                            className='text-[20px] sm:text-[20px] cursor-pointer '
                            onClick={() => {
                                window?.open("https://www.facebook.com/raj.kiran.1800")
                            }}
                        />
                        <FaInstagram
                            color='white'
                            className='text-[20px] sm:text-[20px] cursor-pointer '
                            onClick={() => {
                                window?.open("https://www.instagram.com/iamrajklwr/?hl=en")
                            }}
                        />
                        <FaTwitter
                            color='white'
                            className='text-[20px] sm:text-[20px] cursor-pointer '
                            onClick={() => {
                                window?.open("https://twitter.com/iamrajkalwar")
                            }}
                        />
                    </div>
                    {/* <div className='sm:w-[400px] w-[100%] h-[50%] border-[0px] flex items-center sm:justify-end justify-center' >
                        <h1 className='text-white text-[15px] sm:text-[17px] sm:pb-[0px] pb-[10px] ' >{`2022 ${`©`} brandName`}</h1>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Home
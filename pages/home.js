import React, { useState, useEffect, useRef, useMemo, } from 'react'
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
    FaPhotoVideo,
    FaWhatsapp
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        name: "Voiceover",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        name: "Video",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        name: "Thumbnail",
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
]


const uderlineText = 'underline underline-offset-8 decoration-sky-500';

const AboutUsText = "We are a group of young YouTube specialists and enthusiasts dedicated to establishing a viable career path for YouTubers. Our goal is to assist individuals in acing their YouTube journey and turning YouTube into a revenue-generating platform through content improvement."
const Home = () => {
    const [headerStyle, setHeaderStyle] = useState('h-[80px] border-b-[0px] fixed top-0');
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
    const PricingRef = useRef(null);
    const ContactRef = useRef(null);
    const textPrimaryCol = ' text-[#ECF0F1]';

    const [offset, setOffset] = useState(0);

    const [index, setIndex] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

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

    const onScroll = () => {
        setOffset(window.pageYOffset);
        if (window.pageYOffset > 50) {
            setHeaderStyle('bg-[#060606] fixed h-[80px] top-[0px]');
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

            if ((window.pageYOffset > 600)) {
                if ((window.pageYOffset > 1400)) {
                    if ((window.pageYOffset > 2000)) {
                        if ((window.pageYOffset > 3400)) {
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
            setHeaderStyle('h-[80px] border-b-[0px] fixed top-0');
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
        <div className='w-full px-[0px] py-[0px] bg-[#17202A] overflow-y-hidden overflow-x-hidden'
            ref={scroll}
        >
            <div className={'w-[100%] h-[800px] '} id="home" ref={HomeRef}
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
                                // color='white'
                                size={40}
                                className='text-sky-500'
                            />
                        </div>
                        <div className='flex space-x-[18px] items-center' >
                            <div>
                                <h1 className={'font-normal text-[18px] cursor-pointer font-sans ' + homeH1 + textPrimaryCol}
                                    onClick={() => {
                                        HomeFocused(true)
                                    }}
                                >Home</h1>
                            </div>
                            <h1 className={'font-normal text-[18px] cursor-pointer font-sans ' + AboutH1 + textPrimaryCol}
                                onClick={() => {
                                    AboutFocused(true)
                                }}
                            >About</h1>
                            <h1 className={'font-normal text-[18px] cursor-pointer font-sans ' + ServicesH1 + textPrimaryCol}
                                onClick={() => {
                                    ServiceFocused(true)
                                }}
                            >Services</h1>
                            <h1 className={'font-normal text-[18px] cursor-pointer font-sans ' + PricingH1 + textPrimaryCol}
                                onClick={() => {
                                    PricingFocused(true)
                                }}
                            >Pricing</h1>
                            <h1 className={'font-normal text-[18px] cursor-pointer font-sans ' + ContactH1 + textPrimaryCol}
                                onClick={() => {
                                    ContactFocused(true)
                                }}
                            >Contact</h1>
                        </div>
                    </div>
                    <div className='w-[50%] border-[0px] space-x-[10px] flex justify-end items-center pr-[30px] ' >
                        <FaFacebookSquare
                            size={22}
                            className={textPrimaryCol}
                        />
                        <FaInstagram
                            className={textPrimaryCol}
                            size={22}
                        />
                        <FaTwitter
                            className={textPrimaryCol}
                            size={22}
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
                {
                    showMainText &&
                    <div className='border-[0px] flex items-center w-[100%] h-[100%] fixed' >
                        <div className={`w-[50%] h-[200px] border-[0px] ml-[100px] ` + textContainerStyle}
                            style={{ zIndex: -1 }}
                        >
                            <h1 className="text-white text-[17px] leading-relaxed animate-text"> WELCOME TO MY WORLD </h1>
                            <h1 className="text-white  text-[50px] leading-relaxed italic" >Hi, I am Tonmoy</h1>
                            <h1 className="text-white  text-[50px] leading-relaxed italic" >Welcome to our platform</h1>
                            
                            {/* <AnimatedText
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
                            </AnimatedText> */}
                        </div>
                        {/* {
                        showMainText &&
                        <div className='border-[0px]' >
                            <img src="https://res.cloudinary.com/drgvislmm/image/upload/v1664004951/WebsiteImages/men_fbrjnf.jpg" alt="my-photo"
                                className='w-[300px] h-[500px] rounded-[100px] '
                            ></img>
                        </div>
                    } */}
                    </div>
                }
            </div>
            <div className='w-[100%] h-[700px] bg-[#212F3C] flex items-center justify-center ' id='about' rerf={AboutRef}
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
                            >{AboutUsText + SERVICES[0].description}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div id="services" ref={ServicesRef} className='w-[100%] h-[700px] bg-[#273746] flex items-center justify-center '
                style={{
                    backgroundImage: `url("https://res.cloudinary.com/drgvislmm/image/upload/v1663921647/WebsiteImages/6150452_nxhsth.jpg")`,
                    backgroundSize: 'cover',
                }}
            >
                <div className={'w-[90%] h-[80%] border-[0px] ' + serviceStyle}  >
                    <div className={'w-[100%] h-[20%] border-[0px] flex items-center justify-center  '} >
                        <h1 className='text-white text-[50px] font-sans font-bold' >Services we provide</h1>
                    </div>
                    <div className='w-[100%] border-[0px] flex items-center justify-between flex-wrap gap-x-[10px] gap-y-[10px] ' >
                        {SERVICES.map((e, i) => <div key={i} className="border-[1px]  mt-[80px] hover:bg-[#17202A] pb-[30px] w-[280px] px-[15px] py-[10px] rounded-lg">
                            <div className='flex items-start gap-[10px] border-[0px] py-[10px] px-[5px] text-justify cursor-default' >
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
                            <div  >
                                <h1 className='text-[white] cursor-default text-[15px] flex text-justify decoration-2 whitespace-pre-wrap font-sans ' >
                                    {e.description}</h1>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
            <div id="pricing" ref={PricingRef} className='w-[100%] h-[700px] bg-[#060606] flex items-center justify-center '>
                <div className=' w-[80%] h-[80%] border-[1px] ' >
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
                        {WORKS.map((e, i) => <div key={i} className="border-[0px] h-[200px] w-[300px] flex items-center justify-center">
                            <img src={e.uri} alt="Girl in a jacket"
                                className='w-[80%] h-[80%] hover:w-[85%] hover:h-[85%] rounded-lg cursor-pointer '
                            ></img>
                        </div>)}
                    </div>
                </div>
            </div>
            <div id="contact" ref={ContactRef} className='w-[100%] h-[700px] bg-[#060606] flex items-center justify-center '
            // style={{
            //     backgroundImage: `url("https://res.cloudinary.com/drgvislmm/image/upload/v1664009359/WebsiteImages/90595_gi3aj3.jpg")`,
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
            <div className='w-[100%] h-[150px] border-[0px] bg-[#424949] flex items-center justify-center' id="footer" >
                <div className='flex w-[90%] h-[80%] border-[0px] items-center justify-between' >
                    <div className='w-[400px] h-[50%] border-[0px] flex items-center gap-[10px]' >
                        <FaWhatsapp
                            color='white'
                            size={35}
                        />
                        <h1 className='text-white' >8413802010</h1>
                    </div>
                    <div className='flex border-[0px] w-[200px] h-[40px] items-center justify-center gap-[20px]' >
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
                    <div className='w-[400px] h-[50%] border-[0px] flex items-center justify-end' >
                        <h1 className='text-white   ' >{`Copyright ${`©`} 2022, all rights reserved`}</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
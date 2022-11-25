import React, { useState, useEffect, useRef, useMemo, } from 'react'
import Header from '../components/Home/header';
import MovingText from 'react-moving-text';
import ParticleEffectButton from 'react-particle-effect-button'
import PricingCard from '../components/Home/pricingCard';
import CustomPlan from '../components/Home/customPlan';
import Success from '../components/pupups/sucess';
import {
    FaTwitter,
    FaFacebookSquare,
    FaInstagram,
    FaAngleDoubleUp,
    FaWhatsapp,
    FaPlayCircle,
    FaChevronRight
} from 'react-icons/fa';
import Globe from '../components/Home/globe';
import Services from '../components/Home/services';
import Review from '../components/Home/review';
import Contact from '../components/Home/contact';
import Footer from '../components/Home/footer';
import Label from '../components/Home/micro/label';
import Videos from '../constants/portfolio';
import YouTube, { YouTubeProps } from 'react-youtube';



const ProjectTypes = [
    "All",
    "TECH",
    "WHITEBOARD",
    "CELEB",
    "SPORTS",
    "MIX VIDEOS"
]


const uderlineText = 'underline underline-offset-8 decoration-sky-500';

const Home = () => {

    const [domLoaded, setDomLoaded] = useState(false);

    const [headerStyle, setHeaderStyle] = useState(' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]');
    const [textContainerStyle, setTextContainerStyle] = useState('');
    const [btn1Animate, setBtn1Animate] = useState(false);
    const [btn2Animate, setBtn2Animate] = useState(false);
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

    const [showPopup, setShowPopup] = useState(false);

    const gradiantText1 = ' text-transparent bg-clip-text bg-gradient-to-r from-[#F0F3F4] via-[#B2BABB] to-[#F0F3F4]';
    const gradiantText2 = ' text-transparent bg-clip-text bg-gradient-to-r from-[#F0F3F4] via-[#5D9B81] via-[#93D900] to-[#93D900]';

    const [offset, setOffset] = useState(0);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);
    const [showText4, setShowText4] = useState(false);
    const [showText5, setShowText5] = useState(false);

    //selected header index
    const [selectedHeader, setSelectedHeader] = useState(1)


    const [index, setIndex] = useState(0);

    //selected pricing
    const [pricingIndex, setPricingIndex] = useState(1);

    //selected project types (ex: All, Tech, Crypto)
    const [projectIndex, setprojectIndex] = useState(1);

    const [selectedPortfolio, setSelectedPortfolio] = useState(null);   //video urls



    useEffect(() => {
        if (ProjectTypes[{projectIndex}] == "TECH") {
            setSelectedPortfolio(Videos.Videos.Tech)
        }
        if (ProjectTypes[projectIndex] == "WHITEBOARD") {
            setSelectedPortfolio(Videos.Videos.Whiteboard)
        }
        if (ProjectTypes[projectIndex] == "CELEB") {
            setSelectedPortfolio(Videos.Videos.Celeb)
        }
    }, [projectIndex])


    useEffect(() => {
        setDomLoaded(true);
    }, []);

    // useEffect(() => {
    //     if (domLoaded) {
    //         document?.getElementById('gg').scrollIntoView();
    //     }
    // })

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
            // setHeaderStyle(' bg-[#107840]');
            setShowArrowUp(true)
            // if ((window.pageYOffset > HomeRef.current?.clientHeight - 100)) {
            //     if ((window.pageYOffset > HomeRef.current?.clientHeight + AboutRef.current?.clientHeight - 100)) {
            //         if ((window.pageYOffset > HomeRef.current?.clientHeight + AboutRef.current?.clientHeight + ServicesRef.current?.clientHeight - 100)) {
            //             if ((window.pageYOffset > HomeRef.current?.clientHeight + AboutRef.current?.clientHeight + ServicesRef.current?.clientHeight + PricingRef.current?.clientHeight + PortfolioRef.current?.clientHeight - 150)) {
            //                 ContactFocused()
            //             } else {
            //                 PricingFocused()
            //             }
            //         } else {
            //             ServiceFocused()
            //         }
            //     } else {
            //         AboutFocused()
            //     }
            // } else {
            //     HomeFocused()
            // }

            if (window.pageYOffset > HomeRef.current?.clientHeight + 100) {
                // setSelectedHeader(2)
            } else {
                //  setSelectedHeader(1)
            }

        } else {
            setShowArrowUp(false);
            // setShowMaiinText(true);
            // setHeaderStyle(' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]');
            // setTextContainerStyle('');
            // setServiceStyle('');
            // HomeFocused()
        }
    };

    // const onPlayerReady = YouTubeProps['onReady'] = (event) => {
    //     // access to player in all event handlers via event.target
    //     event.target.pauseVideo();
    // }

    // const opts = YouTubeProps['opts'] = {
    //     height: '390',
    //     width: '640',
    //     playerVars: {
    //         // https://developers.google.com/youtube/player_parameters
    //         autoplay: 1,
    //     },
    // };


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

    const opts = {
        height: '350',
        width: '500',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    console.log(offset);
    return (
        domLoaded &&
            typeof window !== 'undefined' ?
            <div id="home" className={'w-full px-[0px] py-[0px] overflow-y-hidden overflow-x-hidden' + backgroundGradient}
            >
                {
                    showPopup &&
                    <Success
                        text1="Great!"
                        text2="Your response submitted successfully, our team will contact you soon."
                        onClose={() => {
                            setShowPopup(false)
                        }}
                    />
                }
                <div className={'w-[100%] sm:min-h-[700px] border-[0px]'} ref={HomeRef}>
                    <Header
                        className={headerStyle}
                        selectedHeader={selectedHeader}
                        onClickHome={() => {
                            document.getElementById('home').scrollIntoView();
                            setSelectedHeader(1)
                        }}
                        onClickService={() => {
                            document.getElementById('service').scrollIntoView();
                            setSelectedHeader(2)
                        }}
                        onClickPricing={() => {
                            document.getElementById('pricing').scrollIntoView();
                            setSelectedHeader(3)
                        }}
                        onClickContact={() => {
                            document.getElementById('contact').scrollIntoView();
                            setSelectedHeader(4)
                        }}
                        onClickAbout={() => {
                            document.getElementById('footer').scrollIntoView();
                            setSelectedHeader(5)
                        }}
                    />
                    {/* AroowUpIcon */}
                    {
                        showArrowUp &&
                        <div id="goToTop" className='fixed border-[0px] z-[1000] w-[80px] bottom-[30px] right-[30px] h-[80px] flex items-center justify-center '
                        >
                            <FaAngleDoubleUp
                                onClick={() => {
                                    console.log("ok mf")
                                    document.getElementById('home').scrollIntoView()
                                }}
                                className='text-white sm:text-[40px] text-[25px] hover:text-[#F0F3F4] cursor-pointer hover:animate-bounce'
                            />
                        </div>
                    }
                    <img
                        src="/images/user/circle0.png"
                        className=' absolute right-[0px] bottom-[-100px] sm:visible invisible '
                        alt="star" />
                    {
                        <div className='border-[0px] flex flex-wrap items-center w-[100%] justify-center sm:mt-[100px] z-[100] ' >

                            <div className={` sm:w-[50%] w-[100%] sm:mr-[0px] mr-[10px] flex items-center justify-center sm:pl-[20px] pl-[0px]  border-[0px] sm:min-w-[550px] ` + textContainerStyle}
                            >
                                <div className='sm:w-[600px] w-[100%] h-[80%] border-[0px] sm:ml-[0px] ml-[10px] sm:mt-[80px] mt-[60px] flex relative ' >
                                    <img
                                        src="/images/user/star.png"
                                        className='sm:w-[40px] h-[20px] sm:h-[40px] h-[20px] absolute sm:top-[50px] sm:top-[-5px] top-[-10px] sm:left-[-50px] left-[200px] '
                                        alt="star" />
                                    <div>
                                        <div className='' >
                                            {/* <h1 className='text-yellow-200 text-[50px] leading-[50px] text-left font-semibold  ' >Stand out of the crowd</h1> */}
                                            <MovingText
                                                type="flipFromLeftToCenter"
                                                duration="1000ms"
                                                delay="100ms"
                                                direction="normal"
                                                timing="ease"
                                                iteration={1}
                                                fillMode="none"
                                                className='text-yellow-200 sm:text-[50px] text-[18px] sm:leading-[50px] text-left font-semibold  '
                                            >
                                                Stand out of the crowd
                                            </MovingText>

                                            {/* <h1 className='text-white text-[40px] leading-[45px] mt-[30px] text-left font-normal ' >{'Creating videos is never so been easy'}</h1> */}
                                            <div className='sm:mt-[28px] mt-[0px] border-[0px] sm:h-[100px]' >
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
                                                        className='text-white sm:text-[40px] text-[17px] sm:leading-[45px] text-left font-normal '
                                                    >
                                                        {'Creating videos is never so been easy'}
                                                    </MovingText>
                                                }
                                            </div>
                                            <div className='w-[100%] sm:h-[50px] h-[30px] border-[0px] sm:mt-[10px] mt-[0px] flex items-center ' >
                                                <img
                                                    src="/images/user/path.png"
                                                    className=' ml-[10px] sm:mt-[-30px] mt-[10px] '
                                                    alt="star" />
                                            </div>
                                            <div className='w-[100%] h-[50px] border-[0px] sm:mt-[-10px] mt-[10px]  ' >
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
                                                        className='text-white sm:text-[18px] text-[14px] sm:leading-[25px] '
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
                                                        <div className='w-[100%] h-[50px] border-[0px] flex items-center justify-between sm:pr-[0px] pr-[20px] ' >
                                                            <ParticleEffectButton
                                                                color='#fff'
                                                                hidden={btn1Animate}
                                                            >
                                                                <input
                                                                    type={"button"}
                                                                    value="Get Started"
                                                                    className='sm:w-[120px] w-[80px] text-[#000] font-bold sm:text-[15px] text-[12px] sm:h-[40px] h-[25px] bg-white rounded-md flex items-center justify-center cursor-pointer '
                                                                    onClick={() => {
                                                                        setBtn1Animate(true)
                                                                        setTimeout(() => {
                                                                            document.getElementById('getStarted').scrollIntoView()
                                                                        }, 1500);
                                                                        setTimeout(() => {
                                                                            setBtn1Animate(false)
                                                                        }, 2500);
                                                                    }}
                                                                />
                                                            </ParticleEffectButton>
                                                            <ParticleEffectButton
                                                                color='#fff'
                                                                hidden={btn2Animate}
                                                            >
                                                                <div className='sm:w-[150px] sm:h-[40px] rounded-md flex items-center justify-end cursor-pointer  '
                                                                    onClick={() => {
                                                                        setBtn2Animate(true)
                                                                        setTimeout(() => {
                                                                            document.getElementById('demos').scrollIntoView()
                                                                        }, 1500);
                                                                        setTimeout(() => {
                                                                            setBtn2Animate(false)
                                                                        }, 2500);
                                                                    }}
                                                                >
                                                                    <FaPlayCircle
                                                                        color='#fff'
                                                                        size={20}
                                                                    />
                                                                    <h1 className='text-white sm:text-[15px] text-[12px] font-normal ml-[5px]' >Watch Demos</h1>
                                                                </div>
                                                            </ParticleEffectButton>
                                                        </div>
                                                    </MovingText>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='sm:w-[50%] sm:min-w-[550px] w-[90%] sm:h-[500px] border-[0px] flex sm:justify-end justify-center sm:pr-[50px] ' >
                                <Globe />
                            </div>
                        </div>
                    }
                </div>
                <div
                    className='w-[100%] sm:h-[700px] sm:pt-[0px] sm:pb-[0px] sm:pt-[80px] sm:pb-[30px] relative' id='about' ref={AboutRef}
                >
                    <img
                        src="/images/user/circle1.png"
                        className=' absolute top-[100px] sm:visible invisible '
                        alt="star" />
                    <img
                        src="/images/user/whiteRing.png"
                        className=' absolute sm:w-[50px] sm:h-[100px] md:w-[100px] md:h-[200px] w-[20px] h-[40px]  right-[0px] bottom-[0px] sm:visible visible'
                        alt="star" />
                    <div className='w-[100%] border-[0px] sm:mt-[0px] mt-[20px] flex-wrap flex items-center justify-between sm:px-[20px] px-[10px] ' >
                        <div className='sm:w-[20%] w-[20%] border-[0px] align-bottom text-center ' >
                            <h1 className='text-[#fff] sm:text-[35px] text-[13px] leading-tight font-semibold  ' >4.8K</h1>
                            <h1 className='text-[#E0E5F3] sm:text-[18px] text-[11px] leading-tight font-normal  ' >Projects Completed</h1>
                        </div>
                        <div className='sm:w-[20%] w-[20%] border-[0px] align-bottom text-center ' >
                            <h1 className='text-[#fff]  sm:text-[35px] text-[13px] leading-tight font-semibold  ' >12+</h1>
                            <h1 className='text-[#E0E5F3] sm:text-[18px] text-[11px] leading-tight font-normal  ' >In Progress</h1>
                        </div>
                        <div className='sm:w-[20%] w-[20%] border-[0px] align-bottom text-center ' >
                            <h1 className='text-[#fff] sm:text-[35px] text-[13px] leading-tight font-semibold  ' >2.5K+</h1>
                            <h1 className='text-[#E0E5F3] sm:text-[18px] text-[11px] leading-tight font-normal  ' >World wide clients</h1>
                        </div>
                        <div className='sm:w-[20%] w-[20%] border-[0px] align-bottom text-center ' >
                            <h1 className='text-[#fff] sm:text-[35px] text-[13px] leading-tight font-semibold  ' >120+</h1>
                            <h1 className='text-[#E0E5F3] sm:text-[18px] text-[11px] leading-tight font-normal  ' >Popular</h1>
                        </div>
                    </div>
                    <div className='w-[100%] sm:h-[500px] border-[0px] sm:flex   ' >
                        <img
                            src="/images/user/star.png"
                            className=' absolute right-[200px] top-[150px] sm:visible invisible '
                            alt="star" />
                        <div className=' sm:w-[50%] w-[100%] sm:px-[0px] px-[10px] sm:h-[100%] border-[0px] flex sm:flex-row flex-col justify-center items-center ' >
                            <div className='relative' >
                                <img
                                    src="/images/user/service.png"
                                    className=' border-[0px] '
                                    alt="star" />
                            </div>
                        </div>
                        <div id='service' className=' sm:w-[50%] sm:h-[100%] border-[0px] flex justify-center items-center sm:px-[0px]  px-[10px] ' >
                            <div>
                                <div className='border-[0px]' >
                                    <h1 className=' text-[#fff] sm:text-[50px] text-[16px] leading-none font-semibold ' >Non-Stoppable service</h1>
                                </div>
                                <div className='border-[0px] sm:w-[90%] sm:mr-[0px] mr-[10px] ' >
                                    <h1 className=' text-[#E0E5F3] sm:text-[18px] text-[13px] leading-tight mt-[10px] ' >
                                        We are a group of young YouTube specialists and enthusiasts dedicated to establishing a viable career path for YouTubers. We make sure that our content is engaging by using animated titles, sound effects, background music, and 100% copyright free high-quality videos to keep viewers watching.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    ref={ServicesRef} className='w-[100%] relative sm:pt-[0px] sm:px-[80px] px-[10px] gap-[100px] pt-[80px] border-[0px] flex items-center justify-center '>
                    <img
                        src="/images/user/circle2.png"
                        className=' absolute top-[-100px] left-[0px] sm:visible invisible   '
                        alt="star" />
                    <img
                        src="/images/user/circle3.png"
                        className=' absolute top-[450px] right-[0px] sm:visible invisible   '
                        alt="star" />

                    <div className='w-[100%] border-[0px] sm:flex flex-wrap justify-evenly sm:pl-[100px] items-center ' >
                        <div className='sm:w-[650px] w-[100%] border-[0px]' >
                            <h1 className=' sm:text-[65px] text-[18px] text-yellow-200 font-semibold leading-none ' >Divided by Countries</h1>
                            <h1 className='text-[#fff] sm:text-[35px] text-[15px] sm:mt-[10px] font-medium ' >United by GroGrip</h1>
                        </div>
                        <div className='relative border-[0px] sm:min-w-[550px] flex items-center justify-center sm:mt-[0px] mt-[20px] ' >
                            <img
                                src="/images/user/globe1.png"
                                className=' sm:w-[550px] h-[300px] h-[300px] sm:h-[550px] spin-animate-slow '
                                alt="star" />
                            <img
                                src="/images/user/dottedPath1.png"
                                className=' absolute top-[0px] sm:w-[400px] sm: w-[65%] sm:h-[400px] sm:left-[80px] sm:top-[50px] top-[10%] '
                                alt="star" />
                            <img
                                src="/images/user/arrow1.png"
                                className=' absolute sm:left-[81px] left-[62px] sm:w-[25px] sm:h-[25px] w-[10px] h-[10px] top-[90px] sm:top-[150px] '
                                alt="star" />
                            <img
                                src="/images/user/arrow2.png"
                                className=' absolute sm:w-[25px] sm:h-[25px] sm:left-[200px] left-[150px] top-[36px] sm:top-[68px] w-[10px] h-[10px] '
                                alt="star" />
                            <img
                                src="/images/user/arrow3.png"
                                className=' absolute sm:w-[25px] sm:h-[25px] sm:right-[135px] right-[96px] top-[80px] sm:top-[150px] w-[10px] h-[10px] '
                                alt="star" />
                            <img
                                src="/images/user/arrow4.png"
                                className=' absolute sm:w-[25px] sm:h-[25px] sm:right-[200px] right-[140px] bottom-[86px] sm:bottom-[165px] w-[10px] h-[10px] '
                                alt="star" />
                            <img
                                src="/images/user/arrow5.png"
                                className=' absolute sm:w-[25px] sm:h-[25px] sm:left-[200px] left-[132px] sm:bottom-[240px] w-[10px] h-[10px] '
                                alt="star" />
                            <img
                                src="/images/user/arrow6.png"
                                className=' absolute sm:w-[25px] sm:h-[25px] sm:left-[280px] left-[171px] top-[110px] sm:top-[200px]  w-[10px] h-[10px] '
                                alt="star" />
                            <img
                                src="/images/user/avtar.png"
                                className=' absolute sm:w-[40px] w-[25px] h-[25px] sm:h-[40px] sm:top-[20px] sm:right-[160px] top-[10px] right-[110px] '
                                alt="video-editor" />
                            <img
                                src="/images/user/avtar1.png"
                                className=' absolute sm:w-[40px] w-[25px] h-[25px] sm:h-[40px] sm:top-[55px] sm:left-[80px] top-[30px] left-[60px] '
                                alt="voice-artist" />
                            <img
                                src="/images/user/avtar2.png"
                                className=' absolute sm:w-[40px] w-[25px] h-[25px] sm:h-[40px] sm:top-[220px] sm:left-[55px] top-[130px] left-[45px] '
                                alt="script-writer" />
                            <img
                                src="/images/user/avtar3.png"
                                className=' absolute sm:w-[40px] w-[25px] h-[25px] sm:h-[40px] sm:top-[300px] sm:right-[50px] top-[160px] right-[40px] '
                                alt="video-editor" />
                            <img
                                src="/images/user/avtar4.png"
                                className=' absolute sm:w-[40px] w-[25px] h-[25px] sm:h-[40px] sm:bottom-[80px] sm:left-[140px] bottom-[45px] left-[90px] '
                                alt="video-editor" />
                            <img
                                src="/images/user/avtar5.png"
                                className=' absolute sm:w-[40px] w-[25px] h-[25px] sm:h-[40px] sm:top-[130px] sm:left-[240px] top-[60px] left-[150px] '
                                alt="video-editor" />
                            <img
                                src="/images/user/avtar6.png"
                                className=' absolute sm:w-[40px] w-[25px] h-[25px] sm:h-[40px] sm:top-[250px] sm:left-[300px] top-[133px] left-[177px] '
                                alt="video-editor" />
                            <Label
                                text="Script Writer"
                                className=" absolute sm:left-[0px] left-[0px] top-[158px] sm:top-[270px] "
                            />
                            <Label
                                text="Voice Artist"
                                className=" absolute sm:left-[40px] sm:top-[30px] left-[35px] top-[8px]  "
                            />
                            <Label
                                text="Video Editor"
                                className=" absolute sm:right-[90px] sm:top-[-5px] right-[90px] top-[-8px]"
                            />
                            <Label
                                text="Thumbnail Maker"
                                className=" absolute sm:right-[-50px] sm:bottom-[180px] right-[10px] bottom-[95px] "
                            />
                            <Label
                                text="SEO"
                                className=" absolute sm:left-[120px] sm:bottom-[50px] left-[100px] bottom-[30px] "
                            />
                            <Label
                                text="Team Leader"
                                className=" absolute sm:left-[200px] sm:top-[110px] top-[70px] left-[80px] "
                            />
                        </div>
                    </div>

                </div>
                <div id='getStarted' className='sm:w-[100%] border-[0px] pt-[100px] flex items-center justify-center sm:visible invisible '>
                    <div className='w-[100%] sm:visible invisible ' >
                        <Services
                            id=''
                        />
                    </div>
                </div>
                <div
                    id="portfolio"
                    ref={PortfolioRef} className='w-[100%] relative border-[0px] flex items-center justify-center '>
                    <img
                        src="/images/user/circle4.png"
                        className=' absolute left-[0px] top-[-50px] sm:visible invisible '
                        alt="person7" />
                    <img
                        src="/images/user/circle5.png"
                        className=' absolute right-[0px] bottom-[0px] sm:visible invisible  '
                        alt="person7" />
                    <div id="pricing" className=' sm:w-[70%] sm:h-[400px] border-[0px] flex  sm:pl-[0px] pl-10px ' >
                        <div className=' w-[25%] h-[100%] border-[0px] flex items-center justify-center ' >
                            <img
                                src="/images/user/person7.png"
                                className=' sm:w-[176px] w-[80px] h-[110px] sm:h-[248px] '
                                alt="person7" />
                        </div>
                        <div className='w-[75%] sm:px-[40px] px-[10px] sm:mt-[0px] mt-[5%]  ' >
                            <div className='sm:w-[100%] sm:h-[120px] sm:mt-[80px] border-[0px] font-semibold flex items-center '  >
                                <h1 className=' text-[#fff] sm:text-[50px] text-[17px] leading-none ' >Simple, transparent pricing</h1>
                            </div>
                            <div>
                                <h1 className=' text-[#fff] sm:text-[25px] text-[13px] sm:mt-[0px] mt-[10px] sm:leading-[30px] leading-tight ' >Super affordable plans , for content creators, startups and enterprises  and for everyone . </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] flex item-center justify-center' >
                    <div className=' w-[90%] border-[0px] sm:mt-[50px] mt-[20px] flex sm:gap-[80px] gap-[20px] flex-wrap items-center justify-center ' >
                        <PricingCard
                            for="Short Videos (4-5 mins)"
                            type="Basic"
                            index={0}
                            amount={35}
                            seletedIndex={pricingIndex}
                            desc="700-800 words"
                            onFocus={() => {
                                console.log('gg')
                            }}
                            onClick={() => {
                                setPricingIndex(0)
                            }}
                        />
                        <PricingCard
                            for="Long Videos (8-9 mins)"
                            type="Pro"
                            index={1}
                            amount={55}
                            seletedIndex={pricingIndex}
                            desc="1400-1500 words"
                            onFocus={() => {
                                console.log('gg')
                            }}
                            onClick={() => {
                                setPricingIndex(1)
                            }}
                        />
                        <PricingCard
                            for="extra-long videos (18-20 mins)"
                            type="Premium"
                            index={2}
                            amount={100}
                            seletedIndex={pricingIndex}
                            desc="2800-3000 word"
                            onFocus={() => {
                                console.log('gg')
                            }}
                            onClick={() => {
                                setPricingIndex(2)
                            }}
                        />
                    </div>
                </div>
                <div className='w-[100%] flex justify-center border-[0px] sm:pt-[50px] sm:pl-[50px] sm:pr-[150px] pl-[10px] pr-[10px] ' >
                    <img
                        src="/images/user/circle6.png"
                        className=' absolute right-[0px] sm:visible invisible '
                        alt="person7" />
                    <div className='sm:h-[250px] h-[150px] w-[100%]  border-[0px] flex justify-between ' >
                        <div className='sm:w-[600px] h-[100%] flex items-center ' >
                            <div>
                                <h1 className={`text-[#fff] sm:text-[40px] font-semibold ${gradiantText1}`} >Confused about the plans</h1>
                                <h1 className={`text-[#fff] sm:text-[60px] font-bold ${gradiantText2}`} >Dont worry</h1>
                            </div>
                        </div>
                        <div className='h-[100%] border-l-[0px] flex items-center justify-center ' >
                            <img
                                src="/images/user/girl1.png"
                                className=' sm:w-[250px] w-[100px] h-[100px] sm:h-[250px] '
                                alt="person7" />
                        </div>
                    </div>
                </div>
                <div className='w-[100%]  flex justify-center border-[0px] ' >
                    <CustomPlan
                        onSubmit={() => {
                            setShowPopup(true);
                        }}
                    />
                </div>
                <div id='demos' className='w-[100%] border-[0px] flex items-center justify-center '>
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
                                    selectedPortfolio.map((item, index) => {
                                        return (
                                            <>
                                                <iframe width="500" height="350"
                                                    className='rounded-lg'
                                                    src={item.url}
                                                // frameborder="0"
                                                // allowfullScreen
                                                ></iframe>
                                            </>
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
                <div id="contact" className='w-[100%] border-[0px] flex items-center justify-center mb-[50px] relative ' >
                    <Contact
                        onClick={() => {
                            setShowPopup(true);
                        }}
                    />
                </div>
                <div className='w-[100%] border-[0px] flex items-center justify-center' id="footer" >
                    {
                        typeof window !== 'undefined' &&
                        <Footer />
                    }
                </div>
                <div className='w-[100%] border-[0px] h-[100px] flex items-center justify-center' >
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
            </div> : null
    )
}

export default Home
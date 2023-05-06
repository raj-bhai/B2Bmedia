import React, { useState, useEffect, useRef } from 'react'
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
    FaChevronRight,
    FaLinkedinIn,
    FaStar
} from 'react-icons/fa';
import Video from '../components/Home/video';
import Globe from '../components/Home/globe';
import Services from '../components/Home/services';
import Review from '../components/Home/review';
import Contact from '../components/Home/contact';
import Footer from '../components/Home/footer';
import Label from '../components/Home/micro/label';
import Videos from '../constants/portfolio';
import { AiFillEye } from 'react-icons/ai';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from '../components/Home/micro/imageCarousel';
import { motion } from "framer-motion";
import { staggerContainer, slideIn } from '../utils/motion';
// import { slideIn, staggerContainer, textVariant, textVariant2 } from "@/utils/motion";
// import VaraText from '../components/Home/micro/VaraText';



const ProjectTypes = [
    "ALL",
    "TECH",
    "WHITEBOARD",
    "CELEB",
    "SPORTS",
    "MIX VIDEOS"
]


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Home = () => {

    const [domLoaded, setDomLoaded] = useState(false);

    const [headerStyle, setHeaderStyle] = useState(' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]');
    const [btn1Animate, setBtn1Animate] = useState(false);
    const [btn2Animate, setBtn2Animate] = useState(false);
    const [showArrowUp, setShowArrowUp] = useState(false);
    const HomeRef = useRef(null);
    const AboutRef = useRef(null);
    const ServicesRef = useRef(null);
    const GlobeRef = useRef(null)
    const PortfolioRef = useRef(null)
    const PricingRef = useRef(null);
    const ExtraRef = useRef(null);
    const ExtraRef1 = useRef(null);
    const ExtraRef2 = useRef(null);
    const CustomPlanRef = useRef(null)
    const ContactRef = useRef(null);
    const FooterRef = useRef(null);
    const BottomRef = useRef(null);
    const backgroundGradient = ' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]';

    const [showPopup, setShowPopup] = useState(false);

    const gradiantText1 = ' text-transparent bg-clip-text bg-gradient-to-r from-[#F0F3F4] via-[#B2BABB] to-[#F0F3F4]';
    const gradiantText2 = ' text-transparent bg-clip-text bg-gradient-to-r from-[#F0F3F4] via-[#5D9B81] via-[#93D900] to-[#93D900]';

    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);
    const [showText4, setShowText4] = useState(false);

    //selected header index
    const [selectedHeader, setSelectedHeader] = useState(1)

    //selected pricing
    const [pricingIndex, setPricingIndex] = useState(1);

    //selected project types (ex: All, Tech, Crypto)
    const [projectIndex, setprojectIndex] = useState(1);

    const [selectedPortfolio, setSelectedPortfolio] = useState([]);   //video urls


    const [countingStart, setCountingStart] = useState(false);
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(100);
    const [count3, setCount3] = useState(220000);

    const [SSopen, setSSOpen] = useState(false);
    const handleOpen = () => setSSOpen(true);
    const handleClose = () => setSSOpen(false);



    useEffect(() => {
        if (countingStart) {
            if (Math.floor(count) < 50) {
                const intervalId = setInterval(() =>
                    setCount(count + 0.5),
                    0.01 // every 3 seconds
                );
                return () => clearTimeout(intervalId);
            }
        }
    }, [count, countingStart])

    useEffect(() => {
        if (countingStart) {
            if (Math.floor(count1) < 150) {
                const intervalId = setInterval(() =>
                    setCount1(count1 + 1),
                    0.0001 // every 3 seconds
                );
                return () => clearTimeout(intervalId);
            }
        }
    }, [count1, countingStart])


    useEffect(() => {
        if (countingStart) {
            if (Math.floor(count2) < 500) {
                const intervalId = setInterval(() =>
                    setCount2(count2 + 4),
                    0.00000001 // every 3 seconds
                );
                return () => clearTimeout(intervalId);
            }
        }
    }, [count2, countingStart])

    useEffect(() => {
        if (countingStart) {
            if (Math.floor(count3) < 267841) {
                const intervalId = setInterval(() =>
                    setCount3(count3 + 1),
                    0.001 // every 3 seconds
                );
                return () => clearTimeout(intervalId);
            } else {
                setCount3(215794)
            }
        }
    }, [count3, countingStart])



    useEffect(() => {
        if (ProjectTypes[projectIndex] == "All") {

            setSelectedPortfolio([...Videos.Videos.Tech, ...Videos.Videos.Whiteboard, ...Videos.Videos.Celeb, ...Videos.Videos.Sports, ...Videos.Videos.Mix])
        }
        if (ProjectTypes[projectIndex] == "TECH") {
            setSelectedPortfolio(Videos.Videos.Tech)
        }
        if (ProjectTypes[projectIndex] == "WHITEBOARD") {
            setSelectedPortfolio(Videos.Videos.Whiteboard)
        }
        if (ProjectTypes[projectIndex] == "CELEB") {
            setSelectedPortfolio(Videos.Videos.Celeb)
        }
        if (ProjectTypes[projectIndex] == "SPORTS") {
            setSelectedPortfolio(Videos.Videos.Sports)
        }
        if (ProjectTypes[projectIndex] == "MIX VIDEOS") {
            setSelectedPortfolio(Videos.Videos.Mix)
        }
    }, [projectIndex])


    useEffect(() => {
        setDomLoaded(true);
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

    useEffect(() => {
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const onScroll = () => {
        if (window.pageYOffset > 50) {
            setHeaderStyle(' bg-gradient-to-r from-[#063f09] via-[#107840] via-[#1F5025] via -[#28602E] to-[#146a24]');
            setShowArrowUp(true)

            //number countdown star
            if (window.pageYOffset > 300) {
                if (!countingStart) {
                    setCountingStart(true)
                }
            }

            if (window.pageYOffset > HomeRef.current?.clientHeight + 100) {
                if (window.pageYOffset > HomeRef.current?.clientHeight + AboutRef.current?.clientHeight + GlobeRef.current?.clientHeight + ServicesRef.current?.clientHeight - 100) {
                    if (window.pageYOffset > HomeRef.current?.clientHeight + AboutRef.current?.clientHeight + GlobeRef.current?.clientHeight + ServicesRef.current?.clientHeight + PortfolioRef.current?.clientHeight + PricingRef.current?.clientHeight + ExtraRef.current?.clientHeight + CustomPlanRef.current.clientHeight + ExtraRef1.current?.clientHeight + ExtraRef2.current?.clientHeight) {
                        if (window.pageYOffset > HomeRef.current?.clientHeight + AboutRef.current?.clientHeight + GlobeRef.current?.clientHeight + ServicesRef.current?.clientHeight + PortfolioRef.current?.clientHeight + PricingRef.current?.clientHeight + ExtraRef.current?.clientHeight + CustomPlanRef.current.clientHeight + ExtraRef1.current?.clientHeight + ExtraRef2.current?.clientHeight + ContactRef.current?.clientHeight - 200) {
                            setSelectedHeader(5)
                        } else {
                            setSelectedHeader(4)
                        }
                    } else {
                        setSelectedHeader(3)
                    }
                } else {
                    setSelectedHeader(2)
                }
            } else {
                setSelectedHeader(1)
            }

        } else {
            setShowArrowUp(false);
            setHeaderStyle(' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]');
        }
    };

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
                <div ref={HomeRef} className={'w-[100%] sm:min-h-[700px] border-[0px]'}>
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
                                    //  console.log("ok mf")
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

                            <div className={` sm:w-[50%] w-[100%] sm:mr-[0px] mr-[10px] flex items-center justify-center sm:pl-[20px] sm:pt-[0px] pt-[30px] sm:pb-[0px] pb-[50px] pl-[0px]  border-[0px] sm:min-w-[550px] `}
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
                                                className=' text-shadow my-font-bold drop-shadow-lg text-yellow-200 sm:text-[50px] text-[18px] sm:leading-[50px] text-left font-semibold  '
                                            >
                                                {`Expert YouTube Service  and Support`}
                                            </MovingText>

                                            {/* <h1 className='text-white text-[40px] leading-[45px] mt-[30px] text-left font-normal ' >{'Creating videos is never so been easy'}</h1> */}
                                            <div className='sm:mt-[28px] flex mt-[0px] border-[0px] sm:h-[100px]' >
                                                {/* <VaraText text='WiseCode Team' /> */}
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
                                                        className='text-white sm:text-[40px] my-font text-[17px] sm:leading-[45px] text-left font-normal '
                                                    >
                                                        {'Proven Track record of Success'}
                                                    </MovingText>
                                                }
                                                {/* <div className='w-[30px] hover:bg-white flex items-center justify-center rounded-sm h-[22px] mt-[15px] ml-[10px] border border-[#D5D8DC] '
                                                    onClick={handleOpen}
                                                >
                                                    <AiFillEye
                                                        onClick={() => handleOpen()}
                                                        size={18}
                                                        className='text-[#fff] hover:text-gray-600 '
                                                    />
                                                </div> */}
                                                <Modal
                                                    open={SSopen}
                                                    onClose={handleClose}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                >
                                                    {/* <div>
                                                        <h1>hello guys, welcome back to my channel</h1>
                                                    </div> */}
                                                    <Box
                                                        sx={style}
                                                        className='rounded-lg'
                                                    >
                                                        <Carousel />
                                                        {/* <Stack direction="row" spacing={2}> */}
                                                        {/* <Image
                                                                src="https://res.cloudinary.com/drgvislmm/image/upload/v1669407843/videos/Sports/maxresdefault_3_fdyj71.jpg"
                                                                width={500}
                                                                height={500}
                                                                alt="Picture of the author"
                                                            /> */}
                                                        {/* <img
                                                                src="https://res.cloudinary.com/drgvislmm/image/upload/v1669407843/videos/Sports/maxresdefault_3_fdyj71.jpg"
                                                                alt="new"
                                                                onLoad={() => {
                                                                    // setImageLoaded(true)
                                                                }}
                                                            /> */}
                                                        {/* <img
                                                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                                alt={item.title}
                                                                loading="lazy"
                                                            /> */}
                                                        {/* <Item>Item 1</Item>
                                                            <Item>Item 2</Item>
                                                            <Item>Item 3</Item> */}
                                                        {/* </Stack> */}
                                                        {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                                                            Text in a modal
                                                        </Typography>
                                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                                        </Typography> */}
                                                    </Box>
                                                </Modal>
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
                                                        className='text-white sm:text-[18px] my-font text-[14px] sm:leading-[25px] '
                                                    >
                                                        {"Unlock your channel's potential with our professional video production and optimization"}
                                                    </MovingText>
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
                                                                    className='sm:w-[120px] w-[80px] text-[#000] my-font-bold sm:text-[15px] text-[12px] sm:h-[40px] h-[25px] bg-white rounded-md flex items-center justify-center cursor-pointer '
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
                                                                <div className='sm:w-[150px] sm:h-[40px] my-font-bold rounded-md flex items-center justify-end cursor-pointer  '
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
                <div ref={AboutRef}
                    className='w-[100%] sm:h-[700px] sm:pt-[0px] sm:pb-[0px] sm:pt-[80px] sm:pb-[30px] relative' id='about'
                >
                    <img
                        src="/images/user/circle1.png"
                        className=' absolute top-[100px] sm:visible invisible '
                        alt="star" />
                    <img
                        src="/images/user/whiteRing.png"
                        className=' absolute sm:w-[50px] sm:h-[100px] md:w-[100px] md:h-[200px] w-[20px] h-[40px]  right-[0px] bottom-[0px] sm:visible visible'
                        alt="star" />
                    <div className='w-[100%] border-[0px] sm:py-[0px] py-[50px] sm:mt-[0px] mt-[50px] gap-[50px] sm:flex-wrap sm:flex-row flex-col flex items-center justify-between sm:px-[20px] px-[10px] ' >
                        <div className='sm:w-[20%] w-[100%] border-[0px] align-bottom text-center ' >
                            <div className=' w-[100%] flex justify-center items-center ' >
                                <h1 className='text-[#fff] sm:text-[50px] text-[45px] my-font leading-tight  ' >{Math.round(count)}+</h1>
                            </div>
                            <div className=' w-[100%] flex justify-center items-center ' >
                                <h1 className='text-[#E0E5F3] sm:text-[18px] text-[35px] leading-tight my-font-bold sm:ml-[-20px]  ' >Clients</h1>
                            </div>
                        </div>
                        <div className='sm:w-[20%] w-[100%] border-[0px] align-bottom text-center ' >
                            <div className=' w-[100%] flex justify-center items-center ' >
                                <h1 className='text-[#fff]  sm:text-[50px] text-[40px] leading-tight my-font  ' >{Math.round(count1)}+</h1>
                            </div>
                            <div className=' w-[100%] flex justify-center items-center ' >
                                <h1 className='text-[#E0E5F3] sm:text-[18px] text-[35px] leading-tight my-font-bold  ' >Positive Feedback</h1>
                            </div>

                        </div>
                        <div className='sm:w-[20%] w-[100%] border-[0px] align-bottom text-center ' >
                            <div className=' w-[100%] flex justify-center items-center ' >
                                <h1 className='text-[#fff] sm:text-[50px] text-[40px] leading-tight my-font  ' >{Math.round(count2)}+</h1>
                            </div>
                            <div className=' w-[100%] flex justify-center items-center ' >
                                <h1 className='text-[#E0E5F3] sm:text-[18px] text-[35px] leading-tight my-font-bold sm:ml-[-10px]  ' >Channels</h1>
                            </div>
                        </div>
                        <div className='sm:w-[20%] w-[100%] border-[0px] align-bottom text-center ' >
                            <div className=' w-[100%] flex justify-center items-center ' >
                                <h1 className='text-[#fff] sm:text-[50px] text-[40px] leading-tight my-font  ' >{Math.round(count3)}+</h1>
                            </div>
                            <div className=' w-[100%] flex justify-center items-center ' >
                                <h1 className='text-[#E0E5F3] sm:text-[18px] text-[35px] leading-tight my-font-bold  ' >Views Daily</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] sm:h-[500px] border-[0px] sm:flex   ' >
                        <img
                            src="/images/user/star.png"
                            className=' absolute right-[200px] top-[200px] sm:visible invisible '
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
                                    <h1 className=' text-[#fff] sm:text-[50px] text-[16px] leading-none my-font-bold ' >Non-Stoppable service</h1>
                                </div>
                                <div className='border-[0px] sm:w-[90%] sm:mr-[0px] mr-[10px] ' >
                                    <h1 className=' text-[#E0E5F3] sm:text-[18px] text-[13px] my-font leading-tight mt-[10px] ' >
                                        We are a group of young YouTube specialists and enthusiasts dedicated to establishing a viable career path for YouTubers. We make sure that our content is engaging by using animated titles, sound effects, background music, and 100% copyright free high-quality videos to keep viewers watching.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div ref={GlobeRef}
                    className='w-[100%] relative sm:pt-[0px] sm:px-[80px] px-[10px] gap-[100px] pt-[80px] border-[0px] flex items-center justify-center '>
                    <img
                        src="/images/user/circle2.png"
                        className=' absolute top-[-100px] left-[0px] sm:visible invisible   '
                        alt="star" />
                    <img
                        src="/images/user/circle3.png"
                        className=' absolute top-[450px] right-[0px] sm:visible invisible   '
                        alt="star" />

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.45 }}
                    >
                    <div className='w-[100%] border-[0px] sm:flex flex-wrap justify-evenly sm:pl-[100px] items-center ' >
                        <div className='sm:w-[650px] w-[100%] border-[0px]' >
                            <h1 className=' sm:text-[65px] text-[18px] text-yellow-200 my-font-bold leading-none ' >Divided by Countries</h1>
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
                    </motion.div>

                </div> */}
                <div ref={ServicesRef} id='getStarted' className='sm:w-[100%] sm:h-full w-[0px] h-[0px] border-[0px] pt-[100px] flex items-center justify-center sm:visible invisible '>
                    <div className='w-[100%] sm:visible invisible ' >
                        <Services
                            id=''
                        />
                    </div>
                </div>
                {/* <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.45 }}
                    className='border w-[90%] '
                > */}

                <div ref={PortfolioRef}
                    id="portfolio" className='w-[100%] relative sm:mt-[0px] mt-[-100px] border-[0px] flex items-center justify-center '>
                    <img
                        src="/images/user/circle4.png"
                        className=' absolute left-[0px] top-[-50px] sm:visible invisible '
                        alt="person7" />
                    <img
                        src="/images/user/circle5.png"
                        className=' absolute right-[0px] bottom-[0px] sm:visible invisible  '
                        alt="person7" />

                    {/* <motion.div
                        initial="hidden"
                        whileInView="show"
                        variants={slideIn("right", "tween", 0.5, 1)}
                    > */}
                    <div id="pricing" className='  sm:h-[400px] w-[60%] border-[0px] flex  sm:pl-[0px] pl-10px ' >
                        <div className=' w-[25%] h-[100%] border-[0px] flex items-center justify-center ' >
                            <img
                                src="/images/user/person7.png"
                                className=' sm:w-[176px] w-[80px] h-[110px] sm:h-[248px] '
                                alt="person7" />
                        </div>
                        <div className='w-[100%] sm:px-[40px] pl-[10px] pr-[0] sm:mt-[0px] mt-[5%]  ' >
                            <div className='sm:w-full sm:h-[120px] sm:mt-[80px] border-[0px] font-semibold flex items-center '  >
                                <h1 className=' text-yellow-200 sm:text-[30px] my-font-bold text-[17px] leading-sm ' >AFFORDABLE PRICING, EXCEPTIONAL RESULTS</h1>
                            </div>
                            <div>
                                <h1 className=' text-[#fff]  sm:text-[18px] my-font-semibold text-[13px] sm:-mt-[20px] mt-[10px]  leading-tight ' >
                                    <p>"Choose from our flexible pricing plans to suit</p>
                                    <p>your budget and goals."</p>
                                    {/* Choose from our flexible pricing plans to suit your budget and goals */}
                                </h1>
                            </div>
                        </div>
                    </div>
                    {/* </motion.div> */}
                </div>
                {/* </motion.div> */}
                <div ref={PricingRef} className='w-[100%] flex item-center justify-center' >
                    <div className=' w-[90%] border-[0px] sm:mt-[50px] mt-[20px] flex sm:gap-[80px] gap-[20px] flex-wrap items-center justify-center ' >
                        <PricingCard
                            for="Short Videos (4-5 mins)"
                            type="Basic"
                            index={0}
                            amount={35}
                            seletedIndex={pricingIndex}
                            desc="700-800 words"
                            onFocus={() => {
                                // console.log('gg')
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
                                // console.log('gg')
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
                                //  console.log('gg')
                            }}
                            onClick={() => {
                                setPricingIndex(2)
                            }}
                        />
                    </div>
                </div>
                <div ref={ExtraRef} className='w-[100%] flex justify-center border-[0px] sm:pt-[50px] sm:pl-[50px] sm:pr-[150px] pl-[10px] pr-[10px] ' >
                    <img
                        src="/images/user/circle6.png"
                        className=' absolute right-[0px] sm:visible invisible '
                        alt="person7" />
                    <div className='sm:h-[250px] h-[150px] w-[100%]  border-[0px] flex justify-between ' >
                        <div className='sm:w-[600px] h-[100%] flex items-center ' >
                            <div>
                                <h1 className={`text-[#fff] sm:text-[40px] my-font-semibold ${gradiantText1}`} >Confused about the plans</h1>
                                <h1 className={`text-[#fff] sm:text-[60px] my-font-bold ${gradiantText2}`} >Dont worry</h1>
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
                <div ref={CustomPlanRef} className='w-[100%]  flex justify-center border-[0px] ' >
                    <CustomPlan
                        onSubmit={() => {
                            setShowPopup(true);
                        }}
                    />
                </div>
                <div ref={ExtraRef1} id='demos' className='w-[100%] border-[0px] flex items-center justify-center '>
                    <div className=' sm:w-[80%] w-[100%] border-[0px] mt-[100px] flex flex-col items-center sm:px-[0px] px-[10px]  ' >
                        <div className=' flex items-center justify-center py-[5px] rounded ' >
                            <h1 className=' text-[#fff] bg-gradient-to-r from-white via-yellow-100 to-green-100 text-transparent bg-clip-text text-center lg:text-[45px] text-[18px] font-bold ' >OUR LATEST PROJECTS</h1>
                        </div>
                        <div className=' w-[100%] flex flex-wrap mt-[50px] pb-[50px] border-[0px]' >
                            <div className='w-[100%] flex flex-wrap justify-center sm:gap-[50px] gap-[10px] border-[0px] sm:pb-[50px] ' >
                                {
                                    ProjectTypes.map((item, index) => {
                                        return (
                                            <button type="button"
                                                key={index}
                                                // focus:ring focus:ring-green-700
                                                className={` ${(index == 2) ? 'lg:w-[130px]' : 'lg:w-[120px]'} hover:bg-[#F2F4F4]   focus:text-[#fff] focus:bg-green-600   drop-shadow-lg lg:text-[16px] lg:font-bold sm:text-[#000]  lg:border-[0px] rounded  sm:h-[40px] sm:mb-[0px] mb-[20px] cursor-pointer text-[11px] cursor-pointer ${(projectIndex == index) ? ' text-[#31FF52] bg-green-600' : ' text-[#fff] sm:bg-[#E5E7E9] '} `}
                                                onClick={() => {
                                                    setprojectIndex(index)
                                                }}
                                            >
                                                {item}</button>
                                        )
                                    })
                                }
                            </div>
                            <div className='w-[100%] flex flex-wrap border-[0px] gap-[20px] justify-center ' >
                                {
                                    selectedPortfolio.map((item, index) => {
                                        return (
                                            <Video
                                                key={index}
                                                thumbnail={item.thumbnail}
                                                src={item.url}
                                                projectIndex={projectIndex}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div >
                {/* <div ref={ExtraRef2} className='w-[100%] border-[0px] sm:pt-[100px] pt-[60px] sm:pb-[100px] pb-[80px] flex items-center justify-center sm:mb-[50px] relative ' >
                    <div className='absolute top-[0px] sm:left-[50px] left-[10px] ' >
                        <h1 className=' text-[#fff] sm:text-[25px] ' >Social</h1>
                        <h1 className=' text-[#fff] sm:text-[30px] ' >What do our customers say?</h1>
                    </div>
                    <img
                        src={`/images/user/circle9.png`}
                        className=' absolute right-[0px] top-[30%] sm:visible invisible '
                        alt="project1" />
                    <Review />
                    <div className='absolute bottom-[0px] border-[0px] sm:right-[50px] right-[0px] w-[200px] h-[50px] flex items-center sm:justify-center justify-end ' >
                        <button type="button" className="text-[#fff] hover:text-[#000] hover:bg-white focus:ring-4 focus:ring-white focus:outline-none  font-medium rounded-lg text-lg border-[1px] hover:border-[0px] px-5 py-2.5 text-center inline-flex items-center mr-2 ">
                            <FaStar
                                className='mr-[10px]'
                            />
                            Rate us
                        </button>
                    </div>
                </div> */}
                <div ref={ContactRef} id="contact" className='w-[100%] sm:px-[0px] px-[10px] border-[0px] flex items-center justify-center mb-[50px] relative ' >
                    <Contact
                        onClick={() => {
                            setShowPopup(true);
                        }}
                    />
                </div>
                <div ref={FooterRef} className='w-[100%] border-[0px] sm:px-[0px] px-[20px] flex items-center justify-center' id="footer" >
                    {
                        typeof window !== 'undefined' &&
                        <Footer />
                    }
                </div>
                <div ref={BottomRef} className='w-[100%] border-[0px] h-[100px] flex items-center justify-center' >
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
                            <h1 className='text-white text-[15px] sm-text-[18px] my-font ' >{`2022 ${`©`} All Rights Reserved`}</h1>
                        </div>
                        <div className='flex border-[0px] w-[400px] sm:w-[250px] h-[40px] items-center justify-center sm:gap-[10px] gap-[20px]' >
                            <FaFacebookSquare
                                color='white'
                                className='text-[20px] sm:text-[30px] cursor-pointer '
                                onClick={() => {
                                    window?.open("https://www.facebook.com/profile.php?id=100087879190153")
                                }}
                            />
                            <FaInstagram
                                color='white'
                                className='text-[20px] sm:text-[30px] cursor-pointer '
                                onClick={() => {
                                    window?.open("https://www.instagram.com/grogrip_media/")
                                }}
                            />
                            {/* <FaLinkedinIn
                                color='white'
                                className='text-[20px] sm:text-[30px] cursor-pointer '
                            // onClick={() => {
                            //     window?.open("https://www.instagram.com/grogrip_media/")
                            // }}
                            /> */}
                            <FaWhatsapp
                                color='white'
                                className='text-[20px] sm:text-[30px] cursor-pointer '
                                onClick={() => {
                                    window?.open("https://wa.me/918076455801")
                                }}
                            />
                            <h1 className='text-white text-[15px] sm-text-[18px] my-font cursor-pointer'
                                onClick={() => {
                                    window?.open("https://wa.me/918076455801")
                                }}
                            >+91 8076455801</h1>
                        </div>
                    </div>
                </div>
            </div > : null
    )
}

export default Home
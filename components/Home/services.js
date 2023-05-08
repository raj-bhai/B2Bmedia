import React from 'react';
import {
    FaPhoneAlt,
    FaPenAlt,
    FaMicrophone,
    FaBriefcase,
    FaLaptopCode
} from 'react-icons/fa';


const Arr = [
    {
        name: "Script",
        gif: "https://res.cloudinary.com/drgvislmm/image/upload/v1683558413/WebsiteImages/sc_wv0z1r.gif",
        className: " lg:left-0 left-16 lg:top-0 top-0 lg:scale-[1.5] scale-[2] ",
        textStyle: " lg:right-0 lg:bottom-0 right-0 bottom-2 "
    },
    {
        name: "Voiceover",
        gif: "https://res.cloudinary.com/drgvislmm/image/upload/v1683558410/WebsiteImages/vo_vvmutn.gif",
        className: " left-0 top-0 lg:scale-[1.5] scale-[2] ",
        textStyle: " lg:bottom-0 lg:right-[30px] bottom-0 left-0 "
    },

    {
        name: "Video",
        gif: "https://res.cloudinary.com/drgvislmm/image/upload/v1683558413/WebsiteImages/vdo_eadfcz.gif",
        className: " left-0 top-0 lg:scale-[1] scale-[1.5] ",
        textStyle: " lg:right-0 lg:bottom-0 right-0 bottom-10"
    },
    {
        name: "Thumbnail",
        gif: "https://res.cloudinary.com/drgvislmm/image/upload/v1683561980/WebsiteImages/th_x6txju.gif ",
        className: "-left-10 top-0 lg:scale-[1] scale-[1.8] ",
        textStyle: " lg:right-0 lg:bottom-0 left-0 bottom-5"
    },
]


const iconColor = ' text-[#808080]'
const RoundedNumber = (props) => {
    return (
        <div c lassName=" sm:w-[40px] sm:h-[40px] rounded-[20px] ml-[10px] bg-[#fff] flex items-center justify-center " >
            <h1 className=' text-[#000] text-[16px] ' >{props.count}</h1>
        </div>
    )
}

const RoundedText = (props) => {
    const iconStyle = ' mr-[10px] ' + iconColor

    return (
        <div className=' bg-[#fff] sm:h-[30px] rounded-[10px] ml-[10px] flex items-center justify-center px-[20px] ' >
            {
                props.text == 'Contact us' &&
                <FaPhoneAlt
                    className={iconStyle}
                />
            }
            {
                props.text == 'Script Writer' &&
                <FaPenAlt
                    className={iconStyle}
                />
            }
            {
                props.text == 'Voice Over' &&
                <FaMicrophone
                    className={iconStyle}
                />
            }
            {
                props.text == 'Thumbnail Maker' &&
                <FaBriefcase
                    className={iconStyle}
                />
            }
            {
                props.text == 'Video Editing' &&
                <FaLaptopCode
                    className={iconStyle}
                />
            }
            <h1 className=' text-[#000] my-font-semibold text-[14px] ' >{props.text}</h1>
        </div>
    )
}

const VideoEdit = (props) => {
    return (
        <div className={' w-[300px] h-[200px] border-[1px] ' + props.className} >
            <img
                src="/images/user/person1.png"
                className="sm:w-[165px] sm:h-[228px] ml-[-20px] "
                alt="star" />
        </div>
    )
}


const Services = (props) => {
    return (
        <div id={props.id} className='relative lg:invisible visible  w-[100%] gap-[20px] py-[50px] flex flex-wrap items-center justify-center '>
            {/* <div className=' border-[0px] relative  ' >
                <div className='flex justify-between border-[0px] sm:w-[1100px] items-end  sm:pr-[30px]' >
                    <div className='flex' >
                        <img
                            src="/images/user/person1.png"
                            className="sm:w-[165px] sm:h-[228px] ml-[-20px] bounce-medium "
                            alt="star" />
                        <div>
                            <h1 className=' sm:text-[30px] my-font  sm:mt-[20px] text-[#fff] ' >HOW TO GET</h1>
                            <h1 className=' sm:text-[30px]  text-yellow-200 my-font-bold ' >STARTED</h1>
                        </div>
                    </div>
                    <div className='flex items-end sm:ml-[-30px] ' >
                        <img
                            src="/images/user/person2.png"
                            className="sm:w-[79px] person-animate sm:mb-[10px] sm:h-[153px] bounce-medium "
                            alt="star" />
                        <img
                            src="/images/user/script.png"
                            className="sm:w-[170px] sm:h-[155px] sm:mb-[10px] "
                            alt="star" />
                    </div>
                    <img
                        src="/images/user/person3.png"
                        className="sm:w-[108px] sm:h-[210px] sm:mr-[120px] bounce-medium"
                        alt="star" />
                </div>
                <img
                    src="/images/user/dottedPath.png"
                    className='sm:w-[1107px] mt-[10px]  sm:h-[539px]'
                    alt="star" />
                <img
                    src="/images/user/person4.png"
                    className="sm:w-[81px] sm:h-[115px] absolute sm:top-[365px] sm:left-[100px] animate-bounce "
                    alt="star" />
                <img
                    src="/images/user/search.png"
                    className="sm:w-[30px] sm:h-[30px] absolute sm:top-[400px] sm:left-[190px] "
                    alt="star" />
                <img
                    src="/images/user/Vector93.png"
                    className="sm:w-[17px] sm:h-[35px] absolute sm:top-[427px] sm:left-[183px] "
                    alt="star" />
                <div className=' absolute left-[480px] top-[355px] border-[0px] flex items-end ' >
                    <img
                        src="/images/user/person5.png"
                        className="sm:w-[88px] sm:h-[117px] "
                        alt="star" />
                    <div className=' relative border-[0px] spin-animate-slow ' >
                        <img
                            src="/images/user/screen1.png"
                            className="sm:w-[83px] sm:h-[61px] ml-[10px] "
                            alt="star" />
                        <img
                            src="/images/user/youtube1.png"
                            className=" sm:w-[15px] sm:h-[20px] absolute top-[20px] left-[45px] "
                            alt="star" />
                    </div>
                </div>
                <img
                    src="/images/user/person6.png"
                    className="sm:w-[54px] sm:h-[134px] absolute sm:top-[345px] person2-animate sm:left-[800px] "
                    alt="star" />
                <img
                    src="/images/user/person11.png"
                    className="sm:w-[100px] person1-animate sm:h-[150px] absolute bottom-[20px] left-[140px] "
                    alt="star" />
                <img
                    src="/images/user/person12.png"
                    className="sm:w-[100px] sm:h-[150px] absolute bottom-[20px] left-[520px] "
                    alt="star" />
                <img
                    src="/images/user/starYellow.png"
                    className="sm:w-[40px] moving-star sm:h-[40px] absolute bottom-[50px] left-[650px] "
                    alt="star" />
                <div className=' w-[100%] h-[50px] border-[0px] absolute top-[210px] flex items-center ' >
                    <div className=' flex absolute left-[90px] items-center ' >
                        <RoundedNumber
                            count={1}
                        />
                        <RoundedText
                            text={'Contact us'}
                        />
                    </div>
                    <div className=' flex absolute left-[460px] items-center ' >
                        <RoundedNumber
                            count={2}
                        />
                        <RoundedText
                            text={'Script Writer'}
                        />
                    </div>
                    <div className=' flex absolute left-[800px] items-center ' >
                        <RoundedNumber
                            count={3}
                        />
                        <RoundedText
                            text={'Voice Over'}
                        />
                    </div>
                </div>
                <div className=' w-[100%] h-[50px] border-[0px] absolute top-[470px] flex items-center ' >
                    <div className=' flex absolute left-[100px] items-center ' >
                        <RoundedText
                            text={'SEO'}
                        />
                        <RoundedNumber
                            count={4}
                        />
                    </div>
                    <div className=' flex absolute left-[460px] items-center ' >
                        <RoundedText
                            text={'Thumbnail Maker'}
                        />
                        <RoundedNumber
                            count={5}
                        />
                    </div>
                    <div className=' flex absolute left-[800px] items-center ' >
                        <RoundedText
                            text={'Video Editing'}
                        />
                        <RoundedNumber
                            count={6}
                        />
                    </div>
                </div>
                <div className=' w-[100%] h-[50px] border-[0px] absolute top-[750px] flex items-center ' >
                    <div className=' flex absolute left-[90px] items-center ' >
                        <RoundedNumber
                            count={7}
                        />
                        <RoundedText
                            text={'Deliver'}
                        />
                    </div>
                    <div className=' flex absolute left-[460px] items-center ' >
                        <RoundedNumber
                            count={8}
                        />
                        <RoundedText
                            text={'Review'}
                        />
                    </div>
                </div>
            </div> */}
            {/* <img
            src='https://res.cloudinary.com/drgvislmm/image/upload/v1683472192/scriptgg_naaae8.gif'
            className='border w-[80%] '
            /> */}
            {
                Arr.map((x) => (
                    <div className='lg:w-[500px] md:w-[70%] sm:w-[80%] w-[90%] flex items-center justify-center h-[300px] relative' >
                        <img
                            src={x.gif}
                            className={`absolute ${x.className}`}
                        />
                        <div className={`border absolute w-[130px] flex justify-center  rounded-lg  items-center h-[40px]  ${x.textStyle} `} >
                            <h1 className={`text-white my-font-semibold lg:text-[20px] `} >{x.name}</h1>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Services;
import React, { useState, useEffect } from "react";
//import SlideButton from 'react-slide-button';

const Footer = (props) => {

    const [reset, setReset] = useState(0);
    const [domLoaded, setDomLoaded] = useState(false);

    const inputStyle = " bg-transparent h-[100%] text-[#fff] text-sm rounded-lg  block w-[100%] p-2.5 pl-[100px]  placeholder-gray-400 "

    useEffect(() => {
        setDomLoaded(true);
    }, []);


    
    return (
        domLoaded &&
        <div className=" w-[90%] h-[300px] border-[0px] p-[50px] relative " >
            <img
                src={`/images/user/footer1.png`}
                className=' absolute left-[0px] top-[0px] '
                alt="project1" />
            <img
                src={`/images/user/footer2.png`}
                className=' absolute left-[30px] top-[0px] '
                alt="project1" />
            <div className=" w-[100%] h-[250px] border-[0px] flex " >
                <div className="w-[50%] h-[100%] border-r-[0px] flex items-start justify-between " >
                    <div className=" w-[80%] h-[80%] bg-[#fff] rounded-[30px] flex items-center justify-start px-[50px] " >
                        <div>
                            <h1 className="text-[#000] text-[18px] font-semibold " >Signup to receive product updates and more</h1>
                            {/* {
                                typeof (window) !== 'undefined' &&
                                <div className=" mt-[10px] " >
                                    <SlideButton
                                        // mainText="slide me"
                                        overlayText="D O N E"
                                        onSlideDone={() => {
                                            setTimeout(() => {
                                                setReset(reset + 1)
                                            }, 3000);
                                            // return () => clearTimeout(timer);
                                        }}
                                        reset={reset}
                                        caretClassList="my-caret-class"
                                        classList="my-class"
                                        overlayClassList="my-overlay-class"
                                        caret={
                                            <div className="bg-[#fff] rounded-[5px] ml-[-5px] w-[100%] h-[100%] flex items-center justify-center " >
                                                <h1 className=" text-[#000] " >Submit</h1>
                                            </div>
                                        }
                                        customCaretWidth={100}
                                        mainText={
                                            // <span>Sw<b style={{ color: 'red', fontSize: '19px' }}>ipe</b> me</span>
                                            <input
                                                type={'text'}
                                                className={inputStyle}
                                                placeholder="enter your email id"
                                            >
                                            </input>
                                        }
                                    />
                                </div>
                            } */}
                        </div>
                    </div>
                </div>
                <div className="w-[50%] h-[100%] border-[0px] px-[20px] py-[20px] flex  justify-end " >
                    <div className=" w-[50%] h-[100%] border-r-[0px] flex items-start justify-end " >
                        <div className=" mt-[20px] " >
                            <h1 className=" text-[#fff] text-[18px] font-medium  " >Office</h1>
                            <h1 className=" text-[#fff] text-[16px] font-normal mt-[10px] leading-tight  " >Plot number 470</h1>
                            <h1 className=" text-[#fff] text-[16px] font-normal leading-tight " >Udyog Vihar, phase-5</h1>
                            <h1 className=" text-[#fff] text-[16px] font-normal leading-tight " >Gurugram, Haryana</h1>
                            <h1 className=" text-[#fff] text-[16px] font-normal leading-tight " >India    </h1>
                        </div>
                    </div>
                    <div className=" w-[50%] h-[100%] border-[0px] flex items-start justify-end " >
                        <div className=" mt-[20px] " >
                            <h1 className=" text-[#fff] text-[18px] font-medium  " >Contact</h1>
                            <h1 className=" text-[#fff] text-[16px] font-normal mt-[10px] leading-tight  " >+91 6000205657</h1>
                            <h1 className=" text-[#fff] text-[16px] font-normal leading-tight  " >support@growgrip.com</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
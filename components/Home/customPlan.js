import React, { useState, useEffect } from "react";
import { FaCaretDown } from 'react-icons/fa';

const CustomPlan = (props) => {

    const [price, setPrice] = useState('');
    const labelStyle = " text-[#fff] text-[17px] font-normal "
    const inputStyle = " mt-[5px] bg-transparent border border-gray-300 h-[50px] text-[#fff] text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 "
    const input1Style = " mt-[5px] bg-transparent border border-gray-300 h-[280px] text-[#fff] flex items-start text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 "

    const Input = (data) => {
        return (
            <div className="mt-[20px] " >
                <h1 className={labelStyle} >{data.text}</h1>
                <input
                    //className=" w-[80%] bg-transparent border-[0.5px] h-[50px] rounded-[10px] mt-[5px] px-[10px] "
                    className={inputStyle}
                    placeholder={data.placeholder}
                    onChange={(e) => {
                        
                    }}
                >
                </input>
            </div>
        )
    }
    return (
        <div className=" w-[80%] border-[0px] " >
            <div className=" flex items-center " >
                <h1 className=" text-[#fff] text-[28px] leading-none " >Create Custom plan</h1>
                <FaCaretDown
                    color="#fff"
                    size={30}
                    className=" ml-[20px] mt-[2px] "
                />
            </div>
            <div className=" w-[100%] h-[500px] relative mt-[50px] rounded-[20px] border-[1px] flex justify-between " >
                <img
                    src="/images/user/circle7.png"
                    className=' absolute  left-[0px] top-[0px]  '
                    alt="star" />
                <img
                    src="/images/user/circle8.png"
                    className=' absolute  left-[50px] bottom-[0px]  '
                    alt="star" />
                <div className="w-[33%] h-[100%] border-r-[0px] flex items-center justify-center " >
                    <img
                        src="/images/user/person8.png"
                        className=' sm:w-[250px] sm:h-[335px] mb-[70px]  '
                        alt="star" />
                </div>
                <div className="w-[33%] h-[100%] border-r-[0px] mt-[20px] pr-[25px] " >
                    {
                        Input(
                            {
                                text: "price",
                                placeholder: "$ 0000"
                            }
                        )
                    }
                    {
                        Input(
                            {
                                text: "words",
                                placeholder: "0000"
                            }
                        )
                    }
                    {
                        Input(
                            {
                                text: "Email",
                                placeholder: "enter your email id"
                            }
                        )
                    }
                    {
                        Input(
                            {
                                text: "Enter whatsapp number",
                                placeholder: "enter your whatsapp number"
                            }
                        )
                    }
                </div>
                <div className="w-[33%] h-[100%] border-[0px] pr-[20px] " >
                    <div className=" w-[100%] flex justify-center " >
                        <div className="mt-[40px] w-[90%] " >
                            <h1 className={labelStyle} >Explain what you want</h1>
                            <input
                                className={input1Style}
                                placeholder=""
                            >
                            </input>
                        </div>
                    </div>
                    <div className="w-[100%] flex justify-center " >
                        <div className={`w-[250px] cursor-pointer h-[50px] mt-[20px] rounded-[50px] flex items-center justify-center bg-[#fff]`} >
                            <h1 className={`text-[20px] leading-none font-semibold text-[#000] `} >Get Started</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CustomPlan
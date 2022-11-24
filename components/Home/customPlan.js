import { string } from "prop-types";
import React, { useState, useEffect } from "react";
import { FaCaretDown } from 'react-icons/fa';

const CustomPlan = (props) => {

    const [price, setPrice] = useState('');
    const [words, setWords] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [desc, setDesc] = useState('');
    const labelStyle = " text-[#fff] sm:text-[17px] text-[15px] font-normal "
    const inputStyle = " mt-[5px] bg-transparent border border-gray-300 h-[50px] text-[#fff] text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 "
    const input1Style = " mt-[5px] bg-transparent border border-gray-300 sm:h-[280px] h-[150px] text-[#fff] flex items-start text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 "
    const String = {
        price: "price",
        words: "words",
        email: "Email",
        whatsapp: "Enter whatsapp number",
    }

    const Input = (data, value) => {
        return (
            <div className="sm:mt-[20px] mt-[10px] " >
                <h1 className={labelStyle} >{data.text}</h1>
                <input
                    className={inputStyle}
                    value={data.value}
                    maxLength={data.maxLength}
                    placeholder={data.placeholder}
                    inputMode={"numeric"}
                    onChange={(e) => {
                        if (data.text == String.price) {
                            if (e.target.value.length == 1 && !e.target.value.includes("$")) {
                                setPrice("$ " + e.target.value);
                            } else {
                                setPrice(e.target.value);
                            }
                            return;
                        }
                        if (data.text == String.words) {
                            setWords(e.target.value)
                        }
                        if (data.text == String.email) {
                            setEmail(e.target.value)
                        }
                        if (data.text == String.whatsapp) {
                            setContact(e.target.value)
                        }
                    }}
                >
                </input>
            </div>
        )
    }
    return (
        <div className=" sm:w-[80%] w-[100%] sm:px-[0px] px-[10px] border-[0px] " >
            <div className=" flex items-center " >
                <h1 className=" text-[#fff] sm:text-[28px] text-[18px] leading-none " >Create Custom plan</h1>
                <FaCaretDown
                    color="#fff"
                    size={30}
                    className=" ml-[20px] mt-[2px] sm:visible invisible "
                />
            </div>
            <div className=" sm:w-[100%] sm:h-[500px] relative sm:mt-[50px] mt-[15px] rounded-[20px] border-[1px] flex flex-wrap justify-between " >
                <img
                    src="/images/user/circle7.png"
                    className=' absolute  left-[0px] top-[0px] sm:visible invisible  '
                    alt="star" />
                <img
                    src="/images/user/circle8.png"
                    className=' absolute  left-[50px] bottom-[0px] sm:visible invisible '
                    alt="star" />
                <div className="sm:w-[33%] sm:h-[100%] w-[0px] h-[0px] border-r-[0px] flex items-center justify-center sm:visible invisible " >
                    <img
                        src="/images/user/person8.png"
                        className=' sm:w-[250px] sm:h-[335px] mb-[70px] sm:visible invisible  '
                        alt="star" />
                </div>
                <div className="sm:w-[33%] w-[100%] sm:h-[100%] sm:px-[0px] px-[10px] border-r-[0px] sm:mt-[20px] sm:pr-[25px] " >
                    {
                        Input(
                            {
                                text: String.price,
                                placeholder: "$ 0000",
                                value: price,
                                maxLength: 6
                            }
                        )
                    }
                    {
                        Input(
                            {
                                text: String.words,
                                placeholder: "0000",
                                value: words,
                                maxLength: 5
                            }
                        )
                    }
                    {
                        Input(
                            {
                                text: String.email,
                                placeholder: "enter your email id",
                                value: email,
                                maxLength: 30
                            }
                        )
                    }
                    {
                        Input(
                            {
                                text: String.whatsapp,
                                placeholder: "enter your whatsapp number",
                                value: contact,
                                maxLength: 13
                            }
                        )
                    }
                </div>
                <div className="sm:w-[33%] sm:h-[100%] w-[100%] border-[0px] sm:pr-[20px] " >
                    <div className=" w-[100%] flex justify-center " >
                        <div className="sm:mt-[40px] sm:w-[90%] w-[100%] sm:px-[0px] px-[10px] mt-[10px] " >
                            <h1 className={labelStyle} >Explain what you want</h1>
                            <input
                                className={input1Style}
                                placeholder=""
                                value={desc}
                                onChange={(e) => {
                                    setDesc(e.target.value)
                                }}
                            >
                            </input>
                        </div>
                    </div>
                    <div className="w-[100%] flex justify-center sm:mb-[0px] mb-[20px] " >
                        <input
                            type={'button'}
                            value={'Get Started'}
                            className='sm:w-[250px] w-[150px] cursor-pointer sm:h-[50px] h-[40px] mt-[20px] sm:rounded-[50px] rounded-[30px] justify-center bg-[#fff] sm:text-[20px] text-[15px]  font-semibold text-[#000]'
                            onClick={() => {
                                props.onSubmit();
                            }}
                        >
                        </input>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CustomPlan
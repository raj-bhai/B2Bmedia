import { string } from "prop-types";
import React, { useState, useEffect } from "react";
import { FaCaretDown } from 'react-icons/fa';

const CustomPlan = (props) => {

    const [price, setPrice] = useState('');
    const [words, setWords] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [desc, setDesc] = useState('');
    const labelStyle = " text-[#fff] text-[17px] font-normal "
    const inputStyle = " mt-[5px] bg-transparent border border-gray-300 h-[50px] text-[#fff] text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 "
    const input1Style = " mt-[5px] bg-transparent border border-gray-300 h-[280px] text-[#fff] flex items-start text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400 "
    const String = {
        price: "price",
        words: "words",
        email: "Email",
        whatsapp: "Enter whatsapp number",
    }

    const Input = (data, value) => {
        return (
            <div className="mt-[20px] " >
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
                                text: String.price,
                                placeholder: "$ 0000",
                                value: price,
                                maxLength: 5
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
                <div className="w-[33%] h-[100%] border-[0px] pr-[20px] " >
                    <div className=" w-[100%] flex justify-center " >
                        <div className="mt-[40px] w-[90%] " >
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
                    <div className="w-[100%] flex justify-center " >
                        {/* <div className={`w-[250px] cursor-pointer h-[50px] mt-[20px] rounded-[50px] flex items-center justify-center bg-[#fff]`} >
                            <h1 className={`text-[20px] leading-none font-semibold text-[#000] `} >Get Started</h1>
                        </div> */}
                        <input
                            type={'button'}
                            value={'Get Started'}
                            className='w-[250px] cursor-pointer h-[50px] mt-[20px] rounded-[50px] justify-center bg-[#fff] text-[20px]  font-semibold text-[#000]'
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
import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";

const unFocusedBG = ' bg-[#0FA152]'  //green
const focusedBG = ' bg-[#fff]'  //white

const Features = (props) => {
    return (
        <div className="w- [300px] flex border-[0px] py-[5px] " >
            <div className={`${props.focused ? focusedBG : unFocusedBG} w-[20px] h-[20px] rounded-[10px] flex items-center justify-center `} >
                <FaCheck
                    size={12}
                    color={props.focused ? '#000' : '#fff'}
                />
            </div>
            <h1 className=" text-[#fff] ml-[10px] leading-none " >{props.name}</h1>
        </div>
    )
}

const PricingCard = (props) => {

    const [focused, setFocused] = useState(false);


    // const green = "#0FA152";
    // const white = "#fff"

    //button
    const focusedbtnText = ' text-[#000]'  //black
    const unfocusedBtnText = ' text-[#fff]'  //white

    //boder
    const focusedBorder = ' border-[2px] '
    const unFocusedBorder = ' border-[1px] '


    useEffect(() => {
        if (props.seletedIndex == props.index) {
            setFocused(true)
        } else {
            setFocused(false)
        }
    }, [props.seletedIndex])



    return (
        <div className={`w-[320px] h-[500px] rounded-[20px] px-[20px] pt-[20px] ${focused ? focusedBorder : unFocusedBorder} `}
            onFocus={() => {
                props.onFocus();
            }}
            onBlur={() => {
                setFocused(false);
                console.log("ff")
            }}
            onClick={() => {
                props.onClick()
            }}
        >
            <div className="w-[100%] h-[80%]" >
                <div className="w-[100%] h-[100px] border-b-[0px] flex " >
                    <div className="w-[60px] h-[60px] bg-[#fff] rounded-[5px]  " >
                        <img
                            src="/images/user/pricing1.png"
                            // className=' absolute right-[0px] bottom-[0px]  '
                            alt="person7" />
                    </div>
                    <div className="ml-[20px] " >
                        <h1 className=" text-[#fff] text-[18px] leading-tight " >for {props.for}</h1>
                        <h1 className=" text-[#fff] text-[24px] leading-tight font-semibold " >{props.type}</h1>
                    </div>
                </div>
                <div>
                    <h1 className=" text-[#fff] text-[17px] font-normal leading-[30px] " >{props.desc}</h1>
                </div>
                <div className="flex items-end mt-[10px] " >
                    <h1 className=" text-[#fff] text-[50px] leading-none font-bold " >{props.amount}</h1>
                    <h1 className=" text-[#fff] font-medium text-[18px] "  > /video</h1>
                </div>
                <div className=" mt-[15px] " >
                    <h1 className=" text-[#fff] text-[15px] font-medium " >What's included</h1>
                </div>
                <div className=" mt-[5px] " >
                    {/* {
                        Features(
                            "Script"
                        )
                    }
                    {
                        Features(
                            "Voice over"
                        )
                    }
                    {
                        Features(
                            "Video Editing"
                        )
                    }
                    {
                        Features(
                            "Thumbnail"
                        )
                    }
                    {
                        Features(
                            "SEO"
                        )
                    } */}
                    <Features
                        name="Script"
                        focused={focused}
                    />
                    <Features
                        name="Voice over"
                        focused={focused}
                    />
                    <Features
                        name="Video Editing"
                        focused={focused}
                    />
                    <Features
                        name="Thumbnail"
                        focused={focused}
                    />
                    <Features
                        name="SEO"
                        focused={focused}
                    />
                </div>
            </div>
            <div className=" w-[100%] border-t-[0px] flex justify-center " >
                <div className={`w-[250px] cursor-pointer h-[50px] mt-[20px] rounded-[50px] flex items-center justify-center ${focused ? focusedBG : unFocusedBG}`} >
                    <h1 className={`text-[20px] leading-none font-semibold ${focused ? focusedbtnText : unfocusedBtnText} `} >Get Started</h1>
                </div>

            </div>
        </div>
    )
}

export default PricingCard;
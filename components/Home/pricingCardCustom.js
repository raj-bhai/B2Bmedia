import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";

const unFocusedBG = ' bg-[#0FA152]'  //green
const focusedBG = ' bg-[#fff]'  //white

const String = {
    script: "Script",
    voice: "Voice over",
    video: "Video Editing",
    thumb: "Thumbnail",
    seo: "SEO"
}

const Features = (props) => {

    const [count, setCount] = useState(0)
    const [endText, setEndText] = useState("")

    useEffect(() => {
        if (props.name === String.script) {
            setCount(1600)
            setEndText("words")
            return
        }
        if (props.name === String.video) {
            setCount(5)
            setEndText("minute")
            return
        }
        if (props.name === String.voice) {
            setCount(5)
            setEndText("minute")
            return
        }
        if (props.name === String.thumb) {
            setCount(5)
            setEndText("")
            return
        }
        if (props.name === String.seo) {
            setCount(5)
            setEndText("")
            return
        }
    }, [props.name])

    const increment = (type) => {
        if (type === String.script) {
            props.onChangeCount(Number(count) + 100)
            setCount(Number(count) + 100)
            return
        }
        setCount(Number(count) + 1)
        props.onChangeCount(Number(count) + 1)
    }

    const decrement = (type) => {
        if (type === String.script) {
            props.onChangeCount(Number(count) - 100)
            setCount(Number(count) - 100)
            return
        }
        setCount(Number(count) - 1)
        props.onChangeCount(Number(count) - 1)
    }

    return (
        <div className="sm:w-[300px] flex border-[0px] items-center relative py-[5px] " >
            <div className={`${props.focused ? focusedBG : unFocusedBG} w-[20px] h-[20px] rounded-[10px] flex items-center justify-center `}
                onClick={() => {
                    props.onCheck()
                }}
            >
                {
                    props.seoChecked &&
                    <FaCheck
                        size={12}
                        color={props.focused ? '#000' : '#fff'}
                    />
                }
            </div>
            <h1 className=" text-[#fff] ml-[10px] my-font-semibold text-[13px] sm:text-[14px] leading-none " >{props.name}</h1>
            {
                props.seoChecked &&
                <div className="flex" >
                    <div className="flex items-center ml-2 h-[20px] ">
                        <button className="px-3 h-[20px] border text-sm font-semibold text-gray-700 flex items-center justify-center bg-gray-200 border border-gray-300 rounded-l-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            onClick={() => decrement(props.name)}
                        >-</button>
                        <input className="w-[40px] h-[20px] py-1 text-sm font-semibold text-center text-gray-700 bg-gray-200 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            onChange={(e) => setCount(Number(e.target.value))}
                            value={count}
                            onBlur={() => {
                                props.onChangeCount(Number(count))
                            }}
                        >
                        </input>
                        <button className="px-3 h-[20px] flex items-center justofy-center  text-sm font-semibold text-gray-700 bg-gray-200 border border-gray-300 rounded-r-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            onClick={() => {
                                increment(props.name)
                            }}

                        >+</button>
                    </div>
                    <p className=" ml-[5px] text-white my-font text-[12px] " >{endText}</p>
                </div>

            }

        </div>
    )
}

const PricingCard = (props) => {

    const [focused, setFocused] = useState(false);
    const [domLoaded, setDomLoaded] = useState(false);
    const [scriptChecked, setScriptChecked] = useState(true);
    const [voiceOverChecked, setVoiceOverChecked] = useState(false);
    const [videoChecked, setVideoChecked] = useState(false);
    const [thumbnailChecked, setThumbnailChecked] = useState(false);
    const [seoChecked, setSeoChecked] = useState(false);
    const [price, setPrice] = useState();

    const [scriptCount, setScripeCount] = useState(1600);
    const [voiceCount, setVoiceCount] = useState(5);
    const [thumbnailCount, setThumbnailCount] = useState(5);
    const [videoCount, setVideoCount] = useState(5);
    const [seoCount, setSeoCount] = useState(5)



    //button
    const focusedbtnText = ' text-[#000] my-font-bold '  //black
    const unfocusedBtnText = ' text-[#fff] my-font-bold'  //white

    //boder
    const focusedBorder = ' border-[2px] '
    const unFocusedBorder = ' border-[1px] '

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    useEffect(() => {
        CalculatePrice()
    }, [scriptChecked, voiceOverChecked, videoChecked, thumbnailChecked, seoChecked, scriptCount])


    const ScriptPricing = (words) => {
        const pricePerword = 12 / 1600
        const resultPrice = pricePerword * words
        setPrice(resultPrice)
    }


    const CalculatePrice = () => {
        if (scriptChecked) {
            ScriptPricing(scriptCount)
            // console.log("SSSSSSSS")
        }
        if (voiceOverChecked) {
            console.log("VVVVVVVVV")
        }
        if (videoChecked) {
            console.log("viiiiiiiiiiiiiii")
        }
        if (thumbnailChecked) {
            console.log("ttttttttttttt")
        }
        if (seoChecked) {
            console.log("seeeeeeeeeeee")
        }
    }


    useEffect(() => {
        if (props.seletedIndex == props.index) {
            setFocused(true)
        } else {
            setFocused(false)
        }
    }, [props.seletedIndex])




    return (
        domLoaded &&
        <div className={`sm:w-[350px] w-[250px] sm:h-[500px] rounded-[20px] sm:px-[20px] sm:pt-[20px] sm:pb-[20px] px-[15px] pt-[15px] pb-[15px] ${focused ? focusedBorder : unFocusedBorder} `}
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
                <div className="w-[100%] sm:h-[100px] h-[60px] border-b-[0px] flex " >
                    <div className="sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] bg-[#fff] rounded-[5px]  " >
                        <img
                            src="/images/user/pricing1.png"
                            alt="person7" />
                    </div>
                    <div className="ml-[20px] " >
                        <h1 className=" text-[#fff] sm:text-[13px] text-[14px] leading-tight my-font " >{props.for}</h1>
                        <h1 className=" text-[#fff] sm:text-[24px] text-[16px] leading-tight my-font-semibold " >{props.type}</h1>
                    </div>
                </div>
                <div>
                    <h1 className=" text-[#fff] sm:text-[17px] text-[14px] my-font sm:leading-[30px] " >{`${scriptCount} words`}</h1>
                </div>
                <div className={`flex items-end mt-[10px] ${price ? 'visible' : 'invisible'}`} >
                    <h1 className=" text-[#fff] sm:text-[50px] text-[16px] sm:leading-none my-font-bold " >${price}</h1>
                    <h1 className=" text-[#fff] my-font-semibold sm:text-[18px] text-[14px] "  > /video</h1>
                </div>
                <div className=" sm:mt-[15px] mt-[5px] " >
                    <h1 className=" text-[#fff] sm:text-[15px] text-[13px] my-font-semibold " >What&apos;s included</h1>
                </div>
                <div className=" mt-[5px] " >
                    <Features
                        name={String.script}
                        seoChecked={scriptChecked}
                        onCheck={() => {
                            setScriptChecked(!scriptChecked)
                        }}
                        onChangeCount={(count) => {
                            setScripeCount(count)
                            // console.log(count);
                        }}
                    />
                    <Features
                        name={String.voice}
                        seoChecked={voiceOverChecked}
                        onCheck={() => {
                            setVoiceOverChecked(!voiceOverChecked)
                        }}
                        onChangeCount={(count) => {
                            setVoiceCount(count)
                            // console.log(count);
                        }}
                    />
                    <Features
                        name={String.video}
                        seoChecked={videoChecked}
                        onCheck={() => {
                            setVideoChecked(!videoChecked)
                        }}
                        onChangeCount={(count) => {
                            setVideoCount(count)
                            // console.log(count);
                        }}
                    />
                    <Features
                        name={String.thumb}
                        seoChecked={thumbnailChecked}
                        onCheck={() => {
                            setThumbnailChecked(!thumbnailChecked)
                        }}
                        onChangeCount={(count) => {
                            setThumbnailCount(count)
                            // console.log(count);
                        }}
                    />
                    <Features
                        name={String.seo}
                        seoChecked={seoChecked}
                        onCheck={() => {
                            setSeoChecked(!seoChecked)
                        }}
                        onChangeCount={(count) => {
                            setSeoCount(count)
                            // console.log(count);
                        }}
                    />
                </div>
            </div>
            <div className=" w-[100%] border-t-[0px] mt-[10px] flex justify-center " >
                <div className={`sm:w-[250px] w-[200px] cursor-pointer h-[50px] mt-[20px] rounded-[50px] flex items-center justify-center ${focused ? focusedBG : unFocusedBG}`} >
                    <h1 className={`text-[20px] leading-none ${focused ? focusedbtnText : unfocusedBtnText} `} >Get Started</h1>
                </div>
            </div>
        </div>
    )
}

export default PricingCard;
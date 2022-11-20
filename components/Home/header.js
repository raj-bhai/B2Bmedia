import React, { useState, useEffect } from "react";

const Header = (props) => {
    const textHover = ' hover:text-yellow-200 hover:border-b-[2px] hover:border-b-yellow-200'
    const hoverBtn = ' hover:bg-white hover:border-[0px]'
    const hoverTxt = ' hover:text-[#107840] hover:font-semibold  '
    const [btnFocused, setBtnFocused] = useState(false);
    const [btnBG, setBtnBG] = useState(' ');
    const [btnText, setBtnText] = useState(' ');
    const [logoColor, setLogoColor] = useState(0)

    const Gradiants = [
        ' bg-gradient-to-r from-[#F7F9F9] via-[#F7F9F9] to-[#F7F9F9] ',
        ' bg-gradient-to-r from-[#F7F9F9] via-[#D4AC0D] to-[#F7F9F9] ',
        // ' bg-gradient-to-r from-[#F7F9F9] via-[#D4AC0D] via-[#F7F9F9] to-[#D4AC0D] ',
        // ' bg-gradient-to-r from-[#D4AC0D] via-[#F7F9F9] via-[#D4AC0D] to-[#F7F9F9] ',
    ]

    // useEffect(() => {

    // }, [btnFocused])

    useEffect(() => {
        const timer = setTimeout(() => {
            if (logoColor < Gradiants.length - 1) {
                setLogoColor(logoColor + 1)
            } else {
                setLogoColor(0)
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [logoColor])


    return (
        <div className={`w-[100%] h-[80px] border-[0px] flex fixed z-[200] top-0` + props.className} >
            <div className="w-[385px] h-[83px] border-[0px] sm:ml-[97.5px] ml-[20px] sm:mt-[8px] mt-[20px] " >
                <h1
                    className={"absolute  font-bold ml-[0px] mt-[-5px] sm:text-[52px] text-transparent text-[35px] bg-clip-text " + Gradiants[logoColor]}
                >GrowGrip</h1>
            </div>
            <div className="flex mt-[19.5px] ml-[150x] sm:w-[800px] sm:visible invisible border-[0px] justify-between " >
                <div className=" w-[80px] h-[60px] border-[0px] flex items-center justify-center " >
                    <h1 className={"text-[#fff] font-normal text-[18px] leading-[30px] cursor-pointer " + textHover} >Home</h1>
                </div>
                <div className=" w-[80px] h-[60px] border-[0px] flex items-center justify-center " >
                    <h1 className={"text-[#fff] font-normal text-[18px] leading-[30px] cursor-pointer " + textHover} >Services</h1>
                </div>
                <div className=" w-[80px] h-[60px] border-[0px] flex items-center justify-center " >
                    <h1 className={"text-[#fff] font-normal text-[18px] leading-[30px] cursor-pointer " + textHover} >Pricing</h1>
                </div>
                <div className=" w-[80px] h-[60px] border-[0px] flex items-center justify-center " >
                    <h1 className={"text-[#fff] font-normal text-[18px] leading-[30px] cursor-pointer " + textHover} >Contact</h1>
                </div>
                <div className=" w-[80px] h-[60px] border-[0px] flex items-center justify-center " >
                    <h1 className={"text-[#fff] font-normal text-[18px] leading-[30px] cursor-pointer " + textHover} >About</h1>
                </div>
                <div className={" w-[80px] h-[35px] border-[2px] border-[#83D0BE] flex mt-[10px] items-center justify-center rounded-lg cursor-pointer " + hoverBtn}
                    onFocus={() => {
                        setBtnFocused(true);
                    }}
                    onBlur={() => {
                        setBtnFocused(false);
                    }}
                >
                    <h1 className={"text-[#fff] font-normal text-[18px] leading-[30px] " + hoverTxt} >Login</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;
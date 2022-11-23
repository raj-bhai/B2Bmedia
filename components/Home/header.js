import React, { useState, useEffect } from "react";

const Header = (props) => {
    const textHover = ' hover:text-yellow-200 hover:border-b-[2px] hover:border-b-yellow-200 '
    const selected = ' text-yellow-200 border-b-[2px] border-b-yellow-200 '
    const hoverBtn = ' hover:bg-white hover:border-[0px] hover:text-[#000] hover:font-semi bold'

    const textStyle = ` text-[#fff] sm:visible invisible font-normal text-[18px] leading-[30px] cursor-pointer  ${textHover}`
    const textSelectedStyle = ' text-yellow-200 border-b-[2px] border-b-yellow-200 sm:visible invisible font-normal text-[18px] leading-[30px] cursor-pointer '
    const [logoColor, setLogoColor] = useState(0);
    const [selectedHeader, setSelectedHeader] = useState(props.selectedHeader)

    const Gradiants = [
        ' bg-gradient-to-r from-[#F7F9F9] via-[#F7F9F9] to-[#F7F9F9] ',
        ' bg-gradient-to-r from-[#F7F9F9] via-[#138D75] to-[#F7F9F9] ',
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

    useEffect(() => {
        console.log("Selected Header :", props.selectedHeader);
        setSelectedHeader(props.selectedHeader)
    }, [props.selectedHeader])


    return (
        // sm:h-[80px] h-[50px]
        <div className={`w-[100%] border-[0px] sm:h-[150px] md:h-[80px] h-[80px] justify-evenly flex flex-wrap  fixed z-[2000] top-0` + props.className} >
            <div className="w-[385px] sm:w-[200px] h-[70px] border-[0px] sm:ml-[0px] ml-[20px] sm:mt-[8px] mt-[5px] " >
                <h1
                    className={"absolute font-bold ml-[0px] mt-[-5px] sm:text-[52px] text-transparent text-[30px] bg-clip-text " + Gradiants[logoColor]}
                >GroGrip</h1>
            </div>
            <div className="flex mt-[19.5px] ml-[150x] sm:visible invisible border-[0px] pr-[10px] justify-evenly gap-[50px] " >
                <div className=" w-[80px] sm:h-[60px] sm:visible invisible border-[0px] flex items-center justify-center "
                    onClick={() => {
                        props.onClickHome()
                    }}
                >
                    <h1 className={selectedHeader == 1 ? textSelectedStyle : textStyle} >Home</h1>
                </div>
                <div className=" w-[80px] sm:h-[60px] sm:visible invisible border-[0px] flex items-center justify-center "
                    onClick={() => {
                        props.onClickService()
                    }}
                >
                    <h1 className={selectedHeader == 2 ? textSelectedStyle : textStyle} >Services</h1>
                </div>
                <div className=" w-[80px] sm:h-[60px] sm:visible invisible border-[0px] flex items-center justify-center "
                    onClick={() => {
                        props.onClickPricing()
                    }}
                >
                    <h1 className={selectedHeader == 3 ? textSelectedStyle : textStyle} >Pricing</h1>
                </div>
                <div className=" w-[80px] sm:h-[60px] sm:visible invisible border-[0px] flex items-center justify-center "
                    onClick={() => {
                        props.onClickContact()
                    }}
                >
                    <h1 className={selectedHeader == 4 ? textSelectedStyle : textStyle} >Contact</h1>
                </div>
                <div className=" w-[80px] sm:h-[60px] sm:visible invisible border-[0px] flex items-center justify-center "
                    onClick={() => {
                        props.onClickAbout()
                    }}
                >
                    <h1 className={selectedHeader == 5 ? textSelectedStyle : textStyle} >About</h1>
                </div>
                <input type="button" value={"Login"} className={" text-[#fff] sm:visible invisible font-normal  w-[80px] sm:h-[35px] border-[2px] border-[#83D0BE] flex mt-[10px] items-center justify-center rounded-lg cursor-pointer " + hoverBtn} >
                </input>
            </div>
        </div>
    );
};

export default Header;
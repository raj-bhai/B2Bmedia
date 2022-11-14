import React from "react";

const Header = () => {
    return (
        <div className="w-[100%] h-[99px] border-[0px] flex " >
            <div className="w-[385px] h-[83px] border-[0px] ml-[97.5px] mt-[8px] " >
                <h1 className="absolute w-[180px] h-[38px] ml-[3.5px] mt-[21.5px] text-[30px] text-[#fff] leading-[38px] font-normal " >B2BMEDIA</h1>
            </div>
            <div className="flex mt-[19.5px] ml-[150x] w-[800px] border-[0px] justify-between " >
                <div className=" w-[80px] h-[60px] border-[0px] flex items-center justify-center " >
                    <h1 className="text-[#fff] font-normal text-[18px] leading-[30px] cursor-pointer " >Home</h1>
                </div>
                <div className=" w-[80px] h-[60px] border-[0px] flex items-center justify-center " >
                    <h1 className="text-[#fff] font-normal text-[18px] leading-[30px] cursor-pointer " >Services</h1>
                </div>
                <div className=" w-[80px] h-[60px] border-[0px] flex items-center justify-center " >
                    <h1 className="text-[#fff] font-normal text-[18px] leading-[30px] cursor-pointer " >Pricing</h1>
                </div>
                <div className=" w-[80px] h-[60px] border-[0px] flex items-center justify-center " >
                    <h1 className="text-[#fff] font-normal text-[18px] leading-[30px] cursor-pointer " >Contact</h1>
                </div>
                <div className=" w-[80px] h-[60px] border-[0px] flex items-center justify-center " >
                    <h1 className="text-[#fff] font-normal text-[18px] leading-[30px] cursor-pointer " >About</h1>
                </div>
                <div className=" w-[80px] h-[35px] border-[2px] border-[#83D0BE] flex mt-[10px] items-center justify-center rounded-lg cursor-pointer " >
                    <h1 className="text-[#fff] font-normal text-[18px] leading-[30px] " >Login</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;
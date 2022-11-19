import React from "react";

const Contact = (props) => {

    const text1 = " text-[#fff] text-[25px] font-light "
    const text2 = " text-[#fff] text-[22px] font-medium "

    return (
        <div className=" w-[70%] border-[0.5px] rounded-[20px] mt-[100px] relative p-[50px] " >
            <img
                src={`/images/user/circle10.png`}
                className=' absolute right-[0px] bottom-[0px] w-[300px] h-[230px] rounded-br-[20px] z-[0] '
                alt="project1" />
            <div className=" w-[100%] " >
                <h1 className={text1} >GET IN TOUCH</h1>
                <h1 className={text2} >24/7 We will answer of your question and problems</h1>
                <div className=" w-[100%] h-[400px] border-[0px] mt-[20px] flex justify-between" >
                    <div >

                    </div>
                    <div className=" w-[280px] h-[100%] border-l-[0px] relative flex items-end justify-center " >
                        <img
                            src={`/images/user/person10.png`}
                            className=' w-[415px] h-[440px] z-[200] absolute top-[-100px] '
                            alt="project1" />
                        <div className=" w-[200px] h-[50px] rounded-[30px] bg-[#0FA152] flex items-center justify-center cursor-pointer "  >
                            <h1 className=" text-[#fff] text-[20px] font-semibold " >Submit</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
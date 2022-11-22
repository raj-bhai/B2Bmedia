import React from "react";

const Contact = (props) => {

    const text1 = " text-[#fff] md:text-[25px] sm:text-[20px] text-[16px] font-light "
    const text2 = " text-[#fff] md:text-[22px] sm:text-[18px] text-[14px] font-medium "

    return (
        <div className=" w-[70%] border-[0.5px] rounded-[20px] mt-[100px] relative md:p-[50px] sm:p-[30px] p-[20px] " >
            <img
                src={`/images/user/circle10.png`}
                className=' absolute right-[0px] md:visible invisible bottom-[0px] md:w-[300px] sm:w-[200px] sm:h-[150px] w-[0px] h-[0px] md:h-[230px] rounded-br-[20px] z-[0] '
                alt="project1" />
            <div className=" w-[100%] " >
                <h1 className={text1} >GET IN TOUCH</h1>
                <h1 className={text2} >24/7 We will answer of your question and problems</h1>
                <div className=" w-[100%] h-[400px] border-[0px] mt-[20px] flex justify-between" >
                    <div className="w-[100%] h-[100%] border-[0px] p-[10px] " >
                        <div className=" w-[100%] flex flex-wrap gap-[20px] mt-[10px] justify-between " >
                            <input type={'text'}
                                className=" w-[45%] md:h-[40px] sm:h-[30px] h-[30px] min-w-[200px] rounded-[5px] bg-transparent border border-[#fff] border-[0.3px] "
                            >
                            </input>
                            <input type={'text'}
                                className=" w-[45%] md:h-[40px] sm:h-[30px] h-[30px] min-w-[200px] rounded-[5px] bg-transparent border border-[#fff] border-[0.3px] "
                            >
                            </input>
                        </div>
                        <div className="w-[100%] mt-[10px] flex items-center justify-center " >
                            <input type={'text'}
                                className=" w-[100%] md:h-[40px] sm:h-[30px] h-[30px] rounded-[5px] bg-transparent border border-[#fff] border-[0.3px] "
                            >
                            </input>
                        </div>
                        <div className="w-[100%] mt-[10px] flex items-center justify-center " >
                            <input type={'text'}
                                className=" w-[100%] md:h-[40px] sm:h-[30px] h-[30px] rounded-[5px] bg-transparent border border-[#fff] border-[0.3px] "
                            >
                            </input>
                        </div>
                        <div className="w-[100%] mt-[10px] flex items-center justify-center " >
                            <input type={'text'}
                                className=" w-[100%] md:h-[200px] sm:h-[170px] h-[150px] rounded-[5px] bg-transparent border border-[#fff] border-[0.3px] "
                            >
                            </input>
                        </div>
                    </div>
                    <div className=" md:w-[280px] w-[0px] h-[100%] border-[0px] relative flex items-end justify-center md:visible invisible sm:invisible " >
                        <img
                            src={`/images/user/person10.png`}
                            className=' w-[415px] h-[300px] z-[200] absolute top-[0px] md:visible invisible sm:invisible '
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
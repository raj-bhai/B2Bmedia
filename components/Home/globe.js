import React from "react";

const Globe = (props) => {
    return (
        <div className=" sm:w-[500px] sm:h-[500px] border-[0px] sm:mt-[50px] flex items-center justify-center relative " >
            <img
                src="/images/user/globe.png"
                className=" spin-animate-slow "
                alt="star" />
            <img
                src="/images/user/microphone.png"
                className="absolute bounce-slow sm:left-[110px] left-[120px] sm:w-[70px] w-[50px] sm:h-[120px] h-[90px] sm:top-[10px] top-[30px] "
                alt="star" />
            <img
                src="/images/user/dotCircle.png"
                className="absolute spin-animate-slow invisible "
                alt="star" />
            <img
                src="/images/user/script.png"
                className="absolute bounce-slow sm:right-[20px] right-[40px] sm:top-[-20px] top-[30px] sm:w-[150px] w-[100px] sm:h-[135px] h-[75px] "
                alt="star" />
            <img
                src="/images/user/aeroplane.png"
                className="absolute sm:w-[200px] aeroplane-animate w-[120px] sm:h-[200px] h-[120px] sm:left-[100px] left-[150px] sm:top-[100px] top-[200px] "
                alt="star" />
            <div className="sm:w-[120px] sm:h-[120px] border-[0px] absolute right-[40px] bottom-[65px]  " >
                <img
                    src="/images/user/person5.png"
                    className="sm:h-[100%]"
                    alt="star" />
                <div className=' relative border-[0px] sm:mt-[-10px] sm:ml-[-5px] ' >
                    <img
                        src="/images/user/screen1.png"
                        className="sm:w-[83px] sm:h-[61px] ml-[10px] "
                        alt="star" />
                    <img
                        src="/images/user/youtube1.png"
                        className=" sm:w-[15px] sm:h-[20px] absolute top-[20px] left-[45px] "
                        alt="star" />
                </div>
            </div>
        </div>

    )
}

export default Globe;
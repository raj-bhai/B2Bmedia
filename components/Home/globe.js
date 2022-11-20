import React from "react";

const Globe = (props) => {
    return (

        // <div className='w-[500px] h-[500px] mt-[25px] mr-[25px] rounded-[250px] border-[1px] border-t-[0px] border-l-yellow-200 animate-spin flex items-center justify-center  ' >
        //     <h1 className='text-[18px] text-white ' >Gif will be here</h1>
        // </div>
        <div className=" sm:w-[500px] sm:h-[500px] border-[0px] sm:mt-[50px] flex items-center justify-center relative " >
            <img
                src="/images/user/globe.png"
                className=" spin-animate-slow "
                alt="star" />
            {/* <img
                src="/images/user/script.png"
                className="absolute sm:left-[0px] sm:bottom-[0px sm:visible invisible "
                alt="star" /> */}
            <img
                src="/images/user/microphone.png"
                className="absolute bounce-slow sm:left-[110px] left-[120px] sm:w-[70px] w-[50px] sm:h-[120px] h-[90px] sm:top-[10px] top-[30px] "
                alt="star" />
            <img
                src="/images/user/dotCircle.png"
                className="absolute spin-animate-slow "
                alt="star" />
            <img
                src="/images/user/script.png"
                className="absolute bounce-slow sm:right-[20px] right-[40px] sm:top-[-20px] top-[30px] sm:w-[150px] w-[100px] sm:h-[135px] h-[75px] "
                alt="star" />
            <img
                src="/images/user/aeroplane.png"
                className="absolute sm:w-[200px] aeroplane-animate w-[120px] sm:h-[200px] h-[120px] sm:left-[100px] left-[150px] sm:top-[100px] top-[200px] "
                alt="star" />
        </div>

    )
}

export default Globe;
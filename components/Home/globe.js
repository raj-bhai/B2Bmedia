import React from "react";

const Globe = (props) => {
    return (

        // <div className='w-[500px] h-[500px] mt-[25px] mr-[25px] rounded-[250px] border-[1px] border-t-[0px] border-l-yellow-200 animate-spin flex items-center justify-center  ' >
        //     <h1 className='text-[18px] text-white ' >Gif will be here</h1>
        // </div>
        <div className=" sm:w-[500px] sm:h-[500px] border-[0px] sm:mt-[50px] flex items-center justify-center relative " >
            <img
                src="/images/user/globe.png"
                alt="star" />
            <img
                src="/images/user/script.png"
                className="absolute sm:left-[0px] sm:bottom-[0px] "
                alt="star" />
            <img
                src="/images/user/microphone.png"
                className="absolute sm:left-[110px] sm:w-[70px] sm:h-[120px] sm:top-[10px] "
                alt="star" />
            <img
                src="/images/user/dotCircle.png"
                className="absolute "
                alt="star" />
            <img
                src="/images/user/script.png"
                className="absolute sm:right-[20px] sm:top-[-20px] sm:w-[150px] sm:h-[135px] "
                alt="star" />
            <img
                src="/images/user/aeroplane.png"
                className="absolute sm:w-[200px] sm:h-[200px] sm:left-[100px] sm:top-[100px] "
                alt="star" />
        </div>

    )
}

export default Globe;
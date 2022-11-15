import React from "react";

const Globe = (props) => {
    return (

        // <div className='w-[500px] h-[500px] mt-[25px] mr-[25px] rounded-[250px] border-[1px] border-t-[0px] border-l-yellow-200 animate-spin flex items-center justify-center  ' >
        //     <h1 className='text-[18px] text-white ' >Gif will be here</h1>
        // </div>
        <div className=" w-[500px] h-[500px] border-[0px] flex items-center justify-center relative " >
            <img
                src="/images/user/globe.png"
                alt="star" />
            <img
                src="/images/user/script.png"
                className="absolute left-[0px] bottom-[0px] "
                alt="star" />
            <img
                src="/images/user/microphone.png"
                className="absolute left-[110px] w-[70px] h-[120px] top-[10px] "
                alt="star" />
        </div>

    )
}

export default Globe;
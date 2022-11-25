import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaPlayCircle } from 'react-icons/fa'

const Video = (props) => {

    const [videoOpacity, setVideoOpacity] = useState(' opacity-0  z-[100]')
    const [imageOpacity, setImageOpacity] = useState(' opacity-1 z-[200]')
    const [showVideo, setShowVideo] = useState(false);
    const [url, setUrl] = useState(props.src);

    useEffect(() => {
        setVideoOpacity(' opacity-0  z-[100]');
        setImageOpacity(' opacity-1 z-[200]')
        setShowVideo(false)
    }, [])

    const videoRef = useRef(null);
    return (
        <div key={props.key} className=" sm:w-[500px] sm:h-[300px] w-[300px] h-[160px] border-[1px] rounded-lg relative "

        >{
                showVideo &&
                <iframe
                    ref={videoRef}
                    width={"100%"}
                    height={"100%"}
                    className={'rounded-lg ' + videoOpacity}
                    onLoad={() => {
                        setImageOpacity(' opacity-0  z-[100] ')
                        setVideoOpacity(' opacity-1 z-[200] ')
                    }}
                    onPause={() => {
                        setShowVideo(false)
                        setImageOpacity(' opacity-1  z-[200] ')
                        setVideoOpacity(' opacity-0 z-[100] ')
                    }}
                    allow="autoplay"
                    src={props.src}
                ></iframe>
            }
            {!showVideo &&
                <img
                    src={props.thumbnail}
                    alt="new"
                    className={'absolute top-[0px] w-[100%] h-[100%] rounded-lg ' + imageOpacity}
                />
            }
            {!showVideo &&
                <FaPlayCircle
                    color='#107840'
                    className={'text-[20px] sm:text-[100px] cursor-pointer absolute left-[200px] top-[100px] ' + imageOpacity}
                    onClick={() => {
                        setShowVideo(true)
                    }}
                />
            }
        </div>
    )
}

export default Video;
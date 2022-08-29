import React, { useState } from "react";
import {
    FaTimes,
    FaYoutube
} from "react-icons/fa";
import Avatar from 'react-avatar';
import { Carousel, ScrollingCarousel } from '@trendyol-js/react-carousel';

const DashboardModal = (props) => {

    const Types = [
        {
            name: "Script"
        },
        {
            name: "Voice Over"
        },
        {
            name: "Video"
        },
        {
            name: "Thumbnail"
        }
    ]
    return (
        <div className="h-[100%] w-full bg-[rgba(255,255,255,0.7)]" >
            <div className="h-[10px] w-[100% ] justify-end flex">
                <FaTimes
                    size={20}
                    color="black"
                    onClick={() => {
                        props.onClose()
                    }}
                />
                {/* <button className="bg-yellow-200 mr-[20px] " >Save</button>
                <button className="bg-yellow-200 " >Save and Exit</button> */}
            </div>
            <div className="border-[0px] flex justify-between items-center " >
                <div className="flex border-[0px] " >
                    <FaYoutube
                        color='red'
                        size={50}
                    />
                    <h1 className="mt-[10px] ml-[5px] " >{props.data?.title}</h1>
                </div>
                <div className="flex items-center" >
                    <Avatar
                        color={Avatar.getRandomColor('sitebase', ['red', 'green', 'gray', 'blue'])}
                        name={props.data?.channelName ? props.data.channelName : "Channel Name"}
                        round={true}
                        size={30}
                        className="mr-[5px]"
                    />
                    <h1 className="mr-[10px]" >{props.data?.channelName ? props.data.channelName : "Channel Name"}</h1>
                </div>
            </div>
            <div className="w-[350px]">
                <Carousel show={1.2} slide={1} autoSwipe={true} transition={0.5} swiping={true}
                    // key={name}
                    // autoSwipe={true}
                    // leftArrow={true}
                    // rightArrow={true}
                    useArrowKeys={true}
                    children={Types}
                    swipeOn={0.5}
                    
                    // dynamic={true}
                    // leftArrow={() =>
                    //     <FaTimes
                    //         size={20}
                    //         color="black"
                    //         onClick={() => {
                    //             props.onClose()
                    //         }}
                    //     />
                    // }
                    rightArrow={() =>
                        <FaTimes
                            size={20}
                            color="black"
                            onClick={() => {
                                props.onClose()
                            }}
                        />
                    }
                    hideArrows={false}
                // responsive={true}
                // infinite={false}
                // className="w-[400px]"
                >
                    <div className="w-[100%] h-[200px] rounded-lg bg-yellow-200 " >
                        <p className="legend">Script</p>
                    </div>
                    <div className="w-[100%] h-[200px] border-[1px] bg-gray-200 " >
                        <p className="legend">Voice Over</p>
                    </div>
                    <div className="w-[100%] h-[200px] border-[1px] bg-green-200 " >
                        <p className="legend">Video</p>
                    </div>
                    <div className="w-[100%] h-[200px] border-[1px] bg-blue-200 " >
                        <p className="legend">Thumbnail</p>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}


export default DashboardModal


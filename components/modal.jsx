import React, { useState } from "react";
import {
    FaTimes,
    FaYoutube
} from "react-icons/fa";
import Avatar from 'react-avatar';
import { Carousel, ScrollingCarousel } from '@trendyol-js/react-carousel';

const DashboardModal = (props) => {

    const [selectedTypes, setSelectedTypes] = useState(0)

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
            <div>
                <div className="flex space-x-[5px] mt-[20px] " >
                    {
                        Types.map((x, i) =>
                            <div className="border-[1px] w-[100px] pl-[10px] cursor-pointer "
                            style={{backgroundColor: selectedTypes === i ? "yellow" : null}}
                                onClick={() => setSelectedTypes(i)}
                            >
                                <h1 className="text-[16px]" >{x.name}</h1>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}


export default DashboardModal


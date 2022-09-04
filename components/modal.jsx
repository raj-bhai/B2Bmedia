import React, { useState } from "react";
import {
    FaTimes,
    FaYoutube,
    FaScroll,
    FaMicrophone,
    FaPhotoVideo
} from "react-icons/fa";
import Avatar from 'react-avatar';
import { Carousel, ScrollingCarousel } from '@trendyol-js/react-carousel';

//bg-gradient-to-r from-[#145A32] to-[#76D7C4]

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


    const ScriptUI = (props) => {
        return (
            <div>

            </div>
        )
    }

    return (
        <div className="h-[100%] w-full" >
            <div className="h-[10px] w-[100% ] justify-end flex">
                <FaTimes
                    size={20}
                    color="white"
                    onClick={() => {
                        props.onClose()
                    }}
                />
            </div>
            <div className="border-[0px] flex justify-between items-center " >
                <div className="flex border-[0px] " >
                    <FaYoutube
                        color='white'
                        size={50}
                    />
                    <h1 className="mt-[10px] ml-[5px] text-white " >{props.data?.title}</h1>
                </div>
                <div className="flex items-center" >
                    <Avatar
                        color={Avatar.getRandomColor('sitebase', ['white'])}
                        name={props.data?.channelName ? props.data.channelName : "Channel Name"}
                        round={true}
                        size={30}
                        className="mr-[5px]"
                    />
                    <h1 className="mr-[50px] text-white" >{props.data?.channelName ? props.data.channelName : "Channel Name"}</h1>
                </div>
            </div>
            <div>
                <div className="flex" >
                    <div className="border-[0px] w-[14%] h-[500px] mt-[10px] " >
                        {
                            Types.map((x, i) =>
                                <div className="border-[0px] w-[100%] pl-[10px] flex cursor-pointer rounded-md h-[50px]  items-center "
                                    style={{
                                        // backgroundColor: selectedTypes === i ? "yellow" : null 
                                        background: selectedTypes === i ? "linear-gradient(#145A32, #76D7C4)" : null
                                    }}
                                    onClick={() => setSelectedTypes(i)}
                                >
                                    {(x.name === "Script") &&
                                        <FaScroll
                                            color={selectedTypes === i ? 'white' : 'gray'}
                                            size={selectedTypes === i ? 28 : 25}
                                        />
                                    }
                                    {(x.name === "Voice Over") &&
                                        <FaMicrophone
                                            color={selectedTypes === i ? 'white' : 'gray'}
                                            size={selectedTypes === i ? 28 : 25}
                                        />
                                    }
                                    {(x.name === "Video") &&
                                        <FaYoutube
                                            color={selectedTypes === i ? 'white' : 'gray'}
                                            size={selectedTypes === i ? 28 : 25}
                                        />
                                    }
                                    {(x.name === "Thumbnail") &&
                                        <FaPhotoVideo
                                            color={selectedTypes === i ? 'white' : 'gray'}
                                            size={selectedTypes === i ? 28 : 25}
                                        />
                                    }

                                    <h1 className=""
                                        style={{
                                            color: selectedTypes === i ? 'white' : 'gray',
                                            fontSize: selectedTypes === i ? 17 : 14,
                                            marginLeft: selectedTypes === i ? 10 : 5,
                                        }}
                                    >{x.name}</h1>
                                </div>
                            )
                        }

                    </div>
                    <div className="border-[0px] w-[80%]  ml-[20px] h-[100%] mt-[10px] rounded-md flex bg-gradient-to-r from-[#145A32] to-[#76D7C4]">
                        <div className="border-[0px] w-[50%] h-[500px] mt-[0px] " >

                        </div>
                        <div className="border-[0px] w-[50%] h-[100%] mt-[0px] " >
                            <h1>Assigned To : Jaitin</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DashboardModal


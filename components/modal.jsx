import React, { useState } from "react";
import {
    FaTimes,
    FaYoutube,
    FaScroll,
    FaMicrophone,
    FaPhotoVideo,
    FaUpload,
    FaDownload,
    FaEye
} from "react-icons/fa";
import Avatar from 'react-avatar';
import { Carousel } from 'react-responsive-carousel';
import { data } from "autoprefixer";

//bg-gradient-to-r from-[#0B5345] to-[#154360]

const DashboardModal = (props) => {

    const [selectedTypes, setSelectedTypes] = useState(0);

    const [selectedFile, setSelectedFile] = useState();

    const hiddenFileInput = React.useRef(null);

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

    const onFileUpload = () => {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "myFile",
            selectedFile,
            // selectedFile.name
        );

        // Details of the uploaded file
        console.log(selectedFile);

        // Request made to the backend api
        // Send formData object
        // axios.post("api/uploadfile", formData);
    };

    const Upload_UI = () => {
        return (
            <div className="w-[100%] h-[90%] border-[0px] flex justify-center items-center" >
                <button onClick={() => hiddenFileInput.current?.click()} className="w-[150px] h-[40px] bg-white rounded-md flex justify-center items-center " type="file">
                    <h1 className=" text-[#17202A] font-bold " >Upload</h1>
                    <FaUpload
                        size={20}
                        color="#17202A"
                        className="ml-[5px]"
                    />
                </button>
                <input type="file" ref={hiddenFileInput} onChange={onFileUpload()} style={{ display: 'none' }} />
            </div>
        )
    }

    const Download_UI = () => {
        return (
            <div className="w-[100%] h-[90%] border-[0px] flex justify-center items-center" >
                <button onClick={() => hiddenFileInput.current?.click()} className="w-[150px] h-[40px] bg-white rounded-md flex justify-center items-center " type="file">
                    <h1 className=" text-[#17202A] font-bold " >View</h1>
                    <FaEye
                        size={20}
                        color="#17202A"
                        className="ml-[5px] mt-[2px]"
                    />
                </button>
                <button onClick={() => hiddenFileInput.current?.click()} className="w-[150px] h-[40px] bg-white rounded-md flex justify-center items-center ml-[100px] " type="file">
                    <h1 className=" text-[#17202A] font-bold " >Download</h1>
                    <FaDownload
                        size={20}
                        color="#17202A"
                        className="ml-[5px]"
                    />
                </button>
            </div>
        )
    }

    const Status_UI = (status) => {
        return (
            <div className="w-[100%] h-[90%] border-[0px] flex justify-center items-center" >
                <div className="h-[40px] w-[250px] bg-white rounded-md flex justify-center items-center ">
                    <h1 className=" text-[#17202A] font-bold " >{status}</h1>
                </div>
            </div>
        )
    }

    const ShowUI = () => {

        //script
        if (selectedTypes === 0 && !props.data?.ScriptUploaded) {
            if (props.data?.ScriptAssignedToMe) {
                return Upload_UI()
            } else {
                return Status_UI(props.data?.Script)
            }
        }
        if (selectedTypes === 0 && props.data?.ScriptUploaded) {
            return Download_UI()
        }

        //voiceover
        if (selectedTypes === 1 && !props.data?.VoiceOverUploaded) {
            if (props.data?.VoiceOverAssignedToMe) {
                return Upload_UI()
            } else {
                return Status_UI(props.data?.VoiceOver)
            }
        }
        if (selectedTypes === 1 && props.data?.VoiceOverUploaded) {
            return Download_UI()
        }

        //video
        if (selectedTypes === 2 && !props.data?.VideoUploaded) {
            if (props.data?.VideoAssignedToMe) {
                return Upload_UI()
            } else {
                return Status_UI(props.data?.video)
            }
        }
        if (selectedTypes === 2 && props.data?.VideoUploaded) {
            return Download_UI()
        }

        //thumbnail
        if (selectedTypes === 3 && !props.data?.ThumbnailUploaded) {
            if (props.data?.ThumbnailAssignedToMe) {
                return Upload_UI()
            } else {
                return Status_UI(props.data?.Thumbnail)
            }
        }
        if (selectedTypes === 3 && props.data?.ThumbnailUploaded) {
            return Download_UI()
        }
    }

    const keydown = () => {
        if (selectedTypes < (Types.length - 1)) {
            setSelectedTypes(selectedTypes + 1)
        } else {
            setSelectedTypes(0)
        }
    }

    const KeyUp = () => {
        if (selectedTypes > 0) {
            setSelectedTypes(selectedTypes - 1)
        } else {
            setSelectedTypes(Types.length - 1)
        }
    }

    return (
        <div className="h-[100%] w-full">
            {/* <Input onKeyDown={() => console.log("hello mf") }/> */}
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
                        color='#FF0000'
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
                                        background: selectedTypes === i ? "linear-gradient(#0B5345, #154360)" : null
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
                    <div className="border-[0px] w-[80%] ml-[20px] h-[500px] mt-[10px] rounded-md flex-col bg-gradient-to-r from-[#0B5345] to-[#154360] justify-center items-center ">
                        {
                            selectedTypes === 0 &&
                            <div className="flex justify-between " >
                                <div className="flex px-[20px] py-[10px]">
                                    <h1 className="text-white" >Assigned To : {props.data?.ScriptAssigned}</h1>
                                    {
                                        props.data?.ScriptAssignedToMe &&
                                        <h1 className="text-white ml-[5px]"> (you)</h1>
                                    }
                                </div>
                                <div className="px-[20px] py-[10px] flex" >
                                    <h1 className="text-white" >Status: </h1>
                                    <h1 className="text-white ml-[5px]">{props.data?.Script}</h1>
                                </div>
                            </div>
                        }
                        {
                            selectedTypes === 1 &&
                            <div className="flex justify-between " >
                                <div className="flex px-[20px] py-[10px]">
                                    <h1 className="text-white">Assigned To : {props.data?.VoiceOverAssigned}</h1>
                                    {
                                        props.data?.VoiceOverAssignedToMe &&
                                        <h1 className="text-white ml-[5px]" > (you)</h1>
                                    }
                                </div>
                                <div className="px-[20px] py-[10px] flex" >
                                    <h1 className="text-white" >Status: </h1>
                                    <h1 className="text-white ml-[5px]">{props.data?.VoiceOver}</h1>
                                </div>
                            </div>
                        }
                        {
                            selectedTypes === 2 &&
                            <div className="flex justify-between " >
                                <div className="flex px-[20px] py-[10px]">
                                    <h1 className="text-white" >Assigned To : {props.data?.VideoAssigned}</h1>
                                    {
                                        props.data?.VideoAssignedToMe &&
                                        <h1 className="text-white ml-[5px]" > (you)</h1>
                                    }
                                </div>
                                <div className="px-[20px] py-[10px] flex" >
                                    <h1 className="text-white" >Status: </h1>
                                    <h1 className="text-white ml-[5px]">{props.data?.video}</h1>
                                </div>
                            </div>
                        }
                        {
                            selectedTypes === 3 &&
                            <div className="flex justify-between " >
                                <div className="flex px-[20px] py-[10px]">
                                    <h1 className="text-white" >Assigned To : {props.data?.ThumbnailAssigned}</h1>
                                    {
                                        props.data?.ThumbnailAssignedToMe &&
                                        <h1 className="text-white ml-[5px]" > (you)</h1>
                                    }
                                </div>
                                <div className="px-[20px] py-[10px] flex" >
                                    <h1 className="text-white" >Status: </h1>
                                    <h1 className="text-white ml-[5px]">{props.data?.Thumbnail}</h1>
                                </div>
                            </div>
                        }
                        {
                            ShowUI()
                        }
                        {/* //  <Upload_UI />
                        // <Download_UI /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DashboardModal


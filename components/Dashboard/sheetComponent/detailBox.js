import Script from "next/script";
import React, {useState} from "react";

const arr = ["SubItem", "Owner", "Payment", "Update"]

const script = ["Script", "", "", ""]
const voice = ["VoiceOver", "", "", ""]
const video = ["Video", "Himangshu", "", ""]
const thumbnail = ["Thumbnail", "", "", ""]


const DetailBox = (props) => {

    const bg = ' bg-[#1C2833] '
    const defaultSelectionStyle = ' bg-[#909497] '
    const chechboxStyle = ' mr-[10px] bg-grenn-500 '
    const itemStyle = ' w-[200px] h-[35px] border-[1px] px-[10px] flex items-center '

    const [scriptChecked, setScriptChecked] = useState(false);
    const [voiceChecked, setVoiceChecked] = useState(false);
    const [videoChecked, setVideoChecked] = useState(false);
    const [thumbnailChecked, setThumbnailChecked] = useState(false);

    return (
        <div className={` w-[100%] h-[200px] relative flex items-center `} >
            <div className=" w-[700px] h-[90%] absolute left-[100px] top border-[0px] " >

                <div className=" flex " >
                    {
                        arr.map((x) => {
                            return (
                                <div className={`${itemStyle} ${bg}`} >
                                    <h1 className=" text-[#fff] " >{x}</h1>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=" flex " >
                    {
                        script.map((x, i) => {
                            return (
                                <div className={`${itemStyle} ${i == 2 ? defaultSelectionStyle : bg} relative`} >
                                    {
                                        i == 0 &&
                                        <input type="checkbox" id="script" name="script" checked={scriptChecked} 
                                        onChange={() => {
                                            setScriptChecked(!scriptChecked)
                                        }}
                                            className={`${chechboxStyle}`}
                                        ></input>
                                    }
                                                                        {
                                        i == 1 &&
                                        <div className=" w-[26px] h-[26px] rounded-[13px] bg-white absolute left-[50px] " >

                                        </div>
                                    }
                                    <h1 className=" text-[#fff] " >{x}</h1>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=" flex" >
                    {
                        voice.map((x, i) => {
                            return (
                                <div className={`${itemStyle} ${i == 2 ? defaultSelectionStyle : bg}`} >
                                    {
                                        i == 0 &&
                                        <input type="checkbox" id="voice" name="voice" checked={voiceChecked}
                                        onChange={() => {
                                            setVoiceChecked(!voiceChecked)
                                        }}
                                            className={`${chechboxStyle}`}
                                        ></input>
                                    }
                                    <h1 className=" text-[#fff] " >{x}</h1>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=" flex" >
                    {
                        video.map((x, i) => {
                            return (
                                <div className={`${itemStyle} ${i == 2 ? defaultSelectionStyle : bg}`} >
                                    {
                                        i == 0 &&
                                        <input type="checkbox" id="video" name="video" checked={videoChecked} 
                                        onChange={() => {
                                            setVideoChecked(!videoChecked);
                                        }}
                                            className={`${chechboxStyle}`}
                                        ></input>
                                    }
                                    <h1 className=" text-[#fff] " >{x}</h1>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=" flex" >
                    {
                        thumbnail.map((x, i) => {
                            return (
                                <div className={`${itemStyle} ${i == 2 ? defaultSelectionStyle : bg}`} >
                                    {
                                        i == 0 &&
                                        <input type="checkbox" id="thumbnail" name="thumbnail" checked={thumbnailChecked}
                                        onChange={() => {
                                            setThumbnailChecked(!thumbnailChecked)
                                        }}
                                            className={`${chechboxStyle}`} 
                                        ></input> 
                                    }
                                    <h1 className=" text-[#fff] " >{x}</h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default DetailBox;
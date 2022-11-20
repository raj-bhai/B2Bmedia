import React from "react";

const Label = (props) => {
    return (
        <div className={"bg-[#fff] rounded-[10px] px-[10px] py-[3px] " + props.className} >
            <h1 className=" text-[#000] text-[15px] leading-none font-medium " >{props.text}</h1>
        </div>
    )
};

export default Label;
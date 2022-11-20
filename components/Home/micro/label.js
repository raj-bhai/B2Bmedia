import React from "react";

const Label = (props) => {
    return (
        <div className={"bg-[#fff] rounded-[10px] px-[20px] " + props.className} >
            <h1 className=" text-[#000] " >{props.text}</h1>
        </div>
    )
};

export default Label;
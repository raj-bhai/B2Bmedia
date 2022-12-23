import React, { useState, useEffect, useRef } from "react";

import { useSelector } from 'react-redux';
import { FaRegComment } from 'react-icons/fa';


const Spreadsheet = () => {

    const Sheet = useSelector(state => state.dashboard.Sheet);
    const header = [`Item`, "Comment", "STARTING", "Clients", "Script", "Voice Over", "Video", "Thumbnaiil", "Uploaded", "SCRIPT PAID", "CLIENT PAID"]
    const [focusedItem, setFocusedItem] = useState({ row: null, column: null });

    const div1 = " h-[35px] flex "
    const div2 = " h-[100%] flex items-center"
    const bg = " bg-[#1C2833] "
    const focusedBg = " bg-[#145A32] "
    const font = " text-[14px] "
    const doneClr = " bg-green-500 "                         // dropdown colors
    const workingClr = " bg-[#F1C40F] "
    const approvalClr = " bg-[#633974] "
    const revisedClr = " bg-[#515A5A] "
    const inputClass = `text-white truncate bg-transparent w-[100%] border-[0.5px] border-white h-[100%] px-[5px] text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:border-[1px] focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500`


    let arr = [1, 2, 3, 4, 5, 6, 7];
    let row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]


    const onClick = (index, index1) => {
        let obj = { row: index, column: index1 }
        setFocusedItem(obj)
    }


    const Item = (props) => {

        const [showDD, setShowDD] = useState(false);
        const [showDD1, setShowDD1] = useState(false);
        const [type, setType] = useState('input');
        const [selectedDD, setSelectedDD] = useState('');

        const inputRef = useRef(null);


        useEffect(() => {
            if (props.index1 === 4 || props.index1 === 5 || props.index1 === 6 || props.index1 === 7) {
                setType('btn')
            }
            if (props.index1 === 1) {
                setType('comment')
            }
        }, [])

        useEffect(() => {
            if (focusedItem.row === props.index && focusedItem.column === props.index1 && type == "btn") {
                setShowDD(true)
            }
        }, [focusedItem, type])


        // const onClick = (index, index1) => {
        //     let obj = { row: index, column: index1 }
        //     setFocusedItem(obj)
        // }

        const onBlur = () => {
            // setShowDD(false)
            // setShowDD1(false)
        }

        const Dropdown = () => {
            const btn = "w-[90%] h-[30px] flex items-center justify-center z-50 cursor-pointer text-[#fff] text-sm "
            return (
                <div className="w-[200px] h-[200px] bg-white  absolute z-50 bottom-[0px] rounded-sm p-[10px] flex flex-wrap items-center justify-center " >
                    <button className={`${btn} ${doneClr} `}
                        onClick={() => { setSelectedDD("Done"); setShowDD(false) }} >
                        Done
                    </button>
                    <button className={`${btn} ${workingClr} `}
                        onClick={() => { setSelectedDD("Working"); setShowDD(false) }}
                    >
                        Working
                    </button>
                    <button className={`${btn} ${revisedClr} `}
                        onClick={() => { setSelectedDD("Revised"); setShowDD(false) }}
                    >
                        Revised
                    </button>
                    <button className={`${btn} ${approvalClr} `}
                        onClick={() => { setSelectedDD("Approval"); setShowDD(false) }}
                    >
                        Approval
                    </button>
                </div>
            )
        }

        const Dropdown1 = () => {
            const text = "text-[#fff] text-sm "
            const div = "w-[90%] h-[30px] bg-green-500 flex items-center justify-center z-50 cursor-pointer "
            return (
                <div className="w-[200px] h-[100px] bg-white  absolute z-50 bottom-[0px] rounded-sm p-[10px] flex flex-wrap items-center justify-center " >
                    <div className={`${div}`} >
                        <h1 className={text} >Paid</h1>
                    </div>
                    <div className={`${div}`} >
                        <h1 className={text} >Unpaid</h1>
                    </div>
                </div>
            )
        }

        return (
            <div className={`${(focusedItem.row === props.index) ? focusedBg : bg} ${div2} border-[0px]  ${props.classname} `}
            >
                {
                    showDD &&
                    <Dropdown />
                }
                {
                    showDD1 &&
                    <Dropdown1 />
                }
                {
                    (type === "input") &&
                    <input type={'text'}
                        ref={inputRef}
                        
                        className={` ${inputClass} ${props.verticalLast ? '' : ' border-b-[0px] '} ${props.horizontalLast ? ' ' : ' border-r-[0px] '}  ${(props.index1 === 2) ? ' text-transparent' : font} `}
                        defaultValue={props.value}
                        onBeforeInput={() => {
                            console.log("gg")
                        }}
                        onFocus={async () => {
                            // setTimeout(() => {
                            //     let obj = { row: props.index, column: props.index1 }
                            //     setFocusedItem(obj)
                            //   }, "1000")
                        }}

                        onKeyDownCapture={() => {
                            console.log('key down')
                        }}
                    >
                    </input>
                }
                {
                    (type === "btn") &&
                    <input type={'button'}
                        className={` ${inputClass} ${props.verticalLast ? '' : ' border-b-[0px] '} ${props.horizontalLast ? ' ' : ' border-r-[0px] '}  ${(props.index1 === 2) ? ' text-transparent' : font} `}
                        value={selectedDD}
                        onClick={() => {
                            onClick(props.index, props.index1)
                        }}
                    >
                    </input>
                }

            </div>
        )
    }

    return (
        <div className=" border-[0px] z-50 px-[5px] py-[5px] w-[100%] relative  " >
            <div className={`${div1} relative`} >
                {
                    header.map((x, index1) => {
                        let classname = ""
                        if (index1 === 0) {
                            classname = " min-w-[500px]"
                        }
                        else if (index1 === 1) {
                            classname = " min-w-[100px]"
                        }
                        else if (index1 === 3) {
                            classname = " min-w-[150px] "
                        }
                        else {
                            classname = " min-w-[100px] "
                        }
                        return (
                            <div className={`${div2} ${classname} border-[0.5px] px-[5px] ${bg}`} >
                                <h1 className="text-white " >{x}</h1>
                            </div>
                        )
                    })
                }
            </div>
            {
                Sheet?.data?.map((x, index) => {
                    return (
                        <div className={`${div1} relative `} >
                            {
                                x.map((r, index1) => {
                                    let classname = ""
                                    let verticalLast
                                    let horizontalLast
                                    if (Sheet?.data?.length === index + 1) {
                                        verticalLast = true;
                                    } else {
                                        verticalLast = false
                                    }
                                    if (Sheet?.data[index].length === index1 + 1) {
                                        horizontalLast = true;
                                    } else {
                                        horizontalLast = false
                                    }

                                    if (index1 === 0) {
                                        classname = " min-w-[500px]"
                                    }
                                    else if (index1 === 1) {
                                        classname = " min-w-[100px]"
                                    }
                                    else if (index1 === 3) {
                                        classname = " min-w-[150px] "
                                    }
                                    else {
                                        classname = " min-w-[100px] "
                                    }
                                    return (
                                        <>
                                            {
                                                (index1 === 1) ?
                                                    <div className={`${div2} ${classname} border-[0.5px] px-[5px] ${(focusedItem.row === index) ? focusedBg : bg} flex items-center justify-center`}
                                                        onClick={() => {
                                                            onClick(index, index1)
                                                        }}
                                                    >
                                                        <FaRegComment
                                                            className=" text-[20px] text-[#fff] "
                                                        />
                                                    </div> :
                                                    <Item
                                                        classname={classname}
                                                        verticalLast={verticalLast}
                                                        horizontalLast={horizontalLast}
                                                        value={r?.value}
                                                        index={index}
                                                        index1={index1}
                                                    />
                                            }
                                        </>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Spreadsheet
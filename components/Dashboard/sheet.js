import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as dashboardAction from '../../redux/action/dashboard';
import axios from "axios";

import { Spreadsheet } from "react-spreadsheet";

const Sheet = (props) => {

    const dispatch = useDispatch()
    const headerbox = " bg-gray-600 text-white border-[500px] "
    const classNameItem = " max-w-[400px] min-w-[300px] w-[300px] text-[14px] px-[5px] "
    const Tasks = useSelector(state => state.dashboard.Task);
    const Sheet_ = useSelector(state => state.dashboard.Sheet);
    const Titles = [`Item`, "Comment", "STARTING", "Clients", "Script", "Voice Over", "Video", "Thumbnaiil", "Uploaded", "SCRIPT PAID", "CLIENT PAID"]

    const [data, setData] = useState([[{ value: "" }], [{ value: "" }]]);

    //console.log(Tasks[0].title)

    const GetValue = (index, rowIndex) => {
        let taskName = Tasks[rowIndex]?.title
        let channelName = Tasks[rowIndex]?.channelName
        if (index == 0) {
            return taskName
        }
        if (index == 3) {
            return channelName
        }
        return ""
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         dispatch(dashboardAction.updateTask(data))
    //         // console.log("Hello mf")
    //     }, 5000)
    // }, [])



    const BindData = async () => {
        const row = 10;
        const column = Tasks?.length + 1;
        let arr = []
        for (let i = 0; i < column; i++) {
            let Row = []
            for (let j = 0; j < row; j++) {
                console.log("GG :", GetValue(j, 0))
                console.log("PP :", Tasks[0]?.title)
                let obj = {
                    value: GetValue(j, i),
                    className: j == 0 ? classNameItem : " max-w-[150px] text-[14px] px-[5px] "
                }
                Row.push(obj);
            }
            arr.push(Row);
        }
        await setData(arr)
        //await dispatch(dashboardAction.updateTask(data))
    }

    useEffect(() => {
        // setData(Sheet_)
        BindData()
    }, [])



    // const [data, setData] = useState([
    //     [
    //         {
    //             value: "NASA warns of horrific solar flares! Earth will be impacted",
    //             className: classNameItem
    //         },
    //         {
    //             value: ""
    //         },
    //         {}
    //     ],
    //     [
    //         { value: "Kyle Busch under contract with RCR under these 5 conditions!", className: classNameItem },
    //         { value: "" }
    //     ],
    //     [{ value: "Why El Chapo will never escape from his new Prison Cell", className: classNameItem },
    //     { value: "GG" }
    //     ],
    //     [{ value: "Is A NASCAR SPLIT Possible? Or Just An OVERREACTION?", className: classNameItem }, { value: "" }],
    //     [{ value: "", className: classNameItem }, { value: "" }],
    //     [{ value: "", className: classNameItem }, { value: "" }],
    //     [{ value: "", className: classNameItem }, { value: "" }],
    //     [{ value: "", className: classNameItem }, { value: "" }],
    //     [{ value: "", className: classNameItem }, { value: "" }],
    //     [{ value: "", className: classNameItem }, { value: "" }],
    // ])
    const header = [
        { value: "Item", className: headerbox + " ", active: true, Dimensions: { width: 200, height: 300 } },
        { value: "Comment", className: headerbox },
        { value: "STARTING", className: headerbox, },
        { value: "Clients", className: headerbox, },
        { value: "Script", className: headerbox, },
        { value: "Voice Over", className: headerbox, },
        { value: "Video", className: headerbox, },
        { value: "Thumbnail", className: headerbox, },
        { value: "Uploaded", className: headerbox, },
        { value: "SCRIPT PAID", className: headerbox, },
        { value: "CLIENT PAID", className: headerbox, }
    ]

    const DataEditor = (item) => {
        console.log("GG :", item.cell)
        item.onChange
        return (
            <div className="border-green-500" >
                {/* <h1 className=" text-white " >{item.cell.value}</h1> */}
            </div>
        )
    }

    const updateTask = (arr) => {

    }

    return (
        <Spreadsheet
            // hideColumnIndicators
            columnLabels={Titles}
            //rowLabels={["", "", "", "", "", "", "", "", ""]}
            // hideRowIndicators
            data={data}
            className=" text-[#000] "
            darkMode={true}
            onChange={async (item) => {
                console.log(item);
                setData(item)
                await dispatch(dashboardAction.updateTask(item))
            }}
        //  DataEditor={DataEditor}
        // Cell={() =>
        //     <div className=" min-w-[100px] h-[50px] border-[1px] " >

        //     </div>
        // }
        />
    )
}

export default Sheet;
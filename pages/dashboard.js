import React, { useState, useEffect } from "react";
import Header from "../components/header";
import {
    FaEllipsisH,
    FaAngleDown,
    FaAngleUp,
    FaThLarge,
    FaSnapchatGhost,
    FaCannabis,
    FaEnvelopeOpenText,
    FaUserPlus,
    FaSearch,
    FaPlus,
    FaFilter,
    FaBook,
    FaFolderOpen,
    FaStar,
    FaAlignRight,
    FaAngleRight,
    FaExpand,
    FaYoutube,
    FaCheck,
    FaChevronRight,
    FaChevronDown,
    FaRegCommentAlt
} from "react-icons/fa";
import DashboardModal from "../components/modal";
//import ClientsType from "../constants/ClientsType";
//import DashboardData from "../constants/DashboardData";
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import * as dashboardAction from '../redux/action/dashboard';
import Avatar, { ConfigProvider } from 'react-avatar';
import Inbox from "../components/Inbox/Inbox";
import Checkbox from '@mui/material/Checkbox';
import SubTable from "../components/TableComponents/Subtable";


const Dashboard = () => {
    const dispatch = useDispatch();
    const [WorkspaceName, SetWorkspaceName] = useState("My Workspace");
    const [workSpaceModal, setWorkSpaceModal] = useState(false);
    const [notfFocused, setNotfFocused] = useState(false);
    const [dashBFocused, setDashBFocused] = useState(false);
    const [inboxFocused, setInboxFocused] = useState(false);
    const [myDeskFocused, setMyDeskFocused] = useState(false);
    const [InviteFocused, setInviteFocused] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const focusedColor = "#138D75"
    const [clientIndex, setClientIndex] = useState(0);
    const [iconIndex, setIconIndex] = useState(0);

    const DashboardData = useSelector(state => state.dashboard.Task);
    const ClientsType = useSelector(state => state.dashboard.ClientType);

    const ProjectGroup = [
        {
            name: "Active Projects",
            items: DashboardData.filter(Active).length,
            subItems: DashboardData.filter(Active).length * 4
        },
        {
            name: "Finished Projects",
            items: DashboardData.filter(Completed).length,
            subItems: DashboardData.filter(Completed).length * 4
        }
    ]


    //#1C2833 hoverButton
    //#138D75 FocusedIcon

    function Active(x) {
        if (ClientsType.length) {
            if (x.completed === false && x.clientType == ClientsType[clientIndex].clientType) {
                return x
            }
        }
    }
    function Completed(x) {
        if (ClientsType.length) {
            if (x.completed === true && x.clientType == ClientsType[clientIndex].clientType) {
                return x
            }
        }
    }

    useEffect(() => {
        dispatch(dashboardAction.getTask());
        dispatch(dashboardAction.getClientType());
    }, [])

    const IconTip = (props) => {
        return (
            <div className="bg-white px-[10px] py-[2px] pb-[5px] rounded-lg"
                style={{ position: "absolute", left: 50, }}
            >
                <h1 className="text-[#17202A] font-semibold text-sm">{props.title}</h1>
            </div>
        )
    }

    const Dashboard_ = (props) => {
        const [active, setActive] = useState(0); //Active Project Finished project index
        const [taskIndex, setTaskIndex] = useState(null); //MouseOver on Card
        const [showSubTableIndex, setShowSubtableIndex] = useState(null); //show subtable of Task
        const [selectedData, setSelectedData] = useState(null);
        const [showDashboardModal, setShowDashboardModal] = useState(false);
        const customStyles = {
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                // backgroundColor: 'rgba(20,90,50,1)'
                background: "linear-gradient(#0B5345, #154360)"
            },
            content: {
                // top: '50%',
                // left: '50%',
                // right: 'auto',
                // bottom: 'auto',
                // marginRight: '-50%',
                // transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(23,32,42,1)',
                borderWidth: 0
            },
        };

        const Rows = [
            {
                name: "checkbox",
            },
            {
                name: "Item",
            },
            {
                name: "comment",
            },
            {
                name: "STARTING",
            },
            {
                name: "Clients",
            },
            {
                name: "Script",
            },
            {
                name: "Voice Over",
            },
            {
                name: "Video",
            },
            {
                name: "Thumbnail",
            },
            {
                name: "Uploaded",
            },
            {
                name: "SCRIPT PAID",
            },
            {
                name: "CLIENT PAID",
            }
        ];

        return (
            <div className="h-[100%] w-[100%] bg-[rgba(19,141,117,0.1)] border-[0px]  mt-[50px] fixed overflow-y-auto"
                style={(typeof window !== 'undefined') ? { width: window.innerWidth - 370 } : null}
            >
                {
                    ClientsType.length ?
                        <div className="w-[100%] h-[100px] border-[0px] pl-[10px] pt-[5px] flex bg-[rgba(19,141,117,0.1)]" >
                            <h1 className="text-[#fff] text-2xl" >{ClientsType[clientIndex].clientType.toUpperCase()}</h1>
                            <FaStar
                                size={15}
                                color="gray"
                                className="mt-[9px] ml-[8px]"
                            />
                        </div> :
                        <div className="w-[100%] h-[100px] border-[0px] pl-[10px] pt-[5px] flex bg-[rgba(19,141,117,0.1)]" >
                        </div>
                }
                <div className="w-[100%] rounded-lg border-[0px] mb-[100px] pt-[20px] overflow-hidden" >
                    {
                        ProjectGroup.map((item, index) => {
                            const color = (index === 0) ? "#5DADE2" : "#28B463";
                            // const Data = (item.name === "Active Projects") ? DashboardData.ActiveProjects : DashboardData.FinishedProjects;
                            const Data = (item.name === "Active Projects") ? DashboardData.filter(Active) : DashboardData.filter(Completed);
                            return (
                                (active === index) ?
                                    <div key={item.name} className="border-[0px] overflow-y-auto w-[100%]  mb-[50px] bg-[rgba(0,0,0,0.5)] pt-[5px] px-[5px] pb-[15px] rounded-lg mt-[10px] ml-[5px] overflow-hidden overflow-x-auto">
                                        <div className="flex" >
                                            <FaAngleDown
                                                size={20}
                                                color={color}
                                                className="mt-[8px]"
                                                onClick={() => setActive(null)}
                                            />
                                            <h1 onClick={() => setActive(null)} style={{ color: color }} className="text-[20px] ml-[10px] cursor-pointer  ">{item.name}</h1>
                                            <h1 className="text-xs text-[#B3B6B7] mt-[9px] ml-[5px]" >{item.items + " items / " + item.subItems + " subitems"}</h1>
                                        </div>
                                        <div className="border-[0px] w-[100%] overflow-y-auto border-yellow-600 p-[5px] pt-[10px]" >
                                            <div className="w-[100%] h-[50px] bg-[#34495E]  border-[0px] flex " >
                                                {
                                                    Rows.map((i, index) => {
                                                        return (
                                                            <>
                                                                <div className="flex w-[100%] h-[50px]  " >
                                                                    {
                                                                        i.name == "checkbox" &&
                                                                        <div key={index} className="w-[50px] border-r-[1px] border-[1px] h-[100%] bg-[#2C3E50] flex items-center justify-center " >
                                                                            <Checkbox
                                                                                size="medium"
                                                                            />
                                                                        </div>
                                                                    }
                                                                    {
                                                                        i.name == "Item" &&
                                                                        <div key={index} className="w-[550px] border-l-[0px] border-[1px] -ml-[0px] h-[100%] bg-[#2C3E50] flex items-center justify-center " >
                                                                            <h1 className="text-white text-left text-[18px] font-medium " >{i.name}</h1>
                                                                        </div>
                                                                    }
                                                                    {
                                                                        i.name == "STARTING" &&
                                                                        <div key={index} className="w-[120px] border-l-[0px] border-[1px] -ml-[26px] h-[100%] bg-[#2C3E50] flex items-center justify-center " >
                                                                            <h1 className="text-white text-left text-[16px] font-medium " >{i.name}</h1>
                                                                        </div>
                                                                    }
                                                                    {
                                                                        i.name == "Clients" &&
                                                                        <div key={index} className="w-[120px] border-l-[0px] border-[1px] -ml-[0px] h-[100%] bg-[#2C3E50] flex items-center justify-center " >
                                                                            <h1 className="text-white text-left text-[16px] font-medium " >{i.name}</h1>
                                                                        </div>
                                                                    }
                                                                    {
                                                                        i.name == "Script" &&
                                                                        <div key={index} className="w-[120px] border-l-[0px] border-[1px] -ml-[0px] h-[100%] bg-[#2C3E50] flex items-center justify-center " >
                                                                            <h1 className="text-white text-left text-[16px] font-medium " >{i.name}</h1>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }
                                                <div className="" >

                                                </div>
                                            </div>
                                            {
                                                Data.map((item, index) => {
                                                    console.log("abcd :", item);
                                                    let Obj = item;

                                                    if (Obj.title.length > 65) {
                                                        let text = Obj.title.substring(0, 63) + "...";
                                                        Obj.title = text
                                                    }
                                                    const getColor = (type) => {
                                                        if (type === "Done") {
                                                            return "green"
                                                        }
                                                        if (type === "Approval") {
                                                            return "orange"
                                                        }
                                                        if (type === "working on it") {
                                                            return "yellow"
                                                        }
                                                        if (type === "stuck") {
                                                            return "red"
                                                        }
                                                    }

                                                    const getFontColor = (type) => {
                                                        if (type === "Done") {
                                                            return "white"
                                                        }
                                                        if (type === "Approval") {
                                                            return "black"
                                                        }
                                                        if (type === "working on it") {
                                                            return "black"
                                                        }
                                                        if (type === "stuck") {
                                                            return "white"
                                                        }
                                                    }
                                                    return (
                                                        <div key={index} >
                                                            <div className="w-[100%] bg-[#34495E] border-[0px] flex " >
                                                                {
                                                                    Rows.map((i, index1) => {
                                                                        return (
                                                                            <div className="border-[0px]" key={index1} >
                                                                                <div className="flex w-[100%] h-[50px] border-[0px] " >
                                                                                    {
                                                                                        i.name == "checkbox" &&
                                                                                        <div key={index} className="w-[50px] border-r-[1px] border-t-[0px] border-[1px] h-[100%] bg-[#2C3E50] flex items-center justify-center " >
                                                                                            <Checkbox
                                                                                                size="medium"
                                                                                                className=""
                                                                                            />
                                                                                        </div>
                                                                                    }
                                                                                    {
                                                                                        i.name == "Item" &&
                                                                                        <div key={index} className="w-[500px] border-r-[1px] border-b-[1px] h-[100%] bg-[#2C3E50] -ml-[0px] flex items-center justify-left " >
                                                                                            {
                                                                                                (showSubTableIndex == index) ?
                                                                                                    <FaChevronDown
                                                                                                        size={25}
                                                                                                        color='white'
                                                                                                        className="mt-[8px] ml-[2px] mr-[2px] pb-[5px] font-light"
                                                                                                        onClick={() => {
                                                                                                            if (showSubTableIndex == index) {
                                                                                                                setShowSubtableIndex(null)
                                                                                                                return
                                                                                                            }
                                                                                                            setShowSubtableIndex(index)
                                                                                                        }}
                                                                                                    />
                                                                                                    :
                                                                                                    <FaChevronRight
                                                                                                        size={25}
                                                                                                        color='white'
                                                                                                        className="mt-[8px] ml-[2px] mr-[2px] pb-[5px] font-light"
                                                                                                        onClick={() => {
                                                                                                            if (showSubTableIndex == index) {
                                                                                                                setShowSubtableIndex(null)
                                                                                                                return
                                                                                                            }
                                                                                                            setShowSubtableIndex(index)
                                                                                                        }}
                                                                                                    />
                                                                                            }
                                                                                            <h1 className="text-white text-left text-[15px] font-medium " >{Obj.title}</h1>
                                                                                        </div>
                                                                                    }
                                                                                    {
                                                                                        i.name == "comment" &&
                                                                                        <div key={index} className="w-[50px] border-l-[0px] border-t-[0px] border-[1px] h-[100%] bg-[#2C3E50] ml-[0px] flex items-center justify-center " >
                                                                                            <FaRegCommentAlt
                                                                                                size={25}
                                                                                                color='white'
                                                                                                className="mt-[8px] ml-[2px] mr-[2px] pb-[5px] font-light"
                                                                                                onClick={() => {
                                                                                                }}
                                                                                            />
                                                                                        </div>
                                                                                    }
                                                                                    {
                                                                                        i.name == "STARTING" &&
                                                                                        <div key={index} className="w-[120px] border-l-[0px] border-t-[0px] border-[1px] -ml-[0px] h-[100%] bg-[#2C3E50] flex items-center justify-center " >
                                                                                            {/* <h1 className="text-white text-left text-[16px] font-medium " >{i.name}</h1> */}
                                                                                        </div>
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                            {
                                                                (showSubTableIndex == index) &&
                                                                <div className="w-[90%] h-[400px] ml-[30px] border-l-[3px] border-[#1ABC9C] flex items-center justify-end  " >
                                                                    <SubTable
                                                                        className="w-[90%] h-[80%] border-[1px] "
                                                                    />
                                                                </div>
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div> :
                                    <div className=" w-[100%] border-[0px] bg-[rgba(0,0,0,0.5)] pt-[5px] px-[5px] pb-[15px] rounded-lg mt-[10px] ml-[5px] ">
                                        <div className="flex" >
                                            <FaAngleRight
                                                size={20}
                                                color={color}
                                                className="mt-[8px]"
                                                onClick={() => {
                                                    window.scrollTo({
                                                        top: 0,
                                                        behavior: 'smooth'
                                                        /* you can also use 'auto' behaviour
                                                           in place of 'smooth' */
                                                    });
                                                    if (item.items) {
                                                        setActive(index);
                                                    }
                                                }}
                                            />
                                            <h1 onClick={() => {
                                                if (item.items) {
                                                    setActive(index);
                                                }
                                            }
                                            }
                                                style={{ color: color }} className="text-[20px] ml-[10px] cursor-pointer  ">{item.name}</h1>
                                        </div>
                                        <h1 className="text-xs text-[#B3B6B7] ml-[35px]" >{item.items + " items / " + item.subItems + " subitems"}</h1>
                                    </div>
                            )
                        })
                    }
                </div >
            </div >
        )
    }


    return (
        <ConfigProvider colors={['red', 'green', 'blue']}>
            <div className="flex-col overflow-hidden">
                <Header />
                <div className="flex  overflow-hidden">
                    <div className="w-[60px] h-screen bg-[#17202A] justify-end flex-col border-[0px] "
                        onFocus={() => console.log("view focused")}
                    >
                        <div className="items-center w-[60px] h-[65%]">
                            <FaThLarge
                                color={dashBFocused || (iconIndex === 0) ? focusedColor : "#fff"}
                                size={25}
                                className="ml-[15px] mt-[60px] cursor-pointer"
                                onClick={() => {
                                    setIconIndex(0)
                                }}
                                onMouseOver={() => {
                                    setDashBFocused(true)
                                }}
                                onMouseOut={() => {
                                    setDashBFocused(false)
                                }}
                            />
                            {
                                dashBFocused &&
                                <IconTip
                                    title={"Dashboard"}
                                />
                            }
                            <FaSnapchatGhost
                                color={notfFocused || (iconIndex === 1) ? focusedColor : "#fff"}
                                size={25}
                                className="ml-[15px] mt-[20px] cursor-pointer"
                                onClick={() => {
                                    setIconIndex(1)
                                }}
                                onMouseOver={() => {
                                    setNotfFocused(true)
                                }}
                                onMouseOut={() => {
                                    setNotfFocused(false)
                                }}
                            />
                            {
                                notfFocused &&
                                <IconTip
                                    title={"Notification"}
                                />
                            }
                            <FaEnvelopeOpenText
                                color={inboxFocused || (iconIndex === 2) ? focusedColor : "#fff"}
                                size={25}
                                className="ml-[15px] mt-[20px] cursor-pointer"
                                onClick={() => {
                                    setIconIndex(2)
                                }}
                                onMouseOver={() => {
                                    setInboxFocused(true)
                                }}
                                onMouseOut={() => {
                                    setInboxFocused(false)
                                }}
                            />
                            {
                                inboxFocused &&
                                <IconTip
                                    title={"Inbox"}
                                />
                            }
                            <FaCannabis
                                color={myDeskFocused || (iconIndex === 3) ? focusedColor : "#fff"}
                                size={25}
                                className="ml-[15px] mt-[20px] cursor-pointer"
                                onClick={() => {
                                    setIconIndex(3)
                                }}
                                onMouseOver={() => {
                                    setMyDeskFocused(true)
                                }}
                                onMouseOut={() => {
                                    setMyDeskFocused(false)
                                }}
                            />
                            {
                                myDeskFocused &&
                                <IconTip
                                    title={"My Work"}
                                />
                            }
                        </div>
                        <div className="items-center w-[60px] h-[35%] justify-end">
                            <FaUserPlus
                                color={InviteFocused ? focusedColor : "#fff"}
                                size={25}
                                className="ml-[15px] mt-[20px] cursor-pointer"
                                onMouseOver={() => {
                                    setInviteFocused(true);
                                }}
                                onMouseOut={() => {
                                    setInviteFocused(false)
                                }}
                            />
                            {
                                InviteFocused &&
                                <IconTip
                                    title={"Invite"}
                                />
                            }
                            <FaSearch
                                color={searchFocused ? focusedColor : "#fff"}
                                size={25}
                                className="ml-[15px] mt-[20px] cursor-pointer"
                                onMouseOver={() => {
                                    setSearchFocused(true)
                                }}
                                onMouseOut={() => {
                                    setSearchFocused(false)
                                }}
                            />
                            {
                                searchFocused &&
                                <IconTip
                                    title={"Search"}
                                />
                            }
                        </div>
                    </div>
                    {
                        (iconIndex === 0) &&

                        <div className="w-[300px] px-[10px] border-[0px]  h-screen bg-gray-600 items-center ">
                            {workSpaceModal &&
                                <div className="h-[300px] w-[300px] bg-[#fff] border-2 absolute top-[135px] left-[110px] rounded-lg">

                                </div>
                            }
                            <div className="mt-[50px] w-[300px] h-[40px] flex justify-between p-[10px] text-sm items-center text-left">
                                <h1 className="text-[#fff] mx-[10px]">Workspace</h1>
                                <FaEllipsisH
                                    color="#fff"
                                    size={15}
                                    className="mx-[10px]"
                                />
                            </div>
                            <div className="w-[220px] h-[40px] mx-[20px] border-[1px] self-center rounded-lg justify-between items-center flex hover:bg-[#5B6168] cursor-pointer opacity-100"
                                onClick={() => setWorkSpaceModal(!workSpaceModal)}
                            >
                                <div className="w-[30px] h-[30px] border-2 ml-[5px] rounded bg-[#fff] justify-center items-center text-center" >
                                    <h1 className="text-[#17202A] font-bold text-lg">{WorkspaceName.slice(0, 1)}</h1>
                                </div>
                                <h1 className="text-[#fff] italic font-bold text-[15px]">{WorkspaceName}</h1>
                                {
                                    !workSpaceModal ?
                                        <FaAngleDown
                                            color="#fff"
                                            size={15}
                                            className="mx-[10px]"
                                        /> :
                                        <FaAngleUp
                                            color="#fff"
                                            size={15}
                                            className="mx-[10px]"
                                        />
                                }
                            </div>
                            <div className="w-[100%] border-b-[1px] border-[white] self-center mt-[10px] pl-[20px] pt-[10px] pb-[30px]">
                                <div className="flex cursor-pointer border-[0px]  mr-[40px] pt-[4px] pb-[5px] hover:bg-[#5B6168]  rounded-lg pl-[10px]" >
                                    <FaPlus
                                        color="#fff"
                                        size={12}
                                        className="mt-[7px]"
                                    />
                                    <h1 className="ml-[10px] text-[#fff]" >Add</h1>
                                </div>
                                <div className="flex cursor-pointer border-[0px] pb-[5px] pt-[4px]  hover:bg-[#5B6168] mr-[40px] mt-[5px] pl-[10px] rounded-lg" >
                                    <FaFilter
                                        color="#fff"
                                        size={12}
                                        className="mt-[7px]"
                                    />
                                    <h1 className="ml-[10px] text-[#fff]" >Filters</h1>
                                </div>
                            </div>
                            <div className="pt-[30px]">
                                {
                                    ClientsType.map(((item, index) => (
                                        <div key={index} className="flex border-[0px] mt-[2px] pt-[2px] pb-[4px] px-[10px] ml-[25px] mr-[40px] rounded-lg hover:bg-[#5B6168] cursor-pointer"
                                            style={{ backgroundColor: (clientIndex === index) ? "#138D75" : null }}
                                            onClick={() => setClientIndex(index)}
                                        >
                                            <FaFolderOpen
                                                color="#fff"
                                                size={15}
                                                className="mt-[7px]"
                                            />
                                            <p className="ml-[5px] text-white" >{item.clientType.toUpperCase()}</p>
                                        </div>
                                    )))
                                }
                            </div>
                        </div>
                    }
                    {
                        (iconIndex === 0) &&

                        <div className="h-screen bg-[#000] w-[80%] border-[0px] px-[10px]"
                            style={{
                                backgroundImage: `url("https://www.icegif.com/wp-content/uploads/2022/05/icegif-507.gif")`,
                            }}
                        >
                            {/* Dashboard Content here */}
                            <Dashboard_ />
                        </div>
                    }
                    {
                        (iconIndex === 1) &&
                        <Inbox
                            type="Notification"
                        />
                    }
                    {
                        (iconIndex === 2) &&
                        <Inbox
                            type="Inbox"
                        />
                    }
                </div>
            </div>
        </ConfigProvider>

    );
};

export default Dashboard;
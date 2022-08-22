import React, { useState } from "react";
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
    FaYoutube
} from "react-icons/fa";
import DashboardModal from "../components/modal";


const Dashboard = () => {

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
    const [showDashboardModal, setShowDashboardModal] = useState(false)

    const clients = [
        {
            name: "Tech Clients"
        },
        {
            name: "Misc. Clients"
        },
        {
            name: "Crypto Clients"
        },
        {
            name: "NFT Clients"
        },
        {
            name: "Others"
        }
    ]

    const ProjectGroup = [
        {
            name: "Active Projects",
            items: 13,
            subItems: 125
        },
        {
            name: "Finished Projects",
            items: 72,
            subItems: 2946
        }
    ]

    const DashboardData = [
        {
            id: 1,
            title: "NASA warns of horrific solar flares! Earth will be impacted",
            Script: "Done",
            VoiceOver: "Approval",
            video: "working on it",
            Thumbnail: "working on it"
        },
        {
            id: 2,
            title: "China Rocket Crashes Back on Earth, Draws NASA Rebuke",
            Script: "Done",
            VoiceOver: "working on it",
            video: "working on it",
            Thumbnail: "working on it"
        },
        {
            id: 3,
            title: "Israeli high-tech on edge as Wall Street storm approaches",
            Script: "Done",
            VoiceOver: "Done",
            video: "working on it",
            Thumbnail: "stuck"
        },
        {
            id: 4,
            title: "NASA warns of horrific solar flares! Earth will be impacted",
            Script: "Done",
            VoiceOver: "Approval",
            video: "working on it",
            Thumbnail: "working on it"
        },
        {
            id: 5,
            title: "China Rocket Crashes Back on Earth, Draws NASA Rebuke",
            Script: "Done",
            VoiceOver: "working on it",
            video: "working on it",
            Thumbnail: "working on it"
        },
        {
            id: 6,
            title: "Israeli high-tech on edge as Wall Street storm approaches",
            Script: "Done",
            VoiceOver: "Done",
            video: "working on it",
            Thumbnail: "stuck"
        },
        {
            id: 7,
            title: "China Rocket Crashes Back on Earth, Draws NASA Rebuke",
            Script: "Done",
            VoiceOver: "working on it",
            video: "working on it",
            Thumbnail: "working on it"
        },
        {
            id: 8,
            title: "Israeli high-tech on edge as Wall Street storm approaches",
            Script: "Done",
            VoiceOver: "Done",
            video: "working on it",
            Thumbnail: "stuck"
        },
    ]

    //#1C2833 hoverButton
    //#138D75 FocusedIcon

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
        const [active, setActive] = useState(0);
        const [taskIndex, setTaskIndex] = useState(null);
        return (
            <div className="h-[100%] w-[100%] bg-[rgba(19,141,117,0.1)] mt-[50px] fixed overflow-y-auto"
                style={(typeof window !== 'undefined') ? { width: window.innerWidth - 370 } : null}
            // w-[1160px] 
            >
                <div className="w-[100%] h-[100px] border-[0px] pl-[10px] pt-[5px] flex bg-[rgba(19,141,117,0.1)]" >
                    <h1 className="text-[#fff] text-2xl" >{clients[clientIndex].name.toUpperCase()}</h1>
                    <FaStar
                        size={15}
                        color="gray"
                        className="mt-[9px] ml-[8px] "
                    />
                </div>
                <div className="w-[100%] rounded-lg border-[0px] mb-[100px] pt-[20px] overflow-hidden" >
                    {
                        ProjectGroup.map((item, index) => {
                            const color = (index === 0) ? "#5DADE2" : "#28B463"
                            return (
                                (active === index) ?
                                    <div className="border-[0px] overflow-y-auto w-[100%]  mb-[50px] bg-[rgba(0,0,0,0.5)] pt-[5px] px-[5px] pb-[15px] rounded-lg mt-[10px] ml-[5px] overflow-hidden overflow-x-auto">
                                        <div className="flex" >
                                            <FaAngleDown
                                                size={20}
                                                color={color}
                                                className="mt-[8px]"
                                                onClick={() => setActive(null)}
                                            />
                                            <h1 style={{ color: color }} className="text-[20px] ml-[10px]  ">{item.name}</h1>
                                            <h1 className="text-xs text-[#B3B6B7] mt-[9px] ml-[5px]" >{item.items + " items / " + item.subItems + " subitems"}</h1>
                                        </div>
                                        <div className="border-[0px] w-[100%] flex overflow-y-auto border-yellow-600 p-[5px] flex-wrap " >
                                            {
                                                DashboardData.map((item, index) => {
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
                                                    return (
                                                        <div className="relative w-[200px] h-[250px] hover:border-[1px] cursor-pointer   mt-[50px] px-[10px] py-[5px] ml-[10px] bg-[rgba(255,255,255,0.5)] rounded-lg "
                                                            onMouseOver={() => setTaskIndex(index)}
                                                            onMouseOut={() => setTaskIndex(null)}
                                                            onClick={setShowDashboardModal(true)}
                                                            style={{
                                                                // backgroundImage: `url("https://c.tenor.com/VuQPPwDkIbsAAAAd/galaxy-space.gif")`,
                                                                opacity: (taskIndex === index) ? 1 : 0.5
                                                            }}
                                                        >
                                                            {/* {
                                                                (taskIndex === index) &&
                                                                <FaExpand
                                                                    size={50}
                                                                    color="#fff"
                                                                    className="absolute top-[150px] left-[100px]"
                                                                />
                                                            } */}

                                                            <div className="h-[100px]" >
                                                                <h1 className="text-left text-[#fff] italic leading-4 font-bold text-[13px] ">{item.title}</h1>
                                                            </div>
                                                            <table className="border-[0px] " >
                                                                <tr className="items-center mt-[5px]" >
                                                                    <td className="leading-4 text-[12px] pr-[10px] " >Script</td>
                                                                    <td className="leading-4 text-[12px] pl-[5px] pr-[5px]"
                                                                        style={{ backgroundColor: getColor(item.Script) }}
                                                                    >{item.Script}</td>
                                                                </tr>
                                                                <tr className="">
                                                                    <td className="leading-4 text-[12px] pr-[10px] " >VoiceOver</td>
                                                                    <td className="leading-4 text-[12px] pl-[5px] pr-[5px]"
                                                                        style={{ backgroundColor: getColor(item.VoiceOver) }}
                                                                    >{item.VoiceOver}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="leading-4 text-[12px] pr-[10px]"
                                                                    >Video</td>
                                                                    <td className="leading-4 text-[12px] pl-[5px] pr-[5px]"
                                                                        style={{ backgroundColor: getColor(item.video) }}
                                                                    >{item.video}</td>
                                                                </tr>
                                                                <tr className="" >
                                                                    <td className="leading-4 text-[12px] pr-[10px]]"
                                                                    >Thumbnail</td>
                                                                    <td className="leading-4 text-[12px] pl-[5px] pr-[5px]"
                                                                        style={{ backgroundColor: getColor(item.Thumbnail) }}
                                                                    >{item.Thumbnail}</td>
                                                                </tr>
                                                            </table>
                                                            {/* <FaYoutube
                                                                size={50}
                                                                color="#FF0000"
                                                            /> */}
                                                        </div>
                                                    )
                                                })
                                            }
                                            {/* <div className="w-[250px] h-[300px] mt-[50px] ml-[10px] bg-[rgba(255,255,255,0.5)] rounded-lg " >

                                            </div> */}
                                        </div>
                                    </div> :
                                    <div className=" w-[100%] border-[0px] bg-[rgba(0,0,0,0.5)] pt-[5px] px-[5px] pb-[15px] rounded-lg mt-[10px] ml-[5px] ">
                                        <div className="flex" >
                                            <FaAngleRight
                                                size={20}
                                                color={color}
                                                className="mt-[8px]"
                                                onClick={() => setActive(index)}
                                            />
                                            <h1 style={{ color: color }} className="text-[20px] ml-[10px]  ">{item.name}</h1>
                                        </div>
                                        <h1 className="text-xs text-[#B3B6B7] ml-[35px]" >{item.items + " items / " + item.subItems + " subitems"}</h1>
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }


    return (
        <div className="flex-col overflow-hidden">
            <Header />
            <DashboardModal
                visible={showDashboardModal}
                onClose={() => setShowDashboardModal(false)}
            />
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
                            clients.map(((item, index) => (
                                <div className="flex border-[0px] mt-[2px] pt-[2px] pb-[4px] px-[10px] ml-[25px] mr-[40px] rounded-lg hover:bg-[#5B6168] cursor-pointer"
                                    style={{ backgroundColor: (clientIndex === index) ? "#138D75" : null }}
                                    onClick={() => setClientIndex(index)}
                                >
                                    <FaFolderOpen
                                        color="#fff"
                                        size={15}
                                        className="mt-[7px]"
                                    />
                                    <p className="ml-[5px] text-white" >{item.name.toUpperCase()}</p>
                                </div>
                            )))
                        }
                    </div>
                </div>
                <div className="h-screen bg-[#000] w-[80%] border-[0px] px-[10px]"
                    style={{
                        backgroundImage: `url("https://www.icegif.com/wp-content/uploads/2022/05/icegif-507.gif")`,
                    }}
                >
                    {/* Dashboard Content here */}
                    <Dashboard_ />

                </div>
            </div>
        </div>

    );
};

export default Dashboard;
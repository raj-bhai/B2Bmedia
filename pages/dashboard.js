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
} from "react-icons/fa";


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

    const Dashboard = (props) => {
        const [active, setActive] = useState(null);
        return (
            <div className="w-[1110px] h-[100%] bg-[rgba(19,141,117,0.1)] mt-[50px] fixed">
                <div className="w-[100%] h-[100px] border-[0px] pl-[10px] pt-[5px] flex bg-[rgba(19,141,117,0.1)]" >
                    <h1 className="text-[#fff] text-2xl" >{clients[clientIndex].name.toUpperCase()}</h1>
                    <FaStar
                        size={15}
                        color="gray"
                        className="mt-[9px] ml-[8px] "
                    />
                </div>
                <div className="w-[100%] h-[100%] border-[0px] pt-[20px] " >
                    {
                        ProjectGroup.map((item, index) => {
                            const color = (index === 0) ? "#5DADE2" : "#28B463"
                            return (
                                (active === index) ?
                                    <div className="border-[1px] w-[100%] bg-[rgba(0,0,0,0.5)] pt-[5px] px-[5px] pb-[15px] rounded-lg mt-[10px] ml-[5px] overflow-x-auto ">
                                        <div className="flex" >
                                            <FaAngleDown
                                                size={20}
                                                color={color}
                                                className="mt-[8px]"
                                                onClick={() => setActive(null)}
                                            />
                                            <h1 style={{ color: color }} className="text-[20px] ml-[10px]  ">{item.name}</h1>
                                            <p className="text-xs text-[#B3B6B7] mt-[9px] ml-[5px]" >{item.items + " items / " + item.subItems + " subitems"}</p>
                                        </div>
                                        <table className="border-[0px] bg-[rgba(255,255,255,0.5)] ml-[5px] mt-[5px] rounded-lg" >
                                            <tr className="border-[0px] rounded-lg" >
                                                <th className="w-[600px] h-[50px] px-[5px] hover:bg-[#5B6168] cursor-pointer rounded-lg">Item</th>
                                                <th className=" w-[400px] h-[50px] px-[5px] text-left hover:bg-[#5B6168] cursor-pointer rounded-lg">Clients</th>
                                                <th className=" w-[300px] h-[50px] px-[5px] text-left hover:bg-[#5B6168] cursor-pointer rounded-lg">Starting date</th>
                                                <th className=" w-[200px] h-[50px] px-[5px] text-left hover:bg-[#5B6168] cursor-pointer rounded-lg">Script</th>
                                                <th className=" w-[200px] h-[50px] px-[5px] text-left hover:bg-[#5B6168] cursor-pointer rounded-lg">Voice Over</th>
                                                <th className=" h-[50px] px-[5px] text-left hover:bg-[#5B6168] cursor-pointer rounded-lg">Video</th>
                                                <th className="h-[50px] px-[5px] text-left hover:bg-[#5B6168] cursor-pointer rounded-lg">Thumbnail</th>
                                                <th className=" h-[50px] px-[5px] text-left hover:bg-[#5B6168] cursor-pointer rounded-lg">Uploaded</th>
                                            </tr>
                                            <tr>
                                                <td>Jill</td>
                                                <td>Smith</td>
                                                <td>50</td>
                                            </tr>
                                            <tr>
                                                <td>Eve</td>
                                                <td>Jackson</td>
                                                <td>94</td>
                                            </tr>
                                        </table>
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
                                        <p className="text-xs text-[#B3B6B7] ml-[35px]" >{item.items + " items / " + item.subItems + " subitems"}</p>
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
            <div className="flex border-2 overflow-hidden">
                <div className="w-[60px] h-screen bg-[#17202A] justify-end flex-col border-[1px] "
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
                <div className="h-screen bg-[#000] w-[80%] border-[1px] px-[10px]"
                    style={{
                        backgroundImage: `url("https://www.icegif.com/wp-content/uploads/2022/05/icegif-507.gif")`
                    }}
                >
                    {/* <div className="w-[100%] h-[100%] bg-[rgba(19,141,117,0.1)] mt-[50px] fixed">
                        <h3 className=" ml-[350px] mr-[600px] mt-[300px] text-[#fff] text-7xl italic bg-[#138D75] ">Coming Soon !</h3>
                    </div> */}
                    <Dashboard />
                </div>
            </div>
        </div>

    );
};

export default Dashboard;
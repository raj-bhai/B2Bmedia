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
    FaYoutube,
    FaCheck,
} from "react-icons/fa";
import DashboardModal from "../components/modal";
import ClientsType from "../constants/ClientsType";
import DashboardData from "../constants/DashboardData";
import Modal from 'react-modal';


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

    const Dashboard_ = (props) => {
        const [active, setActive] = useState(null); //Active Project Finished project index
        const [taskIndex, setTaskIndex] = useState(null); //MouseOver on Card
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
               background : "linear-gradient(#0B5345, #154360)"
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
        return (
            <div className="h-[100%] w-[100%] bg-[rgba(19,141,117,0.1)] border-[0px]  mt-[50px] fixed overflow-y-scroll"
                style={(typeof window !== 'undefined') ? { width: window.innerWidth - 370 } : null}
            >
                <Modal
                    isOpen={showDashboardModal}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={() => {
                        setShowDashboardModal(false);
                        setSelectedData(null)
                    }}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <DashboardModal
                        onClose={() => {
                            setShowDashboardModal(false);
                            setSelectedData(null)
                        }}
                        data={selectedData}
                    />
                </Modal>
                <div className="w-[100%] h-[100px] border-[0px] pl-[10px] pt-[5px] flex bg-[rgba(19,141,117,0.1)]" >
                    <h1 className="text-[#fff] text-2xl" >{ClientsType.clients[clientIndex].name.toUpperCase()}</h1>
                    <FaStar
                        size={15}
                        color="gray"
                        className="mt-[9px] ml-[8px]"
                    />
                </div>
                <div className="w-[100%] rounded-lg border-[0px] mb-[100px] pt-[20px] overflow-hidden" >
                    {
                        ProjectGroup.map((item, index) => {
                            const color = (index === 0) ? "#5DADE2" : "#28B463";
                            const Data = (item.name === "Active Projects") ? DashboardData.ActiveProjects : DashboardData.FinishedProjects;
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
                                            <h1 onClick={() => setActive(null)} style={{ color: color }} className="text-[20px] ml-[10px] cursor-pointer  ">{item.name}</h1>
                                            <h1 className="text-xs text-[#B3B6B7] mt-[9px] ml-[5px]" >{item.items + " items / " + item.subItems + " subitems"}</h1>
                                        </div>
                                        <div className="border-[0px] w-[100%] flex overflow-y-auto border-yellow-600 p-[5px] flex-wrap " >
                                            {
                                                Data.map((item, index) => {
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
                                                        <div className="relative w-[200px] h-[250px] hover:border-[1px] bg-gradient-to-r from-[#0B5345] to-[#154360] cursor-pointer mt-[50px] px-[10px] py-[5px] ml-[10px]  rounded-lg "
                                                            // bg-[rgba(11,83,69,1)]
                                                            onMouseOver={() => setTaskIndex(index)}
                                                            onMouseOut={() => setTaskIndex(null)}
                                                            onClick={() => {
                                                                setSelectedData(item);
                                                                setShowDashboardModal(true);
                                                            }
                                                            }
                                                            style={{
                                                                // backgroundImage: `url("https://c.tenor.com/VuQPPwDkIbsAAAAd/galaxy-space.gif")`,
                                                                opacity: (taskIndex === index) ? 1 : 0.8
                                                            }}
                                                        >
                                                            <div className="h-[100px]" >
                                                                <h1 className="text-left text-[#fff] italic leading-4 font-bold text-[13px] ">{item.title}</h1>
                                                            </div>
                                                            {
                                                                item.uploaded &&
                                                                <div className="flex absolute top-[100px] left-[-15px] bg-[rgba(236,240,241,0.7)] py-[10px] px-[40px] -rotate-45">
                                                                    <h1 className="text-[#1C2833] text-2xl font-bold" >Uploaded</h1>
                                                                    <FaCheck
                                                                        size={30}
                                                                        color='green'
                                                                        className="ml-[10px]"
                                                                    />
                                                                </div>
                                                            }
                                                            <table className="border-[0px] " >
                                                                <tr className="items-center mt-[5px]" >
                                                                    <td className="leading-4 text-white text-[12px] pr-[10px] " >Script</td>
                                                                    <td className="leading-4 text-[12px] pl-[5px] pr-[5px]"
                                                                        style={{ backgroundColor: getColor(item.Script), color: getFontColor(item.Script) }}
                                                                    >{item.Script}</td>
                                                                </tr>
                                                                <tr className="">
                                                                    <td className="leading-4 text-white text-[12px] pr-[10px] " >VoiceOver</td>
                                                                    <td className="leading-4 text-[12px] pl-[5px] pr-[5px]"
                                                                        style={{ backgroundColor: getColor(item.VoiceOver), color: getFontColor(item.VoiceOver) }}
                                                                    >{item.VoiceOver}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="leading-4 text-white text-[12px] pr-[10px]"
                                                                    >Video</td>
                                                                    <td className="leading-4 text-[12px] pl-[5px] pr-[5px]"
                                                                        style={{ backgroundColor: getColor(item.video), color: getFontColor(item.video) }}
                                                                    >{item.video}</td>
                                                                </tr>
                                                                <tr className="" >
                                                                    <td className="leading-4 text-white text-[12px] pr-[10px]]"
                                                                    >Thumbnail</td>
                                                                    <td className="leading-4 text-[12px] pl-[5px] pr-[5px]"
                                                                        style={{ backgroundColor: getColor(item.Thumbnail), color: getFontColor(item.Thumbnail) }}
                                                                    >{item.Thumbnail}</td>
                                                                </tr>
                                                            </table>
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
                                                    setActive(index);
                                                }
                                                }
                                            />
                                            <h1 onClick={() => setActive(index)} style={{ color: color }} className="text-[20px] ml-[10px] cursor-pointer  ">{item.name}</h1>
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
                            ClientsType.clients.map(((item, index) => (
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
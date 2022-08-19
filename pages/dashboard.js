import React, {useState} from "react";
import Header from "../components/header";
import {FaEllipsisH, FaAngleDown, FaAngleUp} from "react-icons/fa"


const Dashboard = () => {

    const [WorkspaceName, SetWorkspaceName] = useState("My Workspace");
    const [workSpaceModal, setWorkSpaceModal] = useState(false)

    return (
        <div className="flex-col">
            <Header />
            <div className="flex">
                <div className="w-[60px] h-screen bg-[#17202A]" >

                </div>
                <div className="w-[300px]  h-screen bg-gray-600 items-center "
                onClick={() => setWorkSpaceModal(!workSpaceModal)}>
                    {workSpaceModal ?
                    <div className="h-[300px] w-[300px] bg-[#fff] border-2 absolute top-[135px] left-[110px] rounded-lg">

                    </div> : null
                    }
                    <div className="mt-[50px] w-[300px] h-[40px] flex justify-between p-[10px] text-sm items-center text-left" >
                        <h1 className="text-[#fff] mx-[10px]">Workspace</h1>
                        <FaEllipsisH
                        color="#fff"
                        size={15}
                        className="mx-[10px]"
                        />
                    </div>
                    <div className="w-[200px] h-[40px] mx-[40px] border-[1px] self-center rounded-lg justify-between items-center flex hover:bg-[#5B6168] cursor-pointer opacity-100">
                        <div className="w-[30px] h-[30px] border-2 ml-[5px] rounded bg-[#fff] justify-center items-center text-center" >
                            <h1 className="text-[#17202A] font-bold text-lg">{WorkspaceName.slice(0,1)}</h1>
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
                </div>
            </div>
        </div>

    );
};

export default Dashboard;
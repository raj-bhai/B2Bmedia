<div className="border-[1px] w-[100%] overflow-y-auto border-yellow-600 p-[5px] pt-[10px]" >
<div className="w-[100%] h-[50px] bg-[#34495E]  border-[0px] flex " >
    {
        Rows.map((i, index) => {
            return (
                <>
                    <div key={index} className="flex w-[100%] h-[50px]  " >
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
import React, { useState } from "react";

const DashboardModal = (props) => {
    const [visible, setVisible] = useState(props.visible)
    return (
        visible ?
            <div className="h-screen w-full top-0 left-0 bg-[rgba(255,255,255,0.7)] fixed" >
                <h1>Modal Opened</h1>
                <h1
                    onClick={() => props.onClose()}
                >Close Modal</h1>
            </div> : null
    )
}

export default DashboardModal


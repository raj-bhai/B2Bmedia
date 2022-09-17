import React from 'react'

const LoadingScreen = () => {
    return (
        <div className="h-[100%] w-[100%] bg-gradient-to-r from-[#0B5345] to-[#1B4F72] border-[0px]  fixed overflow-y-auto flex items-center justify-center" >
            <img src={'https://www.abhaf.org/assets/images/dark-loader.gif'} style={{ width: 100, height: 100 }}></img>
        </div>
    )
}

export default LoadingScreen
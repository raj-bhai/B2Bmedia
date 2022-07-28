import React from 'react'

const Mypage = () => {
  return (
    <>
      <div className=' w-full h-screen bg-blue-500 flex flex-col justify-start item-center'>
        <div className='w-3/4 h-1/2 justify-around bg-yellow-500 border-2 '>
          <h1>Main Hun Yahaan</h1>
        </div>
        <div className='flex' >
          <div className="h-32 w-32 border-2"></div>
          <div className="h-32 w-32 border-2"></div>
          <div className="h-32 w-32 border-2"></div>
        </div>
      </div>
    </>
  )
}

export default Mypage
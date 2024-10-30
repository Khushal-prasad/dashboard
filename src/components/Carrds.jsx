import React from 'react'

function Carrds() {
    return (
        <div className='w-full h-screen bg-zinc-900 flex gap-5 items-center px-32'>
            <div className='cardconatiner h-[50vh] w-1/2'>
                <div className='card1 relative rounded-xl w-full h-full  bg-[#004D43] flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <div className='rounded-full absolute left-10 bottom-10 px-5 py-1 border-2 text-[#CDEA68] border-[#CDEA68]'><p>&copy;2019-2020</p></div>
                </div>
            </div>
            <div className='cardconatiner flex gap-5 h-[50vh] w-1/2'>
                <div className='card1 relative flex items-center justify-center rounded-xl w-1/2 h-full  bg-[#192826]'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='rounded-full absolute left-5 bottom-6 px-3 py-1 border-2 text-white border-white text-[2vh] hover:bg-white hover:text-black'>RATING 5.0 ON CLUTCH</button>
                </div>
                <div className='card2 relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='rounded-full absolute left-5 bottom-6 px-3 py-1 border-2 text-white border-white text-[2vh]  hover:bg-white hover:text-black'>BUSINESS BOOTCAMP ALUMNI</button>
                </div>
            </div>
        </div>
    )
}

export default Carrds

import React from 'react'

function About() {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='font-["Neue Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
            <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
                <div className="w-1/2">
                    <h1 className='text-[3.5vw] font-regular'>Our Approach:</h1>
                    <button className='flex gap-10 items-center px-10 py-6 mt-6 bg-zinc-900 rounded-full text-white'>Read More
                        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>
                <div className='w-1/2 h-[70vh] bg-[#8a9c43] rounded-3xl'>
                    <img src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg' className=' h-[70vh] bg-[#8a9c43] rounded-2xl'></img></div>
            </div>
        </div>
    )
}

export default About

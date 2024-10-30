import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textstructure mt-40 px-16'>
                {["we create", "eye opening", "presentations"].map((items, index) => {
                    return (<div className='masker'>
                        <div className='w-fit flex'>
                            {index === 1 && (
                                <motion.div initial={{ width: 0 }} animate={{ width: '9vw' }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className='mr-5 w-[8vw] rounded-md h-[5vw] top-[0.8vw] relative bg-[url("https://mir-s3-cdn-cf.behance.net/user/276/d6cf91925253957.628fe2ddd3b7a.png")]'>

                                </motion.div>)}
                            <h1 className="text-[6.5vw] leading-[6vw] uppercase font-['Founders Grotesk X-Condensed'] tracking-[-0.3vw] font-medium">
                                {items}
                            </h1>
                        </div>
                    </div>
                    )
                })}

            </div>
            <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
                {["for public and private companies", "from the first pitch to ipo"].map((items, index) => (
                    <p className='text-md font-light tracking-tight leading-none capitalize'>{items}</p>
                ))}
                <div className='start flex font-light items-center gap-2'>
                    <button className='px-5 py-2 border-[1px] border-zinc-400 font-light text-sm uppercase rounded-full hover:bg-white hover:text-black'>start the project</button>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center border-[2px] border-zinc-500'>
                        <span className='rotate-[45deg]'><FaArrowUpLong /></span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LandingPage

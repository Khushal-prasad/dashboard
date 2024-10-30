import { motion, useAnimation } from 'framer-motion'
import { Power4 } from "gsap/all";
import React from 'react'


function Featured() {
    const cards = [useAnimation(), useAnimation()]

    const handleHover = (index) => {
        cards[index].start({ y: "0" })
    }
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    }

    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-8xl font-[Neue Montreal] tracking-tight'>Featured Projects</h1>
            </div>
            <div className='px-75'>
                <div className='cards w-full flex gap-10 mt-10'>
                    {/* First Card */}
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className='card1container relative w-1/2 h-[75vh]'>
                        <h1 className='absolute text-[#CDEA68] z-[9] overflow-hidden flex text-8xl left-full -translate-x-1/2 -translate-y-1/2 top-1/2 font-[Founders Grostesk] leading-none font-semibold tracking-tighter'>
                            {"FYDE".split("").map((item, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className='inline-block'
                                >{item}</motion.span>
                            ))}
                        </h1>
                        <div className='w-full h-full overflow-hidden rounded-xl'>
                            <img src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' className='w-full h-full bg-cover'></img>
                        </div>
                    </motion.div>

                    {/* Second Card */}
                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className='card2container relative w-1/2 h-[75vh]'>
                        <h1 className='font-semibold absolute text-[#CDEA68] z-[9] overflow-hidden flex text-8xl right-full translate-x-1/2 -translate-y-1/2 top-1/2 font-[Founders Grostesk] leading-none tracking-tighter'>
                            {"VISE".split("").map((item, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className='inline-block'
                                >{item}</motion.span>
                            ))}
                        </h1>
                        <div className='w-full h-full overflow-hidden rounded-xl'>
                            <img src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg' className='w-full h-full bg-cover'></img>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Featured

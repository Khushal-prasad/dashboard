import { transform } from 'framer-motion';
import React, { useEffect, useState } from 'react'
np
function Eyes() {
  const [rotate, setRotate] = useState(0)
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    })
  })

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed='-.7' className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center'>
            <div className='flex items-center justify-center relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
            <div className='text-[1.3vw] font-regular uppercase font-[Neue Montreal]'>Play</div>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] p-1'>
                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
          <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100'>
            <div className='flex items-center justify-center relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
            <div className='text-[1.3vw] font-regular uppercase font-[Neue Montreal]'>Play</div>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] p-1'>
                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes

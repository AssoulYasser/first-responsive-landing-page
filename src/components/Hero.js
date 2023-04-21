import React from 'react'
import MyButton from './base/MyButton'

function Hero() {
    return (
        <div className='text-white font-Graphik text-center
                        h-screen mt-[-60px]
                        flex flex-col justify-center items-center'>
            <h1 className='font-bold lg:text-[74px] md:text-[54px] text-[44px] p-[10px]
                            lg:leading-[84px] md:leading-[64px] leading-[54px]'>The best products<br/>starts with figma</h1>
            <h3 className='font-medium lg:text-[28px] md:text-[24px] text-[17px] p-[10px]
                            lg:leading-[40px] md:leading-[30px] leading-[20px] mb-[90px]'>Most calenders are designed for teams. Slate is designed<br/>for freelancers</h3>
            <MyButton text={'Try For Free'} paddingH={'26px'}/>
        </div>
    )
}

export default Hero

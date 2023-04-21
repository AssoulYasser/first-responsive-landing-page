import React from 'react'
import PC from './../drawable/PC.png'
import MyButton from './base/MyButton'

function FWTO() {
    return (
        <div className='h-screen m-auto flex lg:flex-row flex-col justify-center items-center lg:mt-0 md:mt-[100px] mt-[-70px]'>

            {/* text */}
            <div className='font-Graphik flex flex-col justify-center lg:items-start items-center
                            lg:text-start text-center lg:mb-0 mb-[74px]'>
                <h2 className='text-text md:text-[48px] text-[42px] py-[10px] md:leading-[55px] leading-[40px]'>Fastest way to<br/>organize</h2>
                <h3 className='text-second-text md:text-[28px] text-[24px] py-[10px] md:leading-[40px] md:mb-[70px] mb-[50px]'>Most calendars are designed for teams.<br/>Slate is designed for freelancers</h3>
                <MyButton text={'Try For Free'}/>
            </div>


            {/* pc */}
            <img src={PC} alt='pc'/>

        </div>
    )
}

export default FWTO

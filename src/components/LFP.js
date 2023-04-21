import React from 'react'
import Image from './../drawable/undraw_newsletter_vovu.svg'
import Input from './base/MyInputField'
import Button from './base/MyButton'

function LFP() {
    return (
        <div className='h-screen flex flex-col justify-center mt-[170px]
                        lg:flex-row lg:items-center lg:mt-0
                        md:mt-[190px]'>

            {/* image : larg size */}
            <img src={Image} className='p-[50px] lg:flex hidden w-1/2'/>

            {/* text */}
            
            <div className='flex flex-col items-center text-center
                            lg:text-start lg:items-start'>
                <h3 className='text-text text-[20px] font-black'>At your fingertips</h3>
                <h2 className='py-[10px] text-text text-[48px] font-Graphik'>Newsletter</h2>
                <p className='py-[10px] text-second-text text-[22px] font-Graphik'>Most calendars are designed for teams.<br/>Slate is designed for freelancers</p>

                {/* form : large size */}
                <div className='hidden lg:flex flex-col items-start'>
                    <h2 className='text-text font-bold text-[20px]'>Subscribe to our Newsletter</h2>
                    <h3 className='text-second-text font-Graphik text-[18px] pt-[10px]'>Available exclusivery on Figmaland</h3>
                    <div>
                    <Input placeholder={'Your Email'} className='mt-[34px] mb-[12px]'/>
                    <Button text={'Subscribe'} isBold={'true'} className={'ml-[12px]'}/>
                    </div>

                </div>  
            </div>

            {/* image : small size */}

            <img src={Image} className='p-[50px] lg:hidden md: h-2/5'/>

            {/* form  : small size*/}

            <div className='flex flex-col items-center lg:hidden'>
                <h2 className='text-text font-bold text-[20px]'>Subscribe to our Newsletter</h2>
                <h3 className='text-second-text font-Graphik text-[18px] pt-[10px]'>Available exclusivery on Figmaland</h3>
                <Input placeholder={'Your Email'} className='mt-[34px] mb-[12px]'/>
                <Button text={'Subscribe'} isBold={'true'} className={'px-[155px]'}/>
            </div>  

        </div>
    )
}

export default LFP

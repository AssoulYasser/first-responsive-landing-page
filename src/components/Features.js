import React from 'react'
import Circle from './../drawable/circle_square.svg'
import Pen from './../drawable/pen_drawing.svg'
import Brush from './../drawable/brush.svg'

function Features() {
    return (
        <div className='text-text h-screen
                        flex justify-center items-center flex-col
                        lg:mt-5 md:mt-[150px] mt-[160px]'>
            {/* Title */}
            <div className='flex flex-col justify-center items-center
            text-center'>
                <h2 className='font-bold text-[48px] p-[10px] pt-20 lg:pt-0'>Features</h2>
                <h3 className='font-Graphik md:text-[28px] text-[18px] p-[10px] pb-10 text-second-text'>Most calenders are designed for teams.<br/> Slate is designed for freelancers</h3>
            </div>


            <div className='flex flex-col lg:flex-row items-center'>
                {/* element one */}
                <div className='flex flex-col justify-center items-center px-[32px] pb-[41px]'>
                    <img src={Circle} alt='Just Circle' className='w-[45.75px] h-=[45.75px] m-[7.63px]'/>
                    <h3 className='text-[20px] font-bold p-[10px] text-center'>OpenType features<br/>Variable fonts</h3>
                    <p className='text-center text-second-text text-[18px] px-[10px] leading-[25px]'>Slate helps you see how<br/>many more days you need<br/>to work to reach your<br/>financial goal.</p>
                </div>
                {/* element two */}
                <div className='flex flex-col justify-center items-center px-[32px] pb-[41px]'>
                    <img src={Pen} alt='Just Circle' className='w-[45.75px] h-=[45.75px] m-[7.63px]'/>
                    <h3 className='text-[20px] font-bold p-[10px] text-center'>Design with real data</h3>
                    <p className='text-center text-second-text text-[18px] px-[10px] leading-[25px]'>Slate helps you see how<br/>many more days you need<br/>to work to reach your<br/>financial goal.</p>
                </div>
                {/* element three */}
                <div className='flex flex-col justify-center items-center px-[32px] pb-[41px]'>
                    <img src={Brush} alt='Just Circle' className='w-[45.75px] h-=[45.75px] m-[7.63px]'/>
                    <h3 className='text-[20px] font-bold p-[10px] text-center'>Fastest way to take action</h3>
                    <p className='text-center text-second-text text-[18px] px-[10px] leading-[25px]'>Slate helps you see how<br/>many more days you need<br/>to work to reach your<br/>financial goal.</p>
                </div>
            </div>


        </div>
    )
}

export default Features

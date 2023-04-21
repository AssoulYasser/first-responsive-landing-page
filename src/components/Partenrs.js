import React from 'react'
import Google from './../drawable/logos_google.svg'
import Amazon from './../drawable/Amazon.png'
import Microsoft from './../drawable/Microsoft.png'
import Uber from './../drawable/Uber.png'
import DropBox from './../drawable/DropBox.png'
import MyButton from './base/MyButton'


function Partenrs() {
    return (
        <div className='flex flex-col h-screen justify-center items-center lg:mt-0 md:mt-[100px] mt-[450px]'>
            <h2 className='text-text text-[48px] font-Graphik'>Partners</h2>
            <p className='p-[10px] text-second-text text-center'>Most calendars are designed for teams.<br/>Slate is designed for freelancers</p>

            <div className='grid xl:grid-cols-4 lg:mt-0
                            md:grid-cols-2'>
                
                <div className='w-[275px] h-[120px] border border-[#D8D8D8] flex flex-col justify-center items-center p-[50px]'>
                    <p className='text-second-text text-[13px] pb-[15px]'>Client Name</p>
                    <img src={Google} alt='google'/>
                </div>
                                
                <div className='w-[275px] h-[120px] border border-[#D8D8D8] flex flex-col justify-center items-center p-[50px]'>
                    <p className='text-second-text text-[13px] pb-[15px]'>Client Name</p>
                    <img src={Amazon} alt='google'/>
                </div>
                               
                <div className='w-[275px] h-[120px] border border-[#D8D8D8] flex flex-col justify-center items-center p-[50px]'>
                    <p className='text-second-text text-[13px] pb-[15px]'>Client Name</p>
                    <img src={Microsoft} alt='google'/>
                </div>
                               
                <div className='w-[275px] h-[120px] border border-[#D8D8D8] flex flex-col justify-center items-center p-[50px]'>
                    <p className='text-second-text text-[13px] pb-[15px]'>Client Name</p>
                    <img src={Uber} alt='google'/>
                </div>
                               
                <div className='w-[275px] h-[120px] border border-[#D8D8D8] flex flex-col justify-center items-center p-[50px]'>
                    <p className='text-second-text text-[13px] pb-[15px]'>Client Name</p>
                    <img src={DropBox} alt='google'/>
                </div>
                               
                <div className='w-[275px] h-[120px] border border-[#D8D8D8] flex flex-col justify-center items-center p-[50px]'>
                    <p className='text-second-text text-[13px] pb-[15px]'>Client Name</p>
                    <img src={Google} alt='google'/>
                </div>
                               
                <div className='w-[275px] h-[120px] border border-[#D8D8D8] flex flex-col justify-center items-center p-[50px]'>
                    <p className='text-second-text text-[13px] pb-[15px]'>Client Name</p>
                    <img src={Uber} alt='google'/>
                </div>
                               
                <div className='w-[275px] h-[120px] border border-[#D8D8D8] flex flex-col justify-center items-center p-[50px]'>
                    <p className='text-second-text text-[13px] pb-[15px]'>Client Name</p>
                    <img src={Amazon} alt='google'/>
                </div>
               
            </div>

            <MyButton text={'Try For Free'} className={'my-[80px]'}/>
        </div>
    )
}

export default Partenrs

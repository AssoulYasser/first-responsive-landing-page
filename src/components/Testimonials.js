import React from 'react'
import IBM from './../drawable/IBM.svg'
import Face from './../drawable/face.png'
import MyButtom from './base/MyButton'

function Testimonials() {
  return (
    <div className='h-screen flex flex-col justify-center items-center lg:mt-0 md:mt-[100px] mt-[300px]'>

        <h2 className='p-[10px] text-text text-[48px]'>Testimonials</h2>
        <img src={IBM} alt='IBM' className='md:w-auto w-[126.68px] md:mt-[30px] mt-[40px]' />
        <p className='p-[10px] text-second-text md:text-[28px] text-[13.53px] md:pt-[40px] pt-[60px] text-center'>Most calendars are designed for teams. Slate is designed for freelancers<br/>who want a simple way to plan their schedule.</p>
        <div className='flex justify-center items-center py-[60px]'>
            <img src={Face} alt='face' className='md:w-[50px] w-[40px]'/>
            <p className='text-second-text md:text-[15px] text-[10.14px] px-[13px]'>Organize across<br/>Ui designer</p>
        </div>
        <MyButtom text={'More Testimonials'}/>
    </div>
  )
}

export default Testimonials

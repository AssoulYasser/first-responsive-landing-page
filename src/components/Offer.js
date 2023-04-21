import React from 'react'
import MyButton from './base/MyButton'

function Offer({type, price, isDark, className}) {
  return (
    <div className={`${isDark ? 'bg-primary text-white' : 'bg-white' } flex flex-col justify-center items-center w-[335px] h-[700px] rounded-[10px] ${className}`}>
        {/* title */}
        <h4 className='font-black text-[20px] pb-5'>{type}</h4>
        <p className='p-5'>Organize across all<br/>apps by hand</p>
        {/* price per time */}
        <div className='flex justify-center items-center'>
            <p className='text-[74px] px-2 font-black'>{price}</p>
            <div className='flex flex-col items-start'>
                <p className='font-black'>$</p>
                <p className='font-Graphik text-[16px]'>Per Mounth</p>
            </div>
        </div>
        {/* features */}
        <div className='grid grid-cols-1 gap-[25px] my-[50px]'>
            <p className=''>Pricing Feature</p>
            <p className=''>Pricing Feature</p>
            <p className=''>Pricing Feature</p>
            <p className=''>Pricing Feature</p>
            <p className=''>Pricing Feature</p>
        </div>
        {/* Button */}
        <MyButton text={'Order Now'} className={`${isDark? 'bg-white text-primary' : ''}`}/>
    </div>
  )
}

export default Offer

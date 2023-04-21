import React from 'react'
import Offer from './Offer'

function Pricing() {
    return (
        <div className='flex flex-col justify-center items-center py-[50px] bg-dark-background'>
            <h2 className='text-white text-[48px] p-[10px]'>Pricing</h2>
            <h3 className='text-white text-[28px] p-[10]'>Most calendars are<br/>designed for teams. </h3>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-10 items-center text-text text-center leading-[23px] mt-[25px] pb-[]'>
                <Offer price={0} type={'FREE'} className={'xl:h-[650px]'}/>
                <Offer price={10} type={'STANDARD'} isDark={true}/>
                <Offer price={99} type={'BUSINESS'} className={'xl:h-[650px]'}/>
            </div>
        </div>
    )
}

export default Pricing

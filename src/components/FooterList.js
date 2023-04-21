import React from 'react'

function FooterList({main, list, className}) {
    const items = list.map(
        (text, index) => {return <p>{text}</p>}
    )

    return (
        <div className={`flex flex-col gap-[16px] text-white text-[15px] justify-center items-center md:items-start ${className}`}>
            <h1 className='font-bold text-[25x]'>Annette Steward</h1>
            {items}
        </div>
    )
}

export default FooterList

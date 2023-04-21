import React from 'react'

function MyButton({text, isBold, className}) {
    return (
        <button className={`text-white bg-primary px-[62px] py-[16px] rounded-[35px] ${isBold? 'font-bold' :  'font-Graphik'} ${className}`}>{text}</button>
    )
}

export default MyButton

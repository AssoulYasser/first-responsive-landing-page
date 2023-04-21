import React from 'react'

function MyInputField({placeholder, className, type}) {
    if(type = null) type = 'text'
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`text-[#18171D] placeholder:text-[#18171D] placeholder:font-Graphik
            pt-[19px] pb-[19px] pl-[39px] pr-[166px] bg-[#E8E8E8] rounded-[39px]
            focus:outline-none focus:ring-2 focus:ring-primary ${className}`}>
        </input>
    )
}

export default MyInputField

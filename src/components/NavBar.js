import React, {useState} from "react";
import {AiOutlineMenu , AiOutlineClose, AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin} from 'react-icons/ai'
import Logo from "./base/Logo";

export default function NavBar() {
    // state for handling the sidebar when the screen get smaller
    const [isOpened, openHandl] = useState(false)

    return (
        <div className="flex-row text-white font-Graphik pt-[24px]">
            {/* navigation bar on larg screen */}
            <div className="flex items-center lg:justify-center mx-auto max-w-[1100px] pl-12 pr-12">

                {/* menu */}
                
                <ul className="hidden lg:flex text-[12px] font-light">

                    <li className="px-[41px]">HOME</li>
                    <li className="px-[41px]">PRODUCT</li>
                    <li className="px-[41px]">PRICING</li>
                    <li className="px-[41px]">ABOUT</li>
                    <li className="px-[41px]">CONTACT</li>
            
                </ul>

                <Logo />

                {/* social media logos */}
                <div className="hidden ml-5 md:flex justify-between gap-6">

                    <AiFillFacebook size={30}/>
                    <AiFillTwitterSquare size={30}/>
                    <AiFillLinkedin size={30}/>
        
                </div>


                {/* menu button */}
                <div className="flex mx-5 lg:hidden ml-auto" onClick={() => {isOpened? openHandl(false):openHandl(true)}}>
                    {isOpened? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
                </div>

            </div>

            {/* side bar */}

            <div className={isOpened ? 
                    "flex-row lg:hidden w-full h-screen fixed font-light text-text bg-white transition duration-500 ease-in-out transform translate-x-0"
                    : "flex-row lg:hidden w-full h-screen fixed font-light text-text transition duration-500 ease-in-out transform -translate-x-full"} > 
                
                <ul>

                    <li className="p-4 border-b border-primary pl-12 pr-12">HOME</li>
                    <li className="p-4 border-b border-primary pl-12 pr-12">PRODUCT</li>
                    <li className="p-4 border-b border-primary pl-12 pr-12">PRICING</li>
                    <li className="p-4 border-b border-primary pl-12 pr-12">ABOUT</li>
                    <li className="p-4 border-b border-primary pl-12 pr-12">CONTACT</li>
     
                    {/* social media logos */}
                    <div className="flex md:hidden gap-4 pl-12 pr-12 mt-4">

                        <AiFillFacebook size={30}/>
                        <AiFillTwitterSquare size={30}/>
                        <AiFillLinkedin size={30}/>
            
                    </div>

                </ul>

           

            </div>
    

            




        </div>
    );
}

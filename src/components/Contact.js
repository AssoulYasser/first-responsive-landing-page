import React from 'react'
import {AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci'
import {BsPhone} from 'react-icons/bs'
import Input from './base/MyInputField'
import Button from './base/MyButton'
import Map from './../drawable/map.png'

function Contact() {
    return (
        <div className='flex flex-col mx-auto justify-center items-center text-second-text my-[50px]'>
            <h2 className='text-text text-[48px] p-[10px]'>Contact Us</h2>
            <h3 className='sm:text-[28px] text-[24px] p-[10px] text-center'>Most calendars are designed for teams.</h3>
            <h3 className='sm:text-[28px] text-[24px] p-[10px] hidden md:flex'>Slate is designed for freelancers.</h3>
            {/* SMALL SIZE */}
            {/* social media logos */}
            <div className='flex gap-5 text-primary my-[70px] md:hidden'>
                <AiFillFacebook size={50}/>
                <AiFillTwitterSquare size={50}/>
                <AiFillLinkedin size={50}/>
            </div>
            {/* contacts */}
            <div className='flex flex-col gap-[20px] justify-center items-start mb-[100px] md:hidden'>
                <div className='flex gap-3 items-center justify-center'>
                    <CiLocationOn color='#2091F9' size={40}/>
                    <p>6386 Spring St undefined Anchorage,<br/>Georgia 12473 United States</p>
                </div>

                <div className='flex gap-3 items-center justify-center'>
                    <BsPhone color='#2091F9' size={40}/>
                    <p>(843) 555-0130</p>
                </div>

                <div className='flex gap-3 items-center justify-center'>
                    <AiOutlineMail color='#2091F9' size={40}/>
                    <p>willie.jennings@example.com</p>
                </div>
            </div>


            
            <div className='flex justify-center items-center gap-20 md:my-[25px]'>
                    {/* Form */}
                <div className='border border-[#DDDDDD] rounded-[45px]
                                flex flex-col justify-center p-[50px] items-center gap-[45px]'>

                    <h2 className='text-text text-[20px] p-[10px]'>Contact Us</h2>
                    <Input placeholder={'Your Name'}/>
                    <Input placeholder={'Your Email'}/>
                    <textarea placeholder='Your Message' name="message" rows="10"
                    className='text-[#18171D] placeholder:text-[#18171D] placeholder:font-Graphik
                    bg-[#E8E8E8] rounded-[39px] pt-[19px] pl-[39px] pr-[166px]
                    focus:outline-none focus:ring-2 focus:ring-primary '/>
                    <Button text={'send'} className={'self-start'}/>
                </div>

                    {/* md size elements */}
                <div className='hidden md:flex flex-col'>
                    <div className='flex gap-[20px] justify-center items-start mb-[50px]'>

                        {/* contacts md */}
                        <div className='flex flex-col gap-3 items-center justify-center text-center text-[16px]'>
                            <CiLocationOn color='#2091F9' size={40}/>
                            <p>6386 Spring St undefined Anchorage,<br/>Georgia 12473 United States</p>
                        </div>

                        <div className='flex flex-col gap-3 items-center justify-center'>
                            <BsPhone color='#2091F9' size={40}/>
                            <p>(843) 555-0130</p>
                        </div>

                        <div className='flex flex-col gap-3 items-center justify-center'>
                            <AiOutlineMail color='#2091F9' size={40}/>
                            <p>willie.jennings@example.com</p>
                        </div>

                    </div>

                        {/* map md */}
                    <img src={Map} alt='map' />

                    {/* social media logos md*/}
                    <div className='flex gap-5 text-primary mt-[50px]'>
                        <AiFillFacebook size={50}/>
                        <AiFillTwitterSquare size={50}/>
                        <AiFillLinkedin size={50}/>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Contact

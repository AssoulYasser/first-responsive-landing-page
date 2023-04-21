import React from 'react'
import FooterList from './FooterList'
import {CiLocationOn} from 'react-icons/ci'
import {BsPhone} from 'react-icons/bs'
import {AiOutlineMenu , AiOutlineClose, AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin} from 'react-icons/ai'

function Footer() {
    const className = 'md:text-center text-start'
    return (
        <div className='flex md:flex-row flex-col justify-center items-center gap-[130px] bg-dark-background py-[160px] text-white'>

            <FooterList 
                main={'Pages'} 
                list={['Home', 'Product', 'Pricing', 'About', 'Contact']} 
                className={className}/>
            <FooterList 
                main={'Tomothy '} 
                list={['Eleanor Edwards', 'Ted Robertson', 'Annette Russell', 'Jennie Mckinney', 'Gloria Richards']}
                className={className}/>
            <FooterList 
                main={'Annette Steward'}
                list={['Jennie Cooper', 'Julie Henry', 'Johnny Murphy', 'Gregory Mccoy', 'Marvin Mckinney']}
                className={className}/>

            <div className='flex flex-col gap-[35px] items-start'>

                <div className='flex gap-3 items-center justify-center text-[15px]'>
                    <CiLocationOn color='white' size={40}/>
                    <p>7480 Mockingbird Hill undefined</p>
                </div>

                <div className='flex gap-3 items-center justify-center text-[15px]'>
                        <BsPhone color='white' size={40}/>
                        <p>(843) 555-0130</p>
                </div>

                <div className="flex gap-4">

                    <AiFillFacebook size={30}/>
                    <AiFillTwitterSquare size={30}/>
                    <AiFillLinkedin size={30}/>

                </div>

            </div>

        </div>
    )
    }

export default Footer

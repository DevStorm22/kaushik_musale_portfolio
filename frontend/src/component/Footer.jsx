import React from 'react'
import { assets } from '../assets/frontendAssets'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <div className='flex w-[95%] flex-row items-center justify-center m-20 p-10 rounded-xl text-white hover:shadow-[0px_0px_50px_#00B7FF] transition-all duration-300'>
                <div className='flex flex-col w-[600px] p-3 justify-center items-center'>
                    <img src={assets.DevStorm} alt="Logo" className='w-[150px] h-[150px] mb-2 items-center rounded-full' />
                    <p className="text-white text-md font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='flex flex-col w-[300px] p-3 justify-center items-center'>
                    <h1 className='text-white text-3xl font-bold mb-2'>Quick Links</h1>
                    <ul>
                        <li className='text-white text-md font-medium hover:text-[#00B7FF] hover:scale-105 transition-all duration-300 cursor-pointer'><Link to="/">Home</Link></li>
                        <li className='text-white text-md font-medium hover:text-[#00B7FF] hover:scale-105 transition-all duration-300 cursor-pointer'><Link to="/projects">Projects</Link></li>
                        <li className='text-white text-md font-medium hover:text-[#00B7FF] hover:scale-105 transition-all duration-300 cursor-pointer'><Link to="/certificates">Certificates</Link></li>
                        <li className='text-white text-md font-medium hover:text-[#00B7FF] hover:scale-105 transition-all duration-300 cursor-pointer'><Link to="/courses">Courses</Link></li>
                    </ul>
                </div>
                <div className='flex flex-col w-[300px] p-3 justify-center items-center'>
                    <h1 className='text-white text-3xl font-bold mb-5'>Contact</h1>
                    <ul>
                        <li className='text-white text-lg font-medium'><Link target='_blank' to="mailto:kaushikboss0@gmail.com"><span className='text-[#00B7FF]'>Email:</span> kaushikboss0@gmail.com</Link></li>
                        <li className='text-white text-lg font-medium'><Link target='_blank' to="tel:+917499472206"><span className='text-[#00B7FF]'>Phone:</span> +91 7499472206</Link></li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col w-auto p-3 justify-center items-center'>
                <p className='text-white text-md font-medium'>© 2025 Kaushik Musale. All rights reserved.</p>
                <p className='text-white text-md font-medium'>Developed by Kaushik Musale</p>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-10 pt-[60px] text-white'>
            <div className='w-[95%] flex flex-col gap-10 p-[60px] items-center justify-center rounded-md hover:shadow-[0px_0px_50px_#00B7FF] transition-all duration-300'>
                <h1 className='text-6xl font-bold text-[#00B7FF]'>Contact & Feedback</h1>
                <div className='flex flex-row gap-[20px] items-center justify-center text-white rounded-md p-10 w-full'>
                    <form className='w-[400px] h-auto flex flex-col text-left gap-5 border-2 border-[#00B7FF] text-white rounded-md p-10'>
                        <h1 className='text-4xl'>Email:</h1>
                        <input type="email" placeholder='Enter your email...' className='w-full h-[40px] rounded-md p-2 border-2 border-[#00B7FF] text-white' />
                        <h1 className='text-4xl'>Phone:</h1>
                        <input type="tel" placeholder='Enter your phone number...' pattern="[0-9]{10}" className='w-full h-[40px] rounded-md p-2 border-2 border-[#00B7FF] text-white' />
                        <h1 className='text-4xl'>Feedback:</h1>
                        <textarea placeholder='Enter your feedback...' className='w-full h-[100px] rounded-md p-2 border-2 border-[#00B7FF] text-white' />
                        <div className='flex items-center justify-center mt-2'>
                            <div className='flex items-center justify-between'>
                                <button className='cursor-pointer text-2xl font-bold px-7 py-2 rounded-md bg-[#00B7FF] border-2 border-[#02021a] hover:border-[#00B7FF] hover:bg-transparent text-[#02021a] hover:text-white transition-all duration-[0.7s]'>Submit</button>
                            </div>
                        </div>
                    </form>
                    <div className='w-[2px] h-[600px] bg-white mx-[100px] rounded-md'></div>
                    <div className='w-[400px] h-auto flex flex-col text-center border-2 border-[#00B7FF] text-white rounded-md p-10'>
                        <h1 className='text-4xl font-bold mb-10'>My information</h1>
                        <h2 className='text-2xl text-[#00B7FF] mb-5'>kaushikboss0@gmail.com</h2>
                        <h2 className='text-2xl text-[#00B7FF] mb-5'><FontAwesomeIcon icon={faWhatsapp} size="xl" style={{ color: "#63E6BE" }} /> <FontAwesomeIcon icon={faPhone} style={{ color: "#74C0FC" }} /> +91 7499472206</h2>
                    </div>
                </div>
            </div>
            <hr className='w-[95%] h-[2px] bg-[#00B7FF] mt-10'></hr>
        </div>
    )
}

export default Contact
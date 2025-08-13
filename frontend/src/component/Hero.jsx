import React from 'react'
import hero from '../assets/FinalFormalImage-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
function Hero() {
    return (
        <div className='w-full h-auto pt-[60px] flex flex-col items-center justify-center text-white'>
            <div className='flex w-[95%] flex-row items-center justify-space-between m-20 p-10 rounded-xl hover:shadow-[0px_0px_50px_#00B7FF] transition-all duration-300 gap-5'>
                <div className='flex flex-col text-left'>
                    <h1 className='text-4xl font-bold mb-7'>Hey,</h1>
                    <h1 className='text-6xl font-bold mb-7'>I'm <span className='text-[#00B7FF]'>Software Developer</span></h1>
                    <p className='text-2xl mb-7'>
                        Passionate B.Sc.IT graduate skilled in C, C++, Python, Java, HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React JS. Achieved 10+ prizes in coding competitions and honored as 2nd Runner-Up for Best Activity Director of Quick Heal Foundation's <span className='font-bold hover:text-[#00B7FF]'>"Cyber Shiksha for Cyber Suraksha"</span> by the <span className='underline hover:text-[#00B7FF]'>Honorable Governor of Maharashtra</span> in 2025. Strong in teamwork, fast learning, and communication.
                    </p>
                    <div className='w-[300px] h-[50px] flex items-center justify-between'>
                        <FontAwesomeIcon icon={faLinkedin} size="2xl" className='transition-all duration-300 hover:scale-110 cursor-pointer hover:text-[#00B7FF]' />
                        <FontAwesomeIcon icon={faSquareXTwitter} size="2xl" className='transition-all duration-300 hover:scale-110 cursor-pointer hover:text-[#00B7FF]' />
                        <FontAwesomeIcon icon={faGithub} size="2xl" className='transition-all duration-300 hover:scale-110 cursor-pointer hover:text-[#00B7FF]' />
                        <FontAwesomeIcon icon={faEnvelope} size="2xl" className='transition-all duration-300 hover:scale-110 cursor-pointer hover:text-[#00B7FF]' />
                    </div>
                    <div className='flex items-center justify-start mt-5'>
                        <div className='flex items-center justify-between'>
                            <button className='cursor-pointer text-2xl font-bold px-4 py-2 rounded-md bg-[#00B7FF] border-2 border-[#02021a] hover:border-[#00B7FF] hover:bg-transparent text-[#02021a] hover:text-white transition-all duration-[0.7s]'>Download CV</button>
                        </div>
                    </div>
                </div>
                <div className='w-[500px] h-[500px] flex items-center justify-center pl-[50px]'>
                    <div className='w-[370px] h-[370px] flex items-center justify-center border-[#00B7FF] rounded-full border-7'>
                        <img src={hero} alt="hero" className='w-[380px] h-[380px] object-cover rounded-full mb-[25px]' />
                    </div>
                </div>
            </div>
            <hr className='w-[95%] h-[2px] bg-[#00B7FF] mt-10'></hr>
        </div>
    )
}

export default Hero
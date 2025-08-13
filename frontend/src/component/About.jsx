import React from 'react'
import hero from '../assets/FinalFormalImage-removebg-preview.png'
function About() {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-10 pt-[60px] text-white'>
            <div className='w-[95%] flex flex-col gap-[20px] items-center text-center justify-center p-10 rounded-md hover:shadow-[0px_0px_50px_#00B7FF] transition-all duration-300'>
                <div className='flex items-center justify-center'>
                    <h1 className='text-6xl font-bold text-[#00B7FF]'>About Me</h1>
                </div>
                <div className='w-[500px] h-[500px] flex items-center justify-center'>
                    <div className='w-[370px] h-[370px] flex items-center justify-center border-[#00B7FF] rounded-full border-7'>
                        <img src={hero} alt="hero" className='w-[380px] h-[380px] object-cover rounded-full mb-[25px]' />
                    </div>
                </div>
                <div className='w-[1300px] h-auto flex items-center justify-center text-left'>
                    <p className='text-[23px] text-white'>I am Kaushik Chandrashekhar Musale, a passionate B.Sc.IT graduate with a strong foundation in software development, website development, and application development and Pursuing M.C.A. education to upskill myself. Skilled in technologies like C, C++, Python, Java, HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React JS, Epress JS and Node JS I am committed to building innovative and efficient digital solutions. I have achieved 10+ prizes in coding competitions and was honored as the 2nd Runner-Up for Best Activity Director for <span className='underline'>Quick Heal Foundation's</span> <span className='font-bold'>"Cyber Shiksha for Cyber Suraksha"</span> Cyber Crime Awareness Program, receiving the award from the <span className='underline'>Honorable Governor of Maharashtra</span> in 2025. With a fast learning ability, excellent teamwork, and strong communication skills, I adapt quickly to new environments and challenges. I am passionate about continuous learning and aim to contribute meaningfully to the tech industry through my skills and dedication.</p>
                </div>
            </div>
            <hr className='w-[95%] h-[2px] bg-[#00B7FF] mt-10'></hr>
        </div>
    )
}

export default About
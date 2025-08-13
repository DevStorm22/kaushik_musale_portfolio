import React from 'react'

function Features() {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-10 pt-[60px] text-white'>
            <div className='w-[95%] flex flex-col gap-[80px] items-center text-center justify-center p-10 rounded-md hover:shadow-[0px_0px_50px_#00B7FF] transition-all duration-300'>
                <h1 className='text-6xl font-bold text-[#00B7FF]'>Features</h1>
                <div className='flex flex-row gap-[20px] items-center justify-center flex-wrap'>
                    <div className='w-[400px] h-[400px] flex flex-col text-left gap-5 border-2 border-[#00B7FF] text-white rounded-md p-10'>
                        <h1 className='text-4xl text-center'>Programming Languages</h1>
                        <ul className='list-disc list-inside text-left text-xl'>
                            <li>C</li>
                            <li>C++</li>
                            <li>Python</li>
                            <li>Java</li>
                        </ul>
                    </div>
                    <div className='w-[400px] h-[400px] flex flex-col text-left gap-5 border-2 border-[#00B7FF] text-white rounded-md p-10'>
                        <h1 className='text-4xl text-center'>Full stack Web Development</h1>
                        <ul className='list-disc list-inside text-left text-xl'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>Tailwind CSS</li>
                            <li>JavaScript</li>
                            <li>React JS</li>
                            <li>Express JS</li>
                            <li>Node JS</li>
                        </ul>
                    </div>
                    <div className='w-[400px] h-[400px] flex flex-col text-left gap-5 border-2 border-[#00B7FF] text-white rounded-md p-10'>
                        <h1 className='text-4xl text-center'>Conceptual Knowledge</h1>
                        <ul className='list-disc list-inside text-left text-xl'>
                            <li>Problem Solving</li>
                            <li>Data Structure and Algorithms</li>
                            <li>Object Oriented Programming</li>
                            <li>Database Management</li>
                        </ul>
                    </div>
                    <div className='w-[400px] h-[400px] flex flex-col text-left gap-5 border-2 border-[#00B7FF] text-white rounded-md p-10'>
                        <h1 className='text-4xl text-center'>Database</h1>
                        <ul className='list-disc list-inside text-left text-xl'>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div className='w-[400px] h-[400px] flex flex-col text-left gap-5 border-2 border-[#00B7FF] text-white rounded-md p-10'>
                        <h1 className='text-4xl text-center'>Other Features</h1>
                        <ul className='list-disc list-inside text-left text-xl'>
                            <li>Adobe Premiere Pro</li>
                            <li>Adobe Audition</li>
                            <li>Figma</li>
                            <li>Canva</li>
                            <li>Microsoft Office</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='w-[95%] h-[2px] bg-[#00B7FF] mt-10'></hr>
        </div>
    )
}

export default Features
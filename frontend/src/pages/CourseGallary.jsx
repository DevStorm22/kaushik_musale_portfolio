import React from 'react'
import { courses } from '../api/courses'

export default function CourseGallary() {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-10 pt-[150px] text-white'>
            <div className='w-[95%] flex flex-col gap-[80px] items-center text-center justify-center p-10 rounded-md hover:shadow-[0px_0px_50px_#00B7FF] transition-all duration-300'>
                <h1 className='text-6xl font-bold text-[#00B7FF]'>Course Gallary</h1>
                <div className='flex flex-row gap-[20px] items-center justify-center flex-wrap'>
                    {/* <div className='w-[440px] h-[650px] items-center flex flex-col text-left border-2 border-[#00B7FF] text-white rounded-md'>
                        <div className='w-[364px] h-[204.75px] flex flex-row items-center mx-[38px] my-[20px] justify-between border-[#00B7FF] border-2 rounded-md'>
                            <img src='../assets/awards/certificates/activites_workshops/AdvanceExcel.jpg' alt='Certificate' className='w-full h-full rounded-md' />
                        </div>
                        <h1 className='text-2xl font-bold text-center'>Awards</h1>
                        <p className='text-lg m-7 text-start'>Discover a detailed list of the awards and recognitions I’ve received over the years, celebrating my achievements in coding competitions, leadership roles, and contributions to impactful projects. These milestones highlight my dedication, skills, and commitment to excellence in technology and community development.</p>
                        <button className='w-[200px] mt-7 cursor-pointer text-2xl font-bold px-4 py-2 rounded-md bg-[#00B7FF] border-2 border-[#02021a] hover:border-[#00B7FF] hover:bg-transparent text-[#02021a] hover:text-white transition-all duration-[0.7s]'>View more</button>
                    </div> */}
                    {courses.map((course) => (
                        <div className='w-[440px] h-[300px] items-center flex flex-col text-left border-2 border-[#00B7FF] text-white rounded-md'>
                            <div className='w-[364px] h-[204.75px] flex flex-row items-center mx-[38px] my-[20px] justify-between border-[#00B7FF] border-2 rounded-md'>
                                <img src={course.img[0]} alt={course.name} className='w-full h-full rounded-md' />
                            </div>
                            <h1 className='text-2xl font-bold text-center'>{course.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
            <hr className='w-[95%] h-[2px] bg-[#00B7FF] mt-10'></hr>
        </div>
    )
}

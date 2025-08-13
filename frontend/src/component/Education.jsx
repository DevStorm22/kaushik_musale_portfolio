import React from 'react'

function Education() {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-10 pt-[60px] text-white'>
            <div className='w-[95%] flex flex-col gap-[80px] items-center text-center justify-center p-10 rounded-md hover:shadow-[0px_0px_50px_#00B7FF] transition-all duration-300'>
                <h1 className='text-6xl font-bold text-[#00B7FF]'>Education</h1>
                <div className='flex flex-row gap-[20px] items-center justify-center flex-wrap'>
                    <div className='w-[400px] h-[350px] flex flex-col text-left gap-5 border-2 border-[#00B7FF] text-white rounded-md p-10'>
                        <h1 className='text-4xl'>Degree: B.Sc.I.T.</h1>
                        <h2 className='text-2xl'>Year: 2022 - 2025</h2>
                        <h3 className='text-xl'>CGPA: 9.3</h3>
                        <h4 className='text-xl'>R.P. Gogate College of Science and Arts and R.V. Jogalekar College of Commerce, Ratnagiri, Maharashtra</h4>
                    </div>
                    <div className='w-[400px] h-[350px] flex flex-col text-left gap-5 border-2 border-[#00B7FF] text-white rounded-md p-10'>
                        <h1 className='text-4xl'>Degree: H.S.C.</h1>
                        <h2 className='text-2xl'>Year: 2020 - 2022</h2>
                        <h3 className='text-xl'>Percentage: 57.20%</h3>
                        <h4 className='text-xl'>Abhyankar Kulkarni Junior College, Ratnagiri, Maharashtra</h4>
                    </div>
                    <div className='w-[400px] h-[350px] flex flex-col text-left gap-5 border-2 border-[#00B7FF] text-white rounded-md p-10'>
                        <h1 className='text-4xl'>Degree: S.S.C.</h1>
                        <h2 className='text-2xl'>Year: 2019 - 2020</h2>
                        <h3 className='text-xl'>Percentage: 91.80%</h3>
                        <h4 className='text-xl'>Patwardhan High School, Ratnagiri, Maharashtra</h4>
                    </div>
                </div>
            </div>
            <hr className='w-[95%] h-[2px] bg-[#00B7FF] mt-10'></hr>
        </div>
    )
}

export default Education
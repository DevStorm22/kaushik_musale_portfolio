import React from 'react'
import { useState } from 'react'
import { awardsCertificate } from '../api/awardsCertificate';
import { awardsMedals } from '../api/awardsMedals';
import { awardTrophies } from '../api/awardTrophies';

export default function AwardGallaries() {

    const [active, setActive] = useState(0);
    const [certificates, setCertificates] = useState(0);
    const [trophies, setTrophioes] = useState(0);

    function certificateActivities() {
        return (
            <>
                {awardsCertificate.filter((award) => award.activities).map((award, index) => (
                    <div className='w-[440px] h-[350px] items-center flex flex-col text-left border-2 border-[#00B7FF] text-white rounded-md'>
                        <div className='w-[364px] h-[204.75px] flex flex-row items-center mx-[38px] my-[20px] justify-between border-[#00B7FF] border-2 rounded-md'>
                            <img src={award.img[0]} alt={award.name} className='w-full h-full rounded-md' />
                        </div>
                        <h1 className='text-2xl font-bold text-center'>{award.name}</h1>
                    </div>
                ))}
            </>
        )
    }

    function certificateCollege() {
        return (
            <>
                {awardsCertificate.filter((award) => award.college).map((award, index) => (
                    <div className='w-[440px] h-[350px] items-center flex flex-col text-left border-2 border-[#00B7FF] text-white rounded-md'>
                        <div className='w-[364px] h-[204.75px] flex flex-row items-center mx-[38px] my-[20px] justify-between border-[#00B7FF] border-2 rounded-md'>
                            <img src={award.img[0]} alt={award.name} className='w-full h-full rounded-md' />
                        </div>
                        <h1 className='text-2xl font-bold text-center'>{award.name}</h1>
                    </div>
                ))}
            </>
        )
    }

    function certificateCompetitions() {
        return (
            <>
                {awardsCertificate.filter((award) => award.competitions).map((award, index) => (
                    <div className='w-[440px] h-[350px] items-center flex flex-col text-left border-2 border-[#00B7FF] text-white rounded-md'>
                        <div className='w-[364px] h-[204.75px] flex flex-row items-center mx-[38px] my-[20px] justify-between border-[#00B7FF] border-2 rounded-md'>
                            <img src={award.img[0]} alt={award.name} className='w-full h-full rounded-md' />
                        </div>
                        <h1 className='text-2xl font-bold text-center'>{award.name}</h1>
                    </div>
                ))}
            </>
        )
    }

    function medalCompetitions() {
        return (
            <>
                {awardsMedals.filter((award) => award.competitions).map((award, index) => (
                    <div className='w-[440px] h-[500px] items-center flex flex-col text-left border-2 border-[#00B7FF] text-white rounded-md'>
                        <div className='w-[204.75px] h-[364px] flex flex-row items-center mx-[38px] my-[20px] justify-between border-[#00B7FF] border-2 rounded-md'>
                            <img src={award.img[0]} alt={award.name} className='w-full h-full rounded-md' />
                        </div>
                        <h1 className='text-2xl font-bold text-center'>{award.name}</h1>
                    </div>
                ))}
            </>
        )
    }

    function trophyActivities() {
        return (
            <>
                {awardTrophies.filter((award) => award.activities).map((award, index) => (
                    <div className='w-[440px] h-[500px] items-center flex flex-col text-left border-2 border-[#00B7FF] text-white rounded-md'>
                        <div className='w-[204.75px] h-[364px] flex flex-row items-center mx-[38px] my-[20px] justify-between border-[#00B7FF] border-2 rounded-md'>
                            <img src={award.img[0]} alt={award.name} className='w-full h-full rounded-md' />
                        </div>
                        <h1 className='text-2xl font-bold text-center'>{award.name}</h1>
                    </div>
                ))}
            </>
        )
    }

    function trophyCompetitions() {
        return (
            <>
                {awardTrophies.filter((award) => award.competitions).map((award, index) => (
                    <div className='w-[440px] h-[500px] items-center flex flex-col text-left border-2 border-[#00B7FF] text-white rounded-md'>
                        <div className='w-[204.75px] h-[364px] flex flex-row items-center mx-[38px] my-[20px] justify-between border-[#00B7FF] border-2 rounded-md'>
                            <img src={award.img[0]} alt={award.name} className='w-full h-full rounded-md' />
                        </div>
                        <h1 className='text-2xl font-bold text-center'>{award.name}</h1>
                    </div>
                ))}
            </>
        )
    }

    function activeCetificate() {
        return (
            <div className='w-full flex flex-row gap-[20px] items-center justify-center flex-wrap'>
                <div className='flex flex-row mb-20 items-center justify-center w-full h-[50px] rounded-md px-10'>
                    <div onClick={() => setCertificates(1)} className={`flex flex-col items-center text-center justify-center w-[23%] h-full border-r-2 border-[#00B7FF] cursor-pointer`}>
                        <div className={`w-[70%] h-full rounded-md items-center justify-center ${certificates === 1 ? 'bg-[#00B7FF] text-[#02021a]' : 'text-[#00B7FF]'}`}>
                            <h1 className='text-3xl font-bold pt-[5px]'>Activities</h1>
                        </div>
                    </div>
                    <div onClick={() => setCertificates(2)} className={`flex flex-col items-center text-center justify-center w-[23%] h-full border-x-2 border-[#00B7FF] cursor-pointer`}>
                        <div className={`w-[70%] h-full rounded-md items-center justify-center ${certificates === 2 ? 'bg-[#00B7FF] text-[#02021a]' : 'text-[#00B7FF]'}`}>
                            <h1 className='text-3xl font-bold pt-[5px]'>College</h1>
                        </div>
                    </div>
                    <div onClick={() => setCertificates(3)} className={`flex flex-col items-center text-center justify-center w-[23%] h-full border-l-2 border-[#00B7FF] cursor-pointer`}>
                        <div className={`w-[70%] h-full rounded-md items-center justify-center ${certificates === 3 ? 'bg-[#00B7FF] text-[#02021a]' : 'text-[#00B7FF]'}`}>
                            <h1 className='text-3xl font-bold pt-[5px]'>Competitions</h1>
                        </div>
                    </div>
                </div>
                {certificates === 1 ? certificateActivities() : certificates === 2 ? certificateCollege() : certificates === 3 ? certificateCompetitions() : null}
            </div>
        )
    }

    function activeTrophy() {
        return (
            <div className='w-full flex flex-row gap-[20px] items-center justify-center flex-wrap'>
                <div className='flex flex-row mb-20 items-center justify-center w-full h-[50px] rounded-md px-10'>
                    <div onClick={() => setTrophioes(1)} className={`flex flex-col items-center text-center justify-center w-[23%] h-full border-r-2 border-[#00B7FF] cursor-pointer`}>
                        <div className={`w-[70%] h-full rounded-md items-center justify-center ${trophies === 1 ? 'bg-[#00B7FF] text-[#02021a]' : 'text-[#00B7FF]'}`}>
                            <h1 className='text-3xl font-bold pt-[5px]'>Activities</h1>
                        </div>
                    </div>
                    <div onClick={() => setTrophioes(2)} className={`flex flex-col items-center text-center justify-center w-[23%] h-full border-l-2 border-[#00B7FF] cursor-pointer`}>
                        <div className={`w-[70%] h-full rounded-md items-center justify-center ${trophies === 2 ? 'bg-[#00B7FF] text-[#02021a]' : 'text-[#00B7FF]'}`}>
                            <h1 className='text-3xl font-bold pt-[5px]'>Competitions</h1>
                        </div>
                    </div>
                </div>
                {trophies === 1 ? trophyActivities() : trophies === 2 ? trophyCompetitions() : ''}
            </div>
        )
    }

    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-10 pt-[150px] text-white'>
            <div className='w-[95%] flex flex-col items-start text-center justify-center p-10 rounded-md hover:shadow-[0px_0px_50px_#00B7FF] transition-all duration-300'>
                <div className='items-center w-full'>
                    <h1 className='text-6xl font-bold mb-4 text-center text-[#00B7FF]'>Awards Gallary</h1>
                    <hr className='bg-white w-[450px] h-[5px] mb-20 ml-[455px] justify-center items-center' />
                </div>
                {/* <div className='flex flex-row mb-20 items-start justify-start w-auto h-[40px] rounded-md'>
                    <div onClick={() => setActive(1)} className={`flex flex-col items-center text-center justify-center w-[23%] h-full border-r-2 border-[#00B7FF] cursor-pointer`}>
                        <div className={`w-[70%] h-full rounded-md items-center justify-center ${active === 1 ? 'bg-[#00B7FF] text-[#02021a]' : 'text-[#00B7FF]'}`}>
                            <h1 className='text-3xl font-bold pt-[5px]'>Certifcates</h1>
                        </div>
                    </div>
                    <div onClick={() => setActive(2)} className={`flex flex-col items-start text-center justify-start w-auto px-2 h-full border-x-2 border-[#00B7FF] cursor-pointer`}>
                        <div className={`w-[70%] h-full rounded-md items-center justify-center ${active === 2 ? 'bg-[#00B7FF] text-[#02021a]' : 'text-[#00B7FF]'}`}>
                            <h1 className='text-3xl font-bold pt-[5px]'>Medals</h1>
                        </div>
                    </div>
                    <div onClick={() => setActive(3)} className={`flex flex-col items-start text-center justify-start w-auto px-2 h-full border-l-2 border-[#00B7FF] cursor-pointer`}>
                        <div className={`w-[70%] h-full rounded-md items-center justify-center ${active === 3 ? 'bg-[#00B7FF] text-[#02021a]' : 'text-[#00B7FF]'}`}>
                            <h1 className='text-3xl font-bold pt-[5px]'>Trophies</h1>
                        </div>
                    </div>
                </div> */}
                <div className='flex flex-row mb-20 items-center justify-center w-full h-[50px] rounded-md px-10'>
                    <div onClick={() => setActive(1)} className={`flex flex-col items-center text-center justify-center w-[23%] h-full border-r-2 border-[#00B7FF] cursor-pointer`}>
                        <div className={`w-[70%] h-full rounded-md items-center justify-center ${active === 1 ? 'bg-[#00B7FF] text-[#02021a]' : 'text-[#00B7FF]'}`}>
                            <h1 className='text-3xl font-bold pt-[5px]'>Certifcates</h1>
                        </div>
                    </div>
                    <div onClick={() => setActive(2)} className={`flex flex-col items-center text-center justify-center w-[23%] h-full border-x-2 border-[#00B7FF] cursor-pointer`}>
                        <div className={`w-[70%] h-full rounded-md items-center justify-center ${active === 2 ? 'bg-[#00B7FF] text-[#02021a]' : 'text-[#00B7FF]'}`}>
                            <h1 className='text-3xl font-bold pt-[5px]'>Medals</h1>
                        </div>
                    </div>
                    <div onClick={() => setActive(3)} className={`flex flex-col items-center text-center justify-center w-[23%] h-full border-l-2 border-[#00B7FF] cursor-pointer`}>
                        <div className={`w-[70%] h-full rounded-md items-center justify-center ${active === 3 ? 'bg-[#00B7FF] text-[#02021a]' : 'text-[#00B7FF]'}`}>
                            <h1 className='text-3xl font-bold pt-[5px]'>Trophies</h1>
                        </div>
                    </div>
                </div>
                {active === 1 ? activeCetificate() : active === 2 ? medalCompetitions() : active === 3 ? activeTrophy() : ''}
            </div>
            <hr className='w-[95%] h-[2px] bg-[#00B7FF] mt-10'></hr>
        </div>
    )
}
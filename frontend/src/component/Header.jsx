import { NavLink, Link } from 'react-router-dom'
// import { assets } from '../assets/frontendAssets'
import { assets } from '../api/assets'
function Header() {
    return (
        <div className='fixed bg-[#02021a] w-full h-[100px] flex items-center justify-start gap-[600px] px-[15px]'>
            <div className='flex items-center left-0 gap-3'>
                <img src={assets.DevStorm} alt="logo" className='w-[50px] h-[50px] mt-1 rounded-full hover:scale-110 transition-all duration-400 cursor-pointer' />
                <h1 className='text-[35px] font-bold text-[#00B7FF] hover:scale-110 transition-all duration-400 cursor-pointer'>Kaushik Musale</h1>
            </div>
            <div className='flex items-center rounded-md px-[2px] py-[2px] gap-[15px]'>
                <NavLink to='/' className="text-white text-xl font-bold my-2 rounded-md hover:bg-[#00B7FF] px-2 py-2 hover:translate-y-[-5px] hover:scale-105 transition-all duration-300">Home</NavLink>
                <NavLink to='/projects' className="text-white text-xl flex gap-1 font-bold my-2 rounded-md hover:bg-[#00B7FF] px-2 py-2 hover:translate-y-[-5px] hover:scale-105 transition-all duration-300 items-center justify-center group relative">Projects</NavLink>
                <NavLink to='/certificates' className="text-white text-xl font-bold my-2 rounded-md hover:bg-[#00B7FF] px-2 py-2 hover:translate-y-[-5px] hover:scale-105 transition-all duration-300">Certificates</NavLink>
                <NavLink to='/courses' className="text-white text-xl font-bold my-2 rounded-md hover:bg-[#00B7FF] px-2 py-2 hover:translate-y-[-5px] hover:scale-105 transition-all duration-300">Courses</NavLink>
            </div>
        </div>
    )
}

export default Header
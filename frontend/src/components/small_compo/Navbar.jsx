import React from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { MdBrightness4 } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useTheme } from '@/store/store';

const Navbar = ({setshowProduct}) => {
  const {theme, setTheme} = useTheme()
  return (
    <nav className={`h-[8vh] ${theme === 'dark' ? 'bg-[#0f172a]' : 'bg-white'} border-b border-white/10 px-8 flex items-center justify-between text-white `}>
      
      {/* Left */}
      <div className="flex items-center gap-2 text-xl font-semibold">
        <FaShoppingCart className="text-blue-400" />
        <span className={`${theme === 'dark' ? 'text-white' : 'text-blue-400'}`}>Product Store</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        
        <button className= {`h-11 w-11 flex items-center justify-center rounded-lg ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5 '} hover:bg-white/10 transition`} onClick={() => setshowProduct((prev) => !prev)}>
          <CiSquarePlus className={`h-6 w-6 ${theme === 'dark' ? 'text-white' : 'text-black '} `} />
        </button>

        <button
          onClick={setTheme}
          className= {`h-11 w-11 flex items-center justify-center rounded-lg ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5 '} hover:bg-white/10 transition`}
        >
          {theme === 'dark' ? 
          <MdDarkMode className={`h-6 w-6 ${theme === 'dark' ? 'text-white' : 'text-black '} `} /> : 
            <MdOutlineLightMode className={`h-6 w-6 ${theme === 'dark' ? 'text-white' : 'text-black '} `} />}
        </button>

      </div>
    </nav>
  )
}

export default Navbar
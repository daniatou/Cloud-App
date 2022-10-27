import React from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from 'react'
import { Link, animateScroll as scroll, } from 'react-scroll'

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }
    const handleClose = () => {
        setNav(!nav)
    }


    return (
        <div className="navbar bg-zinc-200 h-[80px] w-full fixed z-10 shadow-lg ">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <h1 className=' logo text-3xl font-bold ml-3 sm:text-4xl '>
                    BRAND.
                </h1>
                <ul className=' hidden md:flex '>
                    <li>
                        <Link activeClass="active" to="home" smooth={true} duration={500} >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="about" smooth={true} offset={-200} duration={500} >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="support" smooth={true} offset={-50} duration={500} >
                            Support
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="plateforms" smooth={true} offset={-100} duration={500} >
                            Platforms
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="pricing" smooth={true} offset={-50} duration={500} >
                            Pricing
                        </Link>
                    </li>
                </ul>
                <div className="log-btn hidden md:flex" >
                    <button className='bg-transparent text-black border-none'>Sign In</button>
                    <button>Sign Up</button>
                </div>
                <div className="menu md:hidden" onClick={handleClick}>
                    {!nav ? <Bars3Icon className='w-6' /> : <XMarkIcon className='w-6' />}
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full m-0 p-3 md:hidden'}>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <Link onClick={handleClose} activeClass="active" to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <Link onClick={handleClose} activeClass="active" to="about" smooth={true} offset={-200} duration={500} >
                        About
                    </Link>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <Link onClick={handleClose} activeClass="active" to="support" smooth={true} offset={-50} duration={500} >
                        Support
                    </Link>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <Link onClick={handleClose} activeClass="active" to="plateforms" smooth={true} offset={-100} duration={500} >
                        Platforms
                    </Link>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <Link onClick={handleClose} activeClass="active" to="pricing" smooth={true} offset={-50} duration={500} >
                        Pricing
                    </Link>
                </li>

                <div className="log-btn flex flex-col my-3">
                    <button className='bg-transparent text-black border-2 border-indigo-600 my-2'>Sign In</button>
                    <button className='hover:border-2 border-indigo-600 '>Sign Up</button>
                </div>
            </ul>
        </div>
    )
}

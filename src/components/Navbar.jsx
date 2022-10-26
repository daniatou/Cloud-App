import React from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from 'react'

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }


    return (
        <div className="navbar bg-zinc-200 h-[80px] w-full fixed z-10 ">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <h1 className=' logo text-3xl font-bold ml-3 sm:text-4xl '>
                    BRAND.
                </h1>
                <ul className=' hidden md:flex '>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Platforms</li>
                    <li>Pricing</li>
                </ul>
                <div className="log-btn hidden md:flex" >
                    <button className='bg-transparent text-black border-none'>Sign In</button>
                    <button>Sign Up</button>
                </div>
                <div className="menu md:hidden" onClick={handleClick}>
                    {!nav ? <Bars3Icon className='w-6' /> : <XMarkIcon className='w-6' />}
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full m-0 p-3'}>
                <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full'>About</li>
                <li className='border-b-2 border-zinc-300 w-full'>Support</li>
                <li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
                <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
                <div className="log-btn flex flex-col my-3">
                    <button className='bg-transparent text-black border-2 border-indigo-600 my-2'>Sign In</button>
                    <button className='hover:border-2 border-indigo-600 '>Sign Up</button>
                </div>
            </ul>
        </div>
    )
}

import React from 'react'
import { CloudIcon, ServerStackIcon, PaperAirplaneIcon, ServerIcon } from '@heroicons/react/24/outline'
import bgImage from '../images/cyber-bg.png'


export const Hero = () => {
    return (
        <div name='home' className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
            <div className="grid sm:grid-cols-2 max-w-[1240px] mx-auto my-auto">
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-4">
                    <p className='text-2xl'>Unique Sequencies & Production</p>
                    <h1 className='py-4 text-5xl md:text-7xl'>
                        Cloud Management
                    </h1>
                    <p className='text-2xl '>
                        This is Our Tech Brand
                    </p>
                    <button className='sm: w-[60%] my-4'>
                        Get Started
                    </button>
                </div>
                <div className='w-full'>
                    <img src={bgImage} alt='Illustration baniere ' />
                </div>
                <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[-10%] 
                   mx-1 md:left-[13%] lg:left-[20%]  transform md:translate-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
                    <p>Data Services</p>
                    <div className='flex justify-between flex-wrap px-4'>
                        <p className='flex px-4 py-2 text-slate-500'> <CloudIcon className='h-6 text-indigo-600 px-2' />   App Security</p>
                        <p className='flex px-4 py-2 text-slate-500'> <ServerStackIcon className='h-6 text-indigo-600 px-2' />  Dashboard Designer</p>
                        <p className='flex px-4 py-2 text-slate-500'> <PaperAirplaneIcon className='h-6 text-indigo-600 px-2' /> Cloud Data    </p>
                        <p className='flex px-4 py-2 text-slate-500'> <ServerIcon className='h-6 text-indigo-600 px-2' /> API</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

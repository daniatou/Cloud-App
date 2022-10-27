import React from 'react'
import { PhoneIcon, ArrowRightIcon, CpuChipIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import supportImage from '../images/support.jpg'
export const Support = () => {
    return (
        <div name='support' className='w-full  mt-32'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={supportImage} alt="Support illustration" />
            </div>
            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-10'>
                    <h2 className=' text-3xl pt-8 text-slate-300 uppercase text-center'>
                        Support
                    </h2>
                    <h3 className='text-5xl font-bold py-6 text-center'>
                        Finding the right team
                    </h3>
                    <p className='py-4 text-2xl text-slate-300 font-light'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maiores reiciendis ab? Illo nam animi repellat, vel fugiat inventore ratione consequuntur delectus ullam natus doloribus earum! Laboriosam ipsam quisquam quas!
                    </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-10 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='text-2xl font-bold my-6 '>Sales</h3>
                            <p className='text-gray-500 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  omnis culpa voluptatibus, quo dicta aliquam doloribus adipisci temporibus atque dolorum officiis aliquid? Tempore, atque?</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4 '>
                            <p className='flex items-center text-indigi-600'>Contact Us <ArrowRightIcon className='w-5 ml-2' /> </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <GlobeAltIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='text-2xl font-bold my-6 '>Technical Support</h3>
                            <p className='text-gray-500 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  omnis culpa voluptatibus, quo dicta aliquam doloribus adipisci temporibus atque dolorum officiis aliquid? Tempore, atque?</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4 '>
                            <p className='flex items-center text-indigi-600'>Contact Us <ArrowRightIcon className='w-5 ml-2' /> </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <CpuChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='text-2xl font-bold my-6 '>Media inqueries</h3>
                            <p className='text-gray-500 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptates, ab neque minus vero minima omnis culpa voluptatibus, quo dicta aliquam doloribus adipisci temporibus atquem ?</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4 '>
                            <p className='flex items-center text-indigi-600'>Contact Us <ArrowRightIcon className='w-5 ml-2' /> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

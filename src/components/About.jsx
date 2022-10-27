import React from 'react'

export const About = () => {
    return (
        <div className='w-full my-32 '>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>
                        Trusted By developpers across the world
                    </h2>
                    <p className='text-3xl text-gray-500 py-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum inventore, cupiditate dolores rerum quod commodi repellat aperiam dolor et excepturi!
                    </p>
                </div>
                <div className='grid md:grid-cols-3 gap-2 px-1 text-center mt-5'>
                    <div className='border py-8 rounded-xl shadow-md hover:shadow-xl'>
                        <p className='text-5xl text-indigo-500 font-bold'>100%</p>
                        <p className='text-gray-400 mt-4'>Completion</p>
                    </div>
                    <div className='border py-8 rounded-xl hover:shadow-xl'>
                        <p className='text-5xl text-indigo-500 font-bold'>24/7</p>
                        <p className='text-gray-400 mt-4'>Delivery</p>
                    </div>
                    <div className='border py-8 rounded-xl hover:shadow-xl'>
                        <p className='text-5xl text-indigo-500 font-bold'>100K</p>
                        <p className='text-gray-400 mt-4'>Transactions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

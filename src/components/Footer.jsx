import React from 'react'
import {FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch} from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-4 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Documentation</li>
                    <li className='py-1'>Guides</li>
                    <li className='py-1'>API Statuts</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Jobs</li>
                    <li className='py-1'>Press</li>
                    <li className='py-1'>Parteners</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Terms</li>
                    <li className='py-1'>Policies</li>
                    <li className='py-1'>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Suscribe to our newsletter</p>
                <p className='py-4'>The latest news, articles, and ressources, sent to your inbox weekly</p>
                <form className='flex flex-col sm:flex-row' >
                    <input className='w-full p-2 mr-4 mb-4 rounded-md' type="email" name="" id=""  placeholder='Enter Email..'/>
                    <button className='mb-4'>Suscribe</button>
                </form>
            </div>
        </div>
        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between  sm:flex-row text-center text-gray-500'>
            <p className='py-4'>2022 Workfow, LLC. All rights reserved</p>
            <div className='flex justify-between  sm:w-[300px] pt-4 text-2xl'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaTwitch />
                <FaGithub />
            </div>
        </div>
    </div>
  )
}
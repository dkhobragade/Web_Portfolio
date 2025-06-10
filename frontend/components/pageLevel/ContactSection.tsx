import React from 'react'
import Image from 'next/image'
import arrow from '../../public/arrow.svg'
import { GradientButton } from '../HoverBorderGradient'

const ContactSection = () =>
{
    return (
        <div>
            <div className='grid grid-cols-2 p-5 m-10'>
                <div className='w-40 h-50'>
                    <div className='grid grid-rows-2'>
                        <div className='font-[Handlee] text-3xl p-1 w-45 font-semibold h-10 bg-[#FFC9F0]'>
                            Contact here
                        </div>
                    </div>
                    <div className='flex items-center justify-end'>
                        <Image src={ arrow } alt="arrow" className='rotate-225' />
                    </div>
                </div>
                <div className='grid grid-row-1 md:grid-row-2 '>
                    <div className='grid grid-row-1 md:grid-row-4 gap-3 '>
                        <div className='grid grid-cols-2'>
                            <div className='font-[Handlee] border-l-2 border-black text-3xl p-1 w-25 font-semibold  h-10 bg-[#FFC9F0]'>
                                Name
                            </div>
                            <div >
                                <input type="text" className='"w-full border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-gray-600 focus:outline-none focus:ring-0 rounded-none' />
                            </div>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='font-[Handlee] border-l-2 border-black text-3xl p-1 w-25 font-semibold h-10 bg-[#FFE68C]'>
                                Email
                            </div>
                            <div >
                                <input type="text" className='"w-full border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-gray-600 focus:outline-none focus:ring-0 rounded-none' />
                            </div>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='font-[Handlee] border-l-2 border-black text-3xl p-1 w-30 font-semibold h-10  bg-[#8DD8FF]'>
                                Message
                            </div>
                            <div>
                                <input type="text" className='"w-full border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-gray-600 focus:outline-none focus:ring-0 rounded-none' />
                            </div>
                        </div>
                        <GradientButton text="Send Here" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
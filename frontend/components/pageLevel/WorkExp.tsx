import React from 'react'
import Image from 'next/image'
import arrow from '../../public/arrow.svg'

const WorkExp = () =>
{
    return (
        <div className='grid grid-cols-2 p-5 m-10'>
            <div className="relative max-w-xl mx-auto my-8 p-10 bg-white ">
                <div className="absolute left-0 right-0 top-8 h-0.5 bg-black"></div>
                <div className="absolute left-0 right-0 bottom-8 h-0.5 bg-black"></div>
                <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-black"></div>
                <div className="absolute top-0 bottom-0 right-8 w-0.5 bg-black"></div>
                <div className='p-2'>
                    <div className='grid grid-flow-col grid-cols-3 gap-2'>
                        <div className='w-20 h-20 bg-amber-200 text-3xl justify-center flex items-center' >
                            1
                        </div>
                        <div className='col-span-2 text-1xl'>Associate Software Engineer  at <br />
                            <span className='font-semibold'>
                                Init Software Services
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-end'>
                <div className='w-40 h-50'>
                    <div className='grid grid-rows-2'>
                        <div className='font-[Handlee] text-3xl p-1 w-55 font-semibold h-10 bg-[#FFC9F0]'>
                            Work Exprience
                        </div>
                    </div>
                    <div className='flex items-center justify-end'>
                        <Image src={ arrow } alt="arrow" className='-rotate-45' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExp
"use client"

import React from 'react'
import Image from 'next/image'
import arrow from '../../public/arrow.svg'
import { ProjectContainer } from '../ProjectContainer'
import { PointerHighlight } from '../ui/pointer-highlight'
import { useRouter } from 'next/navigation'
import logInImg from '../../public/DkChatLogIn.png'

const ProjectSection = () =>
{
    const router = useRouter();

    return (
        <div>
            <div className='grid grid-cols-3 p-5 m-10'>
                <div className='w-40 h-50'>
                    <div className='grid grid-rows-2'>
                        <div className='font-[Handlee] text-3xl p-1 w-30 font-semibold h-10 cursor-pointer' onClick={ () => router.push( "/project" ) }>
                            <PointerHighlight rectangleClassName="bg-[#FFC9F0] dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 leading-loose"
                                pointerClassName="text-yellow-500 h-3 w-3"
                                containerClassName="inline-block mr-1">
                                <span className='relative z-10'>
                                    Projects
                                </span>
                            </PointerHighlight>
                        </div>
                    </div>
                    <div className='flex items-center justify-end'>
                        <Image src={ arrow } alt="arrow" className='rotate-225' />
                    </div>
                </div>
                <div className='grid grid-row-1 md:grid-row-2 gap-20'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-100'>
                        <ProjectContainer image={ <Image src={ logInImg } alt="LogInImg" className='h-full' /> } title="DkChat" button={ <span className='bg-[#FFC9F0] rounded-2xl font-medium p-2'>
                            Know More
                        </span> } className="bg-[#4da8da]" />
                        <ProjectContainer image={ undefined } title={ '' } button={ undefined } className={ '' } />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-100'>
                        <ProjectContainer image={ undefined } title={ '' } button={ undefined } className={ '' } />
                        <ProjectContainer image={ undefined } title={ '' } button={ undefined } className={ '' } />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectSection
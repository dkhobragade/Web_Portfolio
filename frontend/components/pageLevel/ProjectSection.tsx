import React from 'react'
import Image from 'next/image'
import arrow from '../../public/arrow.svg'
import { ProjectContainer } from '../ProjectContainer'

const ProjectSection = () =>
{
    return (
        <div>
            <div className='grid grid-cols-3 p-5 m-10'>
                <div className='w-40 h-50'>
                    <div className='grid grid-rows-2'>
                        <div className='font-[Handlee] text-3xl p-1 w-30 font-semibold h-10 bg-[#FFC9F0]'>
                            Projects
                        </div>
                    </div>
                    <div className='flex items-center justify-end'>
                        <Image src={ arrow } alt="arrow" className='rotate-225' />
                    </div>
                </div>
                <div className='grid grid-row-1 md:grid-row-2 gap-20'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-100'>
                        <ProjectContainer />
                        <ProjectContainer />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-100'>
                        <ProjectContainer />
                        <ProjectContainer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectSection
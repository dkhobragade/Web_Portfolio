"use client"

import React from 'react'
import { ColourfulText } from '@/components/ui/colourful-text'
import { IconCircleArrowLeftFilled } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

const page = () =>
{
    const router = useRouter()

    return (
        <div className='grid'>
            <div className='p-5 flex gap-2 cursor-pointer' onClick={ () => router.push( "/" ) }>
                <IconCircleArrowLeftFilled />
                <span className='bg-[#FFC9F0] rounded-1xl'>
                    Get Back
                </span>
            </div>
            <div className='flex justify-center items-center mt-10'>
                <div className='text-3xl font-semibold'>
                    <ColourfulText text="Tech Stack" />
                </div>
            </div>
        </div>
    )
}

export default page
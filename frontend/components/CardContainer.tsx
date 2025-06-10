import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface CardContainerProps
{
    color: string
    className?: string
    src?: string | StaticImport
    children: React.ReactNode
}

const CardContainer = ( props: CardContainerProps ) =>
{
    return (
        <div className={ `w-70 h-90 bg-[${ props.color }] ${ props.className } border-[${ props.color }] rounded-lg p-5 flex items-center justify-center` }>
            <div className='w-full'>
                { props.src && <Image src={ props.src } alt='' /> }
                { props.children }
            </div>
        </div>
    )
}

export default CardContainer
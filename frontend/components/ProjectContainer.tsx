import React from 'react'


interface ContainerProps
{
    className: string
    image: any
    title: string
    button: any
}

export const ProjectContainer = ( props: ContainerProps ) =>
{
    return (
        <div className='w-70 h-90  border-2 rounded-lg p-5'>
            <div className={ `w-full h-60 p-3 rounded-2xl ${ props.className }` }>
                { props.image }
            </div>
            <div className='p-2'>
                <div className='text-2xl font-semibold font-[Handlee]'>{ props.title }</div>
                <div className='text-2xl flex justify-end'>{ props.button }</div>
            </div>
        </div>
    )
}

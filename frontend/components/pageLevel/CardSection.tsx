import React from 'react'
import CardContainer from '../CardContainer'
import eye from '../../public/eye.svg'
import pencile from '../../public/pencile.svg'
import diamond from '../../public/diamond.svg'
import arrow from '../../public/arrow.svg'
import Image from 'next/image'

const CardSection = () =>
{
    return (
        <div>
            <div className='grid grid-rows-2 gap-8'>
                <div className='font-[Handlee] text-3xl p-1 w-40 font-semibold h-10 bg-[#FFC9F0]'>
                    What i do?
                </div>
                <Image src={ arrow } alt="arrow" className='-rotate-90' />
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20">
                    <CardContainer color="#FFE68C" src={ pencile } className="-rotate-10"  >
                        <div className="text-2xl font-bold">
                            Develop Frontend and Backend
                        </div>
                    </CardContainer>
                    <CardContainer src={ eye } className="rotate-10 bg-[#4DA8DA]"  >
                        <div className="text-2xl font-bold">
                            Integrate and Deploy Features
                        </div>
                    </CardContainer>
                    <CardContainer color="#FFC9F0" src={ diamond } className="-rotate-10"  >
                        <div className="text-2xl font-bold">
                            Design and Manage Databases
                        </div>
                    </CardContainer>
                </div>
            </div>
        </div>
    )
}

export default CardSection
import React from 'react'
import Image from 'next/image'
import arrow from '../../public/arrow.svg'

const WorkExp = () =>
{
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 p-5 m-10 gap-5'>
            <div className="order-2 md:order-1 relative max-w-xl mx-auto my-8 p-10 bg-white ">
                <div className="absolute left-0 right-0 top-8 h-0.5 bg-black"></div>
                <div className="absolute left-0 right-0 bottom-8 h-0.5 bg-black"></div>
                <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-black"></div>
                <div className="absolute top-0 bottom-0 right-8 w-0.5 bg-black"></div>
                <div className='p-2'>
                    <div className='flex gap-4'>
                        <div className='w-10 h-10 bg-amber-200 text-3xl justify-center flex items-center' >
                            1.
                        </div>
                        <div className='text-1xl'>Associate Software Engineer  at <br />
                            <span className='font-semibold'>
                                Init Software Services
                            </span>
                        </div>
                    </div>
                    <div className='p-2'>
                        <ul className='list-disc'>
                            <li>
                                Developed and maintained full stack web applications using
                                <span className='bg-[#FFC9F0]'>
                                    { " " }TypeScript and Mantine { " " }
                                </span>
                                for responsive, user-friendly front-end interfaces.
                            </li>
                            <li>
                                Designed and implemented backend services in
                                <span className='bg-[#FFC9F0]'>
                                    { " " }C++{ " " }
                                </span>
                                to ensure high performance and scalability of application logic.
                            </li>
                            <li>
                                Managed relational data storage, optimized queries, and ensured data integrity using
                                <span className='bg-[#FFC9F0]'>
                                    { " " }MySQL database{ " " }
                                </span>
                                systems.

                            </li>
                            <li>
                                Automated and executed end-to-end testing of web applications with
                                <span className='bg-[#FFC9F0]'>
                                    { " " }Playwright,{ " " }
                                </span>
                                improving software reliability and reducing manual testing effort.
                            </li>
                            <li>
                                Collaborated in
                                <span className='bg-[#FFC9F0] gap-1'>
                                    { " " }Agile{ " " }
                                </span>
                                teams to deliver features, resolve bugs, and promote best practices through documentation and code reviews.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='order-1 md:order-2 flex items-center justify-between gap-3'>
                <div className='w-full h-full'>
                    <div className='grid grid-rows-2'>
                        <div className='font-[Handlee] text-3xl p-1 w-55 font-semibold h-10 bg-[#FFC9F0]'>
                            Work Exprience
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Image src={ arrow } alt="arrow" className='-rotate-90 md:-rotate-45' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExp
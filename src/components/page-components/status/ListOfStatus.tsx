import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ListOfStatus() {
    return (
        <>

            <div className='my-24'>
                <div className='flex items-center'>
                    <form className="w-[60%] mx-auto">
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-3xl dark:text-white">Post Your Status</h1>
                        <div className="mb-5">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Write Your Status</label>
                            <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <div className='flex justify-end' >
                            <Link href={"/feed"} >
                                <button type="submit" className="w-[100%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirm</button>
                            </Link>
                        </div>
                    </form>
                </div>


                <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center mb-[50px] mt-[50px]">Your Feed</h1>
                <div className="w-[60%] mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-4 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist" >
                        {/* author image */}
                        <Image height={500} width={500} className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />
                        <div>
                            <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
                            <p className="text-base text-gray-500 dark:text-gray-400"><time title="February 8th, 2022">Feb. 8, 2022</time></p>
                        </div>
                    </div>
                    <div id="defaultTabContent">
                        <div className="p-4 bg-white rounded-lg dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
                            <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">Powering innovation & trust at 200,000+ companies worldwide</h2>
                            <p className="mb-3 text-gray-500 dark:text-gray-400">Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.</p>
                            <Link href="/questions/details/1" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                                Read more
                                <svg className=" w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-[60%] mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-4 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist" >
                        {/* author image */}
                        <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />
                        <div>
                            <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
                            <p className="text-base text-gray-500 dark:text-gray-400"><time title="February 8th, 2022">Feb. 8, 2022</time></p>
                        </div>
                    </div>
                    <div id="defaultTabContent">
                        <div className="p-4 bg-white rounded-lg dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
                            <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">Powering innovation & trust at 200,000+ companies worldwide</h2>
                            <p className="mb-3 text-gray-500 dark:text-gray-400">Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.</p>
                            <Link href="/questions/details/1" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                                Read more
                                <svg className=" w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-[60%] mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-4 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist" >
                        {/* author image */}
                        <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />
                        <div>
                            <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
                            <p className="text-base text-gray-500 dark:text-gray-400"><time title="February 8th, 2022">Feb. 8, 2022</time></p>
                        </div>
                    </div>
                    <div id="defaultTabContent">
                        <div className="p-4 bg-white rounded-lg dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
                            <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">Powering innovation & trust at 200,000+ companies worldwide</h2>
                            <p className="mb-3 text-gray-500 dark:text-gray-400">Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.</p>
                            <Link href="/questions/details/1" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                                Read more
                                <svg className=" w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

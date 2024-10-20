/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { firebaseAuthContext } from '@/components/auth/FirebaseAuthProvider'
import React, { useContext } from 'react'

export default function Profile() {
    const user: any = useContext(firebaseAuthContext)
    console.log(user)
    return (
        <>
            <div className="p-16">
                <div className="p-8 bg-white shadow mt-24 bg-[#111827] text-white">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                            <div>
                                <p className="font-bold  text-xl">22</p>
                                <p className="">Followers</p>
                            </div>
                            <div>
                                <p className="font-bold  text-xl">10</p>
                                <p className="">Questoins</p>
                            </div>
                            <div>
                                <p className="font-bold  text-xl">89</p>
                                <p className="">Answers</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="overflow-hidden w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                </svg> */}
                                <img src={user?.photoURL} className='w-[100%]' alt="" />
                                {/* <img src={user?.photoURL} className='w-[100%]' alt="" /> */}
                            </div>
                        </div>

                        <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                            <button
                                className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                            >
                                Follow
                            </button>
                            <button
                                className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                            >
                                Contact
                            </button>
                        </div>
                    </div>

                    <div className="mt-20 text-center border-b pb-12">
                        <h1 className="text-4xl font-medium ">{user?.displayName}</h1>
                        <p className="font-light  mt-3">Dhaka, Bangladesh</p>

                        <p className="mt-8 ">Department of Computer Science and Engineering</p>
                        <p className="mt-2 ">Southeast University</p>
                    </div>

                    <div className="mt-12 flex flex-col justify-center">
                        <p className=" text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
                        {/* <button
                            className="text-indigo-500 py-2 px-4  font-medium mt-4"
                        >
                            Show more
                        </button> */}
                    </div>

                </div>
            </div>
        </>
    )
}

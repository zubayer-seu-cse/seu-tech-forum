import React from 'react'
import UserCard from './UserCard'
import images from './images.json'

export default function UsersList() {
  return (
    <>
      <div className='h-[100vh] w-[60%] mx-auto my-24' >
        <div>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center mb-[30px] mt-[50px]">Community Members</h1>
        </div>
        <div className='flex justify-end' >
          <div className="relative hidden md:block mb-16">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Users..." />
          </div>
        </div>
        <div>
          <div className='grid grid-cols-4 gap-8' >
            {
              images.map((i, index) => <UserCard img={i} key={index} />)
            }
          </div>
        </div>
      </div>
    </>
  )
}

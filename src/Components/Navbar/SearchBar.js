import React from 'react'

export default function SearchBar() {
    return (
        <div className=' flex justify-center items-center w-screen h-[64px]'>
            <div role="button" className='flex justify-end items-center w-1/2  h-1/2  rounded-xl shadow-lg border border-sky-50 '>
                <i className="fa-solid fa-magnifying-glass mr-5"></i>
            </div>
        </div>
    )
}

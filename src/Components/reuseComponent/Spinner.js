import React from 'react'

export default function Spinner() {
    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-black  bg-opacity-40 backdrop-blur-sm z-[100]'>
            <button  className="absolute top-1/2 left-1/2 flex justify-center items-center -translate-x-1/2 -translate-y-1/2 h-1/6 w-1/6 z-[101]" >
                <div className="animate-spin h-1/6 w-1/6 mr-3 spinner">
                </div>
                <h1 className='text-white'>Processing...</h1>
            </button>
        </div>
    )
}

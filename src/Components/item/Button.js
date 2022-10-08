import React from 'react'

export default function Button(props) {
    const {className} = props
    return (
        <button className={`w-full h-full my-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800  focus:!ring-2 group flex  items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg ${className}`} type="button">
            <span className="flex items-center rounded-md text-sm px-4 py-2">
                {props?.children}
            </span>
        </button>
    )
}

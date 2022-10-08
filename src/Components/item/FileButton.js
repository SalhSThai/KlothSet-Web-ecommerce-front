import React from 'react'

export default function FileButton(props) {
    const {helperText = "A profile picture is useful to confirm your are logged into your account" ,onChange} = props
    return (<div id="fileUpload">
        <div className="mb-2 block">
            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="file">Upload file</label>
        </div>
        <div className="flex">
            <div className="relative w-full">
                <input className="rounded-lg block w-full border 
                  disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900
                  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700
                  dark:text-white
                  dark:placeholder-gray-400
                  dark:focus:border-blue-500
                  dark:focus:ring-blue-500 text-sm"
                     id="file" type="file" onChange={onChange}/>
            </div>
        </div>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
    </div>
    )
}

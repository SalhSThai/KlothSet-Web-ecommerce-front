import React from 'react'

export default function CheckBox(props) {
    const { label = "Remember me", id ,onCheck , disable,className} = props;
    return (
        <div className={`flex items-center gap-2 mt-1 ml-4 ${disable? " hidden ":" flex "} ${className}`}>
            <input className="h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                type="checkbox" id={id} onChange={onCheck}/>
            <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor={id}>
                {label}</label></div>
    )
}

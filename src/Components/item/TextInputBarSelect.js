import React from 'react'
import CheckBox from './CheckBox'

export default function TextInputBarSelect(props) {
    const { label = "input", onChange, id,  selectMember = [], className = "", disable } = props

    return (
        <div className={`relative w-min-[100px] m-3 ${className}`}>
            <div className="mb-4 block">
                <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor={id}>{label}</label>
            </div>

            <div className="relative w-full">
                <select className={` w-full border 
                 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 
                 rounded-lg p-2.5 text-sm`}
                    id={id}
                    onChange={onChange}
                    defaultValue={selectMember?.[0] || 'Select'}
                    disabled={disable}
                >
                    {selectMember.map((item, index) => <option key={index} value={item.id}>{item.subName}</option>)}
                </select>
            </div>

        </div>)



}

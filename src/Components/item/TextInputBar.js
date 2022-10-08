import React from 'react'

export default function TextInputBar(props) {
    const { label = "input", onChange, value, placeHolder, id, type = "text", subType = "text", selectMember = [], className = "" ,icon} = props
    if (subType === "text") {
        return (
            <div className={`relative w-full my-3 ${className}`}>
                <div className="mb-4 block">
                    <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor={id}>{label}</label>
                </div>

                <div className="flex justify-center mx-4">
                <span className={`${icon?'  inline-flex ':' hidden '}  items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400`} 
                style={{ boxShadow: "2px 2px 8px 4px rgba(0, 0, 0, 0.1)" }}>
                    {icon}</span>
                    <input className=" w-full   text-lg border-gray-100  rounded-lg
                     disabled:cursor-not-allowed 
                     disabled:opacity-50  text-gray-900 
                     focus:border-blue-500 focus:ring-blue-500   "
                        id={id} type={type}
                        value={value}
                        placeholder={placeHolder}
                        style={{ boxShadow: "2px 2px 8px 4px rgba(0, 0, 0, 0.1)" }}
                        onChange={onChange} />

                </div>
            </div>
        )
    } else if (subType === "select") {
        return (<div className={`relative w-[150px] my-3 ${className}`}>
            <div className="mb-4 block">
                <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor={id}>{label}</label>
            </div>
            <div className="relative w-full">
                <select className="block w-full border 
                 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 
                 rounded-lg p-2.5 text-sm"
                    id={id}
                    onChange={onChange}>
                    {selectMember.map((item, index) => <option key={index}>{item}</option>)}
                </select>
            </div>
        </div>)
    }
    else if (subType === "iconText") {
        return (
            <div className="flex">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
                    @</span>
                <div className="relative w-full">
                    <input className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-r-lg p-2.5 text-sm" id="username3" placeholder="Bonnie Green" required="" />
                </div>
            </div>
        )

    }


}

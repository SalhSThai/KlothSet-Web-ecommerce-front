import React from 'react'

export default function DeletedProductBody(props) {
    const { onClose,onDeleted ,deleteProduct} = props
    return (
        <div>
            <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
                <div className="flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5 !p-2 !border-b-0">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    </h3>
                </div>
                <div className="p-6 pt-0"><div className="text-center"><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                    </path>
                </svg>
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Are you sure you want to delete this product?</h3>
                    <div className="flex justify-center gap-4">
                        <button onClick={deleteProduct} className="text-white bg-red-700 border border-transparent hover:bg-red-800 focus:ring-4 focus:ring-red-300 disabled:hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 dark:disabled:hover:bg-red-600 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg" type="button">
                            <span className="flex items-center rounded-md text-sm px-4 py-2">
                                Yes, I'm sure</span>
                        </button>
                        <button onClick={onClose} className="text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg" type="button">
                            <span className="flex items-center rounded-md text-sm px-4 py-2">
                                No, cancel</span>
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

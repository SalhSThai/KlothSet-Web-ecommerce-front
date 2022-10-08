import React from 'react'

export default function Category() {
    return (
        <div className="h-[30px] w-[30px] relative">
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4h6v6h-6z"></path>
                <path d="M14 4h6v6h-6z"></path>
                <path d="M4 14h6v6h-6z"></path>
                <circle cx="17" cy="17" r="3"></circle>
            </svg>
        </div>
    )
}

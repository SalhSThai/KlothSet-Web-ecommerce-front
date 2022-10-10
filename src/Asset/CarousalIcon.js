import React from 'react'

export default function CarousalIcon() {
    return (
        <div className="h-[30px] w-[30px] relative">
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="15" y1="6" x2="15.01" y2="6"></line>
                <rect x="3" y="3" width="18" height="14" rx="3"></rect>
                <path d="M3 13l4 -4a3 5 0 0 1 3 0l4 4"></path>
                <path d="M13 12l2 -2a3 5 0 0 1 3 0l3 3"></path>
                <line x1="8" y1="21" x2="8.01" y2="21"></line>
                <line x1="12" y1="21" x2="12.01" y2="21"></line>
                <line x1="16" y1="21" x2="16.01" y2="21"></line>
            </svg>
        </div>
    )
}

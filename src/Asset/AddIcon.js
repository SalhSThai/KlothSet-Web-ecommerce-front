import React from 'react'

export default function AddIcon() {
    return (
        <div className="h-[30px] w-[30px] relative">
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 20l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4h4z"></path>
                <path d="M13.5 6.5l4 4"></path>
                <path d="M16 18h4m-2 -2v4"></path>
            </svg>
        </div>
    )
}

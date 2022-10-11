import React from 'react'

export default function HistoryIcon() {
    return (
        <div className="h-[30px] w-[30px] relative">

            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="12 8 12 12 14 14"></polyline>
                <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"></path>
            </svg>
        </div>
    )
}

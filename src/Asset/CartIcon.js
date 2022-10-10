import React from 'react'

export default function CartIcon() {
    return (
        <div className="h-[30px] w-[30px] relative">

            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="6" cy="19" r="2"></circle>
            <circle cx="17" cy="19" r="2"></circle>
            <path d="M17 17h-11v-14h-2"></path>
            <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13"></path>
            <path d="M15 6h6m-3 -3v6"></path>
        </svg></div>
    )
}

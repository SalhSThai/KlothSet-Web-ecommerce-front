import React from 'react'

export default function Addcircle() {
  return (
    <div className="h-[30px] w-[30px] relative">
    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <circle cx="12" cy="12" r="9"></circle>
    <line x1="9" y1="12" x2="15" y2="12"></line>
    <line x1="12" y1="9" x2="12" y2="15"></line>
 </svg></div>
  )
}

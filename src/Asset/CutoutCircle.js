import React from 'react'

export default function CutoutCircle(props) {
    const { className, image } = props
    return (
        <div className={className}>
            <div className="absolute h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-center bg-cover z-40 rounded-full border border-black" style={{ backgroundImage: `url(${image})` }} />
            <div className="absolute h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-center bg-cover bg-white z-30"   />
            <div className='absolute h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   z-20' style={{ backgroundColor: "rgba(0 ,0, 0, 0.7)" }} />
            <div className="absolute h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-center bg-cover z-10"  style={{ backgroundImage: `url(${image})` }} />

        </div>
    )
}

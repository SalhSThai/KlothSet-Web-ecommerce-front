import React  from 'react'

export default function AddCarousalBody(props) {
  return (
    <div className='w-[500px]  overflow-hidden flex justify-start flex-nowrap relative'>
        {props.children}
    </div>
  )
}

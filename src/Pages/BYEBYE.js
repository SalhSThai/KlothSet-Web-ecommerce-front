import React, { useState } from 'react'
import ModalPenguin from '../Asset/ModalPenguin'
import NewModal from '../Components/reuseComponent/NewModal'

export default function BYEBYE() {
    const [status,setStatus] = useState(false)
const onClose = (e) => {
e.preventDefault()
setStatus(false)
}
// navigator.geolocation()
// Geolocation.getCurrentPosition()

  return (
    <div className='w-screen h-screen'>
        <ModalPenguin status={status} onClose={onClose}/>

    </div>
  )
}

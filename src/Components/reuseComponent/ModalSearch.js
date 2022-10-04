import { useEffect, useRef, useState } from 'react'


export default function ModalSearch(props) {
    const { children, title = <h1>Login</h1>,  labelHeader,status ,close,show,custom=false} = props;
    return (
        <div >
            {custom?<div onClick={show}>{title}</div>:<button className='h-5 w-5' onClick={show} >{title}
            </button>}
            {status && <div className='fixed top-0 left-0 bottom-0 right-0 bg-black  bg-opacity-40 backdrop-blur-sm z-20 ' onClick={close}>
                <div className=' flex justify-center pt-[15vh] h-full ' >
                    <div className='flex flex-col w-1/2 min-h-min bg-white  fadein rounded-3xl' onClick={e => e.stopPropagation()} >
                         <ModalHeader onClose={close} />
                        {children}
                    </div>
                </div>
            </div>
            }
        </div>
    )
}


function ModalHeader(props) {
    const { label = 'MODAL', title = <h1 className='text-3xl font-bold'>{label}</h1> } = props
    return <div className='flex flex-col w-full'>
        <div className='flex justify-between items-center p-10 '>
            <input className='searchbar' type="text"></input>
            <i className="fa-solid fa-xmark fa-2xl  m-5" role="button" onClick={props.onClose} /></div>

        <div className='w-full Divider' /></div>
}
function ModalBody(props) {
    const { children } = props
    return <div className='p-4'>{children}</div>
}
function ModalDivider() {
    return <div className='w-full Divider'></div>
}

export { ModalHeader, ModalBody, ModalDivider }
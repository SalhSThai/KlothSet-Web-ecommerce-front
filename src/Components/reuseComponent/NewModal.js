import { useEffect, useRef, useState } from 'react'


export default function NewModal(props) {
    const { children, header = true, labelHeader, status, close, outside  ,width} = props;
    
    // document.body.style.overflow = status ? 'hidden':'auto';
    return (          
            <div className={` fixed top-0 left-0 bottom-0 right-0 bg-black  bg-opacity-40 backdrop-blur-sm z-20 ${status ? null : 'hidden'}`} onClick={e=>{return outside ?close(e):null}}>
                <div className='flex justify-center items-center h-full z-30' >
                    <div className={`'flex flex-col  min-h-min bg-white  fadein rounded-3xl '${width?String(width):" w-1/2"}`} onClick={ e =>{ return outside ?e.stopPropagation() : null}} >
                        {header && <ModalHeader label={labelHeader} onClose={close} />}
                        {children}
                    </div>
                </div>
            </div>
    )
}


function ModalHeader(props) {
    const { label = 'MODAL', title = <h1 className='text-3xl font-bold'>{label}</h1> } = props
    return <div className='flex flex-col w-full'>
        <div className='flex justify-between items-center p-10 '>{title}
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
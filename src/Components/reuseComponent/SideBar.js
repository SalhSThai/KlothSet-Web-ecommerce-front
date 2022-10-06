import { useEffect, useRef, useState } from 'react'


export default function SideBar(props) {
    const { children, title = <h1>Login</h1>, header = true ,labelHeader,status ,close,show} = props;
    const [closeAnimate,setCloseAnimate] = useState(false)
    const onClose = (e)=>{
        setCloseAnimate(true);
        setTimeout(()=>{
            close();
            setCloseAnimate(false);
        },600)
    }
    return (
        <div>
            <button className='h-5 w-5' onClick={show} >{title}
            </button>
            {status && <div className={`fixed top-0 left-0 bottom-0 right-0  z-20 `} onClick={onClose}>
                <div className='flex justify-start items-start h-screen' >
                    <div className={`flex flex-col w-1/5 h-full min-h-min bg-white fadeleft  dropdownShadow ${closeAnimate?'fadeleftout':null}`}  onClick={e => e.stopPropagation()} >
                        {header && <SideBarHeader label={labelHeader} onClose={onClose} />}
                        {children}
                    </div>
                </div>
            </div>
            }
        </div>
    )
}


function SideBarHeader(props) {
    const { label = 'MENU', title = <h1 className='text-3xl font-bold'>{label}</h1> } = props
    return <div className='flex flex-col w-full'>
        <div className='flex justify-between items-center p-10 '>{title}
            <i className="fa-solid fa-angle-left fa-2xl  m-5" role="button" onClick={props.onClose} /></div>
        <div className='w-full Divider' /></div>
}
function SideBarItem(props) {
    const { children } = props
    return (
        <div className='text-2xl font-medium mx-8 p-5'>
        {children}</div>)
}
function SideBarDivider() {
    return <div className='w-full Divider'></div>
}

export { SideBarHeader, SideBarItem, SideBarDivider }
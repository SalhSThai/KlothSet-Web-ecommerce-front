import { useEffect, useRef, useState } from 'react';

export default function Dropdown(props) {
    const { children, title = <h1>TITLE</h1>, arrow = true,width=100 } = props
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const dropdownEl = useRef();
    useEffect(() => {
        const clickOutSide = (e) => {
            if (!dropdownEl.current.contains(e.target)) {
                setIsOpenDropdown(false);
            }
        };
        document.addEventListener('mousedown', clickOutSide);
        return () => document.removeEventListener('mousedown', clickOutSide);
    }, []);

    return (
        <div className='flex flex-col justify-start items-start relative z-30' ref={dropdownEl}>
            <button className="flex justify-start items-center "  onClick={() => setIsOpenDropdown((prev) => !prev)} >
                {title}{arrow && <i className="fa-solid fa-angle-down m-1"></i>}
            </button>
            <div >
                {isOpenDropdown && <div className={`absolute flex flex-col justify-start gap-2 dropdownShadow min-w-max bg-white`} style={{width}}>{children}</div>}
            </div>
        </div>
    )
}


function DropdownHeader(props) {
    const { children } = props
    return <div className='p-4'>{children}</div>
}
function DropdownItem(props) {
    const { children } = props
    return <div className='p-4'>{children}</div>
}
function DropdownDivider() {
    return <div className='w-full Divider'></div>
}

export { DropdownHeader, DropdownItem, DropdownDivider }
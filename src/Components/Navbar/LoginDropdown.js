import Dropdown, { DropdownHeader, DropdownItem, DropdownDivider } from '../reuseComponent/Dropdown';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../../reduxStore';
import LoginModal from './LoginModal';
import RegisModal from './RegisModal';

export default function LoginDropdown() {

    const state = useSelector(state => state.auth);
    const dispatch = useDispatch()

    return state.isLogin?<UserDropdown  userInfo={state.userInfo}/>:<GuestDropdown />
}



function GuestDropdown(props) {
    return (
        <>
            <Dropdown title={<i className="fa-regular fa-circle-user fa-2xl  m-5" ></i>}>
                <DropdownHeader><h1 className='font-medium'>GUEST</h1></DropdownHeader>

                <DropdownDivider></DropdownDivider>
                <DropdownItem><LoginModal/></DropdownItem>
                <DropdownItem><RegisModal/></DropdownItem>
            </Dropdown>
            
        </>

    )
}

function UserDropdown(props) {
    return (<div>
        <Dropdown title={<Link ><i className="fa-regular fa-circle-user fa-2xl  m-5" ></i></Link>}>
            <DropdownHeader><span className="block text-sm">
                {props.userInfo}
            </span>
                <span className="block text-sm font-medium truncate">
                    bonnie@flowbite.com
                </span></DropdownHeader>

            <DropdownDivider></DropdownDivider>
            <DropdownItem  >Setting</DropdownItem>
            <DropdownDivider></DropdownDivider>
            <DropdownItem><Link>Sign out</Link></DropdownItem>
        </Dropdown>
    </div>
    )
}
import Dropdown, { DropdownHeader, DropdownItem, DropdownDivider } from '../reuseComponent/Dropdown';
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../../reduxStore';
import LoginModal from './LoginModal';
import RegisModal from './RegisModal';
import axios from '../../config/axios';
import { login, logout } from '../../reduxStore/AuthSlice';

export default function LoginDropdown() {

    const state = useSelector(state => state.auth);
    const dispatch = useDispatch()
    useEffect(()=>{
        const remember = async (token) =>  {
            const user =  token ? await axios.post('/auth/remember',{token},{headers:{Authorization:`Bearer ${token}`}}):null;
            user && dispatch(login(user.data));
        };
        remember(localStorage.getItem('token'))
    },[])
    return state.isLogin?<UserDropdown  userInfo={state.userInfo}/>:<GuestDropdown />
}



function GuestDropdown(props) {
    return (
        <>
            <Dropdown title={<i className="fa-regular fa-circle-user fa-2xl m-5" ></i> } id="user">
                <DropdownHeader><h1 className='font-medium'>GUEST</h1></DropdownHeader>

                <DropdownDivider></DropdownDivider>
                <DropdownItem><LoginModal/></DropdownItem>
                <DropdownItem><RegisModal/></DropdownItem>
            </Dropdown>
            
        </>

    )
}

function UserDropdown(props) {
    const state = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const clickSignout = (e)=>{
        dispatch(logout())
        navigate('/')
    }
    console.log(props.userInfo?.username);

    return (<div>
        <Dropdown title={<Link ><i className="fa-regular fa-circle-user fa-2xl  m-5" ></i></Link>} id="user">
            <DropdownHeader><span className="block text-sm">
                {props.userInfo?.username}
            </span>
                <span className="block text-sm font-medium truncate">
                {props.userInfo?.email}
                </span></DropdownHeader>

            <DropdownDivider></DropdownDivider>
            <DropdownItem  >Setting</DropdownItem>
            <DropdownDivider></DropdownDivider>
            <DropdownItem><div role='button' onClick={clickSignout}>Sign out</div></DropdownItem>
        </Dropdown>
    </div>
    )
}
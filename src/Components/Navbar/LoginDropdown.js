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
    console.log(state.userInfo);
    return state.isLogin?<UserDropdown userInfo={state.userInfo}/>:<GuestDropdown />
}

function SellerDropdown(props) {}


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
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const clickSignout = (e)=>{
        dispatch(logout())
        navigate('/')
    }
// ==========================================================  User
if(props.userInfo.role==="1"){
    return (<div>
        <Dropdown title={<Link ><i className="fa-regular fa-circle-user fa-2xl  m-5" ></i></Link>} id="user">
            <DropdownHeader><span className="block text-lg">
                {props.userInfo?.username}
            </span>
                <span className="block text-lg font-medium truncate">
                {props.userInfo?.email}
                </span></DropdownHeader>

            <DropdownDivider></DropdownDivider>
            <DropdownItem  >Profile</DropdownItem>
            <DropdownItem  >Setting</DropdownItem>
            <DropdownDivider></DropdownDivider>
            <DropdownItem><div role='button' onClick={clickSignout}>Sign out</div></DropdownItem>
        </Dropdown>
    </div>
    )
}
// ==========================================================  Seller
else if (props.userInfo.role==="2"){
    return (<div>
        <Dropdown title={<Link ><i className="fa-regular fa-circle-user fa-2xl  m-5" ></i></Link>} id="user">
            <DropdownHeader><span className="block text-lg">
                {props.userInfo?.username}
            </span>
                <span className="block text-lg font-medium truncate">
                {props.userInfo?.email}
                </span></DropdownHeader>

            <DropdownDivider></DropdownDivider>
            <DropdownItem  ><Link to={`/shopProfile/${props.userInfo?.ShopPath?.shopPath}`}>Shop</Link></DropdownItem>
            <DropdownItem  ><Link to={`/shopProfile/${props.userInfo?.ShopPath?.shopPath}/setting`}>Setting</Link></DropdownItem>
            <DropdownDivider></DropdownDivider>
            <DropdownItem><div role='button' onClick={clickSignout}>Sign out</div></DropdownItem>
        </Dropdown>
    </div>
    )
}
// ==========================================================  Admin
else if (props.userInfo.role==="0"){
    return (<div>
        <Dropdown title={<Link ><i className="fa-regular fa-circle-user fa-2xl  m-5" ></i></Link>} id="user">
            <DropdownHeader><span className="block text-lg">
                {props.userInfo?.username}
            </span>
                <span className="block text-lg font-medium truncate">
                {props.userInfo?.email}
                </span></DropdownHeader>

            <DropdownDivider></DropdownDivider>
            <DropdownItem  >edit</DropdownItem>
            <DropdownItem  >Setting</DropdownItem>
            <DropdownDivider></DropdownDivider>
            <DropdownItem><div role='button' onClick={clickSignout}>Sign out</div></DropdownItem>
        </Dropdown>
    </div>
    )
}
}

import Dropdown, { DropdownHeader, DropdownItem, DropdownDivider } from '../reuseComponent/Dropdown';
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../../reduxStore';
import LoginModal from './LoginModal';
import RegisModal from './RegisModal';
import { login, logout, thunkRemember } from '../../reduxStore/AuthSlice';
import { rememberMe } from '../../api/authApi';

export default function LoginDropdown() {

    const state = useSelector(state => state.auth);
    const dispatch = useDispatch() 
    
    
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

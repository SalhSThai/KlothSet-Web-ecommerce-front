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
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const clickSignout = (e) => {
        dispatch(logout())
        navigate('/')
    }
   const  profileIcon = (<div className="h-full w-full "><img className='w-[32px] h-[32px] object-cover rounded-full' src={state?.auth?.userInfo?.profileImage}></img></div>)

    return (<div className=' w-[80px] h-[40px] flex justify-center items-center'> 
        <AdminDropdown title={profileIcon} status={state?.auth?.userInfo?.role} clickSignout={clickSignout} userInfo={state?.auth?.userInfo} />
        <UserDropdown title={profileIcon} status={state?.auth?.userInfo?.role} clickSignout={clickSignout} userInfo={state?.auth?.userInfo} />
        <SellerDropdown  title={profileIcon} status={state?.auth?.userInfo?.role}clickSignout={clickSignout} userInfo={state?.auth?.userInfo} />
        <GuestDropdown title={profileIcon} status={state?.auth?.userInfo?.role} />
        </div>
    )



}
function AdminDropdown(props) {
    const { clickSignout, userInfo,status,title} = props;
    return (<div className={status === "0"? "block": " hidden "}>
        <Dropdown title={title} id="user">
            <DropdownHeader><span className="block text-lg">
                {userInfo?.username}
            </span>
                <span className="block text-lg font-medium truncate">
                    {userInfo?.email}
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
function UserDropdown(props) {
    const { clickSignout, userInfo,status ,title} = props;


    return (<div className={status === "1"? "block": " hidden "}>
        <Dropdown title={title} id="user">
            <DropdownHeader><span className="block text-lg">
                {userInfo?.username}
            </span>
                <span className="block text-lg font-medium truncate">
                    {userInfo?.email}
                </span></DropdownHeader>

            <DropdownDivider></DropdownDivider>
            <DropdownItem  ><Link to={`/shopProfile/${userInfo?.ShopPath?.shopPath}`}>Profile</Link></DropdownItem>
            <DropdownItem  ><Link to={`/shopProfile/${userInfo?.ShopPath?.shopPath}/setting`}>Setting</Link></DropdownItem>
            <DropdownDivider></DropdownDivider>
            <DropdownItem><div role='button' onClick={clickSignout}>Sign out</div></DropdownItem>
        </Dropdown>
    </div>
    )
}
function SellerDropdown(props) {
    const { clickSignout, userInfo ,status,title} = props;


    return (<div className={status === "2"? "block": " hidden "}>
        <Dropdown title={title} id="user">
            <DropdownHeader><span className="block text-lg">
                {userInfo?.username}
            </span>
                <span className="block text-lg font-medium truncate">
                    {userInfo?.email}
                </span></DropdownHeader>

            <DropdownDivider></DropdownDivider>
            <DropdownItem  ><Link to={`/shopProfile/${userInfo?.ShopPath?.shopPath}`}>Shop</Link></DropdownItem>
            <DropdownItem  ><Link to={`/shopProfile/${userInfo?.ShopPath?.shopPath}/setting`}>Setting</Link></DropdownItem>
            <DropdownDivider></DropdownDivider>
            <DropdownItem><div role='button' onClick={clickSignout}>Sign out</div></DropdownItem>
        </Dropdown>
    </div>
    )
}
function GuestDropdown(props) {
    const { status = "gust",title} = props
    return (
        <div className={status === "gust"? "block": " hidden "}>
            <Dropdown title={<i className="fa-regular fa-circle-user fa-2xl m-5" ></i>} id="user">
                <DropdownHeader><h1 className='font-medium'>GUEST</h1></DropdownHeader>

                <DropdownDivider></DropdownDivider>
                <DropdownItem><LoginModal /></DropdownItem>
                <DropdownItem><RegisModal /></DropdownItem>
            </Dropdown>

        </div>

    )
}
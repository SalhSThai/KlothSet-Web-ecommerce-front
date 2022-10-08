import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../item/Button';
import TextInputBar from '../../../item/TextInputBar'

export default function EditShopProfile() {
    const state = useSelector(state => state);
    const {shopName,email,phonenumber,ShopPath:{shopPath}} = state.auth.userInfo
    const dispatch = useDispatch();
    const initialInfo = {
        shopName:"",
        email:"",
        phonenumber:"",
    }

    const [profileEditState,setProfileEditState] = useState(initialInfo);
    return (
        <form className='grid grid-flow-row-dense grid-cols-4  justify-center items-start '>
            <TextInputBar className={"col-span-2"} icon="shopProfile/" label="Shop Path"  id="shopPathSEdit" value={profileEditState?.size} onChange={e => setProfileEditState({ ...profileEditState, shopPath: e.target.value })} placeHolder={shopPath}/>
            <TextInputBar className={"col-span-2"} label="Shop name" id="shopNameSEdit" value={profileEditState?.productName} onChange={e => setProfileEditState({ ...profileEditState, shopName: e.target.value })} placeHolder={shopName}/>
            <TextInputBar className={"col-span-2"} label="phonenumber" id="phonenumberSEdit" value={profileEditState?.price} onChange={e => setProfileEditState({ ...profileEditState, phonenumber: e.target.value })}placeHolder={phonenumber} />
            <TextInputBar className={"col-span-2"} label="email" id="emailSEdit" value={profileEditState?.amount} onChange={e => setProfileEditState({ ...profileEditState, email: e.target.value })} placeHolder={email}/>
            <Button className={"col-span-4"}>SUBMIT</Button>
        </form>
    )
}

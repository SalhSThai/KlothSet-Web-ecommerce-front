import React from 'react'
import EditProfile from './Modal/EditProfile'
import NewProduct from './Modal/NewProduct'
import AddCategory from './Modal/AddCategory'
import EditProduct from './Modal/EditProduct'
import ChangeProfilePicture from './Modal/ChangeProfilePicture'


export default function ModalShopSetting() {
    return (
        <div>
            <NewProduct />
            <EditProfile />
            <EditProduct />
            <AddCategory />
        </div>
    )
}

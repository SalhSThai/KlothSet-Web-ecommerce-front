
import Profile from '../../../Asset/Profile';
import AddIcon from '../../../Asset/AddIcon';
import Hanger from '../../../Asset/Hanger';
import Category from '../../../Asset/Category';
import { useDispatch, useSelector } from 'react-redux';
import { showAddBanerPicture, showAddCategory, showEditProduct, showEditProfile, showNewProduct } from '../../../reduxStore/EditBarSlice';
import CarousalIcon from '../../../Asset/CarousalIcon';
import Addcircle from '../../../Asset/Addcircle';
import SettingIcon from '../../../Asset/SettingIcon';
import { useState } from 'react';
import EditItemIcon from '../../../Asset/EditItemIcon';
import EditProduct from '../Modal/EditProduct';
import EditSubProduct from '../Modal/EditSubProduct';
import AddSubProduct from '../Modal/AddSubProduct';

export default function IconButton(props) {
    const {image,id,productName,index,i} = props
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [addSubProduct,setAddSubProduct] = useState(false);
    const [editProduct,setEditProduct] = useState(false);
    const [setting,setSetting] = useState(false);


    return (<div className="inline-flex" role="group">
        <button onClick={e=>setAddSubProduct(true)} className="text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800 rounded-r-none group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg" type="button">
            <span className="flex items-center rounded-r-none rounded-md text-sm px-4 py-2">
                <Addcircle /></span>
                <AddSubProduct productName={productName}  status={addSubProduct} image={image} id={id} onClose={e=>setAddSubProduct(false)} index={index}/>

        </button>
        <button onClick={e=>setEditProduct(true)} className="text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800  border-l-0 pl-0 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg" type="button">
            <span className="flex items-center !rounded-none text-sm px-4 py-2">
                <EditItemIcon/></span>
                <EditSubProduct productName={productName} status={editProduct} image={image} id={id} onClose={e=>setEditProduct(false)} index={index} />
        </button>
        
        <button onClick={e=>setSetting(true)} className="text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800 rounded-l-none border-l-0 pl-0 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg" type="button">
            <span className="flex items-center rounded-l-none rounded-md text-sm px-4 py-2">
                <SettingIcon />
                <EditProduct status={setting} image={image} id={id} onClose={e=>setSetting(false)} i={i}/>
                
                </span>

        </button>
    </div>)
    
}

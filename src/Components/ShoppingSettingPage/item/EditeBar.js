
import Profile from '../../../Asset/Profile';
import AddIcon from '../../../Asset/AddIcon';
import Hanger from '../../../Asset/Hanger';
import Category from '../../../Asset/Category';
import { useDispatch, useSelector } from 'react-redux';
import { showAddCategory, showEditProduct, showEditProfile, showNewProduct } from '../../../reduxStore/EditBarSlice';

export default function IconButton() {
    const state = useSelector(state => state);
    const dispatch = useDispatch()

    return (<div className="inline-flex" role="group">
        <button onClick={e=>dispatch(showEditProfile(true))} className="text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800 rounded-r-none group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg" type="button">
            <span className="flex items-center rounded-r-none rounded-md text-sm px-4 py-2">
                <Profile />Edit Profile</span>
        </button>
        <button onClick={e=>dispatch(showNewProduct(true))} className="text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800  border-l-0 pl-0 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg" type="button">
            <span className="flex items-center !rounded-none text-sm px-4 py-2">
                <AddIcon />New Product</span>

        </button>
        <button onClick={e=>dispatch(showEditProduct(true))} className="text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800  border-l-0 pl-0 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg" type="button">
            <span className="flex items-center !rounded-none  text-sm px-4 py-2">
                <Hanger />Edit Product</span>

        </button>
        
        <button onClick={e=>dispatch(showAddCategory(true))} className="text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800 rounded-l-none border-l-0 pl-0 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg" type="button">
            <span className="flex items-center rounded-l-none rounded-md text-sm px-4 py-2">
                <Category />Add Category</span>
        </button>
    </div>
    )
}

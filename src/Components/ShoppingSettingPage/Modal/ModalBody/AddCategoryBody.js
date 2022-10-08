import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../item/Button';
import TextInputBar from '../../../item/TextInputBar';

export default function AddCategoryBody() {
    const state = useSelector(state => state);
    const {shopName,email,phonenumber,ShopPath:{shopPath}} = state?.auth?.userInfo
    const dispatch = useDispatch();
    const initialInfo = {
        category:"",
        subCategory:"",
    }
    const [addCategoryState,setAddCategoryState] = useState(initialInfo);
console.log(state);
    return (
        <div>
            <form className='grid grid-flow-row-dense grid-cols-4  justify-center items-start '>
                <TextInputBar className={"col-span-4"} label="Category" id="categoryAdd" value={addCategoryState?.size} onChange={e => setAddCategoryState({ ...addCategoryState, category: e.target.value })} placeHolder={shopPath} />
                <TextInputBar className={"col-span-4"} label="Sub Category" id="subCategoryAdd" value={addCategoryState?.productName} onChange={e => setAddCategoryState({ ...addCategoryState, subCategory: e.target.value })} placeHolder={shopName} />
                <Button className={"col-span-4"}>SUBMIT</Button>
            </form>
        </div>
    )
}

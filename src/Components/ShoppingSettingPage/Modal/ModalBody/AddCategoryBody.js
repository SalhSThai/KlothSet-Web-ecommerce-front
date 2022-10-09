import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../item/Button';
import TextInputBar from '../../../item/TextInputBar';

export default function AddCategoryBody() {
    const state = useSelector(state => state);
  const dispatch = useDispatch()
  const data = state?.shop?.shopInfo?.data;
    const initialInfo = {
        category: "",
        subCategory: "",
    }
    const Category = data?.Categories?.map(i=>i.categoryName);
    const [addCategoryState, setAddCategoryState] = useState(initialInfo);
    const onChangeCategory = (e) => {
        setAddCategoryState({ ...addCategoryState, category: e.target.value })
     }

    return (
        <div className='flex justify-around items-center w-full  h-full'>
            <div className='w-1/3 h-fit min-h-[300px] bg-slate-100'>

            </div>
            <form className='grid grid-flow-row-dense grid-cols-4  justify-center items-start '>
                <TextInputBar subType="select" selectMember={[]} className={"col-span-4"} label="Category" id="categoryAdd" value={addCategoryState?.category} onChange={e => setAddCategoryState({ ...addCategoryState, category: e.target.value })} placeHolder={addCategoryState?.category} />
                <TextInputBar className={"col-span-4"} label="Category" id="categoryAdd" value={addCategoryState?.category} onChange={e => setAddCategoryState({ ...addCategoryState, category: e.target.value })} placeHolder={addCategoryState?.category} />
                
                <Button className={"col-span-4"}>SUBMIT</Button>
            </form>
        </div>
    )
}

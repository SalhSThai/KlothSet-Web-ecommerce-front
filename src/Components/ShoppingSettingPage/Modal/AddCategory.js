import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showAddCategory } from '../../../reduxStore/EditBarSlice';
import NewModal, { ModalBody } from '../../reuseComponent/NewModal';
import AddCategoryBody from './ModalBody/AddCategoryBody';

export default function AddCategory() {
  const state = useSelector(state => state);
  const dispatch = useDispatch()
  return (
    <NewModal status={state?.editbar?.addCategory}  labelHeader="Add Category" close={e=>dispatch(showAddCategory(false))} >
      <ModalBody>
        <div className='flex flex-col justify-center items-center w-full h-full'>
           <AddCategoryBody/>
        </div>
      </ModalBody>
    </NewModal>
  )
}

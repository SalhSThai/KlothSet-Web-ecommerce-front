import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showEditProduct } from '../../../reduxStore/EditBarSlice';
import NewModal, { ModalBody } from '../../reuseComponent/NewModal';

export default function EditProduct() {
  const state = useSelector(state => state);
  const dispatch = useDispatch()
  return (
    <NewModal status={state?.editbar?.editProduct} labelHeader="Add Category" close={e=>dispatch(showEditProduct(false))}>
      <ModalBody>
        <div className='flex flex-col justify-center items-center w-full h-full'>
           
        </div>
      </ModalBody>
    </NewModal>
  )
}

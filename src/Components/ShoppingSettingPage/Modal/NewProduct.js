import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showNewProduct } from '../../../reduxStore/EditBarSlice';
import NewModal, { ModalBody } from '../../reuseComponent/NewModal';
import UploadBody from './ModalBody/UploadBody';

export default function NewProduct() {
  const state = useSelector(state => state);
  const dispatch = useDispatch()
  return (
    <NewModal status={state?.editbar?.newProduct} labelHeader="Add Category" close={e => dispatch(showNewProduct(false))}>
      <ModalBody>
        <div className='flex flex-col justify-center items-center w-full h-full'>

          <UploadBody close={e => dispatch(showNewProduct(false))} />

        </div>
      </ModalBody>
    </NewModal>
  )
}

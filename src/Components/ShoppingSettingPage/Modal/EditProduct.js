import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showEditProduct } from '../../../reduxStore/EditBarSlice';
import NewModal, { ModalBody } from '../../reuseComponent/NewModal';
import EditProductBody from './ModalBody/EditProductBody';

export default function EditProduct(props) {
  const {status,image , id, onClose,i} = props 
  const state = useSelector(state => state);
  const dispatch = useDispatch()
  return (
    <NewModal custom labelHeader="Edit Product" onClose={onClose} status={status} close={onClose} outside={true} width={"w-5/6"}>
      <ModalBody>
        <div className='flex flex-col justify-center items-center w-full h-full'>
           <EditProductBody close={onClose} i={i}/>
        </div>
      </ModalBody>
    </NewModal>
  )
}

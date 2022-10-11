import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NewModal, { ModalBody } from '../../reuseComponent/NewModal';
import AddSubProductBody from './ModalBody/AddSubProductBody';

export default function AddSubProduct(props) {
  const {status,image , id, onClose,productName,index} = props 
  const state = useSelector(state => state);
  const dispatch = useDispatch()
  return (
      <NewModal labelHeader={productName}  status={status} close={onClose} outside={true} width={"w-5/6"} >
      <ModalBody>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <AddSubProductBody close={onClose} image={image} index={index}/>
        </div>
      </ModalBody>
    </NewModal>
  )
}

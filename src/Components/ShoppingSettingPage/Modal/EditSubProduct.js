import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NewModal, { ModalBody } from '../../reuseComponent/NewModal';
import EditSubProductBody from './ModalBody/EditSubProductBody';

export default function EditSubProduct(props) {
  const {status,image , id, onClose,index} = props 
  const state = useSelector(state => state);
  const dispatch = useDispatch()
  return (
    <NewModal custom labelHeader="Edit Sub Product" onClose={onClose} status={status} close={onClose} outside={true} width={"w-5/6"}>
      <ModalBody>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <EditSubProductBody image={image} index={index}/>
        </div>
      </ModalBody>
    </NewModal>
  )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ReviewStar from '../../../item/ReviewStar';
import NewModal, { ModalBody } from '../../../reuseComponent/NewModal';
import AddtoCartBody from './Body/AddtoCartBody';

export default function AddtoCart(props) {
  const {status,image , id, onClose,product} = props 
  return (
    <NewModal custom labelHeader={<div><ReviewStar starPoint={product?.star} /> {product?.brandName} : {product?.productName}</div>} onClose={onClose} status={status} close={onClose} outside={true} width={"w-5/6"}>
      <ModalBody>
        <div className='flex flex-col justify-center items-center w-full h-full'>
           <AddtoCartBody product={product} onClose={onClose}/>
        </div>
      </ModalBody>
    </NewModal>
  )
}

import { Modal } from 'flowbite-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CloseIcon from '../../../Asset/CloseIcon'
import { showDeletedModal } from '../../../reduxStore/EditBarSlice'
import { thunkDeleteProduct } from '../../../reduxStore/ProductSlice'
import NewModal, { ModalBody } from '../../reuseComponent/NewModal'
import DeletedProductBody from './ModalBody/DeletedProductBody'

export default function DeleteProduct(props) {
    const {className , id,status,onClose,deleteProduct,image} = props
   
    return (
        <div className={` ${className} `}>
            <NewModal custom header={false} onClose={onClose} status={status} close={onClose} outside={true}>
                <ModalBody>
                    <div className=' w-full h-[300px] '>
                    <img className='relative object-contain h-full w-full ' src={image}/>
                    <CloseIcon className={ "absolute top-0 right-0 m-5"} onClose={onClose}/>
                    </div>
                    <DeletedProductBody onClose={onClose} deleteProduct={deleteProduct} id={id}/>
                </ModalBody>
            </NewModal>
        </div>
    )
}

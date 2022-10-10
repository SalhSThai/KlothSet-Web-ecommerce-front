import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showAddBanerPicture } from '../../../reduxStore/EditBarSlice';
import { thunkUploadCarousal } from '../../../reduxStore/ShopSlice';
import Button from '../../item/Button';
import FileButton from '../../item/FileButton';
import NewModal, { ModalBody } from '../../reuseComponent/NewModal';
import AddCarousalBody from './ModalBody/AddCarousalBody';

export default function AddCarousal(props) {
    const { image = [] ,userId} = props
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    const [newImage, setNewImage] = useState(null)
    useEffect(()=>{
        setNewImage(image)
    },[])
    const onSubmit = (e) => {
        dispatch(thunkUploadCarousal(userId))
    }

    return (
        <NewModal width={"w-1/3"} status={state?.editbar?.banerPictureModal} labelHeader="Add Category" close={e => dispatch(showAddBanerPicture(false))} >
            <ModalBody>
                <div className='flex flex-col justify-center items-center w-full h-full '>
                    <AddCarousalBody >
                        <img className=' w-full object-contain ' src={newImage} />
                    </AddCarousalBody >
                    <FileButton onChange={e => {
                        const img = URL.createObjectURL(e.target.files[0]);
                        setNewImage(img);
                    }} />
                </div>
                <Button><div onClick={onSubmit}> SUBMIT</div></Button>
            </ModalBody>
        </NewModal>
    )
}

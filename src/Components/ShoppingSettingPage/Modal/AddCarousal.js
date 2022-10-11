import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
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
    const [upload, setUpload] = useState(null)

    useEffect(()=>{
        setNewImage(image)
    },[])
    const onSubmit = (e) => {
        e.preventDefault();
        toast('Add Process');
        const formData = new FormData();
        console.log(upload);
        if (!upload) {
            return toast.error('image is required');
        }
        try {
            formData.append('coverImage', upload);
            for (var pair of formData.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }
        dispatch(thunkUploadCarousal(formData,userId))
        dispatch(showAddBanerPicture(false))
        }
        catch(err){
            toast.error(err.message);
        }
        
    }

    return (
        <NewModal width={"w-1/3"} status={state?.editbar?.banerPictureModal} labelHeader="Add Category" close={e => dispatch(showAddBanerPicture(false))} >
            <ModalBody>
                <form onSubmit={onSubmit}>
                <div className='flex flex-col justify-center items-center w-full h-full '>
                    <AddCarousalBody >
                        <img className=' w-full object-contain ' src={newImage} />
                    </AddCarousalBody >
                    <FileButton onChange={e => {
                        const img = URL.createObjectURL(e.target.files[0]);
                        setNewImage(img);
                        setUpload(e.target.files[0])
                    }} />
                </div>
                <Button> SUBMIT</Button>
                </form>
            </ModalBody>
        </NewModal>
    )
}

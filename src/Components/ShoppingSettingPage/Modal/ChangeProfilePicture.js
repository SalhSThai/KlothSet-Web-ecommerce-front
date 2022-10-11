import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import CutoutCircle from '../../../Asset/CutoutCircle';
import { thunkChangeProfilePicture } from '../../../reduxStore/AuthSlice';
import Button from '../../item/Button';
import FileButton from '../../item/FileButton';
import NewModal, { ModalBody } from '../../reuseComponent/NewModal';

export default function ChangeProfilePicture(props) {
    const { status, onClose, image } = props
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    const [newImage, setNewImage] = useState('');
    const [upload,setUpload] = useState(null)
    const data = state?.shop?.shopInfo;
    useEffect(() => {
        setNewImage(image)
    }, [image])

    const handleSubmit = (e) => {
        e.preventDefault();
        toast('Add Process');
        const formData = new FormData();
        if (!upload) {
            return toast.error('image is required');
        }
        try {
            formData.append('profileImage', upload);
            for (var pair of formData.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }
            dispatch(thunkChangeProfilePicture(formData,state?.auth?.userInfo?.id)); 
            onClose(false);
        }
        catch(err){
            toast.error(err.message);
        }
    }


    return (
        <NewModal status={status} labelHeader="Change Profile Logo" close={onClose}>
            <ModalBody>
                <form className='flex flex-col justify-center items-center w-full h-full' onSubmit={handleSubmit}>
                    <CutoutCircle className="w-[300px] h-[300px] relative " image={newImage}></CutoutCircle>
                    <FileButton onChange={e => {
                        const img = URL.createObjectURL(e.target.files[0]);
                        setNewImage(img);
                        setUpload(e.target.files[0])
                    }} />
                    <Button>Submit</Button>
                </form>
            </ModalBody>
        </NewModal>
    )
}

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CutoutCircle from '../../../Asset/CutoutCircle';
import { showChangeProfilePicture } from '../../../reduxStore/EditBarSlice';
import FileButton from '../../item/FileButton';
import NewModal, { ModalBody } from '../../reuseComponent/NewModal';

export default function ChangeProfilePicture() {
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    const [newImage, setNewImage] = useState('');
    const { profileImage, shopName } = state?.shop?.shopInfo?.data;
    useEffect(() => {
        setNewImage(profileImage)
     }, [])
    return (
        <NewModal status={state?.editbar?.changeProfilePicture} labelHeader="Change Profile Logo" close={e => dispatch(showChangeProfilePicture(false))}>
            <ModalBody>
                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <CutoutCircle className="w-[300px] h-[300px] relative " image={newImage}></CutoutCircle>
                    <FileButton onChange={e => {
                        const img = URL.createObjectURL(e.target.files[0]);
                        setNewImage(img);
                    }} />
                </div>
            </ModalBody>
        </NewModal>
    )
}

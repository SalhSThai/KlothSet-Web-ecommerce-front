import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showEditProfile } from '../../../reduxStore/EditBarSlice';
import NewModal, { ModalBody } from '../../reuseComponent/NewModal';
import EditProfileBody from './ModalBody/EditProfileBody';

export default function EditProfile() {
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    return (
        <NewModal status={state?.editbar?.editProfile} labelHeader="Edit Profile" close={e=>dispatch(showEditProfile(false))}>
            <ModalBody>
                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <EditProfileBody/>
                </div>
            </ModalBody>
        </NewModal>
    )
}

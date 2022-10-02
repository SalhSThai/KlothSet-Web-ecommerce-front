import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showLogin } from '../../reduxStore/AuthSlice';
import Modal, { ModalBody, ModalHeader } from '../reuseComponent/Modal';
import LoginForm from './LoginForm';

export default function LoginModal(props) {
    const state = useSelector(state => state.auth);
    const dispatch = useDispatch()

    return (
        <div>
            <Modal title="LOGIN" 
            labelHeader="LOGIN" 
            status={state.showLogin} 
            close={e => {dispatch(showLogin(false))}}
            show={e=>{dispatch(showLogin(true));}}>
                <ModalBody>
                <LoginForm/>
                </ModalBody>
            </Modal>
        </div>
    )
}

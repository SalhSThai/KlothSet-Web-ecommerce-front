import { useDispatch, useSelector } from 'react-redux';
import { showRegister } from '../../reduxStore/AuthSlice';
import Modal, { ModalBody, ModalHeader } from '../reuseComponent/Modal';
import LoginForm from './LoginForm';
import RegisForm from './RegisForm';

export default function RegisModal(props) {
    const state = useSelector(state => state.auth);
    const dispatch = useDispatch()
    return (
        <div>
            <Modal title="REGISTER" 
            labelHeader="Register" 
            status={state.showRegister} 
            close={e => dispatch(showRegister(false))}
            show={e => dispatch(showRegister(true))}>
                <ModalBody>
                    <RegisForm />
                </ModalBody>
            </Modal>
        </div>
    )
}

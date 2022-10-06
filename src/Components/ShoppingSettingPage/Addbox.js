import { Button, FileInput, Label } from "flowbite-react";
import { useState } from "react"
import { toast } from "react-toastify";
import Modal, { ModalBody } from "../reuseComponent/Modal";


export default function Addbox() {
    const [state, setState] = useState(false);
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (!image) {
            return toast.error('title or image is required');
        }
        formData.append('image', image);
        console.log(formData, 'formdata');
        // await onSubmit(formData);
    }
    const Upload = (props) => {
        return <Modal custom
            title={props.icon}
            labelHeader="Product Add"
            status={state}
            close={e => { setState(false) }}
            show={e => { setState(true) }}
            outside
        >
            <ModalBody>
                <UploadPage value={image} chooseImage={e => setImage(e.target.files[0])} />
            </ModalBody>

        </Modal>
    }

    const UploadPage = (props) => {
        return (
            <form onSubmit={""}>
                <div id="fileUpload">
                    <div className="mb-2 block">
                        <Label htmlFor="file" value="Upload file" />
                    </div>
                    <FileInput id="file" helperText="A profile picture is useful to confirm your are logged into your account"  onChange={props.chooseImage} />
                </div>
            </form>
        )
    }

    const Plus = () => {
        return (<svg role="button" width="120" height="120" viewBox="0 0 120 120" className={e => setState(true)}>
            <line className='stroke-[20] ' x1='0' y1='60' x2='120' y2='60' stroke='black' />
            <line className='stroke-[20] ' x1='60' y1='0' x2='60' y2='120' stroke='black' />
        </svg>)
    }
    return (<div className='w-1/3 bg-slate-300 '>
        <div className='pt-[80%] w-full relative '>
            <div className='w-full h-full absolute top-0 left-0 rounded-t-xl flex justify-center  items-center'  >
                <div className="-translate-x-1/2 -translate-y-1/2"></div>
                <Upload icon={<Plus />} />
            </div>
        </div>
    </div>)
}


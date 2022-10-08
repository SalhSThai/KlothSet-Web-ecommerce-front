
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createProduct } from '../../../../api/productApi';
import Button from '../../../item/Button'
import FileButton from '../../../item/FileButton';
import TextInputBar from '../../../item/TextInputBar';

export default function UploadBody(props) {
    const {close,brandName } = props;

    const initialInfo = {
        productName: "",
        price: "", size: "",
        amount: "", color: "",
        brandName,
        description: "",
        gender: "",
        sellerId: 3,
        categoryId: 1,
        image:""
    };
    const [productInfo, setProductInfo] = useState(initialInfo)
    const [image, setImage] = useState(null);
    const loading = useSelector(state => state.loading.loading);
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (!productInfo?.image) {
            return toast.error('image is required');
        }
        try {
            formData.append('productName', productInfo.productName);
            formData.append('profileProductImage', productInfo.profileProductImage);
            formData.append('price', productInfo.price);
            formData.append('size', productInfo.size);
            formData.append('amount', productInfo.amount);
            formData.append('color', productInfo.color);
            formData.append('description', productInfo.description);
            formData.append('gender', productInfo.gender);


            for (var pair of formData.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }
            dispatch(loading(true));
            await createProduct(formData);
            close(false);
        }
        catch (err) { toast.error('title or image is required'); }
        finally {dispatch(loading(false)) }
    }

    return (
        <form className='grid grid-flow-row-dense grid-cols-4  justify-center items-start ' onSubmit={handleSubmit}>

            
            <TextInputBar className={"col-span-4"} label="Product name" id="ProductNameAdd" value={productInfo?.productName} onChange={e => setProductInfo({ ...productInfo, productName: e.target.value })}/>
            <TextInputBar className={"col-span-2"} label="Price" id="PriceAdd" value={productInfo?.price} onChange={e => setProductInfo({ ...productInfo, productName: e.target.value })}/>
            <TextInputBar className={"col-span-2"} label="Amount" id="AmountAdd" value={productInfo?.amount} onChange={e => setProductInfo({ ...productInfo, productName: e.target.value })}/>
            <TextInputBar className={"col-span-1"} label="Size" selectMember={["XS","S","M","L","XL"]} subType="select" id="SizeAdd" value={productInfo?.size} onChange={e => setProductInfo({ ...productInfo, productName: e.target.value })}/>
            <TextInputBar className={"col-span-1"} label="Color" subType="select" id="ColorAdd" value={productInfo?.color} onChange={e => setProductInfo({ ...productInfo, productName: e.target.value })}/>
            <TextInputBar className={"col-span-1"} label="Gender" selectMember={["FEMALE","MALE"]} subType="select" id="GenderAdd" value={productInfo?.gender} onChange={e => setProductInfo({ ...productInfo, productName: e.target.value })}/>
            <TextInputBar className={"col-span-1"} label="Category" subType="select" id="CategoryAdd" value={productInfo?.categoryId} onChange={e => setProductInfo({ ...productInfo, productName: e.target.value })}/>
            <TextInputBar className={"col-span-4"} label="Discription" id="DiscriptionAdd" value={productInfo?.description} onChange={e => setProductInfo({ ...productInfo, productName: e.target.value })}/>
            
            <div className='w-full col-span-4'>
                <FileButton helperText="A profile picture for your product"
                    onChange={e =>setProductInfo({ ...productInfo, image: e.target.files[0] })} /></div>
            <Button className={"col-span-4"}>SUBMIT</Button>

        </form>
    )
}

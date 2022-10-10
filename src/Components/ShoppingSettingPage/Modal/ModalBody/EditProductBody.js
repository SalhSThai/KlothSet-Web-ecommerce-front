
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createProduct } from '../../../../api/productApi';
import { loading } from '../../../../reduxStore/LoadingSlice';
import { thunkCreateProduct } from '../../../../reduxStore/ProductSlice';
import Button from '../../../item/Button'
import CheckBox from '../../../item/CheckBox';
import FileButton from '../../../item/FileButton';
import TextInputBar from '../../../item/TextInputBar';

export default function EditProductBody(props) {
    const { close, id, } = props;
    const [check, setCheck] = useState(false);
    const [category, setCategory] = useState([])
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    const data = state?.shop?.shopInfo;
    const currentProduct = data?.Products?.find(i => i.id === '1')
    const arrCategory = data?.Categories?.map(i => i.categoryName);
    const initialInfo = {
        productName: "",
        price: "", size: "xs",
        amount: "", color: "",
        brandName: "",
        description: "",
        gender: "FEMALE",
        sellerId: "",
        category: "",
        profileProductImage: ""
    };
    const [productInfo, setProductInfo] = useState(initialInfo)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handleSubmit");
        toast('Add Process');
        const formData = new FormData();
        if (!productInfo?.profileProductImage) {
            return toast.error('image is required');
        }
        try {
            formData.append('productName', productInfo?.productName);
            formData.append('profileProductImage', productInfo?.profileProductImage);
            formData.append('price', productInfo?.price);
            formData.append('amount', productInfo?.amount);
            formData.append('brandName', productInfo?.brandName);
            formData.append('categoryName', productInfo?.category);
            formData.append('size', productInfo?.size);
            formData.append('gender', productInfo?.gender);
            formData.append('color', productInfo?.color);
            formData.append('description', productInfo?.description);
            formData.append('sellerId', state?.auth?.userInfo?.id);


            for (var pair of formData.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }
            dispatch(loading(true));
            dispatch(thunkCreateProduct(formData));
            close(false);
        }
        catch (err) { toast.error('ERRor'); }
        finally { dispatch(loading(false)) }
    }

    return (<div className='flex justify-center '>
        <div className='h-auto w-full'></div>
        <form className='grid grid-flow-row-dense grid-cols-4  justify-center items-start w-full p-4 ' onSubmit={e => handleSubmit(e)}>


            <TextInputBar className={"col-span-4"} label="Product name" id="ProductNameAdd" value={productInfo?.productName} onChange={e => setProductInfo({ ...productInfo, productName: e.target.value })} placeholder={currentProduct?.productName}/>
            <TextInputBar className={"col-span-2"} label="Price" id="PriceAdd" value={productInfo?.price} onChange={e => setProductInfo({ ...productInfo, price: e.target.value })} placeholder={currentProduct?.productName}/>
            <TextInputBar className={"col-span-1"} label="Amount" id="AmountAdd" value={productInfo?.amount} onChange={e => setProductInfo({ ...productInfo, amount: e.target.value })} />
            <TextInputBar className={"col-span-1"} label="Brand" id="BrandAdd" value={productInfo?.brandName} onChange={e => setProductInfo({ ...productInfo, brandName: e.target.value })} />
            <TextInputBar className={"col-span-1"} check={check} label="Category" selectMember={arrCategory} subType="select" id="CategoryAdd" value={productInfo?.category} onChange={e => setProductInfo({ ...productInfo, category: e.target.value })} />
            <TextInputBar className={"col-span-1"} label="Size" selectMember={["XS", "S", "M", "L", "XL"]} subType="select" id="SizeAdd" value={productInfo?.size} onChange={e => setProductInfo({ ...productInfo, size: e.target.value })} />
            <TextInputBar className={"col-span-1"} label="Gender" selectMember={["FEMALE", "MALE"]} subType="select" id="GenderAdd" value={productInfo?.gender} onChange={e => setProductInfo({ ...productInfo, gender: e.target.value })} />
            <TextInputBar className={"col-span-1"} check={true} label="Color" subType="select" id="ColorAdd" value={productInfo?.color} onChange={e => setProductInfo({ ...productInfo, color: e.target.value })} />
            <CheckBox className={"col-span-2"} label="Add New" id="AddNew" onCheck={e => setCheck(e.target.checked)} />

            <TextInputBar className={"col-span-4"} label="Discription" id="DiscriptionAdd" value={productInfo?.description} onChange={e => setProductInfo({ ...productInfo, description: e.target.value })} />

            <div className='w-full col-span-4'>
                <FileButton helperText="A profile picture for your product"
                    onChange={e => setProductInfo({ ...productInfo, profileProductImage: e.target.files[0] })} /></div>
            <Button className={"col-span-4"}>SUBMIT</Button>

        </form>
    </div>

    )
}

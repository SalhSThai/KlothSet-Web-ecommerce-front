
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createProduct } from '../../../../api/productApi';
import { loading } from '../../../../reduxStore/LoadingSlice';
import { thunkCreateProduct, thunkEditProduct } from '../../../../reduxStore/ProductSlice';
import Button from '../../../item/Button'
import CheckBox from '../../../item/CheckBox';
import FileButton from '../../../item/FileButton';
import ReviewStar from '../../../item/ReviewStar';
import TextInputBar from '../../../item/TextInputBar';

export default function EditProductBody(props) {
    const { close, id, i} = props;
    const initialInfo = {
        productName: i?.productName,
        price: i?.price, size: "xs",
        brandName: i?.brandName,
        description: i?.description,
        gender: "FEMALE",
        sellerId: "",
        category: "",
        profileProductImage: "",
        star:i?.star,
        productId:i?.id,
    };
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    const data = state?.shop?.shopInfo;
    const arrCategory = i?.Categories?.map?.(i=>i.categoryName)
    const [productInfo, setProductInfo] = useState(initialInfo)
    const [image,setImage] = useState(null)
    useEffect(()=>{
        setImage(i?.productImage)
    },[])
    const handleSubmit = async (e) => {
        e.preventDefault();
        toast('Add Process');
        const formData = new FormData(); 
        if (!productInfo?.profileProductImage) {
            return toast.error('image is required');
        }
        try {
            formData.append('productName', productInfo?.productName);
            formData.append('profileProductImage', productInfo?.profileProductImage);
            formData.append('price', productInfo?.price);
            formData.append('brandName', productInfo?.brandName);
            formData.append('categoryName', productInfo?.category);
            formData.append('gender', productInfo?.gender);
            formData.append('description', productInfo?.description);
            formData.append('productId', i?.id);
            formData.append('star', productInfo?.star);

            formData.append('sellerId', state?.auth?.userInfo?.id);


            for (var pair of formData.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }
           
            dispatch(thunkEditProduct(formData));
            close(false);
        }
        catch (err) { toast.error('ERRor'); }
    }

    return (<div className='flex justify-center '>
        <div className='h-auto w-full'><img src={image}/></div>
        <form className='grid grid-flow-row-dense grid-cols-3  justify-center items-start w-full p-4 ' onSubmit={e => handleSubmit(e)}>


            <TextInputBar className={"col-span-3"} label="Product name" id="ProductNameAdd" value={productInfo?.productName} onChange={e => setProductInfo({ ...productInfo, productName: e.target.value })} />
            <TextInputBar className={"col-span-1"} label="Price" id="PriceAdd" value={productInfo?.price} onChange={e => setProductInfo({ ...productInfo, price: e.target.value })} />
            <TextInputBar className={"col-span-1"} label="Brand" id="BrandAdd" value={productInfo?.brandName} onChange={e => setProductInfo({ ...productInfo, brandName: e.target.value })} />
            <TextInputBar className={"col-span-1"} check={false} label="Category" selectMember={arrCategory} subType="select" id="CategoryAdd" value={productInfo?.category} onChange={e => setProductInfo({ ...productInfo, category: e.target.value })} />
            <div className=' col-span-1 flex-col justify-center items-center '>
            <ReviewStar starPoint={productInfo?.star} className="ml-5"/>
            <TextInputBar className={" "} label="Star" id="starAdd" value={productInfo?.star} onChange={e => setProductInfo({ ...productInfo, star: e.target.value })} />
            </div>
            <TextInputBar className={"col-span-1"} label="Gender" selectMember={["FEMALE", "MALE"]} subType="select" id="GenderAdd" value={productInfo?.gender} onChange={e => setProductInfo({ ...productInfo, gender: e.target.value })} />

            <TextInputBar className={"col-span-3"} label="Discription" id="DiscriptionAdd" value={productInfo?.description} onChange={e => setProductInfo({ ...productInfo, description: e.target.value })} />

            <div className='w-full col-span-3'>
                <FileButton helperText="A profile picture for your product"
                    onChange={e => {
                        const img = URL.createObjectURL(e.target.files[0]);
                        setImage(img);
                        setProductInfo({ ...productInfo, profileProductImage: e.target.files[0] })}} /></div>
            <Button className={"col-span-3"}>SUBMIT</Button>

        </form>
    </div>

    )
}

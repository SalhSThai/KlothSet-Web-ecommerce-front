
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createProduct } from '../../../../api/productApi';
import { loading } from '../../../../reduxStore/LoadingSlice';
import { thunkCreateProduct, thunkSubCreateProduct } from '../../../../reduxStore/ProductSlice';
import Button from '../../../item/Button'
import CheckBox from '../../../item/CheckBox';
import FileButton from '../../../item/FileButton';
import TextInputBar from '../../../item/TextInputBar';

export default function AddSubProductBody(props) {
    const { close, image, index } = props;
    const [check, setCheck] = useState(false);
    const [category, setCategory] = useState([])
    const [imgClass, setImgClass] = useState("")

    const state = useSelector(state => state);
    const dispatch = useDispatch()

    const data = state?.shop?.shopInfo;


    const initialInfo = {
        subName: "",
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
    useEffect(() => {

        setImgClass(image)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        toast('Add Process');
        try {

            dispatch(loading(true));
            dispatch(thunkSubCreateProduct({ ...productInfo, productId: data?.Products?.[index]?.id, sellerId: state?.auth?.userInfo?.id }));
            close(false);
        }
        catch (err) { toast.error('ERRor'); }
        finally { dispatch(loading(false)) }
    }

    return (
        <div className='flex justify-center '>
            <div className='w-[200px] h-auto flex flex-col gap-1 mr-1 overflow-hidden'>{data?.Products?.[index].UrlImages?.map((i, d) => <img className='w-auto h-auto object-cover' key={i?.id} src={i?.urlImage} />)} </div>
            <div className={`h-auto w-full bg-contain bg-no-repeat bg-center `} style={{ backgroundImage: `url(${image})` }}>
            </div>
            <form className='grid grid-flow-row-dense grid-cols-3  justify-start items-start w-full p-4 text-start' onSubmit={e => handleSubmit(e)}>

                <TextInputBar className={"col-span-2"} label="SubName" id="SubNameAdd" value={productInfo?.subName} onChange={e => setProductInfo({ ...productInfo, subName: e.target.value })} />

                <TextInputBar className={"col-span-1"} label="Price" id="PriceAdd" value={productInfo?.price} onChange={e => setProductInfo({ ...productInfo, price: e.target.value })} />
                <TextInputBar className={"col-span-1"} label="Amount" id="AmountAdd" value={productInfo?.amount} onChange={e => setProductInfo({ ...productInfo, amount: e.target.value })} />
                <TextInputBar className={"col-span-1"} check={true} label="Color" subType="select" id="ColorAdd" value={productInfo?.color} onChange={e => setProductInfo({ ...productInfo, color: e.target.value })} />
                <TextInputBar className={"col-span-1"} label="Size" selectMember={["XS", "S", "M", "L", "XL"]} subType="select" id="SizeAdd" value={productInfo?.size} onChange={e => setProductInfo({ ...productInfo, size: e.target.value })} />



                <Button className={"col-span-3 "}>ADD</Button>

            </form>
        </div>

    )
}

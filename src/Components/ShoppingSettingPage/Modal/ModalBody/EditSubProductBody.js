
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createProduct } from '../../../../api/productApi';
import { loading } from '../../../../reduxStore/LoadingSlice';
import { thunkCreateProduct, thunkEditSubProduct } from '../../../../reduxStore/ProductSlice';
import Button from '../../../item/Button'
import CheckBox from '../../../item/CheckBox';
import FileButton from '../../../item/FileButton';
import TextInputBar from '../../../item/TextInputBar';
import TextInputBarSelect from '../../../item/TextInputBarSelect';

export default function EditSubProductBody(props) {
    const { close, image, index } = props;
    const [check, setCheck] = useState(false);
    const [category, setCategory] = useState([])
    const [imgClass, setImgClass] = useState("")
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    const data = state?.shop?.shopInfo;
    const arrItem = data?.Products?.[index]?.ItemDetails?.map(i=>i?.subName);
    const [subName,setSubName] = useState("")
    const [proCur,setProCur] = useState({})

    const initialInfo = {
        subName: "",
        price: "", size: "xs",
        amount: "", color: "",
        sellerId: state?.auth?.userInfo?.id,
        productId:data?.Products?.[index]?.id,
        itemDetailId:"",
    };
    const [productInfo, setProductInfo] = useState(initialInfo)

    const chooseSubName = (e) => {
        
        const findOne = data?.Products?.[index]?.ItemDetails?.find?.(i=>i?.id===+e?.target?.value)
        console.log(findOne);
        setProductInfo({...initialInfo,...findOne,itemDetailId:findOne?.id})
    } 
    useEffect(() => {
        setImgClass(image)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handleSubmit");
        toast('Add Process');
      
        try {
            console.log(productInfo);
            dispatch(loading(true));
            dispatch(thunkEditSubProduct(productInfo));
            // close(false);
        }
        catch (err) { toast.error('ERRor'); }
        finally { dispatch(loading(false)) }
    }

    return (
        <div className='flex justify-center '>
            <div className='w-[200px] h-auto flex flex-col gap-1 mr-1 overflow-hidden'>{data?.Products?.[index].UrlImages?.map((i, d) => <img className='w-auto h-auto object-cover' key={i?.id} src={i?.urlImage} />)} </div>
            <div className={`h-auto w-full bg-contain bg-no-repeat bg-center `} style={{ backgroundImage: `url(${image})` }}>
            </div>
            <form className='grid grid-flow-row grid-cols-3  justify-start items-start w-full p-4 text-start' onSubmit={e => handleSubmit(e)}>

                <TextInputBarSelect className={"col-span-1"} label="Sub-Name" selectMember={data?.Products?.[index]?.ItemDetails}  id="subId"  onChange={chooseSubName } />

                <CheckBox className={"col-span-1 "} label="EDIT" id="AddNew" onCheck={e => setCheck(e.target.checked)} />

                <div className={"col-span-1"} ></div>

                <TextInputBar disable={!check} className={"col-span-1"} label="Price" id="PriceAdd" value={productInfo?.price} onChange={e => setProductInfo({ ...productInfo, price: e.target.value })} />
                <TextInputBar disable={!check} className={"col-span-1"} label="Amount" id="AmountAdd" value={productInfo?.amount} onChange={e => setProductInfo({ ...productInfo, amount: e.target.value })} />
                <div className={"col-span-1"} ></div>
               
                <TextInputBar disable={!check} className={"col-span-1"} check={true} label="Color" subType="select" id="ColorAdd" value={productInfo?.color} onChange={e => setProductInfo({ ...productInfo, color: e.target.value })} />
                <TextInputBar disable={!check} className={"col-span-1"} label="Size" selectMember={["XS", "S", "M", "L", "XL"]} subType="select" id="SizeAdd" value={productInfo?.size} onChange={e => setProductInfo({ ...productInfo, size: e.target.value })} />



                <Button className={"col-span-3 "}>ADD</Button>

            </form>
        </div>

    )
}

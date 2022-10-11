
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { thunkAddCart } from '../../../../../reduxStore/CartSlice';
import Button from '../../../../item/Button';
import CheckBox from '../../../../item/CheckBox';
import TextInputBar from '../../../../item/TextInputBar';
import TextInputBarSelect from '../../../../item/TextInputBarSelect';


export default function AddtoCartBody(props) {
  const { onClose, image, index, product } = props;
// ?====================================================================================== REDUX ==============================

  const state = useSelector(state => state);
  const dispatch = useDispatch()

// *====================================================================================== CONSTATN ==============================
  const initialInfo = {
    subName: "",
    price: "", size: "xs",
    amount: "", color: "",
    sellerId: product?.sellerId,
    productId: product?.id,
    gender:"",
    itemDetailId: "",
  };
  // !====================================================================================== USE STATE ==============================
  const [imgClass, setImgClass] = useState("")
  const [productInfo, setProductInfo] = useState(initialInfo)

  // *====================================================================================== FUNCTION ==============================


  const chooseSubName = (e) => {
    const findOne = product?.ItemDetails?.find?.(i=>i?.id===+e?.target?.value)
    setProductInfo({...initialInfo,...findOne,itemDetailId:findOne?.id ,gender:product?.gender})
  }

  useEffect(() => {
    const findOne = product?.ItemDetails?.[0];
    setProductInfo({...initialInfo,...findOne,itemDetailId:findOne?.id,gender:product?.gender})
    setImgClass(image)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast('THANK YOU :)');

    try {
      dispatch(thunkAddCart({userId:state?.auth?.userInfo?.id,itemId:productInfo?.itemDetailId,price:productInfo?.price}))
      onClose(false);
    }
    catch (err) { toast.error('ERRor'); }
  }
  // !====================================================================================== RENDER  ==============================

  return (
    <div className='flex justify-center '>
      <div className='w-[200px] h-auto flex flex-col gap-1 mr-1 overflow-hidden'>{product?.UrlImages?.map((i, d) => <img className='w-auto h-auto object-cover' key={i?.id} src={i?.urlImage} />)} </div>
      <div className={`h-auto w-full bg-contain bg-no-repeat bg-center `} style={{ backgroundImage: `url(${product?.productImage})` }}>
      </div>
      <form className='grid grid-flow-row grid-cols-3  justify-start items-start w-full p-4 text-start' onSubmit={e => handleSubmit(e)}>

        <TextInputBarSelect className={"col-span-1"} label="Sub-Name" selectMember={product?.ItemDetails} id="subnameCart" onChange={chooseSubName} />


        <div className={"col-span-2"} ></div>

        <TextInputBar disable className={"col-span-1"} label="Price" id="PriceCart" value={productInfo?.price}  />
        <TextInputBar disable className={"col-span-1"} label="Amount" id="AmountCart" value={productInfo?.amount}  />
        <div className={"col-span-1"} ></div>

        <TextInputBar disable className={"col-span-1"} check={true} label="Color" subType="select" id="ColorCart" value={productInfo?.color}  />
        <TextInputBar disable className={"col-span-1"} label="Size" selectMember={["XS", "S", "M", "L", "XL"]} subType="select" id="SizeCart" value={productInfo?.size} />
        <TextInputBar disable className={"col-span-1"} label="gender" id="genderCart" value={productInfo?.gender} />



        <Button className={"col-span-3 "}>ADD</Button>

      </form>
    </div>

  )
}

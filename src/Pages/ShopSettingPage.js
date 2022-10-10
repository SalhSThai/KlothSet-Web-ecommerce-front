import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EditeBar from '../Components/ShoppingSettingPage/item/EditeBar';
import { thunkCategoryData, thunkShopData } from '../reduxStore/DataSlice';
import AddButton from '../Asset/AddButton';
import { showChangeProfilePicture, showDeletedModal } from '../reduxStore/EditBarSlice';
import ModalShopSetting from '../Components/ShoppingSettingPage/ModalShopSetting';
import ProductCard from '../Components/item/ProductCard';
import Button from '../Components/item/Button';
import { thunkAuthShopData } from '../reduxStore/ShopSlice';
import ChangeProfilePicture from '../Components/ShoppingSettingPage/Modal/ChangeProfilePicture';
import AddCarousal from '../Components/ShoppingSettingPage/Modal/AddCarousal';

export default function ShopSettingPage() {
  const param = useParams()
  const state = useSelector(state => state);
  const dispatch = useDispatch()
  const [showChangeProfile, setShowChangeProfile] = useState(false)
  const data = state?.shop?.shopInfo;
  console.log(state, "data");

  useEffect(() => {
    dispatch(thunkAuthShopData(state?.auth?.userInfo?.id))
    console.log("state?.shop?.shopInfo");
  }, [])

  const Card = () => {
    return <div className='w-full bg-blue-500 '>
      <div className='pt-[80%] w-full relative'>
        <img className='w-full h-auto absolute top-0 left-0 rounded-t-xl' src='images/carousal/Carousal.jpg' />
        <div className='absolute bottom-0  w-full h-[50px] bg-red-500'></div>
      </div>
    </div>
  }
  const SideBar = () => {
    return (<div className='w-1/3 bg-gray-100 p-[3%] ' >
      <div className='relative p-10 pb-20 bg-slate-200 '>
        <div>CATEGORY</div>

        {data?.Categories?.map(i => <div role="button" className='text-lg my-1 font-medium' key={i?.id}>{i?.categoryName}</div>)}
        <div className='absolute bottom-0 '>
          <Button  >ADD CATEGORY</Button>

        </div>
      </div>
    </div>)
  }

  return (
    <div className={`flex justify-center  w-screen h-auto ${state.auth?.userInfo?.ShopPath?.shopPath === param?.shopName ? null : 'hidden'}`}>
      <div className='flex flex-col justify-center items-center w-3/4 h-full '>
        <div className='relative w-full h-[450px] bg-slate-400 bg-center bg-cover' style={{ backgroundImage: `url(${data?.ShopCarousals?.[0].urlCarousal})`, boxShadow: "2px 2px 8px 4px rgba(0, 0, 0, 0.1)" }} >
          <div className='absolute w-[250px] h-[250px]  bottom-0 left-0 flex flex-col justify-center items-center overflow-hidden'>
            <div className='relative rounded-full w-[150px] h-[150px] bg-center bg-cover' style={{ backgroundImage: `url(${data?.profileImage})` }} >
              <AddButton className='absolute bottom-0 right-0' onClick={e => setShowChangeProfile(true)} />
              <ChangeProfilePicture status={showChangeProfile} image={data?.profileImage} onClose={e => setShowChangeProfile(false)} />

            </div>
            <div className='text-4xl font-bold 10-text-only' >{data?.shopName}</div>

          </div>
          <div className='absolute bottom-0 left-0 mb-2 w-[250px]  overflow-hidden text-center'>
          </div>

        </div >
        <div className='h-fit w-full my-2 ' >
          <EditeBar />
          <AddCarousal userId={state?.auth?.userInfo?.id} image={data?.ShopCarousals?.[0]?.urlCarousal} />
        </div>
        <div className=' w-full h-full gap-[10px] flex  '>
          <SideBar />
          <div className='grid grid-flow-row-dense  grid-cols-2 grow justify-items-center'>
            {data?.Products?.map((i,d) =>
              <ProductCard
                edit key={i?.id} id={i?.id} index={d} image={i?.productImage}
                productName={i?.productName} brandName={i?.brandName}
                price={i?.price} onEdited={e => { }} />)}
          </div>
        </div>
      </div>
      <ModalShopSetting />

    </div>
  )
}

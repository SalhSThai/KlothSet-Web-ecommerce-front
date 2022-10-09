import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EditeBar from '../Components/ShoppingSettingPage/item/EditeBar';
import { thunkCategoryData, thunkShopData } from '../reduxStore/DataSlice';
import AddButton from '../Asset/AddButton';
import { showChangeProfilePicture } from '../reduxStore/EditBarSlice';
import ModalShopSetting from '../Components/ShoppingSettingPage/ModalShopSetting';
import { thunkAuthShopData } from '../reduxStore/ShopSlice';
import ProductCard from '../Components/item/ProductCard';

export default function ShopSettingPage() {
  const param = useParams()
  const state = useSelector(state => state);
  const dispatch = useDispatch()
  const data = state?.shop?.shopInfo;
  console.log(data,"data");


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
      <div className='p-10 bg-slate-300'>
        <h1>abc</h1>

      </div>
    </div>)
  }

  return (
    <div className={`flex justify-center  w-screen h-auto ${ state.auth?.userInfo?.ShopPath?.shopPath === param?.shopName? null : 'hidden'}`}>
      <div className='flex flex-col justify-center items-center w-3/4 h-full'>
        <div className='w-full h-[350px] bg-slate-400' />
        <div className='relative w-full h-[120px] bg-slate-300'>
          <div className='absolute w-[250px] h-[250px]  bottom-0 left-0 flex flex-col justify-center items-center overflow-hidden'>
            <div className='relative rounded-full w-[150px] h-[150px] bg-center bg-cover' style={{ backgroundImage: `url(${data?.profileImage})` }} >
              <AddButton className='absolute bottom-0 right-0' onClick={e => dispatch(showChangeProfilePicture(true))} />
            </div>
            <div className='text-4xl font-bold 10-text-only' >{data?.shopName}</div>

          </div>
          <div className='absolute bottom-0 left-0 mb-2 w-[250px]  overflow-hidden text-center'>
          </div>

        </div >
        <div className='h-fit w-full my-2 ' >
          <EditeBar />
        </div>
        <div className=' w-full h-full gap-[10px] flex  '>
          <SideBar />
          <div className='grid grid-flow-row-dense  grid-cols-2 grow'>
          {data?.Products?.map((i)=><ProductCard key={i?.id} image={i?.productImage} productName={i?.productName} brandName={i?.brandName} price={i?.price}/>)}
            {/* <ProductCard image  productName brandName price/>
            <ProductCard/>
            <ProductCard/> */}
            

          </div>
        </div>
      </div>
      <ModalShopSetting />

    </div>
  )
}

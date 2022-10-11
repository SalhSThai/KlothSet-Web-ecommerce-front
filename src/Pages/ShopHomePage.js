import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import HomeProductCard from '../Components/item/HomeProductCard ';
import { thunkShopData } from '../reduxStore/DataSlice';

export default function ShopHomePage() {
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    const { shopName } = useParams()

    console.log(state);
    const shop = state?.data?.shopInfo?.User
    useEffect(() => {

        dispatch(thunkShopData(shopName))

    }, [])

    const Card = () => {
        return <div className='w-1/3 bg-blue-500 '>
            <div className='pt-[80%] w-full relative'>
                <img className='w-full h-auto absolute top-0 left-0 rounded-t-xl' src={shop?.ShopCarousals[0]} />
                <div className='absolute bottom-0  w-full h-[50px] bg-red-500'></div>
            </div>
        </div>
    }

    return (
        <div className='flex justify-center  w-screen h-auto'>
            <div className='flex flex-col justify-center items-center w-3/4 h-full'>
                <div className='relative w-full h-[450px] bg-slate-400 bg-center bg-cover' style={{ backgroundImage: `url(${shop?.ShopCarousals?.[0]?.urlCarousal})`, boxShadow: "2px 2px 8px 4px rgba(0, 0, 0, 0.1)" }} >
                    <div className='absolute w-[250px] h-[250px]  bottom-0 left-0 flex flex-col justify-center items-center overflow-hidden'>
                        <div className='relative rounded-full w-[150px] h-[150px] bg-center bg-cover' style={{ backgroundImage: `url(${shop?.profileImage})` }} >


                        </div>
                        <div className='text-4xl font-bold 10-text-only' >{shop?.shopName}</div>

                    </div>
                    <div className='absolute bottom-0 left-0 mb-2 w-[250px]  overflow-hidden text-center'>
                    </div>
                </div>

                    <div className="grid grid-flow-row-dense grid-cols-3  gap-3 ">
                        {shop?.Products?.map?.(i => <HomeProductCard key={i?.id} className="col-span-1 " starPoint={i?.star} product={i} image={i?.productImage} price={i?.price}></HomeProductCard>)}

                    </div>
            </div >
        </div>

    )

}

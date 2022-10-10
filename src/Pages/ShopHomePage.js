import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function ShopHomePage() {
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    console.log(state);

    const Card = () => {
        return <div className='w-1/3 bg-blue-500 '>
            <div className='pt-[80%] w-full relative'>
                <img className='w-full h-auto absolute top-0 left-0 rounded-t-xl' src='images/carousal/Carousal.jpg' />
                <div className='absolute bottom-0  w-full h-[50px] bg-red-500'></div>
            </div>
        </div>
    }

    return (
        <div className='flex justify-center  w-screen h-auto'>
            <div className='flex flex-col justify-center items-center w-3/4 h-full'>
                <div className='w-full h-[350px] bg-black' />
                <div className='relative w-full h-[120px] bg-blue-200'>
                    <div className='absolute top-0 left-0  -translate-y-1/2 rounded-full overflow-hidden bg-red-100 w-[150px] h-[150px] mx-10' ></div>
                    <div className='absolute bottom-0 left-0 mb-2 w-[250px]  overflow-hidden text-center'>
                        <h1 className='text-4xl font-bold 10-text-only' >shop_name</h1>
                    </div>

                </div>
                <div className='flex w-full h-full gap-[10px] mt-[10px]'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>

        </div>
    )

}

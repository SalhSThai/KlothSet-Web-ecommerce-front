import { Button } from 'flowbite-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarousalComponent, { CarousalComponent2 } from '../Components/CarousalComponent';
import HomeProductCard from '../Components/item/HomeProductCard ';
import { thunkAllProduct } from '../reduxStore/DataSlice';

function HomePage(props) {
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    const productArray = state?.data?.allProductInfo
  
    return (<div className='flex flex-col justify-center items-center w-screen'>
        <CarousalComponent />
        {/* <CarousalComponent2/> */}
        <div className="grid grid-flow-row-dense grid-cols-4  gap-3 ">
            {productArray?.map?.(i=><HomeProductCard key={i?.id} className="col-span-1 " starPoint={i?.star} product={i} image={i?.productImage} price={i?.price}></HomeProductCard>)}
            
        </div>
    </div>
    )
}
export default HomePage;
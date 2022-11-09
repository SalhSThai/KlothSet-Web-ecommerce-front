import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { thunkDeleteCart, thunkfetchMyCart } from '../../reduxStore/CartSlice';
import Button from '../item/Button';
import Dropdown, { DropdownDivider, DropdownItem } from '../reuseComponent/Dropdown';
import { useSpring, animated } from 'react-spring'
export default function CartDropdown(props) {
    const { product = ['product1', 'product2'] ,showCart,ref} = props;
    const [myCart, setMycart] = useState([])

    const state = useSelector(state => state);
    const dispatch = useDispatch()


    useEffect(() => {
        setMycart(state?.cart?.Mycart)
        
    })
    console.log(state);
    const buyit = (e) => {
        e.preventDefault();
        console.log("object");
        dispatch(thunkDeleteCart(state?.auth?.userInfo?.id));
        setMycart([])
    }




return (
    <div>
        <i role='button' className="fa-solid fa-cart-shopping fa-2xl m-5" onClick={showCart} ></i>
        {/* <Dropdown title={<i className="fa-solid fa-cart-shopping fa-2xl m-5"></i>} arrow={false} size={"140px"}>
                {myCart.map((i, d) =>
                    <DropdownItem key={i?.itemId}><div className='flex justify-start items-center' >
                        <img className='w-[44px] h-auto mr-2' src={i?.ItemDetail?.Product?.productImage} /><div>
                            {`${i?.ItemDetail?.Product?.productName} : ${i?.ItemDetail?.color} : ${i?.amount} `}</div></div>
                    </DropdownItem>)}

                <Button className="w-1/2 ml-5" onClick={buyit}>BUY</Button>
            </Dropdown> */}

        

    </div>
)
}

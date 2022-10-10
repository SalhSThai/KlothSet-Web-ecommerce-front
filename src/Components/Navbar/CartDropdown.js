import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { thunkfetchMyCart } from '../../reduxStore/CartSlice';
import Dropdown, { DropdownDivider, DropdownItem } from '../reuseComponent/Dropdown';

export default function CartDropdown(props) {
    const { product = ['product1', 'product2'] } = props;
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    const [cart, setCart] = useState([])

    useEffect(() => {
        setCart(state?.cart?.Mycart)
    }, [state?.cart?.Mycart])


    return (
        <div>
            <Dropdown title={<i className="fa-solid fa-cart-shopping fa-2xl m-5"></i>} arrow={false} size={"140px"}>
                {cart.map((i, d) =>
                    <DropdownItem key={i?.itemId}>
                        <img className='w-[44px] h-auto mr-2' src={i?.ItemDetail?.Product?.productImage} />
                        {`${i?.ItemDetail?.Product?.productName} : ${i?.ItemDetail?.color} : ${i?.amount} `}
                    </DropdownItem>)}
            </Dropdown>
        </div>
    )
}

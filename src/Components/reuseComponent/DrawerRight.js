import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import { thunkAddCart, thunkBuyCart } from '../../reduxStore/CartSlice';


export default function DrawerRight(props) {
    const { status } = props;
    const DrawerRight = useRef();
    const [showCart, setShowCart] = useState(false);
    const [arrCart, setArrCart] = useState([]);

    const myInfo = useSelector(state=>state.auth.userInfo)
    const myCart = useSelector(state => state.cart.Mycart);
    const dispatch = useDispatch()

    useEffect(() => {
        setArrCart(myCart)
    }, [myCart])

    const style = useSpring({
        to: async animate => {
            await animate({ to: { right: showCart ? 0 : -300, opacity: showCart ? 1 : 0, }, config: { duration: 500 } });
            const handleClickOutside = e => {
                if (!DrawerRight?.current?.contains?.(e.target)) { setShowCart(false); }
            };
            showCart? document.addEventListener('mousedown', handleClickOutside):document.removeEventListener('mousedown', handleClickOutside);
        }
    })
    const handleBuy = () => {
        dispatch(thunkBuyCart())
    }
    function CartItem(props) {
        const { info } = props
        console.log(info);
        const handleAmount =  (minus) => {
            console.log(info.itemId, info.userId, info.price,minus);
            dispatch(thunkAddCart({itemId:info.itemId, userId:info.userId, price:info.price,minus}))
        } 
        return (<div className='w-full h-[100px] flex justify-start items-center'>
            <div className='h-full w-[100px] p-2'>
                <div className='h-full aspect-square bg-cover' style={{backgroundImage:`url(${info?.ItemDetail?.Product?.productImage})`}}>
                </div>
            </div>
            <div className='h-full grow flex flex-col justify-start items-start'>
            <div>{info?.ItemDetail?.Product?.productName}</div>
            <div>{info?.price * info?.amount}</div>
            <div className='flex'>
                <button type='button' className='flex w-[24px] h-[24px]  justify-center items-center border border-black' onClick={e=>handleAmount(true)}>-</button>
                <div className='flex w-[24px] h-[24px]  justify-center items-center'>{info?.amount}</div>
                <button  className='flex w-[24px] h-[24px]  justify-center items-center border border-black' onClick={e=>handleAmount(false)}>+</button></div>
            </div>
        </div>)
    }
    return (
        <div ref={DrawerRight}>

            <i role='button' className="fa-solid fa-cart-shopping fa-2xl m-5" onClick={e => setShowCart(true)} ></i>
            <animated.div className={`fixed top-0 right-0 h-screen w-[20vw] bg-white rounded-l-3xl z-[40]  shadow-2xl`} style={style} >
                <h1 className='w-full h-fit flex justify-center items-center p-5 border-b-gray-200 border '>CART LIST</h1>
                <div className='flex flex-col h-full items-center  '>
                    {arrCart?.map(i => <CartItem key={i.itemId} info={i} />)}
                    <button onClick={e=>handleBuy()} type='button' className={`w-[100px] my-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800   group flex  items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg `}>BUY</button>
                </div>
            </animated.div>

        </div>
    )
}

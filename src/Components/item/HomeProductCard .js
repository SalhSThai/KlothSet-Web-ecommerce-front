import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showDeletedModal } from "../../reduxStore/EditBarSlice";
import { thunkDeleteProduct } from "../../reduxStore/ProductSlice";
import DeleteProduct from "../ShoppingSettingPage/Modal/DeleteProduct";
import EditProduct from "../ShoppingSettingPage/Modal/EditProduct";
import ReviewStar from "./ReviewStar";
import GroupProductEdit from "../ShoppingSettingPage/item/GroupProductEdit"
import CartIcon from "../../Asset/CartIcon";
import AddtoCart from "../HomaPage/Component/Modal/AddtoCart";

export default function HomeProductCard(props) {
    const {  price = "0", image, edit, onEdited, id, className ,product,starPoint} = props;
    const [addtoCart, setAddtoCart] = useState(false)
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const onCloseEdit = e => {
        setAddtoCart(false)
    }
    const deleteProduct = (e) => {
        console.log("delete");
        dispatch(thunkDeleteProduct(id, state?.auth?.userInfo?.id))
        dispatch()
    }
    return (
        <div className={`max-w-sm w-[250px] relative m-2 ${className ? className : null}`}>
            <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col" data-testid="flowbite-card">

                <img alt="Kloth Shop"
                    className="rounded-t-lg w-full h-auto "
                    src={image} />

                <div className="flex h-full flex-col justify-center gap-4 p-6">
                    <Link to="#">
                        <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {`${product?.brandName} : ${product?.productName}`}</h1>
                    </Link>
                    <ReviewStar starPoint={starPoint} />
                    <div className="   flex justify-between items-center  gap-3">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white col-span-2">
                            {`${price} ฿`}</span>
                        <div role="button"
                            className="min-w-[60px] flex justify-center rounded-lg bg-blue-700  text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={e => setAddtoCart(true)}>
                            <CartIcon/></div>

                        <AddtoCart status={addtoCart} image={image} id={id} onClose={onCloseEdit} product={product}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

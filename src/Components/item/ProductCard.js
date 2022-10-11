import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showDeletedModal } from "../../reduxStore/EditBarSlice";
import { thunkDeleteProduct } from "../../reduxStore/ProductSlice";
import DeleteProduct from "../ShoppingSettingPage/Modal/DeleteProduct";
import EditProduct from "../ShoppingSettingPage/Modal/EditProduct";
import ReviewStar from "./ReviewStar";
import GroupProductEdit from "../ShoppingSettingPage/item/GroupProductEdit"

export default function ProductCard(props) {
    const { productName = "Product Name", brandName = "Kloth Shop", price = "0", image, edit, onEdited, id,index ,i} = props;
    const [status, setStatus] = useState(false);
    const [editStatus, setEditStatus] = useState(false)
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const onClose = (e) => {
        setStatus(false)
    }
    const showDelete = (e) => {
        setStatus(true)
    }
    const onCloseEdit = e => {
        setEditStatus(false)
    }
    const deleteProduct = (e) => {
        console.log("delete");
        dispatch(thunkDeleteProduct(id, state?.auth?.userInfo?.id))
        dispatch()
    }
    return (
        <div className="max-w-sm w-[350px] relative m-2">
            <i className=" absolute top-0 right-0 fa-solid fa-xmark fa-2xl  m-5" role="button" onClick={showDelete} />
            <DeleteProduct image={image} id={id} status={status} onClose={onClose} deleteProduct={deleteProduct} />
            <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col" data-testid="flowbite-card">

                <img alt="Apple Watch Series 7 in colors pink, silver, and black"
                    className="rounded-t-lg w-full h-auto "
                    src={image} />

                <div className="flex h-full flex-col justify-center gap-4 p-6">
                    <Link to="#">
                        <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {`${brandName} : ${productName}`}</h1>
                    </Link>
                    <ReviewStar starPoint={i?.star}/>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            {`${price} ฿`}</span>
                        <GroupProductEdit image={image} id={id} productName={productName} index={index} i={i}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

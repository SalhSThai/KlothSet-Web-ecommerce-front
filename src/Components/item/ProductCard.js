import { Link } from "react-router-dom";
import ReviewStar from "./ReviewStar";

export default function ProductCard(props) {
    const {productName = "Product Name" , brandName = "Kloth Shop" , price="0" ,image} = props;

    return (
        <div className="max-w-sm w-[350px]">
            <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col" data-testid="flowbite-card">
               
                <img alt="Apple Watch Series 7 in colors pink, silver, and black" 
                className="rounded-t-lg w-full h-auto " 
                src={image} />

                <div className="flex h-full flex-col justify-center gap-4 p-6">
                    <Link to="#">
                        <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {`${brandName} : ${productName}`}</h1>
                    </Link>
                    <ReviewStar />
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            {`${price} ฿`}</span>
                        <Link to="#" className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Add to cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

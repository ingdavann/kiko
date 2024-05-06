'use client'
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { selectProducts, selectTotalPrice } from "@/redux/features/cart/cartSlice"
import { removeFromCart } from "@/redux/features/cart/cartSlice";
import Link from "next/link";
import {
	increment,
	decrement,
} from "@/redux/features/counter/counterSlice";

export default function Cart() {
    const products = useAppSelector(selectProducts);
    const totalPrice = useAppSelector(selectTotalPrice);
    const dispatch = useAppDispatch();
    let countQuantity = useAppSelector((state) => state.counter.value);
    // let countQuantity = count;
    return (


        <main className="w-[90%] mx-auto mt-10">

            {
                products.length == 0 &&
                <div className="flex justify-center items-center flex-col mb-10">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png" alt="" />
                    <h1 className="text-2xl font-bold text-gray-600">Cart is Empty!</h1>
                </div>
            }
            {
                products.length !== 0 &&
                <div className="sm:flex my-10">
                    <div className="  w-full m-5  sm:w-3/4 bg-white px-10 py-10 rounded-xl">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">{products.length} Items</h2>
                        </div>
                        {
                            products.length !== 0 &&
                            products.map((product, index) => (
                                <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50" key={index}>
                                    <div className="md:w-4/12 2xl:w-1/4 w-full">
                                        <img src={product.image} alt={product.name} className="h-full object-center object-cover md:block hidden" />
                                    </div>
                                    <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{product.category}</p>
                                        <div className="flex items-center justify-between w-full">
                                            <p className="text-base font-black leading-none text-gray-800">{product.name ?? "No Title"}</p>
                                            
                                            <form className="max-w-xs mx-auto">
                                                <p className="block mb-2 text-sm font-medium text-gray-900 ">Choose quantity:</p>
                                                <div className="relative flex items-center max-w-[8rem]">
                                                    <button
                                                     onClick={() => dispatch(decrement())}
                                                     type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100  hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                                        </svg>
                                                    </button>

                                                    <input type="text" id="quantity-input" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5" value={countQuantity} required />

                                                    <button 
                                                    onClick={() => dispatch(increment())}
                                                    type="button" id="increment-button" 
                                                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </form>

                                        </div>
                                        <p className="text-xs leading-3 text-gray-600 pt-2">Price: ${product.price}</p>
                                        <p className="text-xs leading-3 text-gray-600 py-4">Qauntities: {product.quantity}</p>
                                        <p className="w-96 text-xs leading-3 text-gray-600">Description: {product.description ?? "No Title"} </p>
                                        <div className="flex items-center justify-between pt-5">
                                            <div className="flex itemms-center">
                                                <p
                                                    onClick={() => dispatch(removeFromCart(product.id))}
                                                    className="text-xs leading-3 underline text-red-500 cursor-pointer">Remove</p>
                                            </div>
                                            <p className="text-base font-black leading-none text-gray-800">$ {product.price ?? 0}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div id="summary" className=" w-full sm:w-1/4 md:w-1/2 px-8 py-10">

                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Total Cost</span>
                            <span className="font-semibold text-sm">$ {totalPrice.toFixed(2)}</span>
                        </div>

                        <div className="border-t mt-8">
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded-xl">
                                Checkout
                            </button>
                        </div>
                        <Link href="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                <path
                                    d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            }

        </main>
    )
}

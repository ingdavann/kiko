import { CartProductType } from '@/lib/definitions';
import { Card } from 'flowbite-react';
import React from 'react'

export default function ProductCardComponent({ id, name, image, price, onClick }: CartProductType) {
  // const dispatch = useAppDispatch();
  return (
    <div className="rounded shadow-lg" >
      <div className="relative">
        <img className="w-full h-64 object-cover"
          src={image}
          alt={name}/>
        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
      
        </div>
        <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out rounded-xl cursor-pointer">
          Add to Cart
        </div>
      </div>
      
      <div className="px-6 py-4 mb-auto">
        <p className="text-gray-800 text-sm font-medium">
          {name}
        </p>
        <p className="text-gray-800 text-sm font-medium mt-3">
        Price: <span className='text-red-600'> ${price}</span> 
        </p>
      </div>
    </div>

  );
}

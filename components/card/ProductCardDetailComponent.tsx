import { ProductType } from '@/lib/definitions'
import React from 'react'

export default function ProductCardDetailComponent({name, image, description, price, quantity}: ProductType) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-100 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover rounded-lg" src={image} alt={name}/>
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-full px-2">
                        <button className="w-full bg-[#c09858] dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-[#fbbb55] dark:hover:bg-gray-700">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-xl">
                    {name}
                </p>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300 mr-2">Price:</span>
                        <span className="text-red-600 dark:text-gray-300 ">${price}</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300 mr-2">Availability: </span>
                        <span className="text-gray-600 dark:text-gray-300">{quantity}</span>
                    </div>
                </div>
                
                <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                    <div className="flex items-center mt-2">
                        fsdfds
                    </div>
                </div>
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

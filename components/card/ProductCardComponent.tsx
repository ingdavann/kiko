import { CartProductType } from '@/lib/definitions';
import { useAppDispatch } from "@/redux/hooks";
import { increment } from "@/redux/features/counter/counterSlice";
import { addToCart } from '@/redux/features/cart/cartSlice';
import Link from 'next/link';

export default function ProductCardComponent({ id, name, image, price, description, quantity, category, onClick }: CartProductType) {
  const dispatch = useAppDispatch();
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart({ id, name, image, price, description, quantity, category }));
    dispatch(increment())
  }

  return (
    <div className="rounded shadow-lg" onClick={onClick} key={id}>
      <div className="relative">
        <Link href={`/${id}`}>
          <img className="w-full h-64 object-cover"
            src={image}
            alt={name} /></Link>
        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">

        </div>
        <button
          onClick={handleAddToCart}
          className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out rounded-xl cursor-pointer">
          Add to Cart
        </button>
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

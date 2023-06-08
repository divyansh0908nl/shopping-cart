import { useRouter } from 'next/router';
import Image from 'next/image';

import { baseUrl } from '../utils/baseUrl';

import CounterStrip from './CounterStrip';

interface Product {
  id: string;
  name: string;
  image: string;
  unitPrice: number;
  quantity: number;
}
interface ProductCardProps {
  product: Product;
}
export function ProductCard({ product }: ProductCardProps) {
  const { name, image, unitPrice, quantity } = product;
  const count = 0;
  const navigate = useRouter();

  const handleAdd = (product) => {
    /*
     *! this is the place where we will send the request to the server
     *! to add the product in the cart
     *! will update after cart logic
     */
  };

  const navigateToProduct = () => {
    navigate.push(`/product/${product.id}`);
  };

  return (
    <div
      className="mx-4 w-full items-center rounded-lg border border-gray-200
    bg-slate-400 p-4 md:w-1/3 lg:w-1/4"
    >
      <Image
        src={`${baseUrl}/${image}`}
        alt="fruit image"
        className="h-40 w-full"
      />
      <h4>{name}</h4>
      <strong>
        Price:
        {unitPrice}
        Rs.
      </strong>
      <h5>
        Quantity:
        {quantity}
        pcs
      </h5>
      <div>
        <button
          type="button"
          className="my-2 rounded-md bg-blue-500 px-4 py-2"
          onClick={navigateToProduct}
        >
          View
        </button>
        {!count ? (
          <button
            type="button"
            onClick={() => handleAdd(product)}
            className="rounded-md bg-blue-500 px-4 py-2"
          >
            Add to cart
          </button>
        ) : (
          <CounterStrip />
        )}
      </div>
    </div>
  );
}

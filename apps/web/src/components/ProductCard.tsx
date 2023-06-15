import { useRouter } from 'next/router';
import Image from 'next/image';
import { IProduct } from '@jadoo/apis/types';

import { baseUrl } from '../utils/baseUrl';

import CounterStrip from './CounterStrip';

/**
 * -----------------------------------------------------------------------------
 * Renders a product card component.
 * @component
 * @param {IProduct} props.product - The product object.
 * @returns {JSX.Element} - The rendered component.
 */
export function ProductCard({ product }: { product: IProduct }) {
  const { name, image, unitPrice, quantity } = product;
  const count = 0;
  const navigate = useRouter();

  const handleAddToCart = () => {
    /*
     *! this is the place where we will send the request to the server
     *! to add the product in the cart
     *! will update after cart logic
     */
  };

  const handleOnViewClick = () => {
    /*
     *! this is the place from where we will navigate to
     *! product specific page
     *! will complete in next PR
     */
  };

  return (
    <div
      className="
        mx-4 w-full items-center rounded-lg border border-gray-200 bg-slate-400
        p-4 md:w-1/3 lg:w-1/4
      "
    >
      <Image
        src={`${baseUrl}/${image}`}
        alt="fruit image"
        width={100}
        height={100}
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
          onClick={handleOnViewClick}
        >
          View
        </button>
        {!count ? (
          <button
            type="button"
            onClick={handleAddToCart}
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

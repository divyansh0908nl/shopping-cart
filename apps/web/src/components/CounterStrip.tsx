import { useState } from 'react';

/*
 * a user interface component that provides a counter functionality
 * with increment, decrement and remove buttons.
 * It is used to manage the quantity of a product, typically in a shopping cart
 * or similar scenario.
 */
function CounterStrip() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
    /*
     *! this is the place where we will send the request to the server
     *! to update the quantity of the product in the cart
     *# will use when we will have the cart logic
     */
    // toSend.productId = product.id ? product.id : product._id;
    // toSend.count = count + 1;
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      /*
       *! this is the place where we will send the request to the server
       *! to update the quantity of the product in the cart
       *# will use when we will have the cart logic
       */
      //   toSend.productId = product.id ? product.id : product._id;
      //   toSend.count = count - 1;
    }
  };

  return (
    <div className="my-4 flex flex-row justify-between">
      <button
        type="button"
        className="rounded-md bg-blue-500  p-2"
        onClick={handleDecrement}
        disabled={count === 1}
      >
        -
      </button>
      <strong className="mx-2 my-auto">{count}</strong>
      <button
        type="button"
        className="rounded-md bg-blue-500 p-2"
        onClick={handleIncrement}
      >
        +
      </button>

      <button
        type="button"
        className="mx-2 rounded-md bg-blue-500 px-1 py-2 "
        onClick={() => {}}
      >
        Remove
      </button>
    </div>
  );
}

export default CounterStrip;

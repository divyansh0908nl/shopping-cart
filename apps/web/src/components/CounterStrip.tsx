import React, { useState, useEffect } from "react";

const CounterStrip = ({ product }) => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
    let toSend = {};
    // toSend.productId = product.id ? product.id : product._id;
    // toSend.count = count + 1;
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      let toSend = {};
    //   toSend.productId = product.id ? product.id : product._id;
    //   toSend.count = count - 1;
    }
  };
  // useEffect(() => {

  //     const item = items.find((item) => item.product?._id === (product.id?product.id:product?._id));

  //     if (item) {
  //     setCount(item.quantity);
  //     }
  // }, [items, product.id]);

  return (
    <div className="flex flex-row justify-between my-4">
      <button
        className="bg-blue-500 rounded-md  p-2"
        onClick={handleDecrement}
        disabled={count === 1}
      >
        -
      </button>
      <strong className="my-auto mx-2">{count}</strong>
      <button
        className="bg-blue-500 rounded-md p-2"
        onClick={handleIncrement}
      >
        +
      </button>

      <button
        className="bg-blue-500 rounded-md px-1 py-2 mx-2 "
        onClick={() => console.log("removed")}
      >
        Remove
      </button>
    </div>
  );
};

export default CounterStrip;

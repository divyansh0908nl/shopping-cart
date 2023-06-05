import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useGetAllProducts } from "../hooks/useGetAllProducts";
import { ReactQueryProvider } from "../utils/ReactQueryProvider";

const Products = () => {
  const { data, isLoading } = useGetAllProducts();
  // useEffect(() => {
  //   if (availableProducts && availableProducts.length > 0){

  //       setAllProducts(availableProducts);
  //   }
  //   }, [availableProducts]);
  const handleAdd = (product) => {
    console.log("before");
    console.log("After");
  };
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <div className="flex flex-wrap w-full">
        {data &&
          data.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                handleAdd={handleAdd}
              />
            );
          })}
      </div>
    </div>
  );
};
export default Products;

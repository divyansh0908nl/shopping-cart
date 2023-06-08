import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useGetAllProducts } from "../hooks/useGetAllProducts";
import { ReactQueryProvider } from "../utils/ReactQueryProvider";
import Products from "../components/Products";

const products = () => {
  // useEffect(() => {
  //   if (availableProducts && availableProducts.length > 0){

  //       setAllProducts(availableProducts);
  //   }
  //   }, [availableProducts]);
  const handleAdd = (product) => {
    console.log("before");
    console.log("After");
  };
  

  return (
   <Products />
  );
};
export default products;

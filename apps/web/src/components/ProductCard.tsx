import React from "react";
import { useRouter } from "next/router";
import { baseUrl } from "../utils/baseUrl";
import CounterStrip from "./CounterStrip";


interface Product {
    id: string;
    name: string;
    image: string;
    unitPrice: number;
    quantity: number;
  }
interface ProductCardProps {
    product: Product;
    handleAdd: (product: any) => void;
  }
const ProductCard = (props: ProductCardProps) => {
    const { product, handleAdd } = props;
    const { name, image, unitPrice, quantity } = product;
    let count = 0;
    const navigate = useRouter();
  
    const navigateToProduct = () => {
        navigate.push(`/product/${product.id}`); 
    };
  
    
  
    return (
      <div className="mx-4 w-full bg-slate-400 md:w-1/3 lg:w-1/4 p-4 border border-gray-200 rounded-lg items-center" >
        <img src={baseUrl + `${image}`} alt="fruit image" className="w-full h-40"/>
        <h4>{name}</h4>
        <strong>
         Price: {unitPrice} Rs.
        
        </strong>
        <h5>
        Quantity: {quantity} pcs
        </h5>
        <div>
        <button className="bg-blue-500 rounded-md px-4 my-2 py-2" onClick={navigateToProduct} >
          View
        </button>
        {!count ? (
          <button onClick={() => handleAdd(product)} className="bg-blue-500 rounded-md px-4 py-2">
            Add to cart
          </button>
        ) : (
          <CounterStrip product={product} />
        )}
        </div>
      </div>
    );
  };
  
  export default ProductCard;